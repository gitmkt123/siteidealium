import React, { useEffect, useState } from 'react';
import { Users, FileText, UserCheck, Clock, Zap, Shield, Rocket, Star } from 'lucide-react';

const Features: React.FC = () => {
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

    const element = document.getElementById('features');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Atende Milhares de Clientes Simultaneamente",
      description: "Nossa IA conversa com milhares de pessoas ao mesmo tempo, sem perder qualidade no atendimento",
      highlight: "Sem Limites",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Mensagens Personalizadas para Cada Cliente",
      description: "Cada conversa é única e personalizada baseada no perfil e interesse de cada pessoa",
      highlight: "100% Personalizado",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Identifica os Melhores Clientes",
      description: "Analisa automaticamente quais leads têm maior chance de comprar e prioriza o atendimento",
      highlight: "Foco no Resultado",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Funciona 24 Horas por Dia",
      description: "Sistema sempre disponível, sem quedas ou interrupções, garantindo que você nunca perca uma venda",
      highlight: "Sempre Online",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: <Zap className="w-6 h-6" />, value: "3x Mais", label: "Agendamentos qualificados" },
    { icon: <Shield className="w-6 h-6" />, value: "85%", label: "Precisão de qualificação" },
    { icon: <Rocket className="w-6 h-6" />, value: "99.9%", label: "SLA de uptime" },
    { icon: <Star className="w-6 h-6" />, value: "<2s", label: "Tempo de resposta" }
  ];

  return (
    <section 
      id="features" 
      className="relative py-12 sm:py-16 lg:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Organic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[25%] right-[18%] w-[200px] sm:w-[300px] lg:w-[450px] h-[160px] sm:h-[240px] lg:h-[320px] bg-[#00FF88]/10 rounded-[70%_30%_40%_60%] blur-3xl animate-pulse" />
        <div className="absolute bottom-[35%] left-[15%] w-[180px] sm:w-[280px] lg:w-[380px] h-[140px] sm:h-[210px] lg:h-[280px] bg-blue-500/10 rounded-[40%_60%_80%_20%] blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-[60%] right-[8%] w-[100px] sm:w-[150px] lg:w-[200px] h-[175px] sm:w-[260px] lg:h-[350px] bg-purple-500/8 rounded-[90%_10%_30%_70%] blur-2xl animate-pulse delay-500" />
        <div className="absolute top-[10%] left-[45%] w-[300px] sm:w-[450px] lg:w-[600px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-radial from-purple-500/5 to-transparent rounded-[50%_50%_80%_20%]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
            <span className="text-[#00FF88] font-semibold text-xs sm:text-caption">Funcionalidades</span>
          </div>
          
          <h2 className="text-xl sm:text-section-title-mobile lg:text-section-title font-bold text-white mb-6 sm:mb-8 leading-tight">
            Como nossa IA{' '}
            <span className="bg-gradient-to-r from-[#00FF88] to-green-400 bg-clip-text text-transparent">
              aumenta suas vendas
            </span>
          </h2>
          
          <p className="text-sm sm:text-body lg:text-body-large text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Veja como a Idealium funciona na prática e por que empresas escolhem nossa solução
          </p>
        </div>

        {/* Organic Stats Layout */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#00FF88] to-green-400 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-[#00FF88]/25 transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#00FF88] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Organic Features Layout */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 mb-12 sm:mb-14 lg:mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative transition-all duration-700 delay-${index * 100 + 400} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              } ${
                index % 2 === 0 ? 'md:ml-0 md:mr-16' : 'md:ml-16 md:mr-0'
              }`}
            >
              {/* Organic Card */}
              <div className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-4 sm:p-6 lg:p-8 hover:border-[#00FF88]/50 transition-all duration-500 group-hover:transform group-hover:scale-105 ${
                index % 2 === 0 ? 'rounded-[1.5rem_0.75rem_1.5rem_0.75rem] sm:rounded-[2rem_1rem_2rem_1rem]' : 'rounded-[0.75rem_1.5rem_0.75rem_1.5rem] sm:rounded-[1rem_2rem_1rem_2rem]'
              }`}>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <div className="flex-1">
                    {/* Highlight Badge */}
                    <div className="inline-flex items-center bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full px-2 sm:px-3 py-1 mb-3 sm:mb-4">
                      <span className="text-[#00FF88] text-xs sm:text-caption font-bold">{feature.highlight}</span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg lg:text-xl font-heading text-white mb-3 sm:mb-4 group-hover:text-[#00FF88] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 font-body text-sm sm:text-body">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#00FF88] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-green-400 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[#00FF88]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-base sm:text-lg lg:text-xl font-heading text-white mb-4 sm:mb-6">
                Comece a vender mais{' '}
                <span className="bg-gradient-to-r from-[#00FF88] to-green-400 bg-clip-text text-transparent">
                  em apenas 2 dias
                </span>
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-body-large font-body">
                Configuração completa, treinamento da equipe e acompanhamento dos primeiros resultados
              </p>
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-[#00FF88] to-green-400 text-black px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-heading hover:from-green-400 hover:to-[#00FF88] transition-all duration-300 shadow-lg hover:shadow-[#00FF88]/25 hover:scale-105"
              >
                <span className="relative z-10">Ver Planos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;