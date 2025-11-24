import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
import CircularText from "./ui/CircularText";

export default function MainPage() {
    return (
        <div className="w-full overflow-x-hidden overflow-y-auto">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />

          {/* <div className="fixed bottom-4 right-4 pointer-events-none z-50 ">
            <CircularText
              text="MADE*WITH*REACT*BITS*"
              onHover="speedUp"
              spinDuration={20}
              className="text-lg font-bold"
            />
          </div> */}
        </div>
    )
}