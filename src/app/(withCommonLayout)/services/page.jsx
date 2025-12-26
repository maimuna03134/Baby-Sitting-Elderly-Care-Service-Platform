"use client";
import Container from "@/components/shared/Container";
import { servicesData } from "@/data/services";
import React from "react";

const servicesPage = () => {
  return (
    <div id="services" className="bg-white py-16">
      <Container className={"px-4"}>
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition hover:scale-105 cursor-pointer"
              // onClick={() => {
              //   setSelectedService(service);
              //   setCurrentPage("service-detail");
              // }}
            >
              <div
                className={`${service.color} rounded-full w-16 h-16 flex items-center justify-center mb-4`}
              >
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-[#338dc1] font-semibold text-lg mb-4">
                ${service.charge}/hour
              </div>
              <button className="text-[#1d3e51] hover:text-[#338dc1] font-semibold ">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default servicesPage;
