import { Instagram } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div id="footer-about">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">Putra Mandiri Mediacom</span>
            </div>
            <p className="text-gray-400">Solusi terpercaya untuk segala kebutuhan laptop Anda</p>
          </div>
          <div id="footer-links">
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="text-gray-400 hover:text-sky-500">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#layanan" className="text-gray-400 hover:text-sky-500">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#testimonial" className="text-gray-400 hover:text-sky-500">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-gray-400 hover:text-sky-500">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div id="footer-services">
            <h4 className="text-lg font-bold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 hover:text-sky-500 cursor-pointer">Perbaikan Laptop</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-sky-500 cursor-pointer">Upgrade Komponen</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-sky-500 cursor-pointer">Jual Beli Laptop</span>
              </li>
            </ul>
          </div>
          <div id="footer-social">
            <h4 className="text-lg font-bold mb-4">Sosial Media</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/putramandiri_mediacom?igsh=eDQ5bG9qbjFvNzNy" target="_blank" className="text-gray-400 hover:text-sky-500 text-2xl">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/6283150269754?text=Halo, saya ingin memperbaiki Laptop saya" target="_blank" className="text-gray-400 hover:text-sky-500 text-lg">
                Whatsaap
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Created by Almadhani Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
