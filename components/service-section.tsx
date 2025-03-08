'use client';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section id="layanan" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="service-repair" data-aos="fade-up" data-aos-duration="400" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="mb-4 text-orange-500 text-4xl">
              <Image className="w-full rounded-lg" src={'/service-laptop.webp'} alt="Perbaiki Laptop" width={200} height={200} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Perbaikan Laptop</h3>
            <p className="text-gray-600 mb-4">Menangani berbagai masalah laptop dengan teknisi berpengalaman dan spare part berkualitas</p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Perbaikan Hardware
              </li>
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Perbaikan Software
              </li>
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Pembersihan Laptop
              </li>
            </ul>
          </div>
          <div id="service-upgrade" data-aos="fade-up" data-aos-duration="800" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="mb-4 text-orange-500 text-4xl">
              <Image className="w-full rounded-lg" src={'/upgrade-laptop.webp'} alt="Upgrade Komponen Laptop" width={200} height={200} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Upgrade Komponen</h3>
            <p className="text-gray-600 mb-4">Tingkatkan performa laptop Anda dengan komponen terbaru dan berkualitas</p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Upgrade RAM
              </li>
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Upgrade SSD
              </li>
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Upgrade Baterai
              </li>
            </ul>
          </div>
          <div id="service-trade" data-aos="fade-up" data-aos-duration="1200" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="mb-4 text-orange-500 text-4xl">
              <Image className="w-full rounded-lg" src={'/selling.webp'} alt="Jual/Beli Laptop" width={200} height={200} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Jual Beli Laptop</h3>
            <p className="text-gray-600 mb-4">Dapatkan laptop baru atau jual laptop lama Anda dengan harga terbaik</p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Laptop Baru
              </li>
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Laptop Second
              </li>
              <li>
                <Check className="text-orange-500 inline-block mr-1" />
                Trade-in
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
