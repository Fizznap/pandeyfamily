import { useState, useEffect } from 'react';

export default function Opener({ data, assets, onOpenStart, onOpenComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    if (onOpenStart) onOpenStart();

    // Allow the transition to finish before removing from DOM
    setTimeout(() => {
      setIsRendered(false);
      if (onOpenComplete) onOpenComplete();
    }, 1500);
  };

  // Lock body scroll while opener is active
  useEffect(() => {
    if (isRendered && !isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isRendered]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[100dvh] z-[9999] overflow-hidden ${isOpen ? 'pointer-events-none' : 'pointer-events-auto'}`}
    >
      {/* ── Left Curtain Panel ── */}
      <div
        className={`curtain-panel curtain-panel-left absolute top-0 left-0 w-[50vw] h-[100dvh] overflow-hidden ${isOpen ? 'curtain-open-left' : 'translate-x-0'}`}
      >
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-transparent via-transparent to-[rgba(200,160,100,0.2)]"></div>

        {/* Decor Lines */}
        <div className="absolute top-0 bottom-0 right-0 w-[50px] pointer-events-none">
          <div className="curtain-line-gold absolute top-[3%] bottom-[3%] right-[8px] w-[1.5px] opacity-70"></div>
          <div className="curtain-line-orange absolute top-[6%] bottom-[6%] right-[16px] w-[1px] opacity-35"></div>
        </div>
        <div className="absolute top-[10%] bottom-[10%] right-[26px] border-r-[1px] border-dashed border-accent opacity-20"></div>
        <div className="absolute top-[4%] bottom-[4%] left-[20px] border-r-[1px] border-solid border-accent opacity-[0.15]"></div>

        {/* Decorative Corners */}
        <div className="absolute top-[16px] right-[34px] w-[28px] h-[28px] pointer-events-none z-20 opacity-50 before:absolute before:bg-accent before:w-[18px] before:h-[1px] before:top-0 before:right-0 after:absolute after:bg-accent after:w-[1px] after:h-[18px] after:top-0 after:right-0"></div>
        <div className="absolute bottom-[16px] right-[34px] w-[28px] h-[28px] pointer-events-none z-20 opacity-50 before:absolute before:bg-accent before:w-[18px] before:h-[1px] before:bottom-0 before:right-0 after:absolute after:bg-accent after:w-[1px] after:h-[18px] after:bottom-0 after:right-0"></div>
      </div>

      {/* ── Right Curtain Panel ── */}
      <div
        className={`curtain-panel curtain-panel-right absolute top-0 right-0 w-[50vw] h-[100dvh] overflow-hidden ${isOpen ? 'curtain-open-right' : 'translate-x-0'}`}
      >
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-l from-transparent via-transparent to-[rgba(200,160,100,0.2)]"></div>

        {/* Decor Lines */}
        <div className="absolute top-0 bottom-0 left-0 w-[50px] pointer-events-none">
          <div className="curtain-line-gold absolute top-[3%] bottom-[3%] left-[8px] w-[1.5px] opacity-70"></div>
          <div className="curtain-line-orange absolute top-[6%] bottom-[6%] left-[16px] w-[1px] opacity-35"></div>
        </div>
        <div className="absolute top-[10%] bottom-[10%] left-[26px] border-l-[1px] border-dashed border-accent opacity-20"></div>
        <div className="absolute top-[4%] bottom-[4%] right-[20px] border-l-[1px] border-solid border-accent opacity-[0.15]"></div>

        {/* Decorative Corners */}
        <div className="absolute top-[16px] left-[34px] w-[28px] h-[28px] pointer-events-none z-20 opacity-50 before:absolute before:bg-accent before:w-[18px] before:h-[1px] before:top-0 before:left-0 after:absolute after:bg-accent after:w-[1px] after:h-[18px] after:top-0 after:left-0"></div>
        <div className="absolute bottom-[16px] left-[34px] w-[28px] h-[28px] pointer-events-none z-20 opacity-50 before:absolute before:bg-accent before:w-[18px] before:h-[1px] before:bottom-0 before:left-0 after:absolute after:bg-accent after:w-[1px] after:h-[18px] after:bottom-0 after:left-0"></div>
      </div>

      {/* ── Center Seal ── */}
      <div
        className={`absolute top-1/2 left-1/2 flex items-center justify-center z-[10000] transition-all duration-500 ease-in ${
          isOpen ? '-translate-x-1/2 -translate-y-1/2 scale-75 opacity-0' : '-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100'
        }`}
      >
        {/* Animated Rings */}
        <div
          className="absolute rounded-full border border-dashed border-accent opacity-40 pointer-events-none w-[clamp(160px,42vw,200px)] h-[clamp(160px,42vw,200px)] animate-ring-rotate"
        >
          <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-accent rounded-full opacity-60"></div>
        </div>

        <div
          className="absolute rounded-full border border-solid border-accent opacity-15 pointer-events-none w-[clamp(175px,46vw,218px)] h-[clamp(175px,46vw,218px)] animate-ring-reverse"
        ></div>

        {/* Seal Button */}
        <button
          onClick={handleOpen}
          className="gradient-seal relative flex flex-col items-center justify-center rounded-full text-light border-none cursor-pointer outline-none group w-[clamp(120px,34vw,150px)] h-[clamp(120px,34vw,150px)] animate-seal-breath transition-transform duration-400 hover:scale-[1.04] active:scale-[0.97]"
        >
          {/* Inner Dashed Border */}
          <div className="absolute inset-[8px] rounded-full border-[1.5px] border-dashed border-white opacity-35 pointer-events-none"></div>

          <span className="text-shadow-dark relative z-10 text-fluid-seal font-bold pointer-events-none mb-1 font-heading">
            {data.sealTitle}
          </span>
          <span className="text-shadow-soft relative z-10 text-fluid-xs tracking-[2.5px] uppercase opacity-85 pointer-events-none font-body">
            {data.sealSubtitle}
          </span>

          {/* Shine effect */}
          <div className="seal-shine absolute inset-[-2px] rounded-full pointer-events-none z-[1]"></div>
        </button>
      </div>
    </div>
  );
}
