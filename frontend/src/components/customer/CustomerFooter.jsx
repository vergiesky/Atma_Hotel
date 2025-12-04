import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function CustomerFooter() {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white mt-16 border-t border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <img src="/images/logo.png" alt="Hotello" className="w-8 h-8" />
              </div>
              <span className="font-bold text-xl text-white">Hotello</span>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Platform pemesanan hotel terpercaya untuk pengalaman menginap yang tak terlupakan di
              seluruh Indonesia.
            </p>
            {/* social media */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-blue-500/50 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-blue-500/50 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-blue-500/50 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* perusahaan */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Perusahaan</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-sm text-blue-100 hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* bantuan */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Bantuan</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-blue-100 hover:text-white transition">
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-100 hover:text-white transition">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-blue-100 hover:text-white transition">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-blue-100 hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* hubungi Kami */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-white">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-blue-100">
                <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-100">
                <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>support@hotello.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-blue-100">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>Yogyakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-blue-100">&copy; {new Date().getFullYear()} Hotello. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
