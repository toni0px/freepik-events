import Image from "next/image"

const partners = [
  {
    name: "GitHub",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gibhub-Grzo0JnkFnAJAbMLC3kAKc8BbhnnqT.png",
    width: 120,
  },
  {
    name: "LUMA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LUMA-0dwJ5tiz0XxOlFfGGxHtFqTCMZXy45.png",
    width: 140,
  },
  {
    name: "PIKA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PIKA-P3SeylZDZ8J7QCeCisfui82Z7ZcJ6c.png",
    width: 100,
  },
  {
    name: "Adobe",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe-3JHnXIM8mcoul1anQIdzmfuXEx1BPT.png",
    width: 140,
  },
  {
    name: "a16z",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a16z-80QbP0xqgM6IJI8B1bHJp2smkfSfUN.png",
    width: 100,
  },
  {
    name: "CIVITAI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CIVITAI-JbyN7RbOHphn5PGQrYYRCHU6kUrAGo.png",
    width: 130,
  },
  {
    name: "ElevenLabs",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IIElevenlabs-a9NdmBpiX3HnCYiB3U2XJzfBjiAntg.png",
    width: 160,
  },
  {
    name: "Scenario",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scenario-cQ6QVAtlDjAGL5hqpZHDHA6V2hjSO8.png",
    width: 160,
  },
  {
    name: "Haiper",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Haiper-2Mxv0xT4E2cc6eqWP47WN2ZKXzUomc.png",
    width: 140,
  },
  {
    name: "DeepAI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DeepAi-36XZBwS2ork3QyXoEWFdGtYItVriv0.png",
    width: 160,
  },
  {
    name: "MAGNIFIC",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MAGNIFIC-sdLHpsG1L0VzfAXom2NCQyBiBvHzfS.png",
    width: 160,
  },
  {
    name: "Open License",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Openlicenses-yrS7emZMSCpBFuSvQSdHXzE5vuIz1c.png",
    width: 180,
  },
  {
    name: "Design Buddies",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/designbuddies-saMkogZtNGciHwyKOHXPesLC1fp2MQ.png",
    width: 180,
  },
]

export function PartnersSection() {
  return (
    <div className="container mx-auto max-w-6xl">
      <h3 className="title-h3 leading-tight mb-16 text-center">Collaborators</h3>
      <div className="flex flex-wrap justify-center sm:gap-8 lg:gap-16 gap-20 items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="flex flex-col items-center justify-center">
            <div className="relative h-12" style={{ width: partner.width }}>
              <Image
                src={partner.logo || "assets/placeholder.svg"}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

