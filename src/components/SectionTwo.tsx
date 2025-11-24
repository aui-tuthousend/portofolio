import CountUp from "./ui/CountUp";
import TiltedCard from "./ui/TiltedCard";

export default function SectionTwo() {
    return (
        <div className="w-full px-[60px] py-[60px] flex flex-col justify-between h-[120vh] bg-white">
          <div className="grid grid-cols-[1fr_2fr_1fr] h-full">
            <div className="h-full flex flex-col justify-end pb-[50px] gap-10">
              <div className="flex flex-col w-[285px]">
                <p className="font-bold text-[32px]">work experience</p>
                <p>4 years experience as a fullstack developer & system analyst</p>
              </div>

              <div className="flex flex-col w-[285px]">
                <p className="font-bold text-[32px]">contact</p>
                <p>based in surabaya, reach out at mraihan286@gmail.com or call +62 81515385927</p>
              </div>

              <div className="flex flex-col w-[285px]">
                <p className="font-bold text-[32px]">services</p>
                <p>specializing in fullstack development, system analysis, and web development.</p>
              </div>
            </div>

            <div className="h-full pb-[50px] flex items-end justify-end">
              <TiltedCard
                imageSrc="https://images.genius.com/0c7c868cd6130c2a62e956b687e9b0e1.1000x1000x1.png"
                altText="11 minutes"
                captionText="11 minutes"
                containerHeight="90%"
                containerWidth="90%"
                imageHeight="100%"
                imageWidth="90%"
                rotateAmplitude={6}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>

            <div className="h-full flex flex-col justify-between items-end pb-[50px] gap-10">
              <div className="flex flex-col w-[285px] items-end">
                <div className="flex items-end">
                  <CountUp from={1800} to={2000} duration={2} className="font-bold text-[60px] gap-0" />
                  <span className="text-[60px] font-bold">+</span>
                </div>
                <p className="mt-[-15px] text-[16px]">code compiled</p>
              </div>

              <div className="flex flex-col w-[285px] items-end">
                <div className="flex items-end">
                  <CountUp from={0} to={12} duration={2} className="font-bold text-[60px] gap-0" />
                  <span className="text-[60px] font-bold">+</span>
                </div>
                <p className="mt-[-15px] text-[16px]">programming language</p>
              </div>

              <div className="flex flex-col w-[285px] items-end">
                <div className="flex items-end">
                  <CountUp from={400} to={500} duration={2} className="font-bold text-[60px] gap-0" />
                  <span className="text-[60px] font-bold">+</span>
                </div>
                <p className="mt-[-15px] text-[16px]">query written</p>
              </div>

              <div className="flex flex-col w-[285px] items-end">
                <div className="flex items-end">
                  <CountUp from={600} to={700} duration={2} className="font-bold text-[60px] gap-0" />
                  <span className="text-[60px] font-bold">+</span>
                </div>
                <p className="mt-[-15px] text-[16px]">debug</p>
              </div>
            </div>
          </div>
        </div>
    )
}