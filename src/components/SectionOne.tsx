import LiquidEther from "./ui/LiquidEther"

export default function SectionOne() {
  return (
    <div className="w-full px-[60px] pt-[60px] flex flex-col justify-between h-[120vh] text-white bg-[#000000] z-10 relative">
      <LiquidEther
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
      />
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-0">
          <h1 className="font-medium text-[32px]">M. H. Raihan</h1>
          <h1 className="font-medium text-[32px] mt-[-13px]">Fullstack Developer</h1>
        </div>
        <h1 className="font-medium text-[32px]">Selected works ©</h1>
      </div>
      <div className="">
        <h1 className="font-bold text-[265px] p-0 -mb-10 -ml-3">Portofolio</h1>
      </div>
    </div>
  )
}