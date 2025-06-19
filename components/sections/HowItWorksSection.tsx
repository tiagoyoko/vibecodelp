import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { cn } from '@/lib/utils';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HowItWorksSectionProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
  layout?: 'vertical' | 'horizontal';
  className?: string;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  title,
  subtitle,
  steps,
  layout = 'horizontal',
  className,
}) => {
  return (
    <Section id="como-funciona" background="gray" className={className}>
      <div className="text-center mb-12">
        {subtitle && (
          <p className="text-sm md:text-base font-medium text-primary mb-4 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
        )}
      </div>

      <div className={cn(
        'grid gap-8',
        layout === 'horizontal' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1 max-w-3xl mx-auto'
      )}>
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <Card
              variant="elevated"
              padding="lg"
              className="text-center hover:shadow-xl transition-shadow duration-300 h-full"
            >
              {/* Número do passo */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Ícone opcional */}
              {step.icon && (
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </Card>

            {/* Seta conectora (apenas para layout horizontal) */}
            {layout === 'horizontal' && index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 text-primary">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-full h-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export { HowItWorksSection };

