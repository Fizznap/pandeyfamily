export default function FamilySection({ data, assets }) {
  return (
    <section
      id="nimantrak"
      className="gradient-family relative overflow-hidden text-center -mt-[3px] pt-[70px] md:pt-[90px] pb-[100px] md:pb-[140px]"
    >
      {/* ── Top Organic Shape Divider ── */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[67px]"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            className="fill-surface-alt stroke-surface-alt"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* ── Header Area ── */}
      <div className="relative z-10 px-5 max-w-[900px] mx-auto">
        {/* Section English Subtitle / Label */}
        <span className="block text-center text-accent-pale text-[0.85rem] font-semibold tracking-[1.2px] mb-2 uppercase">
          {data.label}
        </span>

        {/* Section Title */}
        <h2 className="text-light text-[2.8rem] md:text-[3.7rem] font-extrabold leading-none mb-5 font-heading">
          {data.title}
        </h2>

        {/* Heading Ornament */}
        <img
          src={assets.divider2}
          alt=""
          aria-hidden="true"
          className="w-[140px] mx-auto mb-7 block"
          loading="lazy"
        />

        {/* ── Family Plaque ── */}
        <div className="family-plaque relative mx-auto mb-8 px-6 py-5 w-[300px] max-w-[88vw] rounded-[28px] text-center">
          {/* Left Flower Accent */}
          <img
            src={assets.flower}
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 -translate-y-1/2 -left-[18px] w-[70px] opacity-95 pointer-events-none select-none"
          />

          {/* Plaque Text */}
          <div className="relative z-2">
            <h3 className="text-heading m-0 text-[1.8rem] md:text-[2rem] font-black leading-tight font-heading">
              {data.plaqueName}
            </h3>
          </div>

          {/* Right Flower Accent (Mirrored) */}
          <img
            src={assets.flower}
            alt=""
            aria-hidden="true"
            className="absolute top-1/2 -right-[18px] w-[70px] opacity-95 pointer-events-none select-none -scale-x-100"
            style={{ top: '50%', transform: 'translateY(-50%) scaleX(-1)' }}
          />
        </div>

        {/* Subtitle Invitation Note */}
        <p className="text-light max-w-[420px] mx-auto mt-4 mb-4 text-[1.05rem] md:text-[1.1rem] leading-[1.8] font-body">
          {data.subtitle}
        </p>

        {/* Small Divider */}
        <img
          src={assets.divider2}
          alt=""
          aria-hidden="true"
          className="w-[90px] mx-auto mb-10 block"
          loading="lazy"
        />
      </div>

      {/* ── Family Cards Container ── */}
      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-7 md:gap-8 mx-auto">
          {data.members.map((member) => (
              <div
                key={member.name}
                className="w-full max-w-[300px] transition-all duration-400 ease-out"
              >
                {member.image ? (
                  <div className="family-card rounded-[16px] overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02]">
                    {/* Photo with 3:4 Aspect Ratio */}
                    <div className="w-full aspect-[3/4] overflow-hidden bg-surface-placeholder">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center block transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Member Name */}
                    <div className="p-4 md:p-5 flex flex-col items-center justify-center text-center">
                      <span className="text-heading text-[1.45rem] md:text-[1.65rem] font-extrabold leading-snug tracking-tight font-heading">
                        {member.name}
                      </span>
                      {member.phone && (
                        <a 
                          href={`tel:${member.phone.replace(/\s/g, '')}`}
                          className="text-light text-[1rem] md:text-[1.1rem] mt-2 font-body block opacity-90 hover:opacity-100 transition-opacity"
                        >
                          {member.phone}
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 flex flex-col items-center justify-center text-center">
                    <span className="text-heading text-[1.8rem] md:text-[2.2rem] font-extrabold leading-snug tracking-tight font-heading text-shadow-soft">
                      {member.name}
                    </span>
                    {member.phone && (
                      <a 
                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                        className="text-light text-[1.1rem] md:text-[1.2rem] mt-2 font-body block opacity-90 hover:opacity-100 transition-opacity"
                      >
                        {member.phone}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* ── Closing Invitation Message ── */}
      <div className="relative z-10 mt-10 md:mt-12 px-5 text-center">
        <p
          className="text-light text-[1.15rem] md:text-[1.25rem] leading-[1.9] max-w-[480px] mx-auto font-body"
          dangerouslySetInnerHTML={{
            __html: data.closingMessage.replace(/\n/g, '<br />'),
          }}
        ></p>

        {/* Bottom Ornament */}
        <img
          src={assets.divider2}
          alt=""
          aria-hidden="true"
          className="w-[140px] mx-auto mt-8 mb-4 block"
          loading="lazy"
        />
      </div>

      {/* ── Bottom Shape Divider ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(173%+1.3px)] h-[60px] sm:h-[80px] md:h-[130px]"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="fill-surface stroke-surface"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  );
}
