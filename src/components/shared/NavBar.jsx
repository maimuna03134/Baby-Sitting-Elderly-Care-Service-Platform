"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, User, LogOut } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Mock user - Replace with actual auth
  const user = null; // { name: 'John Doe', email: 'john@example.com' }

  const services = [
    { name: "Baby Care", href: "/services/baby-care" },
    { name: "Elderly Care", href: "/services/elderly-care" },
    { name: "Sick People Care", href: "/services/sick-people-care" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">Care</span>
            <span className="text-2xl font-bold text-gray-800">Nest</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition"
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/aboutUs"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
            >
              About Us
            </Link>

            <Link
              href="/contactUs"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
            >
              Contact Us
            </Link>

            {user && (
              <Link
                href="/my-bookings"
                className="text-gray-700 hover:text-orange-500 font-medium transition"
              >
                My Bookings
              </Link>
            )}
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <User className="w-5 h-5 text-orange-500" />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <button className="p-2 text-gray-600 hover:text-red-500 transition">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <Link
              href="/"
              className="block text-gray-700 hover:text-orange-500 font-medium"
            >
              Home
            </Link>

            <div className="space-y-2">
              <p className="text-gray-700 font-medium">Services</p>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-gray-600 hover:text-orange-500"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="block text-gray-700 hover:text-orange-500 font-medium"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="block text-gray-700 hover:text-orange-500 font-medium"
            >
              Contact Us
            </Link>

            {user && (
              <Link
                href="/my-bookings"
                className="block text-gray-700 hover:text-orange-500 font-medium"
              >
                My Bookings
              </Link>
            )}

            <div className="pt-4 border-t space-y-2">
              {user ? (
                <>
                  <div className="flex items-center gap-2 text-gray-700">
                    <User className="w-5 h-5" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block w-full text-center py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block w-full text-center py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
