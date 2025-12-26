import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardSidebar = () => {
    return (
      <div className="w-50 bg-purple-200 h-screen text-black px-3 py-4 fixed top-0 left-0">
        <Link href="/" className="flex items-center ">
          <span className="text-2xl font-bold text-[#2e6b8c]">Care</span>
          <span className="relative text-2xl font-bold text-[#284251]">
            Nest
            <Heart className="absolute -top-1 -right-3 h-4 w-4 text-[#c46934]" />
          </span>
        </Link>

        <div className="flex flex-col gap-2 mt-5">
          <Link href={"/dashboard/profile"}>Profile</Link>
          <Link href={"/dashboard/my-bookings"}>My Bookings</Link>
        </div>
      </div>
    );
};

export default DashboardSidebar;