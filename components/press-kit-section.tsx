export function PressKitSection() {
  return (
    <section className="py-16 bg-[#111111] px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4">
          <h4 className="title-h4 leading-tight">Newsroom for Journalists and Partners</h4>
          <p className="text-base text-gray-400">
            For press inquiries please reach out to{" "}
            <a href="mailto:press@freepik.com" className="text-[#0066FF] hover:underline">
              press@freepik.com
            </a>
          </p>
          <div className="flex gap-8 pt-4">
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066FF] hover:underline text-lg font-medium"
            >
              Download press kit
            </a>
            <a
              href="https://www.freepik.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066FF] hover:underline text-lg font-medium"
            >
              Get accreditation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

