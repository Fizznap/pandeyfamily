/**
 * MusicButton – Floating music toggle (top-right)
 * Plays/pauses background devotional audio.
 */
function MusicButton({ isPlaying, onToggle }) {
  return (
    <button
      id="music-toggle"
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      className={`
        absolute top-5 right-4 z-[8] w-[52px] h-[52px] rounded-full
        grid place-items-center p-0 cursor-pointer border
        transition-all duration-400
        ${isPlaying ? 'music-btn-playing' : 'music-btn-paused'}
      `}
    >
      <span
        className={`text-[23px] leading-none transition-all duration-400 -translate-y-px
          ${isPlaying ? 'music-note-active' : ''}`}
      >
        {isPlaying ? '♫' : '♪'}
      </span>
    </button>
  );
}

/**
 * HeroDateStrip – Shows date/time/location in a beautifully styled CSS plaque
 */
function HeroDateStrip({ date }) {
  return (
    <div className="relative w-[min(92vw,480px)] mx-auto mt-8 mb-4">
      {/* Plaque Background */}
      <div className="plaque relative p-1.5 shadow-md">
        {/* Inner Gold Border */}
        <div className="plaque-inner gradient-date-inner relative px-1 py-5 flex items-center justify-between">
          {/* Corner Ornaments */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-accent rounded-tl-[4px] -translate-x-[1px] -translate-y-[1px]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-accent rounded-bl-[4px] -translate-x-[1px] translate-y-[1px]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-accent rounded-tr-[4px] translate-x-[1px] -translate-y-[1px]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-accent rounded-br-[4px] translate-x-[1px] translate-y-[1px]"></div>

          {/* Top/Bottom Center Floral Ornaments */}
          <div className="absolute top-[-11px] left-1/2 -translate-x-1/2 bg-surface-bright px-2 text-accent text-[18px] leading-none text-shadow-light">
            ✤
          </div>
          <div className="absolute bottom-[-11px] left-1/2 -translate-x-1/2 bg-surface-bright px-2 text-accent text-[18px] leading-none text-shadow-light">
            ✤
          </div>

          {/* Left Text */}
          <div className="flex-1 text-center px-1">
            <p className="text-accent-text font-bold text-[clamp(1rem,3.5vw,1.15rem)] leading-snug tracking-wide font-display">
              {date.day}
            </p>
            <p className="text-warm font-medium text-fluid-sm leading-snug mt-1 font-display">
              {date.monthYear}
            </p>
          </div>

          {/* Divider 1 */}
          <div className="relative flex flex-col items-center justify-center mx-1">
            <div className="text-accent text-[10px] leading-none mb-1 opacity-80">✧</div>
            <div className="w-[1px] h-10 bg-accent opacity-40"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-accent shadow-[0_0_4px_var(--color-accent)]"></div>
            <div className="text-accent text-[10px] leading-none mt-1 opacity-80">✧</div>
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center px-1">
            <p className="text-accent-text font-bold text-[clamp(1rem,3.5vw,1.15rem)] leading-snug tracking-wide font-display">
              {date.timeLabel}
            </p>
            <p className="text-warm font-medium text-fluid-sm leading-snug mt-1 font-display">
              {date.timeValue}
            </p>
          </div>

          {/* Divider 2 */}
          <div className="relative flex flex-col items-center justify-center mx-1">
            <div className="text-accent text-[10px] leading-none mb-1 opacity-80">✧</div>
            <div className="w-[1px] h-10 bg-accent opacity-40"></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-accent shadow-[0_0_4px_var(--color-accent)]"></div>
            <div className="text-accent text-[10px] leading-none mt-1 opacity-80">✧</div>
          </div>

          {/* Right Text */}
          <div className="flex-1 text-center px-1">
            <p className="text-accent-text font-bold text-[clamp(1rem,3.5vw,1.15rem)] leading-snug tracking-wide font-display">
              {date.city}
            </p>
            <p className="text-warm font-medium text-fluid-sm leading-snug mt-1 font-display">
              {date.state}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

/**
 * ScrollIndicator – Bouncing arrow at the bottom
 */
function ScrollIndicator() {
  return (
    <div className="flex justify-center mt-7 mb-[5px] animate-arrow-float">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary opacity-70"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}

export default function HeroSection({ data, assets, isPlaying, toggleAudio }) {
  return (
    <section
      id="hero"
      className="gradient-hero relative isolate w-screen overflow-hidden pb-[80px] md:pb-[100px] pt-5"
    >
      {/* ── Subtle texture overlay ── */}
      <div className="gradient-hero-texture absolute inset-0 opacity-55 pointer-events-none z-0" />

      {/* ── Light center stripe overlay ── */}
      <div className="gradient-hero-stripe absolute inset-0 pointer-events-none z-0" />

      {/* ── Decorative Top-Left Corner ── */}
      <img
        src={assets.topLayer}
        alt=""
        aria-hidden="true"
        className="drop-shadow-ornament absolute top-[-9px] left-[-5px] z-2 pointer-events-none w-[min(42vw,132px)]"
      />

      {/* ── Mirrored faint corner (bottom-right) ── */}
      <img
        src={assets.topLayer}
        alt=""
        aria-hidden="true"
        className="absolute z-1 pointer-events-none opacity-20 w-[min(44vw,150px)] bottom-0 right-0 -scale-x-100"
      />

      {/* ── Music Toggle ── */}
      <MusicButton isPlaying={isPlaying} onToggle={toggleAudio} />

      {/* ── Hero Content (centered column) ── */}
      <div className="relative z-4 text-center w-[min(92vw,430px)] mx-auto pt-[63px] px-3">

        {/* Logo (Om symbol) */}
        <div className="relative z-4 mx-auto w-[200px] h-[56px] grid place-items-center rounded-full bg-white/[0.12]">
          <img
            src={assets.logo}
            alt="ॐ"
            className="drop-shadow-soft w-[30px] h-[30px] object-contain"
          />
        </div>

        {/* Sacred glyph text */}
        <p className="text-accent tracking-[0.02em] text-fluid-base leading-none text-shadow-glow font-display mt-1 mb-2.5">
          {data.sacredText}
        </p>

        {/* Ornamental divider */}
        <img
          src={assets.divider1}
          alt=""
          aria-hidden="true"
          className="drop-shadow-soft pointer-events-none select-none mx-auto w-[min(66vw,240px)]"
        />

        {/* Family name */}
        <p className="text-body tracking-[0.01em] text-fluid-lg font-display my-1.5">
          {data.familyName}
        </p>

        {/* ── Title Area (Image or Shlok) ── */}
        {data.heroTextImage ? (
          <img
            src={data.heroTextImage}
            alt={data.heroTextAlt}
            className="w-[min(92vw,380px)] max-w-[380px] mx-auto my-2"
          />
        ) : (
          <h1 
            className="text-primary-deep text-[1.3rem] md:text-[1.5rem] leading-[1.8] font-bold font-heading text-shadow-soft mx-auto my-5 max-w-[95%]"
            dangerouslySetInnerHTML={{ __html: data.shlok }}
          ></h1>
        )}

        {/* Thin divider */}
        <img
          src={assets.divider2}
          alt=""
          aria-hidden="true"
          className="drop-shadow-soft pointer-events-none select-none mx-auto opacity-95 w-[min(72vw,132px)] my-2"
        />

        {/* Message text */}
        <p className="text-heading text-fluid-md leading-[1.45] mt-2 font-display">
          {data.messageLines[0]}<br />
          {data.messageLines[1]}
        </p>

        {/* Welcome line */}
        <p className="text-primary text-fluid-base leading-[1.1] my-1.5 font-display">
          {data.welcomeLine}
        </p>
      </div>

      {/* ── Ganpati Murti Image ── */}
      <img
        src={data.murtiImage}
        alt={data.murtiAlt}
        className="drop-shadow-murti relative z-5 block w-[110%] max-w-[110%] md:max-w-[680px] h-auto mx-auto mt-7 left-1/2 -translate-x-1/2"
      />

      {/* ── Decorative Flowers ── */}
      <img
        src={assets.flower}
        alt=""
        aria-hidden="true"
        className="absolute z-4 pointer-events-none select-none opacity-96 top-[400px] left-[-15px] w-[clamp(70px,16vw,110px)] rotate-[20deg] drop-shadow-soft"
      />
      <img
        src={assets.flower}
        alt=""
        aria-hidden="true"
        className="absolute z-4 pointer-events-none select-none opacity-96 top-[400px] right-[-15px] w-[clamp(70px,16vw,110px)] -scale-x-100 rotate-[20deg] drop-shadow-soft"
      />

      {/* ── Divider between murti and tag ── */}
      <div className="flex justify-center mt-5 mb-5">
        <img
          src={assets.divider2}
          alt=""
          aria-hidden="true"
          className="w-[140px] h-auto block"
          loading="lazy"
        />
      </div>

      {/* ── Date / Time / Location Tag ── */}
      {data.date.title && (
        <p className="text-center text-primary-deep font-heading text-[1.4rem] md:text-[1.6rem] font-bold mt-2 mb-1 drop-shadow-sm">
          {data.date.title}
        </p>
      )}
      <HeroDateStrip date={data.date} />

      {/* ── Scroll Indicator Arrow ── */}
      <ScrollIndicator />

    </section>
  );
}
