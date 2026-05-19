
import React from 'react';
import { ArrowLeft, Video, Phone, MoreVertical } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-card text-foreground p-4 border-b border-border flex items-center justify-between">
      <div className="flex items-center">
        <ArrowLeft className="mr-4" />
        <div className="w-8 h-8 bg-primary rounded-full mr-3"></div>
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
