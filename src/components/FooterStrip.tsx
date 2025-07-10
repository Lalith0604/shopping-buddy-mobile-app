
import React from 'react';
import { cn } from '../lib/utils';
import { typography } from '../theme/styles';

const FooterStrip: React.FC = () => {
  return (
    <div className="px-4 py-6 bg-muted/30 border-t border-border mt-8">
      <div className="flex flex-wrap justify-center space-x-6 mb-3">
        <button className={cn(typography.muted, 'hover:text-foreground')}>
          Terms & Privacy
        </button>
        <button className={cn(typography.muted, 'hover:text-foreground')}>
          Contact Us
        </button>
      </div>
      <div className="text-center">
        <span className={cn(typography.caption)}>
          App version: v1.0.0
        </span>
      </div>
    </div>
  );
};

export default FooterStrip;
