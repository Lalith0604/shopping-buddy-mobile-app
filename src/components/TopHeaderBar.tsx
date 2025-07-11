
import React from 'react';
import { cn } from '../lib/utils';
import { typography } from '../theme/styles';

const TopHeaderBar: React.FC = () => {
  return (
    <div className="bg-muted/20 border-b border-border px-4 py-2 flex flex-wrap justify-center items-center space-x-6 text-center">
      <button className={cn(typography.muted, 'hover:text-foreground text-xs')}>
        Terms & Conditions
      </button>
      <span className="text-muted-foreground text-xs">|</span>
      <button className={cn(typography.muted, 'hover:text-foreground text-xs')}>
        Privacy Policy
      </button>
      <span className="text-muted-foreground text-xs">|</span>
      <button className={cn(typography.muted, 'hover:text-foreground text-xs')}>
        Support
      </button>
      <span className="text-muted-foreground text-xs">|</span>
      <span className={cn(typography.muted, 'text-xs')}>
        App version: v1.0.0
      </span>
    </div>
  );
};

export default TopHeaderBar;
