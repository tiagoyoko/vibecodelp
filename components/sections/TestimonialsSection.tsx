import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  content: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  columns?: 1 | 2 | 3;
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
  columns = 3,
  className,
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={cn(
          'text-lg',
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        )}
      >
        ★
      </span>
    ));
  };

  return (
    <Section id="depoimentos" background="white" className={className}>
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
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            variant="bordered"
            padding="lg"
            className="hover:shadow-lg transition-shadow duration-300"
          >
            {testimonial.rating && (
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
            )}
            
            <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
              "{testimonial.content}"
            </blockquote>
            
            <div className="flex items-center">
              {testimonial.avatar && (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
              )}
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                {(testimonial.role || testimonial.company) && (
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                    {testimonial.role && testimonial.company && ' • '}
                    {testimonial.company}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export { TestimonialsSection };

