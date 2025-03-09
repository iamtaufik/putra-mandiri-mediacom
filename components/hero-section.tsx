'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section id="beranda" className="relative pt-24 h-[600px] bg-gradient-to-br from-sky-50 to-white">
      {/* Background untuk Mobile */}
      <div className="absolute inset-0 bg-[url('/bg-hero.webp')] bg-cover bg-center md:bg-none"></div>

      {/* Overlay untuk meningkatkan keterbacaan */}
      <div className="absolute inset-0 bg-black/60 md:bg-transparent"></div>

      <div className="container relative z-10 mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-white md:text-gray-800 mb-6">Solusi Terpercaya untuk Layanan Laptop Anda</h1>
            <p className="text-lg text-gray-200 md:text-gray-600 mb-8">Perbaikan, upgrade, dan jual beli laptop dengan layanan profesional dan bergaransi</p>
            <div className="flex space-x-4">
              <a href="#kontak" className="bg-sky-500 text-white px-4 md:px-8 py-3 rounded-lg hover:bg-sky-600 transition">
                Hubungi Kami
              </a>
              <a href="#layanan" className="border-2 border-sky-500 text-sky-500 px-4 md:px-8 py-3 rounded-lg hover:bg-sky-50 transition">
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* Gambar hanya tampil di mode Desktop */}
          <div data-aos="fade-left" className="hidden md:flex justify-end">
            <Image className="rounded-lg shadow-xl" src={'/bg-hero.webp'} alt="modern laptop repair technician working on computer components, professional setting, sky accent lighting, high quality" width={400} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
