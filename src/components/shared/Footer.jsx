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
  Heart,
} from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1b3a4c] text-gray-300">
      <Container className={"px-4 sm:px-6 lg:px-8 py-12"}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Link href="/" className="flex items-center ">
                <span className="text-2xl font-bold text-[#0a9bea]">Care</span>
                <span className="relative text-2xl font-bold text-white">
                  Nest
                  <Heart className="absolute -top-1 -right-3 h-4 w-4 text-[#c46934]" />
                </span>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Providing reliable and trusted care services for your loved ones.
              Your family comfort and safety is our priority.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-[#0a9bea] transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-[#0a9bea] transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-[#0a9bea] transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-[#0a9bea] transition"
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
                <Link href="/" className="hover:text-[#3590c5] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#3590c5] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#3590c5] transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#3590c5] transition"
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
                  className="hover:text-[#3590c5] transition"
                >
                  Baby Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/elderly-care"
                  className="hover:text-[#3590c5] transition"
                >
                  Elderly Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sick-people-care"
                  className="hover:text-[#3590c5] transition"
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
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <span className="text-sm">
                  123 Care Street, Dhaka-1212, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-sm">+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
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
            <Link href="/privacy" className="hover:text-[#3590c5] transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#3590c5] transition">
              Terms of Service
            </Link>
            <Link href="/faq" className="hover:text-[#3590c5] transition">
              FAQ
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
