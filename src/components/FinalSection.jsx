import { useState } from 'react';

export default function FinalSection({ blessings, footer, assets }) {
  const [blessingIndex, setBlessingIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNextBlessing = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setBlessingIndex((prev) => (prev + 1) % blessings.list.length);
      setIsFading(false);
    }, 400);
  };

  return (
    <>
      {/* ── Interactive Blessings Section ── */}
      <section
        id="blessings"
        className="relative overflow-hidden px-5 py-[110px] bg-surface"
      >
        <div className="relative z-10 max-w-[650px] mx-auto text-center">
          <span className="block text-accent tracking-[5px] mb-[14px] text-[0.8rem] font-semibold">
            {blessings.label}
          </span>
          <h2 className="text-heading mt-[1px] mb-[14px] text-[3.5rem] md:text-[4rem] font-bold font-heading">
            {blessings.title}
          </h2>
          <img
            src={assets.divider2}
            alt=""
            aria-hidden="true"
            className="w-[120px] mx-auto block mb-[50px]"
            loading="lazy"
          />

          {/* Interactive Blessing Card */}
          <div
            className="gradient-blessing relative flex flex-col justify-center items-center min-h-[300px] md:min-h-[400px] p-[40px_24px] md:p-[50px_35px] rounded-[38px] cursor-pointer select-none transition-transform duration-400 hover:-translate-y-[3px]"
            onClick={handleNextBlessing}
          >
            {/* Top Light Glow Overlay */}
            <div className="gradient-blessing-glow absolute top-[-100px] left-1/2 -translate-x-1/2 w-[250px] h-[250px] pointer-events-none"></div>

            {/* Paper Texture */}
            <div className="paper-texture-overlay absolute inset-0 pointer-events-none opacity-[0.08]"></div>

            {/* Decorative Flowers */}
            <img
              src={assets.flower}
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none opacity-[0.45] w-[95px] md:w-[130px] bottom-[-10px] left-[-20px]"
            />
            <img
              src={assets.flower}
              alt=""
              aria-hidden="true"
              className="absolute pointer-events-none opacity-[0.45] w-[95px] md:w-[130px] top-[-10px] right-[-20px] rotate-180"
            />

            <div className="text-accent-glow text-[1.5rem] mb-[25px] animate-pulse-star">
              ✦
            </div>

            <p
              className={`text-light text-center max-w-[450px] min-h-[150px] md:min-h-[180px] flex items-center justify-center font-medium text-[1.8rem] md:text-[1.5rem] leading-[1.9] md:leading-[2.1] text-shadow-soft transition-all duration-400 font-heading ${
                isFading ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {blessings.list[blessingIndex]}
            </p>
          </div>

          <div className="text-accent-text tracking-[0.5px] mt-[28px] text-[0.9rem] font-medium">
            {blessings.tapMessage}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="gradient-footer relative overflow-hidden pt-[80px] pb-[35px] md:pt-[75px] md:pb-[25px] px-[1px]">
        {/* Top Fade from cream to orange */}
        <div className="gradient-footer-fade absolute top-0 left-0 w-full h-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[650px] mx-auto text-center">
          <img
            src={assets.flower}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none opacity-[0.12] w-[90px] md:w-[130px] top-[-40px] left-[-40px]"
          />
          <img
            src={assets.flower}
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none opacity-[0.12] w-[90px] md:w-[130px] bottom-[-15px] right-[-40px] rotate-180"
          />

          <img
            src={assets.divider2}
            alt=""
            aria-hidden="true"
            className="w-[120px] mx-auto block mb-[40px] brightness-0 invert opacity-80"
            loading="lazy"
          />

          <div className="text-center">
            <h2
              className="text-light max-w-[650px] mx-auto font-medium text-[clamp(1.9rem,7vw,3.1rem)] leading-[1.6] md:leading-[1.7] font-heading"
              dangerouslySetInnerHTML={{
                __html: footer.blessing.replace(/\n/g, '<br />'),
              }}
            ></h2>
          </div>

          <div className="text-accent-glow text-right tracking-[0.5px] mt-[20px] mr-[25px] text-[1.2rem] font-semibold font-body">
            {footer.familySignature}
          </div>

          <div className="text-accent-glow tracking-[3px] md:tracking-[4px] uppercase opacity-90 mt-[70px] text-[0.75rem] md:text-[0.85rem]">
            {footer.credit}
          </div>
        </div>
      </footer>
    </>
  );
}
