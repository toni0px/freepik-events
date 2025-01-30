"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { motion, useInView } from "framer-motion"
import { FormEvent, useRef, useState } from "react"
import { format } from 'date-fns'
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
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
        ...formData,
        time: formattedDate,
        country: geoData.country_name,
        city: geoData.city
      };

      const response = await fetch('/api/contact-form', {
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
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "¡Éxito!",
          description: "Mensaje enviado correctamente",
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
        description: error instanceof Error ? error.message : 'Error al enviar el mensaje',
        className: "bg-red-600 text-white border-red-700",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isFormValid = formData.name && formData.email && formData.message && isValidEmail(formData.email);

  return (
    <section className="px-4 py-16 bg-black" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Form Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
              className="space-y-3"
            >
              <h3 className="title-h3 leading-tight">Host an Event with Us!</h3>
              <p className="text-base text-gray-400">Connect with us to explore sponsorships and collaborations</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
              className="space-y-4"
              aria-label="Contact form"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  disabled={loading}
                  aria-required="true"
                  className="h-11 bg-[#1C1C1C] focus:bg-[#1E1E1E] border border-[#4D4D4D] text-gray-300 text-base px-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#8C3FE8] focus-visible:border disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={loading}
                  aria-required="true"
                  className="h-11 bg-[#1C1C1C] focus:bg-[#1E1E1E] border border-[#4D4D4D] text-gray-300 text-base px-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#8C3FE8] focus-visible:border disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  disabled={loading}
                  aria-required="true"
                  className="min-h-[120px] bg-[#1C1C1C] focus:bg-[#1E1E1E] border border-[#4D4D4D] text-gray-300 text-base px-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-[#8C3FE8] focus-visible:border disabled:opacity-50"
                />
              </div>

              <Button
                type="submit"
                disabled={loading || !isFormValid}
                className="w-full h-11 rounded-lg bg-[#8C3FE8] hover:bg-white hover:text-black text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Send message"
              >
                {loading ? <Spinner /> : "Send Message"}
              </Button>
            </motion.form>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.45, 0.27, 0.9] }}
            className="flex items-center justify-center"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact-img-lhBPxqA6RCYtjITSrbCXE91DoYFd37.webp"
              alt="Contact visual"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

