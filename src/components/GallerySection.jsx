export default function GallerySection({ data, assets }) {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden px-5 py-[110px] bg-surface mb-[-2px]"
    >
      <div className="relative z-10 max-w-[800px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-[45px]">
          <span className="block text-center text-accent text-[0.8rem] font-semibold tracking-[4px] mb-[15px] uppercase">
            {data.label}
          </span>

          <h2 className="text-heading text-[3.4rem] md:text-[3.8rem] font-bold mb-[10px] leading-[55px] font-heading">
            {data.title}
          </h2>

          <img
            src={assets.divider2}
            alt=""
            aria-hidden="true"
            className="w-[120px] mx-auto block"
            loading="lazy"
          />

          <p
            className="text-muted mt-[18px] leading-[1.8] font-body"
            dangerouslySetInnerHTML={{
              __html: data.subtitle.replace(/\n/g, '<br />'),
            }}
          ></p>
        </div>

        {/* Featured Photo */}
        <div className="mb-[30px] p-[2px] rounded-[30px] shadow-[0_15px_35px_rgba(0,0,0,0.06)] overflow-hidden bg-surface-light">
          <img
            src={data.featuredImage}
            alt="Featured memory"
            className="w-full h-full object-cover rounded-[22px] aspect-video"
            loading="lazy"
          />
        </div>

        {/* Gallery Grid - 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] md:gap-[18px]">
          {data.images.map((imgSrc, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`gallery-card group relative overflow-hidden p-[2px] ${
                  isLeft ? 'gallery-card-left' : 'gallery-card-right'
                }`}
              >
                <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={`Memory ${idx + 1}`}
                    className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Light Overlay on Hover */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Message Footer */}
        <div className="flex flex-col items-center text-center mt-[50px]">
          <img
            src={assets.divider2}
            alt=""
            className="w-[110px] mb-[20px]"
            loading="lazy"
          />
          <p
            className="text-body max-w-[420px] mx-auto leading-[2] font-body"
            dangerouslySetInnerHTML={{
              __html: data.message.replace(/\n/g, '<br />'),
            }}
          ></p>
        </div>
      </div>
    </section>
  );
}
