import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { cn } from '@/lib/utils';

interface Benefit {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  subtitle,
  benefits,
  columns = 3,
  className,
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <Section id="beneficios" background="gray" className={className}>
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

      <div className={cn('grid gap-8', gridCols[columns])}>
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            variant="elevated"
            padding="lg"
            className="text-center hover:shadow-xl transition-shadow duration-300"
          >
            {benefit.icon && (
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full text-primary">
                  {benefit.icon}
                </div>
              </div>
            )}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export { BenefitsSection };

