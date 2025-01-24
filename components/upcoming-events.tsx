export function UpcomingEvents() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h3 className="title-h3 leading-tight">
          Upcoming Events
          <br />
          at Freepik
        </h3>
        <p className="text-base text-gray-400 max-w-xl mx-auto">
          Be a part of the exciting events Freepik is
          <br />
          bringing to San Francisco's creative community.
        </p>
      </div>

      <div className="relative w-full aspect-[790/450] max-w-4xl mx-auto">
        <iframe
          src="https://lu.ma/embed/calendar/cal-GsD9eOu3yvyS6mC/events"
          className="absolute inset-0 w-full h-full rounded-lg"
          style={{ border: "1px solid #bfcbda30" }}
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  )
}

