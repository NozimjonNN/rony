import { useState } from 'react';

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
          <ul className="space-y-8 text-xl">
            <li><a href="/" className="text-gray-900 dark:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-900 dark:text-white">About</a></li>
            <li><a href="/services" className="text-gray-900 dark:text-white">Services</a></li>
            <li><a href="/contact" className="text-gray-900 dark:text-white">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
