import { servicesData } from '@/data/services';
import { Container } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({service}) => {
const { color, title, shortDescription, charge } = service || {};

    return (
    
          
   
        <Link href={`/services/${service.id}`}
            
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition hover:scale-105 cursor-pointer"
            >
              <div
                className={`${color} rounded-full w-16 h-16 flex items-center justify-center mb-4`}
              >
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-600 mb-4">{shortDescription}</p>
              <div className="text-[#338dc1] font-semibold text-lg mb-4">
                ${charge}/hour
              </div>
              <button className="text-[#1d3e51] hover:text-[#338dc1] font-semibold ">
                Learn More →
              </button>
            </Link>
          
    );
};

export default ServiceCard;




