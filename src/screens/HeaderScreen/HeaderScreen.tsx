export const HeaderScreen = (): JSX.Element => {
  return (
    <div
      className="flex items-center justify-center gap-2.5 pt-[8px] pb-[8px] bg-[#ffffff]"
      data-modal-id="176e2393b"
    >
      <header className="inline-flex flex-col items-center gap-[8px] [flex:0_0_auto] bg-transparent">
        {/* Text content section */}
        <div className="inline-flex flex-col items-start gap-[8px] [flex:0_0_auto]">
          <p className="flex items-center justify-center gap-[1.00px] font-subtitle text-black text-[length:var(--subtitle-font-size)] text-center tracking-[var(--subtitle-letter-spacing)] leading-[var(--subtitle-line-height)] [font-style:var(--subtitle-font-style)]">
            {/* Main heading */}
            <h1 className="flex items-center justify-center w-[1253px] [font-family:'Epilogue'] [font-weight:600] font-semibold text-black text-5xl text-center tracking-[0] leading-[normal]">
              Dhruvin Patel
            </h1>
          </p>
          {/* Body description */}
          <p className="w-[1369px] font-body-text font-[number:var(--body-text-font-weight)] text-black text-[length:var(--body-text-font-size)] text-center tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
            Results-driven Flutter Developer and Mobile Engineer with hands-on experience leading product development, shipping live apps to global markets, and driving growth through Meta platforms. Government-recognized IPR patent holder.
          </p>
        </div>
        {/* Resume video */}
        <video
          className="self-stretch w-full h-[269.82px]"
          autoPlay
          height="1080"
          muted
          playsInline
          src="https://cdn.animaapp.com/projects/61883af7a6ef0d814fa95df1/files/header-video.mp4"
          width="1080"
        />
      </header>
    </div>
  );
};
