import Footer from '@/components/shared/Footer';
import Hero from '@/components/shared/Hero';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <NavBar />
            <Hero/>
            {children}
           <Footer/> 
        </div>
    );
};

export default layout;