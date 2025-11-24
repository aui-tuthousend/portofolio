export default function SectionThree() {
  return (
    <div className="w-full bg-black text-white px-[60px] pt-[120px] flex flex-col justify-between h-[200vh]">

      <div className="flex gap-[25px] w-full h-full pb-[60px]">

        {/* content 1*/}
        <div className="flex flex-col flex-1">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="font-bold text-[40px]">explore our</p>
              <p className="text-[20px] mt-1">©</p>
              </div>
            <p className="font-bold text-[40px] mt-[-20px]">visual showcase</p>
          </div>

          <p>a currated collection of image capturing the showcase of our artwork (soon)</p>

          <div className="w-full h-full mt-10" style={{ backgroundImage: 'linear-gradient(63deg, #461394, #912370, #c43b49, #f1560d)' }}></div>
        </div>

        <div className="flex flex-col flex-1 gap-[25px]">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(25deg, #4f67d3, #6189c5, #68abb6, #64cea5)' }}></div>
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(243deg, #086281, #337ea6, #549bcd, #73b9f6)' }}></div>
        </div>

        <div className="flex flex-col flex-1 gap-[25px]">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(47deg, #5d003d, #850031, #ac0021, #d30007)' }}></div>
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(25deg, #731a00, #9f3703, #cd5403, #fd7200)' }}></div>
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(25deg, #800e1a, #a02341, #c03769, #e04c95)' }}></div>
        </div>
      </div>
    </div>
  )
}