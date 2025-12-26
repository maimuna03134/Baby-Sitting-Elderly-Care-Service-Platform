"use client";

import { Heart, Shield, Clock, Users } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Compassionate Care",
      description:
        "We treat every family member with love, respect, and dignity they deserve.",
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Trusted & Verified",
      description:
        "All our caretakers are background-checked and professionally trained.",
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "24/7 Availability",
      description:
        "Round-the-clock support whenever your family needs care and assistance.",
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Experienced Team",
      description:
        "Years of expertise in providing quality care for all age groups.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About CareNest
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Making caregiving easy, secure, and accessible for every family
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At CareNest, we understand that your family wellbeing is your top
              priority. That why we have built a platform that connects you with
              trusted, professional caretakers who share your values.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Whether you need someone to look after your children, provide
              companionship for elderly parents, or assist with medical care, we
              are here to help you find the perfect match for your family unique
              needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is simple: to give you peace of mind knowing your loved
              ones are in safe, caring hands.
            </p>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600"
              alt="Caring for family"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-linear-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-sm opacity-90">Verified Caretakers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10K+</p>
              <p className="text-sm opacity-90">Happy Families</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-sm opacity-90">Customer Support</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.9★</p>
              <p className="text-sm opacity-90">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Find the Perfect Caretaker?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of families who trust CareNest for their loved ones
          wellbeing
        </p>
        <button className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-semibold transition">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
