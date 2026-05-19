
import React from 'react';
import { Send, Home, Repeat, Clock, BarChart } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-card text-foreground p-4 border-t border-border flex items-center justify-around">
      <div className="flex flex-col items-center">
        <Home />
        <p className="text-sm">Home</p>
      </div>
      <div className="flex flex-col items-center">
        <Send />
        <p className="text-sm">Send</p>
      </div>
      <div className="flex flex-col items-center">
        <Repeat />
        <p className="text-sm">Swap</p>
      </div>
      <div className="flex flex-col items-center">
        <Clock />
        <p className="text-sm">History</p>
      </div>
      <div className="flex flex-col items-center">
        <BarChart />
        <p className="text-sm">Chart</p>
      </div>
    </div>
  );
};

export default Footer;
