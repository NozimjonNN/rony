import Nav from "@/components/navbar"
import Image from "next/image"
import l1 from '../img/l1.png'
import l2 from '../img/l2.png'
import l3 from '../img/l3.png'
import ava from '../img/1.png'

export default function Home() {
  return(
    <>
      <Nav />
      <main className="flex flex-col justify-center items-center h-[980px]">
        <h1 className="text-[75px] text-white"><span className="text-gray-600 opacity-[0.8] font-light">Designing with</span><span className="text-white font-normal"> Purpose</span></h1>
        <h1 className="text-[75px] text-white"><span className="text-gray-600 opacity-[0.8] font-light">Building with</span><span className="text-white font-normal"> Webflow</span></h1>
        <br /><button className="border-[1px] text-white p-[10px] rounded-[60px] text-[24px] duration-[0.5s] hover:text-black hover:bg-white hover:border-black">Say hi 👋🏻</button>
      </main>
      <div className="border-b-[1px] border-gray-700"></div>
      <div className="p-[40px]">
        <p className="text-[#A9A9A9] mb-[20px]">About me</p>
        <div className="flex">
          <div className="w-[50%]">
            <p className="text-[38px]">Hi, I am Rony! I'm a designer with 3 years of web development experience with the past 2 years spent honing my skills in WordPress, Shopify. And Webflow</p>
            <br /><br />
            <p className="text-[38px]">1 understand the importance of a Pixel-perfect Website, pride myself on producing high-quality websites, and I'm comfortable working solo or as part of a team.</p>
          </div>
          <div className="w-[50%] flex justify-center items-center"><Image src={ava} className='w-[500px]' /></div>
        </div>
      </div>
    </>
  )
}
