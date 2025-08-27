# Guia de Implementação - Landing Page Idealium

## 1. Setup Inicial do Projeto

### 1.1 Criação do Projeto React

```bash
# Criar projeto com Vite
npm create vite@latest idealium-lp -- --template react
cd idealium-lp
npm install

# Instalar dependências principais
npm install @supabase/supabase-js
npm install framer-motion
npm install react-hook-form
npm install lucide-react
npm install react-input-mask

# Instalar TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 1.2 Configuração do TailwindCSS

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#00FF88',
          600: '#00CC6A',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        dark: {
          50: '#f9fafb',
          100: '#2a2a2a',
          200: '#1f1f1f',
          300: '#1a1a1a',
          400: '#151515',
          500: '#101010',
          600: '#0a0a0a',
          700: '#050505',
          800: '#030303',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

## 2. Configuração do Supabase

### 2.1 Setup do Projeto Supabase

1. Criar conta no [Supabase](https://supabase.com)
2. Criar novo projeto
3. Obter URL e chave anônima
4. Configurar variáveis de ambiente

```bash
# .env.local
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima
```

### 2.2 Criação das Tabelas

Executar no SQL Editor do Supabase:

```sql
-- Tabela de leads
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT,
    investment_interest VARCHAR(50),
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_status ON leads(status);

-- Permissões RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política para inserção anônima
CREATE POLICY "Allow anonymous inserts" ON leads
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Política para leitura autenticada
CREATE POLICY "Allow authenticated reads" ON leads
    FOR SELECT
    TO authenticated
    USING (true);
```

## 3. Estrutura de Pastas Recomendada

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── StatsSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   └── ContactSection.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Input.jsx
│   │   └── LoadingSpinner.jsx
│   └── forms/
│       └── ContactForm.jsx
├── hooks/
│   ├── useContactForm.js
│   ├── useScrollAnimation.js
│   └── useCounterAnimation.js
├── utils/
│   ├── supabase.js
│   ├── animations.js
│   ├── constants.js
│   └── validations.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## 4. Implementação dos Componentes Principais

### 4.1 App.jsx Principal

```jsx
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import StatsSection from './components/sections/StatsSection';
import BenefitsSection from './components/sections/BenefitsSection';
import ContactSection from './components/sections/ContactSection';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <BenefitsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
```

### 4.2 Configuração de Constantes

```javascript
// utils/constants.js
export const COMPANY_INFO = {
  name: 'Idealium',
  tagline: 'Ganhe sua liberdade de pré-aposentadoria',
  description: '200% em uma IA que vende sem parar',
  phone: '(11) 99999-9999',
  email: 'contato@idealium.com.br',
  address: 'São Paulo, SP'
};

export const SERVICES = [
  {
    id: 1,
    icon: 'TrendingUp',
    title: 'Consultoria Financeira',
    description: 'Análise personalizada do seu perfil de investidor com estratégias sob medida para seus objetivos.'
  },
  {
    id: 2,
    icon: 'PieChart',
    title: 'Gestão de Portfólio',
    description: 'Diversificação inteligente dos seus investimentos para maximizar retornos e minimizar riscos.'
  },
  {
    id: 3,
    icon: 'BarChart3',
    title: 'Análise de Mercado',
    description: 'Relatórios detalhados e insights do mercado financeiro para decisões mais assertivas.'
  }
];

export const STATS = [
  {
    id: 1,
    icon: 'Users',
    number: 1500,
    suffix: '+',
    label: 'Clientes Atendidos'
  },
  {
    id: 2,
    icon: 'TrendingUp',
    number: 25,
    suffix: '%',
    label: 'Retorno Médio Anual'
  },
  {
    id: 3,
    icon: 'Calendar',
    number: 8,
    suffix: '',
    label: 'Anos de Experiência'
  },
  {
    id: 4,
    icon: 'Award',
    number: 500,
    suffix: '+',
    label: 'Projetos Concluídos'
  }
];

export const BENEFITS = [
  {
    id: 1,
    icon: 'Shield',
    title: 'Segurança Garantida',
    description: 'Seus investimentos protegidos com as melhores práticas de segurança do mercado.'
  },
  {
    id: 2,
    icon: 'Clock',
    title: 'Atendimento 24/7',
    description: 'Suporte completo disponível a qualquer hora para esclarecer suas dúvidas.'
  },
  {
    id: 3,
    icon: 'Target',
    title: 'Resultados Comprovados',
    description: 'Histórico sólido de performance superior à média do mercado.'
  },
  {
    id: 4,
    icon: 'Zap',
    title: 'Tecnologia Avançada',
    description: 'Plataforma moderna com IA para otimização automática de investimentos.'
  }
];
```

## 5. Deploy e Configuração

### 5.1 Build para Produção

```bash
# Build do projeto
npm run build

# Teste local do build
npm run preview
```

### 5.2 Deploy na Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variáveis de ambiente na Vercel
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

### 5.3 Configuração de Domínio

1. Adicionar domínio personalizado na Vercel
2. Configurar DNS do domínio
3. Configurar SSL automático

## 6. Otimizações de SEO

### 6.1 Meta Tags

```html
<!-- index.html -->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Idealium - Ganhe sua liberdade de pré-aposentadoria</title>
  <meta name="description" content="Consultoria financeira especializada em investimentos. 200% de retorno com IA que vende sem parar. Conquiste sua liberdade financeira." />
  <meta name="keywords" content="investimentos, consultoria financeira, pré-aposentadoria, IA, retorno financeiro" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Idealium - Liberdade Financeira" />
  <meta property="og:description" content="Consultoria financeira com IA para maximizar seus investimentos" />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://idealium.com.br" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Idealium - Liberdade Financeira" />
  <meta name="twitter:description" content="Consultoria financeira com IA" />
  <meta name="twitter:image" content="/twitter-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
```

### 6.2 Google Analytics

```javascript
// utils/analytics.js
export const GA_TRACKING_ID = 'G-XXXXXXXXXX';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

## 7. Testes e Validação

### 7.1 Checklist de Testes

* [ ] Responsividade em todos os dispositivos

* [ ] Formulário de contato funcionando

* [ ] Animações suaves e performáticas

* [ ] Carregamento rápido (< 3s)

* [ ] SEO otimizado

* [ ] Acessibilidade (WCAG 2.1)

* [ ] Cross-browser compatibility

* [ ] Integração com Supabase

* [ ] Google Analytics configurado

### 7.2 Ferramentas de Teste

* Lighthouse para performance

* GTmetrix para velocidade

* BrowserStack para compatibilidade

* WAVE para acessibilidade

## 8. Manutenção e Monitoramento

### 8.1 Monitoramento de Performance

* Google Analytics para métricas de usuário

* Vercel Analytics para performance

* Supabase Dashboard para dados de leads

* Google Search Console para SEO

### 8.2 Atualizações Regulares

* Dependências de segurança mensalmente

* Conteúdo e ofertas trimestralmente

* Análise de conversão mensalmente

* Backup de dados semanalmente

