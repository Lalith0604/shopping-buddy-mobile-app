
import React from 'react';
import { Bell, ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';
import { typography } from '../theme/styles';

const HomeHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-background border-b border-border">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">SC</span>
        </div>
        <span className={cn(typography.h6, 'text-primary')}>SmartCart</span>
      </div>

      {/* User Greeting */}
      <div className="flex-1 text-center">
        <span className={cn(typography.bodySmall, 'text-muted-foreground')}>
          Hi, <span className="font-medium text-foreground">John</span>
        </span>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-3">
        {/* Notification Bell */}
        <div className="relative">
          <Bell className="w-6 h-6 text-muted-foreground hover:text-foreground cursor-pointer" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></div>
        </div>
        
        {/* Cart Count */}
        <div className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-lg">
          <ShoppingCart className="w-4 h-4 text-primary" />
          <span className={cn(typography.bodySmall, 'text-primary font-medium')}>3</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
