'use client';

import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  className,
}) => {
  return (
    <Section
      padding="xl"
      className={cn(
        'relative min-h-screen flex items-center justify-center text-center',
        backgroundImage && 'bg-cover bg-center bg-no-repeat',
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Overlay para melhor legibilidade */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {subtitle && (
          <p className="text-sm md:text-base font-medium text-primary mb-4 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryCTA && (
            <Button
              size="lg"
              variant="primary"
              onClick={primaryCTA.onClick}
              className="w-full sm:w-auto"
            >
              {primaryCTA.text}
            </Button>
          )}
          
          {secondaryCTA && (
            <Button
              size="lg"
              variant="outline"
              onClick={secondaryCTA.onClick}
              className="w-full sm:w-auto"
            >
              {secondaryCTA.text}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
};

export { HeroSection };

