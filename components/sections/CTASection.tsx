'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    onClick?: () => void;
  };
  showEmailCapture?: boolean;
  showPhoneCapture?: boolean;
  background?: 'primary' | 'dark' | 'gradient';
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  showEmailCapture = false,
  showPhoneCapture = false,
  background = 'primary',
  className,
}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aqui você pode implementar a lógica de envio
    console.log('Form submitted:', { email, phone });
    
    // Simular delay de envio
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form ou mostrar mensagem de sucesso
    }, 1000);
  };

  const backgroundStyles = {
    primary: 'bg-primary text-white',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-r from-primary to-primary-dark text-white',
  };

  return (
    <Section
      id="cta"
      padding="xl"
      className={cn(backgroundStyles[background], className)}
    >
      <div className="text-center max-w-4xl mx-auto">
        {subtitle && (
          <p className="text-sm md:text-base font-medium mb-4 uppercase tracking-wider opacity-90">
            {subtitle}
          </p>
        )}
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
            {description}
          </p>
        )}

        {/* Form de captura */}
        {(showEmailCapture || showPhoneCapture) && (
          <Card
            variant="elevated"
            padding="lg"
            className="max-w-md mx-auto mb-8 text-gray-900"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {showEmailCapture && (
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              )}
              
              {showPhoneCapture && (
                <Input
                  type="tel"
                  placeholder="Seu WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              )}
              
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Quero Começar Agora'}
              </Button>
            </form>
          </Card>
        )}

        {/* CTAs tradicionais */}
        {!showEmailCapture && !showPhoneCapture && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Button
                size="lg"
                variant="secondary"
                onClick={primaryCTA.onClick}
                className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100"
              >
                {primaryCTA.text}
              </Button>
            )}
            
            {secondaryCTA && (
              <Button
                size="lg"
                variant="outline"
                onClick={secondaryCTA.onClick}
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </Section>
  );
};

export { CTASection };

