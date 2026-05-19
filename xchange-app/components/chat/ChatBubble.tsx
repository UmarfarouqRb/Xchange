
import React from 'react';
import { Button } from '../ui/button';
import TradingViewChart from './TradingViewChart';

interface ChatBubbleProps {
  message?: string;
  isSender: boolean;
  type?: 'welcome' | 'options' | 'swap-preview' | 'text' | 'chart';
  options?: { icon: React.ReactNode; title: string; subtitle: string }[];
  swapPreview?: {
    from: string;
    to: string;
    rate: string;
    route: string;
    fee: string;
  };
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isSender, type = 'text', options, swapPreview }) => {
  const bubbleClasses = isSender
    ? 'ml-auto bg-primary text-white rounded-2xl px-4 py-3 max-w-[80%]'
    : type === 'swap-preview' || type === 'welcome' || type === 'options'
    ? 'bg-white text-black rounded-2xl px-4 py-3 max-w-[80%]'
    : 'bg-card text-white rounded-2xl px-4 py-3 max-w-[80%]';

  const renderContent = () => {
    switch (type) {
      case 'welcome':
        return (
          <div>
            <p className="font-bold">Welcome to Xchange!</p>
            <p>Your financial world, now in WhatsApp.</p>
          </div>
        );
      case 'options':
        return (
          <div>
            {options?.map((option, index) => (
              <Button key={index} variant="ghost" className="w-full justify-start mb-2 last:mb-0">
                <div className="mr-4">{option.icon}</div>
                <div className="text-left">
                  <p className="font-bold">{option.title}</p>
                  <p>{option.subtitle}</p>
                </div>
              </Button>
            ))}
          </div>
        );
      case 'swap-preview':
        return (
          <div>
            <p className="font-bold">Swap Preview</p>
            <p>{swapPreview?.from} -&gt; {swapPreview?.to}</p>
            <p>Rate: {swapPreview?.rate}</p>
            <p>Route: {swapPreview?.route}</p>
            <p>Fee: {swapPreview?.fee}</p>
          </div>
        );
      case 'chart':
        return <TradingViewChart />;
      default:
        return message;
    }
  };

  return (
    <div className={`flex flex-col ${isSender ? 'items-end' : 'items-start'} mb-4`}>
      <div className={bubbleClasses}>
        {renderContent()}
      </div>
      {type === 'swap-preview' && (
        <div className="flex mt-2">
          <Button variant="success" className="mr-2">Confirm</Button>
          <Button variant="destructive">Cancel</Button>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
