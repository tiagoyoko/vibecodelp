import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
}) => {
  const variants = {
    default: 'bg-white rounded-lg',
    bordered: 'bg-white border border-gray-200 rounded-lg',
    elevated: 'bg-white shadow-lg rounded-lg',
    ghost: 'bg-transparent',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={cn(variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
};

export { Card };

