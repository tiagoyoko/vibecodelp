import React from 'react';
import { Container } from '../ui/Container';
import { cn } from '@/lib/utils';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  logo?: {
    src?: string;
    text?: string;
  };
  description?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  bottomText?: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  logo,
  description,
  sections = [],
  socialLinks = [],
  bottomText,
  className,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-gray-900 text-white', className)}>
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              {logo && (
                <div className="flex items-center space-x-2 mb-4">
                  {logo.src && (
                    <img
                      src={logo.src}
                      alt={logo.text || 'Logo'}
                      className="h-8 w-auto"
                    />
                  )}
                  {logo.text && (
                    <span className="text-xl font-bold">
                      {logo.text}
                    </span>
                  )}
                </div>
              )}
              
              {description && (
                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  {description}
                </p>
              )}

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                      aria-label={social.platform}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Sections */}
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {bottomText || `© ${currentYear} Todos os direitos reservados.`}
            </p>
            
            {/* Additional Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/politica-de-privacidade"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="/termos-de-uso"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };

