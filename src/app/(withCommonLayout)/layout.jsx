import Footer from '@/components/shared/Footer';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const layout = ({children}) => {
    return (
      <div>
        <NavBar />
        <div className="min-h-[90vh]">{children}</div>
        
        <Footer />
      </div>
    );
};

export default layout;