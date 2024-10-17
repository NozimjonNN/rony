import Nav from "@/components/navbar"

export default function Home() {
  return(
    <>
      <Nav />
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-[75px] text-white"><span className="text-gray-600 opacity-[0.8] font-light">Designing with</span><span className="text-white font-normal"> Purpose</span></h1>
        <h1 className="text-[75px] text-white"><span className="text-gray-600 opacity-[0.8] font-light">Building with</span><span className="text-white font-normal"> Webflow</span></h1>
        <br /><button className="border-[1px] text-white p-[10px] rounded-[60px] text-[24px] duration-[0.5s] hover:text-black hover:bg-white hover:border-black">Say hi 👋🏻</button>
      </main>
      
    </>
  )
}
