"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-orange-500">Care</span>
              <span className="text-2xl font-bold text-white">Nest</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Providing reliable and trusted care services for your loved ones.
              Your family comfort and safety is our priority.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-orange-500 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/baby-care"
                  className="hover:text-orange-500 transition"
                >
                  Baby Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/elderly-care"
                  className="hover:text-orange-500 transition"
                >
                  Elderly Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sick-people-care"
                  className="hover:text-orange-500 transition"
                >
                  Sick People Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  123 Care Street, Dhaka-1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">contact@CareNest</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white text-sm font-semibold mb-2">
                Working Hours
              </h4>
              <p className="text-sm text-gray-400">24/7 Available</p>
              <p className="text-sm text-gray-400">Emergency Support Always</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} CareNest. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-orange-500 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-500 transition">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-orange-500 transition">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
