'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { cn } from '@/lib/utils';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  subtitle,
  faqs,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" background="white" className={className}>
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

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            variant="bordered"
            padding="none"
            className="overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <span
                className={cn(
                  'text-primary text-xl font-bold transition-transform duration-200',
                  openIndex === index ? 'rotate-45' : 'rotate-0'
                )}
              >
                +
              </span>
            </button>
            
            <div
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export { FAQSection };

