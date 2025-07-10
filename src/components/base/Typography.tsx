
import React from 'react';
import { typography } from '../../theme/styles';
import { cn } from '../../lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn(typography.h1, className)}>{children}</h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn(typography.h2, className)}>{children}</h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn(typography.h3, className)}>{children}</h3>
);

export const H4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={cn(typography.h4, className)}>{children}</h4>
);

export const Body: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(typography.body, className)}>{children}</p>
);

export const BodyLarge: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(typography.bodyLarge, className)}>{children}</p>
);

export const BodySmall: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(typography.bodySmall, className)}>{children}</p>
);

export const Lead: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(typography.lead, className)}>{children}</p>
);

export const Muted: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(typography.muted, className)}>{children}</p>
);

export const Caption: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={cn(typography.caption, className)}>{children}</span>
);
