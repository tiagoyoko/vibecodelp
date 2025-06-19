'use client';

import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface HeaderProps {
  logo?: {
    src?: string;
    text?: string;
    href?: string;
  };
  navigation?: NavItem[];
  cta?: {
    text: string;
    onClick?: () => void;
  };
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  navigation = [],
  cta,
  className,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent',
        className
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            {logo && (
              <a
                href={logo.href || '#'}
                className="flex items-center space-x-2"
                onClick={(e) => {
                  if (logo.href?.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(logo.href);
                  }
                }}
              >
                {logo.src && (
                  <img
                    src={logo.src}
                    alt={logo.text || 'Logo'}
                    className="h-8 w-auto"
                  />
                )}
                {logo.text && (
                  <span className={cn(
                    'text-xl font-bold',
                    isScrolled ? 'text-gray-900' : 'text-white'
                  )}>
                    {logo.text}
                  </span>
                )}
              </a>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                  item.onClick?.();
                }}
                className={cn(
                  'font-medium transition-colors duration-200 hover:text-primary',
                  isScrolled ? 'text-gray-700' : 'text-white'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            {cta && (
              <Button
                variant={isScrolled ? 'primary' : 'outline'}
                onClick={cta.onClick}
                className={!isScrolled ? 'border-white text-white hover:bg-white hover:text-primary' : ''}
              >
                {cta.text}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-md transition-colors duration-200',
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            )}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                    item.onClick?.();
                  }}
                  className="text-gray-700 font-medium hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              {cta && (
                <Button
                  variant="primary"
                  onClick={() => {
                    cta.onClick?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full"
                >
                  {cta.text}
                </Button>
              )}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export { Header };

