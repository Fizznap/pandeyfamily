export default function LocationSection({ data, assets }) {
  return (
    <section
      id="location"
      className="gradient-location relative overflow-hidden px-5 py-[100px]"
    >
      <div className="gradient-location-glass relative z-10 max-w-[550px] mx-auto p-[30px_20px] rounded-[36px]">
        {/* Section Label */}
        <span className="block text-center text-primary text-[12px] font-semibold tracking-[4px] mb-[12px]">
          {data.label}
        </span>

        {/* Section Title */}
        <h2 className="text-center text-heading text-[3.5rem] md:text-[3.8rem] font-extrabold mt-0 mb-[10px] font-heading">
          {data.title}
        </h2>

        {/* Divider Image */}
        <img
          src={assets.divider2}
          alt=""
          aria-hidden="true"
          className="w-[120px] mx-auto block"
          loading="lazy"
        />

        {/* Subtitle */}
        <p
          className="text-center text-muted mt-[20px] mb-[40px] leading-[1.8] font-body"
          dangerouslySetInnerHTML={{
            __html: data.subtitle.replace(/\n/g, '<br />'),
          }}
        ></p>

        {/* Location Card with Map */}
        <div className="gradient-location-card relative overflow-hidden rounded-[28px]">
          {/* Top Gradient Fade */}
          <div className="gradient-location-fade absolute top-0 left-0 w-full h-[120px] pointer-events-none"></div>

          {/* Decorative Right Flower */}
          <div
            className="absolute -bottom-[25px] -right-[25px] w-[130px] h-[130px] opacity-[0.15] pointer-events-none bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${assets.flower})` }}
          ></div>

          {/* Map Container */}
          <div className="gradient-location-map relative h-[220px] md:h-[250px] overflow-hidden rounded-t-[28px]">
            <iframe
              src={data.mapEmbed}
              className="map-filter w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay for map */}
            <div className="absolute inset-0 pointer-events-none bg-surface/[0.08]"></div>
          </div>

          {/* Content inside Location Card */}
          <div className="relative text-center p-[28px_22px_35px] md:p-[32px_28px_40px]">
            <h3 className="text-heading mb-[20px] text-[2.3rem] font-extrabold font-heading">
              {data.placeName}
            </h3>
            <p
              className="text-body mb-[30px] leading-[2] font-body"
              dangerouslySetInnerHTML={{
                __html: data.address.replace(/\n/g, '<br />'),
              }}
            ></p>
            <a
              href={data.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="cta-button inline-flex justify-center items-center w-full h-[62px] mb-[28px] rounded-full text-white text-[1rem] font-semibold no-underline"
            >
              {data.mapsButtonText}
            </a>
            <p
              className="text-muted text-[0.95rem] leading-[1.9] font-body"
              dangerouslySetInnerHTML={{
                __html: data.note.replace(/\n/g, '<br />'),
              }}
            ></p>
          </div>
        </div>
      </div>

      {/* Bottom Custom Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(134%+1.3px)] md:w-[calc(119%+1.3px)] h-[80px] md:h-[137px]"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="fill-surface"
          ></path>
        </svg>
      </div>
    </section>
  );
}
