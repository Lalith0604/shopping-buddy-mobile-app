
import React from 'react';
import { layouts, typography } from '../theme/styles';
import { cn } from '../lib/utils';

interface ScreenPlaceholderProps {
  title: string;
  subtitle?: string;
  icon?: string;
  className?: string;
}

const ScreenPlaceholder: React.FC<ScreenPlaceholderProps> = ({ 
  title, 
  subtitle, 
  icon = '📱',
  className 
}) => {
  return (
    <div className={cn(layouts.screenContainer, layouts.centeredColumn, 'px-4', className)}>
      <div className="text-center space-y-4 max-w-md mx-auto">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-white text-2xl font-bold">{icon}</span>
        </div>
        
        {/* Title */}
        <h1 className={cn(typography.h2, 'text-foreground mb-2')}>
          {title}
        </h1>
        
        {/* Subtitle */}
        {subtitle && (
          <p className={cn(typography.lead, 'max-w-md mx-auto')}>
            {subtitle}
          </p>
        )}
        
        {/* App branding */}
        <div className="mt-8">
          <p className={cn(typography.muted)}>
            Smart Shopping Cart System
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreenPlaceholder;
