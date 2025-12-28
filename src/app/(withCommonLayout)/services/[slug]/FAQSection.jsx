"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = ({ title, faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <section>
      <h2 className="text-3xl text-[#1d3e51] font-bold mb-6">
        Essential Answers For {title}
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-lg text-[#1d3e51] shadow">
            <button
              onClick={() =>
                setOpenFaqIndex(openFaqIndex === i ? null : i)
              }
              className="w-full flex justify-between p-6 text-left"
            >
              <span className="font-semibold text-[#1d3e51]">{faq.question}</span>
              <ChevronDown
                className={`transition ${
                  openFaqIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {openFaqIndex === i && (
              <div className="px-6 text-[#1d3e51] pb-6 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
