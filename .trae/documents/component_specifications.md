# Especificações de Componentes - Landing Page Idealium

## 1. Estrutura de Componentes React

### 1.1 Componentes Principais

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
│   │   ├── Modal.jsx
│   │   └── LoadingSpinner.jsx
│   └── forms/
│       ├── ContactForm.jsx
│       └── NewsletterForm.jsx
├── hooks/
│   ├── useContactForm.js
│   └── useScrollAnimation.js
├── utils/
│   ├── supabase.js
│   ├── animations.js
│   └── constants.js
└── styles/
    ├── globals.css
    └── components.css
```

## 2. Especificações Detalhadas dos Componentes

### 2.1 Header Component

**Funcionalidades:**
- Logo Idealium clicável que rola para o topo
- Menu de navegação responsivo com links suaves para seções
- Botão CTA "Começar Agora" com destaque
- Menu hambúrguer para mobile
- Efeito de transparência no scroll

**Props:**
```typescript
interface HeaderProps {
  isScrolled: boolean;
  onMenuClick: (section: string) => void;
}
```

### 2.2 HeroSection Component

**Funcionalidades:**
- Título principal animado com typewriter effect
- Subtítulo explicativo
- Estatística destacada "200% em uma IA que vende sem parar"
- Botão principal de ação
- Background com padrão geométrico animado
- Partículas flutuantes em CSS/JS

**Props:**
```typescript
interface HeroSectionProps {
  onCtaClick: () => void;
  animationDelay?: number;
}
```

### 2.3 ServicesSection Component

**Funcionalidades:**
- Grid responsivo de 3 cards de serviços
- Ícones animados com hover effects
- Títulos e descrições dos serviços
- Animação de entrada sequencial

**Dados dos Serviços:**
```javascript
const services = [
  {
    icon: 'TrendingUp',
    title: 'Consultoria Financeira',
    description: 'Análise personalizada do seu perfil de investidor'
  },
  {
    icon: 'PieChart',
    title: 'Gestão de Portfólio',
    description: 'Diversificação inteligente dos seus investimentos'
  },
  {
    icon: 'BarChart3',
    title: 'Análise de Mercado',
    description: 'Relatórios detalhados e insights do mercado'
  }
];
```

### 2.4 StatsSection Component

**Funcionalidades:**
- Contadores animados que incrementam quando visíveis
- 4 métricas principais em cards
- Ícones ilustrativos para cada estatística
- Animação de entrada com delay escalonado

**Dados das Estatísticas:**
```javascript
const stats = [
  {
    icon: 'Users',
    number: 1500,
    suffix: '+',
    label: 'Clientes Atendidos'
  },
  {
    icon: 'TrendingUp',
    number: 25,
    suffix: '%',
    label: 'Retorno Médio Anual'
  },
  {
    icon: 'Calendar',
    number: 8,
    suffix: '',
    label: 'Anos de Experiência'
  },
  {
    icon: 'Award',
    number: 500,
    suffix: '+',
    label: 'Projetos Concluídos'
  }
];
```

### 2.5 ContactForm Component

**Funcionalidades:**
- Validação em tempo real dos campos
- Integração com Supabase para armazenamento
- Estados de loading e sucesso
- Máscara para telefone brasileiro
- Dropdown para tipo de investimento

**Campos do Formulário:**
```javascript
const formFields = {
  name: {
    type: 'text',
    required: true,
    validation: 'min:2|max:100'
  },
  email: {
    type: 'email',
    required: true,
    validation: 'email'
  },
  phone: {
    type: 'tel',
    required: true,
    mask: '(99) 99999-9999'
  },
  investmentInterest: {
    type: 'select',
    options: ['Renda Fixa', 'Ações', 'Fundos', 'Criptomoedas', 'Outros']
  },
  message: {
    type: 'textarea',
    required: false,
    maxLength: 500
  }
};
```

## 3. Animações e Interações

### 3.1 Scroll Animations

```javascript
// useScrollAnimation.js
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};
```

### 3.2 Framer Motion Variants

```javascript
// animations.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
```

## 4. Integração com Supabase

### 4.1 Configuração do Cliente

```javascript
// utils/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função para enviar lead
export const submitLead = async (leadData) => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select();
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

### 4.2 Hook Personalizado para Formulário

```javascript
// hooks/useContactForm.js
import { useState } from 'react';
import { submitLead } from '../utils/supabase';

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (formData) => {
    setIsLoading(true);
    setError(null);
    
    const result = await submitLead(formData);
    
    if (result.success) {
      setIsSuccess(true);
      // Enviar evento para Google Analytics
      gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: 'contact_form'
      });
    } else {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  return { submitForm, isLoading, isSuccess, error };
};
```

## 5. Responsividade e Performance

### 5.1 Breakpoints TailwindCSS

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          500: '#00FF88',
          600: '#00CC6A',
          900: '#14532d'
        },
        dark: {
          100: '#2a2a2a',
          200: '#1a1a1a',
          900: '#000000'
        }
      }
    }
  }
};
```

### 5.2 Otimizações de Performance

- Lazy loading de imagens com `loading="lazy"`
- Code splitting por rotas
- Compressão de imagens em WebP
- Preload de fontes críticas
- Minificação de CSS e JS
- Service Worker para cache de assets