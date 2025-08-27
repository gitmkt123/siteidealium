import React from 'react';
import { Shield, Clock, TrendingUp, Users, Zap, Target } from 'lucide-react';

const Advantages: React.FC = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Seus Dados Protegidos',
      description: 'Toda informação dos seus clientes fica segura e protegida, seguindo as leis brasileiras.'
    },
    {
      icon: Clock,
      title: 'Funciona 24 Horas',
      description: 'Sua equipe de vendas nunca para - atende clientes mesmo quando você está dormindo.'
    },
    {
      icon: TrendingUp,
      title: 'Vende Mais Todo Mês',
      description: 'Identifica os melhores clientes e aumenta suas vendas de forma consistente.'
    },
    {
      icon: Users,
      title: 'Encontra Clientes Certos',
      description: 'Conversa com visitantes e descobre quem realmente quer comprar de você.'
    },
    {
      icon: Zap,
      title: 'Faz Tudo Sozinho',
      description: 'Elimina trabalho repetitivo da sua equipe para focar no que realmente importa.'
    },
    {
      icon: Target,
      title: 'Aprende Seu Negócio',
      description: 'Quanto mais usa, melhor fica - se adapta ao jeito da sua empresa vender.'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] bg-clip-text text-transparent">Idealium</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja como nossa solução vai fazer sua empresa vender mais
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-[#00FF88]/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#00FF88]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF88]/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-[#00FF88]" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-black px-8 py-4 rounded-xl font-bold hover:from-[#00CC6A] hover:to-[#008855] transition-all duration-300 shadow-lg hover:shadow-[#00FF88]/25 hover:scale-105"
          >
            Quero Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;