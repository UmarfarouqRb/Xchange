
import React from 'react';
import ChatBubble from '../components/chat/ChatBubble';
import { Repeat, Send, Banknote, PieChart, MoreHorizontal } from 'lucide-react';

const HomePage = () => {
  const options = [
    { icon: <Repeat size={24} />, title: 'Swap', subtitle: 'Swap crypto instantly' },
    { icon: <Send size={24} />, title: 'Send', subtitle: 'Send money to anyone' },
    { icon: <Banknote size={24} />, title: 'Deposit', subtitle: 'Top up your balance' },
    { icon: <PieChart size={24} />, title: 'Portfolio', subtitle: 'View your balances' },
    { icon: <MoreHorizontal size={24} />, title: 'More', subtitle: 'Explore all features' },
  ];

  const swapPreview = {
    from: '500 USDC',
    to: '0.00482 BTC',
    rate: '1 USDC = 0.00000964 BTC',
    route: 'Xchange LP + Uniswap v3',
    fee: '0.15% (0.75 USDC)',
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        <ChatBubble isSender={false} type="welcome" />
        <ChatBubble isSender={false} type="options" options={options} />
        <ChatBubble isSender={true} message="Swap 500 USDC to BTC" />
        <ChatBubble isSender={false} type="swap-preview" swapPreview={swapPreview} />
        <ChatBubble isSender={false} type="chart" />
      </div>
    </div>
  );
};

export default HomePage;
