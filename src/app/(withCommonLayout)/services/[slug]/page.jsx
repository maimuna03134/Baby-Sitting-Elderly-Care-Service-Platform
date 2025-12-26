import { Check, ChevronDown, FileImage, Mail, Phone, Star, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const serviceDetailsPage = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-slate-700 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center text-sm">
          <Link href="/" className="hover:text-rose-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-rose-300">Baby Care</span>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Baby Care</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Baby Care service provides expert care for your little ones,
                ensuring they feel loved, entertained, safe, and engaged
                throughout their day. Our caregivers are trained professionals
                who understand child development and create a nurturing
                environment for your baby.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white rounded-lg shadow p-8">
                    <FileImage className="h-16 w-16 text-gray-300 mx-auto mb-2" />
                    <p className="text-center text-sm text-gray-500">
                      Professional Care Image
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                What is Included
              </h2>
              <p className="text-gray-600 mb-6">
                Comprehensive support to ensure highest quality care.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <p>Certified and background-checked caregivers</p>
                {/* {service.features.map((f, i) => (
                  <div key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))} */}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <p className="text-black">Baby playing with caregiver</p>
                {/* {service.gallery.map((item, i) => (
                  <div key={i} className="bg-white rounded-lg shadow p-8">
                    <FileImage className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-center text-gray-600">{item}</p>
                  </div>
                ))} */}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Client Stories
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  The caregivers treat my child with such love and patience
                  every day. Their support brings our family incredible peace of
                  mind
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Ayesha Rahman
                    </div>
                    <div className="text-sm text-gray-500">
                      Mother of 18-month-old
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Essential Answers For Baby Care
              </h2>
              <div className="space-y-4 text-black">
                <p>What age groups do you provide care for?</p>
                {/* {service.faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-lg shadow">
                    <button
                      onClick={() =>
                        setOpenFaqIndex(openFaqIndex === i ? null : i)
                      }
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-gray-800">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transition ${
                          openFaqIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaqIndex === i && (
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))} */}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-800 text-white rounded-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Baby Care</h3>
              <p className="text-gray-300 mb-6">
                Expert care with 24/7 support for your loved ones.
              </p>
              <div className="space-y-3 mb-6">
                {["English", "Support", "Training"].map((f) => (
                  <div key={f} className="flex items-center text-sm">
                    <Check className="h-4 w-4 mr-2" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">$ 400</div>
                <div className="text-gray-300 text-sm">Per Hour</div>
              </div>
              <button
                // onClick={handleBookService}
                className="w-full bg-rose-500 text-white py-4 rounded-lg font-semibold hover:bg-rose-600 transition mb-4"
              >
                Choose Service
              </button>
              <div className="border-t border-gray-600 pt-6">
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 mr-3" />
                  <span className="text-sm">+880 1234-567890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span className="text-sm">hello@care.xyz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-500 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Receive Helpful Care Tips Weekly
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviceDetailsPage;
