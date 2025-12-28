
import React from 'react';
import ServiceCard from './_components/ServiceCard';
import { servicesData } from '@/data/services';
import Container from '@/components/shared/Container';


const ServicesPage = () => {
  return (
    <Container className={'px-4 py-16'}>
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Care Services
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Container>
  );
};

export default ServicesPage;