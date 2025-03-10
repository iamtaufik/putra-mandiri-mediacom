'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleSidebar = () => {
    setToggle(!toggle);
  };

  const listener = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setToggle(false);
    }
    ``;
  };

  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      if (!header) return;
      const fixedNav = header.offsetTop;

      if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
      } else {
        header.classList.remove('navbar-fixed');
      }
    };
  }, []);

  useEffect(() => {
    if (window.document) {
      window.document.addEventListener('click', listener);
    }

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [sidebarRef, handleSidebar]);
  return (
    <header id="header" className="bg-white/80 fixed w-full shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4 md:py-6 flex md:block justify-between items-center">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image className="w-full h-10" src="/logo.webp" alt="Putra Mandiri Mediacom" width={200} height={10} />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-gray-700 hover:text-sky-500">
              Beranda
            </a>
            <a href="#layanan" className="text-gray-700 hover:text-sky-500">
              Layanan
            </a>
            <a href="#testimonial" className="text-gray-700 hover:text-sky-500">
              Testimonial
            </a>
            <a href="#mengapa-kami" className="text-gray-700 hover:text-sky-500">
              Mengapa Kami
            </a>
            <a href="#kontak" className="text-gray-700 hover:text-sky-500">
              Kontak
            </a>
          </div>
        </div>
        <div className="lg:hidden flex">
          {toggle ? (
            <button type="button" onClick={handleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          ) : (
            <button type="button" onClick={handleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          )}

          <div
            ref={sidebarRef}
            className={`${toggle ? 'translate-x-0' : 'translate-x-96'} shadow-slate-400 shadow-md z-10  transition-all ease-in-out duration-300 bg-white right-0 -mx-10 top-18 w-full max-w-[14rem] px-4 py-6 min-h-[90vh] fixed`}
          >
            <div className=" gap-8 flex flex-col">
              <a href="#beranda" className="text-gray-700 hover:text-sky-500">
                Beranda
              </a>
              <a href="#layanan" className="text-gray-700 hover:text-sky-500">
                Layanan
              </a>
              <a href="#testimonial" className="text-gray-700 hover:text-sky-500">
                Testimonial
              </a>
              <a href="#mengapa-kami" className="text-gray-700 hover:text-sky-500">
                Mengapa Kami
              </a>
              <a href="#kontak" className="text-gray-700 hover:text-sky-500">
                Kontak
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
