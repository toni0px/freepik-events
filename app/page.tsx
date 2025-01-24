import { Suspense } from "react"
import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { ImageGrid } from "@/components/image-grid"
import { MetricsSection } from "@/components/metrics-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { SpeakersSection } from "@/components/speakers-section"
import { PartnersSection } from "@/components/partners-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { PastEventsSection } from "@/components/past-events-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { PressKitSection } from "@/components/press-kit-section"
import { Footer } from "@/components/footer"

// Convertir a Server Component para mejor rendimiento
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main id="main-content" role="main">
        <HeroSection />

        {/* Image Grid Section */}
        <section aria-labelledby="work-heading" id="about" className="px-4 py-16 bg-[#141414]">
          <div className="container mx-auto max-w-6xl">
            <Suspense fallback={<div className="h-[800px] bg-[#1C1C1C] rounded-[24px] animate-pulse" />}>
              <ImageGrid />
            </Suspense>
          </div>
        </section>

        {/* Metrics Section */}
        <section aria-labelledby="metrics-heading" className="px-4 py-16 bg-black">
          <div className="container mx-auto max-w-6xl">
            <Suspense fallback={<div className="h-[200px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
              <MetricsSection />
            </Suspense>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section aria-labelledby="upcoming-events-heading" id="upcoming-events" className="px-4 py-16 bg-[#141414]">
          <div className="container mx-auto max-w-6xl">
            <Suspense fallback={<div className="h-[600px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
              <UpcomingEvents />
            </Suspense>
          </div>
        </section>

        {/* Speakers */}
        <section aria-labelledby="speakers-heading" id="speakers" className="px-4 py-16 bg-black overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <Suspense fallback={<div className="h-[500px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
              <SpeakersSection />
            </Suspense>
          </div>
        </section>

        {/* Partners */}
        <section aria-labelledby="partners-heading" className="px-4 py-16 bg-[#141414]">
          <Suspense fallback={<div className="h-[400px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
            <PartnersSection />
          </Suspense>
        </section>

        {/* Past Events */}
        <section aria-labelledby="past-events-heading" id="past-events" className="px-4 py-16 bg-black overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <Suspense fallback={<div className="h-[600px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
              <PastEventsSection />
            </Suspense>
          </div>
        </section>

        {/* Newsletter */}
        <section aria-labelledby="newsletter-heading" className="px-4 py-16 bg-[#141414]">
          <Suspense fallback={<div className="h-[300px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
            <NewsletterSection />
          </Suspense>
        </section>

        {/* Latest News */}
        <section aria-labelledby="news-heading" id="latest-news" className="px-4 py-16 bg-[#141414]">
          <div className="container mx-auto max-w-6xl">
            <Suspense fallback={<div className="h-[600px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
              <BlogSection />
            </Suspense>
          </div>
        </section>

        {/* Contact */}
        <section aria-labelledby="contact-heading" id="contact" className="px-4 py-16 bg-black">
          <div className="container mx-auto max-w-6xl">
            <Suspense fallback={<div className="h-[400px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
              <ContactSection />
            </Suspense>
          </div>
        </section>

        {/* Press Kit */}
        <Suspense fallback={<div className="h-[200px] bg-[#1C1C1C] rounded-lg animate-pulse" />}>
          <PressKitSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

