import React, { useState, useEffect } from 'react';
import { Shield, Clock, CheckCircle, Zap, Star, TrendingUp, Users, Award, Target } from 'lucide-react';

const UrgencyCTA: React.FC = () => {
  const [spotsLeft, setSpotsLeft] = useState(47); // Simula vagas restantes
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
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

    const element = document.getElementById('urgency-cta');
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

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Funcionando em 2 dias",
      highlight: "Implementação Rápida"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Suporte completo",
      highlight: "Consultor Exclusivo"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "30 dias para testar",
      highlight: "Garantia Total"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Resultados em 3 meses",
      highlight: "Resultados Superiores"
    }
  ];

  const stats = [
    { icon: <Target className="w-6 h-6" />, value: "3x", label: "Mais vendas em média" },
    { icon: <Award className="w-6 h-6" />, value: "60%", label: "Economia de custos" },
    { icon: <Star className="w-6 h-6" />, value: "24h", label: "Funcionando sempre" }
  ];

  return (
    <section id="urgency-cta" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 via-transparent to-[#00CC6A]/10" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300FF88%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#00FF88]/20 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-[#00CC6A]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#00FF88]/5 to-transparent rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with badge */}
        <div className={`text-center mb-8 sm:mb-10 lg:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FF88]/20 to-[#00CC6A]/20 backdrop-blur-sm border border-[#00FF88]/30 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-4 sm:mb-6 lg:mb-8">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider">Oferta Limitada</span>
          </div>
          
          <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-heading text-white mb-4 sm:mb-6 lg:mb-8 px-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Comece a vender mais 
            </span>
            <span className="text-[#00FF88] block mt-1 sm:mt-2 drop-shadow-[0_0_30px_rgba(0,255,136,0.5)]">
              hoje mesmo
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto font-body px-4">
            Mais de{' '}
            <span className="text-[#00FF88] font-semibold">500 empresas</span>{' '}
            já estão vendendo mais com a Idealium
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-[#00FF88]/20 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 text-center hover:border-[#00FF88]/40 transition-all duration-300 hover:scale-105">
                  <div className="text-[#00FF88] mb-2 sm:mb-3 flex justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">{stat.icon}</div>
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-heading font-black text-white mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm lg:text-base font-body leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countdown */}
        <div className={`max-w-lg mx-auto mb-8 sm:mb-10 lg:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#00FF88]/30 shadow-2xl hover:shadow-[#00FF88]/20 transition-all duration-500 mx-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#00FF88] animate-pulse" />
              <span className="text-white font-heading text-sm sm:text-base lg:text-lg">Oferta expira em:</span>
            </div>
            <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] text-black font-black text-lg sm:text-xl lg:text-2xl px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-3 rounded-lg sm:rounded-xl shadow-lg">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base mt-1 sm:mt-2 font-body">Horas</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] text-black font-black text-lg sm:text-xl lg:text-2xl px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-3 rounded-lg sm:rounded-xl shadow-lg">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base mt-1 sm:mt-2 font-body">Min</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] text-black font-black text-lg sm:text-xl lg:text-2xl px-2 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-3 rounded-lg sm:rounded-xl shadow-lg">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base mt-1 sm:mt-2 font-body">Seg</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h3 className={`text-base sm:text-lg lg:text-xl font-heading text-white mb-8 sm:mb-10 lg:mb-12 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">O que você </span>
            <span className="text-[#00FF88]">recebe:</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${800 + index * 150}ms` }}>
                <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-700/50 hover:border-[#00FF88]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00FF88]/10">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-[#00FF88]/20 to-[#00CC6A]/20 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-[#00FF88]/30 group-hover:border-[#00FF88]/60 transition-all duration-300">
                      <div className="text-[#00FF88] group-hover:scale-110 transition-transform duration-300">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">{benefit.icon}</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-[#00FF88] font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider mb-1 sm:mb-2">
                        {benefit.highlight}
                      </div>
                      <p className="text-white font-body text-sm sm:text-base lg:text-lg leading-relaxed">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#00FF88]/30 shadow-2xl max-w-2xl mx-auto mx-4">
            <div className="mb-6 sm:mb-8">
              <p className="text-[#00FF88] font-heading text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 animate-pulse">
                Apenas {spotsLeft} slots enterprise disponíveis
              </p>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-body leading-relaxed">
                SLA de performance com ROI garantido em 90 dias. <span className="text-white font-bold">Resultados mensuráveis ou reembolso integral.</span>
              </p>
            </div>
            
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-6 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl font-heading hover:from-[#00CC6A] hover:to-[#00FF88] transition-all duration-500 shadow-2xl hover:shadow-[#00FF88]/40 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                Reservar Slot Enterprise
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </span>
            </button>
            
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base font-body mt-4 sm:mt-6 leading-relaxed">
              Infraestrutura enterprise • Compliance SOC2 • Suporte 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyCTA;