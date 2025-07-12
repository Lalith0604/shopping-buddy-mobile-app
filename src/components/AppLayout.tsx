
import React from 'react';
import { layouts } from '../theme/styles';
import { cn } from '../lib/utils';
import CartPanel from './CartPanel';
import FooterBar from './FooterBar';

interface AppLayoutProps {
  children: React.ReactNode;
  showCart?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, showCart = true }) => {
  if (!showCart) {
    // Full screen layout for Welcome/OTP screens
    return (
      <div className={cn(layouts.screenContainer, 'flex flex-col')}>
        <div className="flex-1">
          {children}
        </div>
        <FooterBar />
      </div>
    );
  }

  // Split layout for main app screens
  return (
    <div className={cn(layouts.screenContainer, 'flex flex-col')}>
      {/* Main content area with cart split */}
      <div className="flex-1 flex flex-row overflow-hidden">
        {/* Main content area - 70% */}
        <div className="flex-1 w-[70%] overflow-auto">
          {children}
        </div>
        
        {/* Cart panel - 30% */}
        <div className="w-[30%] min-w-[320px] max-w-[400px]">
          <CartPanel />
        </div>
      </div>
      
      {/* Fixed Footer Bar */}
      <FooterBar />
    </div>
  );
};

export default AppLayout;
