'use client';

import React from 'react';
import {
  Header,
  Footer,
  HeroSection,
  BenefitsSection,
  TestimonialsSection,
  HowItWorksSection,
  CTASection,
  FAQSection,
} from '@/components';

// Dados de exemplo para demonstrar o uso dos componentes
const ExampleLandingPage = () => {
  // Configuração do Header
  const headerConfig = {
    logo: {
      text: 'Vibe Code',
      href: '#home',
    },
    navigation: [
      { label: 'Início', href: '#home' },
      { label: 'Benefícios', href: '#beneficios' },
      { label: 'Como Funciona', href: '#como-funciona' },
      { label: 'Depoimentos', href: '#depoimentos' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Começar Agora',
      onClick: () => console.log('CTA clicked'),
    },
  };

  // Dados dos benefícios
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Resultados Garantidos',
      description: 'Metodologia comprovada que gera resultados reais para seu negócio.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: 'Suporte Especializado',
      description: 'Equipe de especialistas disponível para te ajudar em cada etapa.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      title: 'Tecnologia Avançada',
      description: 'Ferramentas de última geração para maximizar seus resultados.',
    },
  ];

  // Dados dos depoimentos
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'CEO',
      company: 'Tech Solutions',
      content: 'Transformou completamente nosso negócio. Resultados incríveis em apenas 30 dias!',
      rating: 5,
    },
    {
      name: 'João Santos',
      role: 'Empreendedor',
      content: 'A melhor decisão que tomei para minha empresa. Recomendo para todos!',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Diretora de Marketing',
      company: 'Growth Co.',
      content: 'Suporte excepcional e resultados que superaram nossas expectativas.',
      rating: 5,
    },
  ];

  // Passos do "Como Funciona"
  const steps = [
    {
      number: 1,
      title: 'Análise Inicial',
      description: 'Analisamos seu negócio e identificamos as melhores oportunidades.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Estratégia Personalizada',
      description: 'Criamos uma estratégia única e personalizada para seus objetivos.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Implementação',
      description: 'Colocamos tudo em prática com acompanhamento constante.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  // FAQ
  const faqs = [
    {
      question: 'Como funciona o processo?',
      answer: 'Nosso processo é dividido em 3 etapas principais: análise inicial, criação de estratégia personalizada e implementação com acompanhamento constante.',
    },
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'Os primeiros resultados podem ser vistos em até 30 dias, mas resultados mais significativos geralmente aparecem entre 60-90 dias.',
    },
    {
      question: 'Vocês oferecem garantia?',
      answer: 'Sim, oferecemos garantia de satisfação. Se não ficar satisfeito nos primeiros 30 dias, devolvemos seu investimento.',
    },
    {
      question: 'Preciso ter conhecimento técnico?',
      answer: 'Não é necessário. Nossa equipe cuida de toda a parte técnica, você só precisa focar no seu negócio.',
    },
  ];

  // Footer
  const footerConfig = {
    logo: {
      text: 'Vibe Code',
    },
    description: 'Transformando negócios através de soluções digitais inovadoras.',
    sections: [
      {
        title: 'Empresa',
        links: [
          { label: 'Sobre Nós', href: '/sobre' },
          { label: 'Nosso Time', href: '/time' },
          { label: 'Carreiras', href: '/carreiras' },
        ],
      },
      {
        title: 'Serviços',
        links: [
          { label: 'Consultoria', href: '/consultoria' },
          { label: 'Desenvolvimento', href: '/desenvolvimento' },
          { label: 'Suporte', href: '/suporte' },
        ],
      },
    ],
    socialLinks: [
      {
        platform: 'Facebook',
        href: 'https://facebook.com',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
          </svg>
        ),
      },
      {
        platform: 'Instagram',
        href: 'https://instagram.com',
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.896 4.896a.896.896 0 01.896.896v8.416a.896.896 0 01-.896.896H5.104a.896.896 0 01-.896-.896V5.792a.896.896 0 01.896-.896h9.792z" clipRule="evenodd" />
          </svg>
        ),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header {...headerConfig} />

      {/* Hero Section */}
      <HeroSection
        id="home"
        subtitle="Soluções Digitais"
        title="Transforme Seu Negócio com Tecnologia"
        description="Desenvolvemos soluções personalizadas que impulsionam o crescimento da sua empresa no mundo digital."
        primaryCTA={{
          text: 'Começar Agora',
          onClick: () => console.log('Primary CTA clicked'),
        }}
        secondaryCTA={{
          text: 'Saber Mais',
          onClick: () => console.log('Secondary CTA clicked'),
        }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      />

      {/* Benefits Section */}
      <BenefitsSection
        subtitle="Por que escolher"
        title="Nossos Diferenciais"
        benefits={benefits}
      />

      {/* How It Works Section */}
      <HowItWorksSection
        subtitle="Processo"
        title="Como Funciona"
        steps={steps}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        subtitle="Depoimentos"
        title="O que nossos clientes dizem"
        testimonials={testimonials}
      />

      {/* CTA Section */}
      <CTASection
        subtitle="Pronto para começar?"
        title="Transforme seu negócio hoje mesmo"
        description="Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer."
        showPhoneCapture={true}
        background="gradient"
      />

      {/* FAQ Section */}
      <FAQSection
        subtitle="Dúvidas Frequentes"
        title="Perguntas e Respostas"
        faqs={faqs}
      />

      {/* Footer */}
      <Footer {...footerConfig} />
    </div>
  );
};

export default ExampleLandingPage;

