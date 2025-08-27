import React, { useEffect, useState } from 'react';
import { MessageCircle, Brain, Calendar, Zap, Target, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "1",
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Conversa Personalizada",
      description: "Cada cliente recebe uma abordagem única, com o nome dele e oferta específica para o perfil",
      highlight: "IA Conversacional"
    },
    {
      number: "2",
      icon: <Brain className="w-6 h-6" />,
      title: "Responde Tudo Sozinha",
      description: "Tira dúvidas, quebra objeções e conduz a conversa até o agendamento",
      highlight: "Automação Total"
    },
    {
      number: "3",
      icon: <Calendar className="w-6 h-6" />,
      title: "Agenda Automaticamente",
      description: "Quando o cliente está pronto, ela já marca a reunião sem você precisar fazer nada",
      highlight: "Zero Intervenção"
    }
  ];

  const benefits = [
    { icon: <Zap className="w-6 h-6" />, text: "Resposta instantânea 24/7" },
    { icon: <Target className="w-6 h-6" />, text: "Qualificação automática" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Agendamentos qualificados" }
  ];

  return (
    <section 
      id="how-it-works" 
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#00FF88]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-gradient-radial from-[#00FF88]/5 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
            <span className="text-[#00FF88] font-semibold text-xs sm:text-sm">Processo Automatizado</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            No segundo que alguém entra na sua lista,{' '}
            <span className="bg-gradient-to-r from-[#00FF88] to-green-400 bg-clip-text text-transparent">
              a Idealium já está conversando e agendando
            </span>
          </h2>
          
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Veja como nossa IA revoluciona seu processo de pré-vendas em 3 etapas simples
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative group transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#00FF88]/50 to-transparent z-0" />
              )}
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:border-[#00FF88]/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#00FF88] to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-[#00FF88]/25">
                  <span className="text-lg sm:text-xl font-bold text-black">{step.number}</span>
                </div>
                
                {/* Highlight Badge */}
                <div className="inline-flex items-center bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full px-3 sm:px-4 py-1 mb-3 sm:mb-4">
                  <span className="text-[#00FF88] text-xs sm:text-sm font-semibold">{step.highlight}</span>
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-[#00FF88] group-hover:bg-[#00FF88]/10 transition-colors duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#00FF88] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className={`grid md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-[#00FF88]/50 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00FF88]/10 rounded-full flex items-center justify-center text-[#00FF88]">
                {benefit.icon}
              </div>
              <span className="text-white font-semibold text-sm sm:text-base">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={`relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[#00FF88]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/5 to-transparent rounded-2xl" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00FF88] to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-black">"</span>
            </div>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Zero espera, zero demora,{' '}
              <span className="bg-gradient-to-r from-[#00FF88] to-green-400 bg-clip-text text-transparent">
                zero vendedor no meio do caminho
              </span>
            </blockquote>
            <p className="text-gray-300 text-base sm:text-lg">Automatização completa do seu processo de pré-vendas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;