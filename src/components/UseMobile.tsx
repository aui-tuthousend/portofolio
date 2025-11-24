import SpotlightCard from "./SpotlightCard";

export default function UseMobile() {
  return (
    <div className="w-full h-full text-white px-[10%] py-[20%]">
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(255, 255, 255, 0.25)">
        <div className="py-10">
          <p className="text-[1.5rem]">you have to use desktop to see this website 🙂</p>
          <p>am too lazy to make it responsive</p>
        </div>
      </SpotlightCard>
    </div>
  )
}