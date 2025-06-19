# Componentes Base da Landing Page

Esta estrutura fornece um conjunto completo de componentes reutilizáveis para criar landing pages modernas, responsivas e acessíveis.

## 📁 Estrutura de Pastas

```
components/
├── ui/                 # Componentes base reutilizáveis
│   ├── Button.tsx      # Botões com variantes
│   ├── Container.tsx   # Container responsivo
│   ├── Section.tsx     # Seções com padding e background
│   ├── Card.tsx        # Cards com diferentes estilos
│   ├── Input.tsx       # Inputs com validação
│   └── index.ts        # Exportações dos componentes UI
├── sections/           # Seções específicas da landing page
│   ├── HeroSection.tsx         # Seção hero principal
│   ├── BenefitsSection.tsx     # Seção de benefícios
│   ├── TestimonialsSection.tsx # Seção de depoimentos
│   ├── HowItWorksSection.tsx   # Seção "como funciona"
│   ├── CTASection.tsx          # Seção de call-to-action
│   ├── FAQSection.tsx          # Seção de perguntas frequentes
│   └── index.ts                # Exportações das seções
├── layout/             # Componentes de layout
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Footer.tsx      # Rodapé
│   └── index.ts        # Exportações do layout
└── index.ts           # Exportação principal
```

## 🎨 Componentes UI Base

### Button
Botão reutilizável com diferentes variantes e tamanhos.

```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  Clique Aqui
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'

### Container
Container responsivo para centralizar conteúdo.

```tsx
import { Container } from '@/components/ui/Container';

<Container size="lg">
  <p>Conteúdo centralizado</p>
</Container>
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'

### Section
Wrapper para seções com padding e background automáticos.

```tsx
import { Section } from '@/components/ui/Section';

<Section id="sobre" background="gray" padding="xl">
  <h2>Sobre Nós</h2>
</Section>
```

**Props:**
- `background`: 'transparent' | 'white' | 'gray' | 'dark'
- `padding`: 'none' | 'sm' | 'md' | 'lg' | 'xl'
- `containerSize`: 'sm' | 'md' | 'lg' | 'xl' | 'full'

### Card
Card flexível para diferentes tipos de conteúdo.

```tsx
import { Card } from '@/components/ui/Card';

<Card variant="elevated" padding="lg">
  <h3>Título do Card</h3>
  <p>Conteúdo do card</p>
</Card>
```

**Props:**
- `variant`: 'default' | 'bordered' | 'elevated' | 'ghost'
- `padding`: 'none' | 'sm' | 'md' | 'lg'

### Input
Input com label, validação e mensagens de erro.

```tsx
import { Input } from '@/components/ui/Input';

<Input
  label="E-mail"
  type="email"
  placeholder="seu@email.com"
  error={errors.email}
  helperText="Digite seu melhor e-mail"
/>
```

## 🏗️ Seções da Landing Page

### HeroSection
Seção principal da landing page com título, descrição e CTAs.

```tsx
import { HeroSection } from '@/components/sections/HeroSection';

<HeroSection
  title="Transforme Seu Negócio"
  subtitle="Soluções Digitais"
  description="Desenvolvemos soluções que impulsionam o crescimento."
  primaryCTA={{
    text: 'Começar Agora',
    onClick: () => console.log('CTA clicked')
  }}
  secondaryCTA={{
    text: 'Saber Mais',
    onClick: () => console.log('Secondary CTA')
  }}
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
/>
```

### BenefitsSection
Seção para destacar benefícios e diferenciais.

```tsx
import { BenefitsSection } from '@/components/sections/BenefitsSection';

const benefits = [
  {
    icon: <IconComponent />,
    title: 'Resultados Garantidos',
    description: 'Metodologia comprovada que gera resultados reais.'
  }
];

<BenefitsSection
  title="Nossos Diferenciais"
  subtitle="Por que escolher"
  benefits={benefits}
  columns={3}
/>
```

### TestimonialsSection
Seção de depoimentos de clientes.

```tsx
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'CEO',
    company: 'Tech Solutions',
    content: 'Transformou completamente nosso negócio!',
    rating: 5,
    avatar: '/avatar.jpg'
  }
];

<TestimonialsSection
  title="O que nossos clientes dizem"
  testimonials={testimonials}
  columns={3}
/>
```

### HowItWorksSection
Seção explicando o processo passo a passo.

```tsx
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';

const steps = [
  {
    number: 1,
    title: 'Análise Inicial',
    description: 'Analisamos seu negócio e identificamos oportunidades.',
    icon: <IconComponent />
  }
];

<HowItWorksSection
  title="Como Funciona"
  steps={steps}
  layout="horizontal"
/>
```

### CTASection
Seção de call-to-action com formulários opcionais.

```tsx
import { CTASection } from '@/components/sections/CTASection';

<CTASection
  title="Transforme seu negócio hoje mesmo"
  subtitle="Pronto para começar?"
  description="Entre em contato e descubra como podemos ajudar."
  showPhoneCapture={true}
  background="gradient"
/>
```

### FAQSection
Seção de perguntas frequentes com accordion.

```tsx
import { FAQSection } from '@/components/sections/FAQSection';

const faqs = [
  {
    question: 'Como funciona o processo?',
    answer: 'Nosso processo é dividido em 3 etapas principais...'
  }
];

<FAQSection
  title="Perguntas e Respostas"
  faqs={faqs}
/>
```

## 🎯 Componentes de Layout

### Header
Cabeçalho responsivo com navegação e CTA.

```tsx
import { Header } from '@/components/layout/Header';

<Header
  logo={{ text: 'Minha Empresa', href: '#home' }}
  navigation={[
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' }
  ]}
  cta={{
    text: 'Contato',
    onClick: () => console.log('CTA clicked')
  }}
/>
```

### Footer
Rodapé completo com links e redes sociais.

```tsx
import { Footer } from '@/components/layout/Footer';

<Footer
  logo={{ text: 'Minha Empresa' }}
  description="Transformando negócios através de soluções digitais."
  sections={[
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre', href: '/sobre' },
        { label: 'Contato', href: '/contato' }
      ]
    }
  ]}
  socialLinks={[
    {
      platform: 'Facebook',
      href: 'https://facebook.com',
      icon: <FacebookIcon />
    }
  ]}
/>
```

## 🎨 Personalização de Cores

As cores são definidas através de variáveis CSS no arquivo `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;        /* Azul principal */
  --primary-dark: 221.2 83.2% 43.3%;   /* Azul escuro */
  --secondary: 210 40% 96%;             /* Cinza claro */
  --background: 0 0% 100%;              /* Branco */
  --foreground: 222.2 84% 4.9%;         /* Texto escuro */
}
```

## 📱 Responsividade

Todos os componentes são responsivos por padrão, utilizando:
- Mobile-first approach
- Breakpoints do Tailwind CSS (sm, md, lg, xl)
- Grid e Flexbox para layouts adaptativos

## ♿ Acessibilidade

Os componentes incluem:
- Navegação por teclado
- ARIA labels apropriados
- Contraste adequado de cores
- Foco visível
- Semântica HTML correta

## 🚀 Exemplo de Uso Completo

Veja o arquivo `app/example-landing.tsx` para um exemplo completo de como usar todos os componentes juntos para criar uma landing page funcional.

## 📦 Importação Simplificada

Todos os componentes podem ser importados de forma centralizada:

```tsx
import {
  Header,
  Footer,
  HeroSection,
  BenefitsSection,
  TestimonialsSection,
  HowItWorksSection,
  CTASection,
  FAQSection,
  Button,
  Container,
  Section,
  Card,
  Input
} from '@/components';
```

## 🔧 Customização

Cada componente aceita uma prop `className` para customizações específicas usando Tailwind CSS:

```tsx
<Button className="bg-red-500 hover:bg-red-600">
  Botão Customizado
</Button>
```

