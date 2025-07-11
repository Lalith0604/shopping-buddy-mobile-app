
import React from 'react';
import { cn } from '../lib/utils';
import { typography } from '../theme/styles';

const FooterBar: React.FC = () => {
  return (
    <div className="bg-muted/30 border-t border-border px-4 py-3 flex flex-wrap justify-center items-center space-x-6">
      <button className={cn(typography.muted, 'hover:text-foreground text-xs')}>
        Terms & Conditions
      </button>
      <button className={cn(typography.muted, 'hover:text-foreground text-xs')}>
        Privacy Policy
      </button>
      <button className={cn(typography.muted, 'hover:text-foreground text-xs')}>
        Support
      </button>
      <span className={cn(typography.muted, 'text-xs')}>
        App version: v1.0.0
      </span>
    </div>
  );
};

export default FooterBar;
