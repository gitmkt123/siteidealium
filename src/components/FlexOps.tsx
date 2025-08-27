import React from 'react';
import { Bot, Zap, Target, Cog } from 'lucide-react';

const FlexOps: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Automação Inteligente',
      description: 'Automatize processos complexos com IA avançada'
    },
    {
      icon: Zap,
      title: 'Performance Otimizada',
      description: 'Acelere resultados com algoritmos eficientes'
    },
    {
      icon: Target,
      title: 'Precisão Absoluta',
      description: 'Análises precisas para decisões estratégicas'
    },
    {
      icon: Cog,
      title: 'Integração Simples',
      description: 'Implementação rápida em sistemas existentes'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            <span className="text-[#00FF88]">C</span>FlexOps
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Seu funil de vendas operado por IA, em tempo real
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#00FF88]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00FF88]/20 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#00FF88]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlexOps;