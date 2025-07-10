
import React from 'react';
import { createCardClass } from '../../theme/styles';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  padded?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  padded = true,
  className,
}) => {
  return (
    <div className={cn(createCardClass(padded), className)}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)}>
      {children}
    </h3>
  );
};

export const CardContent: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  );
};
