"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { motion, useInView } from "framer-motion"
import { FormEvent, useRef, useState } from "react"
import { format } from 'date-fns'
import { useToast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" }) 
  const { toast } = useToast()

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const geoResponse = await fetch('https://ipapi.co/json/');
      const geoData = await geoResponse.json();
      
      const formattedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');

      const form = {
        email,
        time: formattedDate,
        country: geoData.country_name,
        city: geoData.city
      };

      const response = await fetch('/api/newslatter', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Error en la petición');
      }

      const content = await response.json();
      
      if (content.success) {
        setEmail('');
        toast({
          title: "¡Éxito!",
          description: "Email registrado correctamente",
          className: "bg-green-600 text-white border-green-700",
          duration: 3000,
        });
      } else {
        throw new Error(content.error || 'Error desconocido');
      }

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Error al enviar el formulario',
        className: "bg-red-600 text-white border-red-700",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-6xl text-center" ref={ref}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="text-lg md:text-xl text-gray-400 mb-3 block"
      >
        Stay Connected
      </motion.span>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="title-h4 leading-tight mb-8"
      >
        Don't miss out! Enter your email
        <br />
        to stay updated on the latest events.
      </motion.h4>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.45, 0.27, 0.9] }}
        className="space-y-6"
        aria-label="Newsletter subscription form"
        onSubmit={handleSubmit}
      >
        <div className="mx-auto flex max-w-xl gap-4">
          <div className="flex-1">
            <Label htmlFor="newsletter-email" className="sr-only">
              Email address
            </Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="name@email.com"
              required
              aria-required="true"
              disabled={loading}
              className="h-11 rounded-full bg-[#1C1C1C] border border-[#4D4D4D] text-gray-300 text-base px-6 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#8C3FE8] focus-visible:border focus:bg-[#1E1E1E] disabled:opacity-50"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading || !email || !isValidEmail(email)}
            className="px-8 rounded-full bg-[#8C3FE8] hover:bg-white hover:text-black text-sm font-medium whitespace-nowrap text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? <Spinner /> : "Stay Updated"}
          </Button>
        </div>

        <p className="text-base text-white">
          We care about your data in our{" "}
          <Link href="/privacy" className="text-[#0066FF] hover:underline">
            privacy policy
          </Link>
        </p>
      </motion.form>
    </div>
  )
}