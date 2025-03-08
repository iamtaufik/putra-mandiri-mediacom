import { BadgeCheck, BadgeCheckIcon, Clock, UserRoundCog, Wallet } from 'lucide-react';
import React from 'react';

const WhyusSection = () => {
  return (
    <section id="mengapa-kami" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mengapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="feature-1" data-aos="flip-left" data-aos-duration="400" className="text-center">
            <div className=" flex justify-center text-orange-500 mb-4">
              <UserRoundCog size={200} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Teknisi Ahli</h3>
            <p className="text-gray-600">Teknisi berpengalaman dan tersertifikasi</p>
          </div>
          <div id="feature-2" data-aos="flip-left" data-aos-duration="1000" className="text-center">
            <div className="flex justify-center text-orange-500 mb-4">
              <BadgeCheckIcon size={200} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bergaransi</h3>
            <p className="text-gray-600">Garansi service hingga 3 bulan</p>
          </div>
          <div id="feature-3" data-aos="flip-left" data-aos-duration="1600" className="text-center">
            <div className="flex justify-center text-orange-500 mb-4">
              <Wallet size={200} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Harga Bersaing</h3>
            <p className="text-gray-600">Biaya terjangkau dengan kualitas terbaik</p>
          </div>
          <div id="feature-4" data-aos="flip-left" data-aos-duration="2200" className="text-center">
            <div className="flex justify-center text-orange-500 mb-4">
              <Clock size={200} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pengerjaan Cepat</h3>
            <p className="text-gray-600">Estimasi waktu pengerjaan yang tepat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyusSection;
