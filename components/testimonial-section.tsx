'use client';
import { useEffect } from 'react';
import AOS from 'aos';

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section id="testimonial" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="testimonial-1" data-aos="fade-right" data-aos-duration="400" className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">Budi Santoso</h4>
                <p className="text-gray-600">Pengusaha</p>
              </div>
            </div>
            <p className="text-gray-600">"Pelayanan sangat profesional dan cepat. Laptop saya kembali seperti baru!"</p>
            <div className="mt-4 text-orange-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div id="testimonial-2" data-aos="fade-right" data-aos-duration="600" className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">Dewi Pratiwi</h4>
                <p className="text-gray-600">Mahasiswa</p>
              </div>
            </div>
            <p className="text-gray-600">"Upgrade RAM dan SSD membuat laptop saya jadi super cepat. Terima kasih!"</p>
            <div className="mt-4 text-orange-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
          <div id="testimonial-3" data-aos="fade-right" data-aos-duration="800" className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-gray-800">Ahmad Ridwan</h4>
                <p className="text-gray-600">Guru</p>
              </div>
            </div>
            <p className="text-gray-600">"Harga terjangkau dengan kualitas service yang sangat memuaskan!"</p>
            <div className="mt-4 text-orange-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
