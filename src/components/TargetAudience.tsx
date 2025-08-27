import React, { useState, useEffect } from 'react';
import { MessageSquare, Clock, DollarSign, TrendingUp, Target, Users, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('target-audience');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleItemCheck = (index: number) => {
    if (!checkedItems.includes(index)) {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const targetProfiles = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Lista de Contatos Parada",
      text: "Tem uma lista de contatos parada no WhatsApp",
      color: "from-blue-500 to-blue-600",
      highlight: "PROBLEMA COMUM"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Demora para Responder",
      text: "Perde leads porque demora para responder",
      color: "from-orange-500 to-red-500",
      highlight: "URGENTE"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Alto Custo de Vendas",
      text: "Gasta muito com vendedores que não produzem",
      color: "from-green-500 to-emerald-600",
      highlight: "DESPERDÍCIO"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Quer Escalar Vendas",
      text: "Quer agendar mais reuniões sem aumentar custos",
      color: "from-purple-500 to-indigo-600",
      highlight: "CRESCIMENTO"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Falta Previsibilidade",
      text: "Precisa de previsibilidade nas vendas",
      color: "from-pink-500 to-rose-600",
      highlight: "ESTRATÉGICO"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Resposta instantânea 24/7"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Qualificação automática de leads"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "3x mais agendamentos qualificados"
    }
  ];

  return (
    <section 
      id="target-audience" 
      className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF88]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-green-500/3 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
            <span className="text-[#00FF88] font-semibold text-xs sm:text-caption">Público Ideal</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight px-4">
            Para quem{' '}
            <span className="bg-gradient-to-r from-[#00FF88] to-green-600 bg-clip-text text-transparent">
              já vende bem
            </span>{' '}
            <br className="hidden sm:block" />
            mas quer vender muito mais
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Se você se identifica com pelo menos 3 dos pontos abaixo, a Idealium é perfeita para o seu negócio
          </p>
        </div>

        {/* Interactive Checklist */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-4">
            {/* First row: 3 cards */}
            <div className="lg:col-span-3 xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-4">
              {targetProfiles.slice(0, 3).map((profile, index) => {
                const isChecked = checkedItems.includes(index);
                return (
                  <div 
                    key={index} 
                    className={`group relative cursor-pointer transition-all duration-700 delay-${index * 100 + 200} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    onClick={() => handleItemCheck(index)}
                  >
                    {/* Card */}
                    <div className={`relative bg-white border-2 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-500 hover:scale-105 ${
                      isChecked 
                        ? 'border-[#00FF88] shadow-lg shadow-[#00FF88]/20' 
                        : 'border-gray-200 hover:border-[#00FF88]/50'
                    }`}>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent rounded-2xl transition-opacity duration-500 ${
                        isChecked ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                      }`} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
                            <span className="text-gray-600 text-xs font-semibold">{profile.highlight}</span>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            isChecked 
                              ? 'bg-[#00FF88] border-[#00FF88] text-white' 
                              : 'border-gray-300 group-hover:border-[#00FF88]'
                          }`}>
                            {isChecked && <CheckCircle className="w-4 h-4" />}
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${profile.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5">{profile.icon}</div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3 leading-tight">
                          {profile.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                          {profile.text}
                        </p>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-[#00FF88] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Second row: 2 cards centered */}
             <div className="lg:col-span-2 xl:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-4">
               {targetProfiles.slice(3, 5).map((profile, index) => {
                 const actualIndex = index + 3;
                 const isChecked = checkedItems.includes(actualIndex);
                 return (
                   <div 
                     key={actualIndex} 
                     className={`group relative cursor-pointer transition-all duration-700 delay-${actualIndex * 100 + 200} ${
                       isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                     }`}
                     onClick={() => handleItemCheck(actualIndex)}
                   >
                     {/* Card */}
                     <div className={`relative bg-white border-2 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 transition-all duration-500 hover:scale-105 ${
                       isChecked 
                         ? 'border-[#00FF88] shadow-lg shadow-[#00FF88]/20' 
                         : 'border-gray-200 hover:border-[#00FF88]/50'
                     }`}>
                       {/* Glow Effect */}
                       <div className={`absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent rounded-2xl transition-opacity duration-500 ${
                         isChecked ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                       }`} />
                       
                       {/* Content */}
                       <div className="relative z-10">
                         {/* Header */}
                         <div className="flex items-center justify-between mb-4">
                           <div className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
                             <span className="text-gray-600 text-xs font-semibold">{profile.highlight}</span>
                           </div>
                           <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                             isChecked 
                               ? 'bg-[#00FF88] border-[#00FF88] text-white' 
                               : 'border-gray-300 group-hover:border-[#00FF88]'
                           }`}>
                             {isChecked && <CheckCircle className="w-4 h-4" />}
                           </div>
                         </div>
                         
                         {/* Icon */}
                         <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${profile.color} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                           <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5">{profile.icon}</div>
                         </div>
                         
                         {/* Title */}
                         <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3 leading-tight">
                           {profile.title}
                         </h3>
                         
                         {/* Description */}
                         <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                           {profile.text}
                         </p>
                       </div>
                       
                       {/* Decorative Elements */}
                       <div className="absolute top-4 right-4 w-2 h-2 bg-[#00FF88] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     </div>
                   </div>
                 );
               })}
             </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`bg-gradient-to-r from-gray-900 to-black rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 mb-12 sm:mb-16 mx-4 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 sm:mb-4">
              Com a Idealium você terá:
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-3 text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#00FF88]/10 rounded-full flex items-center justify-center text-[#00FF88] mx-auto mb-1 sm:mb-2">
                  {benefit.icon}
                </div>
                <p className="text-white font-medium text-xs sm:text-sm lg:text-base leading-tight">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-800 px-4 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-[#00FF88]/10 to-green-500/10 border border-[#00FF88]/30 rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Se você marcou{' '}
                <span className="bg-gradient-to-r from-[#00FF88] to-green-600 bg-clip-text text-transparent">
                  3 ou mais itens
                </span>
                , a Idealium é perfeita para você!
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base leading-relaxed">
                Descubra como centenas de empresas já multiplicaram seus resultados
              </p>
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-[#00FF88] to-green-400 text-black px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base font-bold hover:from-green-400 hover:to-[#00FF88] transition-all duration-300 shadow-lg hover:shadow-[#00FF88]/25 hover:scale-105 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Isso é exatamente o que eu preciso
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;