import { SpeakersSlideshow } from "./speakers-slideshow"

export function SpeakersSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="title-h2 leading-tight px-1">Speakers</h2>
        <p className="text-base text-gray-400 max-w-3xl px-1">
          At Freepik, we unite global leaders in generative AI and design
          <br />
          to share insights and experiences in the evolving creative landscape
        </p>
      </div>

      <SpeakersSlideshow />
    </div>
  )
}

