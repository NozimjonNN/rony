import { useState } from 'react';
import Image from 'next/image';
import ava from '../img/1.png'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="relative p-[50px] bg-transperent shadow-md transition-colors duration-300">
        <div className="flex justify-between items-center">
          <div className="text-[36px] font-bold text-gray-900 dark:text-white">Rony<span className='text-pink-400'>.</span></div>

          {/* Бургер-кнопка (видна на всех экранах, белая в темной теме) */}
          <button
            className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={toggleMenu}
          >
            <span
              className={`block w-8 h-1 bg-gray-800 dark:bg-white transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-gray-800 dark:bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-gray-800 dark:bg-white transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Полноэкранное меню */}
        <div
          className={`z-50 fixed inset-0 bg-black flex flex-col items-center justify-center transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className='w-[50%] flex flex-col gap-[30px] p-[100px] text-white'>
              <Image src={ava} className="w-[200px]"/>
              <h1 className='text-[45px] font-bold'>Hi, I am Rony! I am a desiginer based on Bangladesh. </h1>
              <p className='text-[20px] text-[#A9A9A9] opacity-[0.7]'>Age - 23</p>
              <p className='text-[20px] text-[#A9A9A9] opacity-[0.7]'>Country - Bangladesh</p>
              <p className='text-[20px] text-[#A9A9A9] opacity-[0.7]'>Whatsapp - +8801756238075</p>
              <p className='text-[20px] text-[#A9A9A9] opacity-[0.7]'>Email - hirony16@gmail.com</p>
            </div>
            <div className='w-[50%] flex justify-center items-center'>
              <ul className='list-none flex flex-col gap-[40px]'>
                <li><a href="/" className='text-[60px] font-medium opacity-[0.7] hover:opacity-[1] duration-[0.5s]'>Home</a></li>
                <li><a href="/" className='text-[60px] font-medium opacity-[0.7] hover:opacity-[1] duration-[0.5s]'>Protfolio</a></li>
                <li><a href="/" className='text-[60px] font-medium opacity-[0.7] hover:opacity-[1] duration-[0.5s]'>Process</a></li>
                <li><a href="/" className='text-[60px] font-medium opacity-[0.7] hover:opacity-[1] duration-[0.5s]'>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
