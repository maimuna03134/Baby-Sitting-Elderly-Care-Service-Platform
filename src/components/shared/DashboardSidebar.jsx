import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
        <div className='w-50 bg-purple-200 h-screen text-black px-3 py-4 fixed top-0 left-0'>
            <h2>CareNest</h2> 
            
            <div className='flex flex-col gap-2 mt-5'>
                <Link href={'/dashboard/profile'}>Profile</Link>
                <Link href={'/dashboard/my-bookings'}>My Bookings</Link>
            </div>
        </div>
    );
};

export default DashboardSidebar;