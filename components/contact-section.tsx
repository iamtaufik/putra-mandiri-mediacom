import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Hubungi Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin size={24} className="text-orange-500 mr-2" />
                <p className="text-gray-600">Jl. Raya Contoh No. 123, Jakarta</p>
              </div>
              <div className="flex items-center">
                <Phone size={24} className="text-orange-500 mr-2" />
                <p className="text-gray-600">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail size={24} className="text-orange-500 mr-2" />
                <p className="text-gray-600">info@putramandiri.com</p>
              </div>
              <div className="flex items-center">
                <Clock size={24} className="text-orange-500 mr-2" />
                <p className="text-gray-600">Senin - Sabtu: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div id="contact-info" className="">
            <div id="map" className="h-[300px] bg-gray-200 rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.8169080471609!2d110.50685449750405!3d-8.046753179362007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7baf001aa54f83%3A0x35ff5b7e2b2c0154!2sPUTRA%20MANDIRI%20MEDIACOM!5e0!3m2!1sid!2sid!4v1741416943693!5m2!1sid!2sid"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
