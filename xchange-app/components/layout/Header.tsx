
import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Video, Phone, MoreVertical } from 'lucide-react';
import xchangeLogo from '@/public/Xchange dark.png'; // Importing the logo

const Header = () => {
  return (
    <div className="bg-card text-foreground p-4 border-b border-border flex items-center justify-between">
      <div className="flex items-center">
        <ArrowLeft className="mr-4" />
        {/* Replacing the placeholder div with the Image component */}
        <Image
          src={xchangeLogo}
          alt="Xchange Logo"
          width={50} // Corresponds to w-8
          height={50} // Corresponds to h-8
          className="mr-3"
        />
        <div>
          <h1 className="text-lg font-bold">Xchange</h1>
          <p className="text-sm text-muted-foreground">Business Account</p>
        </div>
      </div>
      <div className="flex items-center">
        <Video className="mr-4" />
        <Phone className="mr-4" />
        <MoreVertical />
      </div>
    </div>
  );
};

export default Header;
