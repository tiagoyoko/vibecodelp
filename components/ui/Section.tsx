import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'white' | 'gray' | 'dark';
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerSize = 'lg',
  padding = 'lg',
  background = 'transparent',
  id,
}) => {
  const paddings = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-24',
  };

  const backgrounds = {
    transparent: '',
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
  };

  return (
    <section 
      id={id}
      className={cn(paddings[padding], backgrounds[background], className)}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export { Section };

