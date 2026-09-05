export default function TimelineSection({ data, assets }) {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden px-5 py-[80px] md:py-[100px] bg-surface"
    >
      {/* ── Background Decorative Flowers ── */}
      <img
        src={assets.flower}
        alt=""
        aria-hidden="true"
        className="absolute z-0 opacity-5 pointer-events-none select-none top-[80px] -left-[100px] md:-left-[180px] w-[250px] md:w-[350px]"
        loading="lazy"
      />
      <img
        src={assets.flower}
        alt=""
        aria-hidden="true"
        className="absolute z-0 opacity-5 pointer-events-none select-none bottom-[120px] -right-[100px] md:-right-[180px] w-[250px] md:w-[350px]"
        loading="lazy"
      />

      {/* ── Header Area ── */}
      <div className="relative z-10 text-center mb-[60px] md:mb-[80px]">
        {/* Section English Subtitle / Label */}
        <span className="block text-center text-accent-dark text-[0.75rem] font-semibold tracking-[4px] mb-1 uppercase">
          {data.label}
        </span>

        {/* Section Title */}
        <h2 className="text-heading text-[3rem] md:text-[3.8rem] font-extrabold mb-4 leading-[1.1] font-heading">
          {data.title}
        </h2>

        {/* Heading Ornament */}
        <img
          src={assets.divider2}
          alt=""
          aria-hidden="true"
          className="w-[130px] mx-auto block mb-6"
          loading="lazy"
        />

        {/* Subtitle Invitation Note */}
        <p
          className="text-muted max-w-[300px] mx-auto text-[1.05rem] md:text-[1.1rem] leading-[1.8] font-body"
          dangerouslySetInnerHTML={{
            __html: data.subtitle.replace(/\n/g, '<br />'),
          }}
        ></p>
      </div>

      {/* ── Timeline Area ── */}
      <div className="relative z-10 max-w-[400px] md:max-w-[520px] mx-auto">
        {/* Central Vertical Wave Line */}
        <div className="gradient-timeline-line absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[6px] rounded-[50px]"></div>

        {data.events.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex w-full mb-[40px] md:mb-[55px] ${
                isLeft ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Event Card */}
              <div
                className={`relative text-center p-[15px] md:p-[18px] w-[185px] md:w-[220px] z-10 transition-transform duration-300 hover:scale-105 ${
                  isLeft ? 'card-scallop-light rotate-[-3deg]' : 'card-scallop-warm rotate-[3deg]'
                }`}
              >
                {/* Paper Texture Overlay */}
                <div className="paper-texture-overlay absolute inset-0 pointer-events-none opacity-[0.08]"></div>

                {/* Event Icon */}
                <div className="timeline-icon mx-auto flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] p-[6px] mb-3 md:mb-4 rounded-full">
                  <img
                    src={`/assets/${item.icon}`}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Event Title */}
                <h3 className="text-heading mb-[8px] md:mb-[12px] text-[1.1rem] md:text-[1.2rem] font-bold font-heading">
                  {item.title}
                </h3>

                {/* Event Date */}
                <span
                  className={`block mb-[4px] md:mb-[6px] font-semibold text-[0.95rem] ${
                    isLeft ? 'text-accent' : 'text-primary-deep'
                  }`}
                >
                  {item.date}
                </span>

                {/* Event Time */}
                <span
                  className={`block text-[0.85rem] md:text-[0.92rem] ${
                    isLeft ? 'text-muted' : 'text-heading'
                  }`}
                >
                  {item.time}
                </span>

                {/* Decorative connector line */}
                {isLeft && (
                  <div className="absolute top-1/2 right-[-15px] md:right-[-24px] w-[15px] md:w-[24px] h-[2px] bg-accent"></div>
                )}
                {!isLeft && (
                  <div className="absolute top-1/2 left-[-15px] md:left-[-24px] w-[15px] md:w-[24px] h-[2px] bg-accent-dark"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Closing Message Area ── */}
      <div className="relative z-10 text-center max-w-[500px] mx-auto mt-[60px] md:mt-[70px] px-4">
        <img
          src={assets.divider2}
          alt=""
          aria-hidden="true"
          className="w-[110px] mx-auto mb-[24px] block"
          loading="lazy"
        />
        <p className="text-body mb-[18px] text-[1.05rem] md:text-[1.1rem] leading-[2] font-body">
          {data.closingMessage}
        </p>
        <span className="text-accent text-[1.15rem] md:text-[1.25rem] font-semibold block mt-4 font-heading">
          {data.closingSignature}
        </span>
      </div>
    </section>
  );
}
