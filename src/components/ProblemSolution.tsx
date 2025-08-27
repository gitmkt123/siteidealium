import React, { useEffect, useRef, useState } from 'react';
import { Clock, Target, TrendingUp, Zap, Shield, Rocket, BarChart3, Users } from 'lucide-react';
import CustomPattern from './CustomPattern';

const ProblemSolution: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const problems = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Economize até 60% em custos",
      description: "Substitua uma equipe inteira por nossa IA que trabalha 24 horas sem salário, férias ou benefícios",
      gradient: "from-[#00FF88] to-[#00CC6A]",
      delay: "delay-200"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tenha 3x mais reuniões marcadas",
      description: "Resposta na hora, identifica clientes interessados e faz o acompanhamento que nunca falha",
      gradient: "from-[#00CC6A] to-[#008855]",
      delay: "delay-400"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Cresça sem contratar mais gente",
      description: "Atenda milhares de pessoas ao mesmo tempo com a qualidade de um vendedor experiente",
      gradient: "from-[#008855] to-[#00FF88]",
      delay: "delay-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Previsibilidade nas vendas",
      description: "Tenha controle total sobre seu funil e saiba exatamente quantas vendas terá no próximo mês",
      gradient: "from-[#00FF88] to-[#00CC6A]",
      delay: "delay-800"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Qualificação automática de leads",
      description: "Nossa IA identifica automaticamente os melhores prospects e prioriza os mais propensos a comprar",
      gradient: "from-[#00CC6A] to-[#008855]",
      delay: "delay-1000"
    }
  ];

  const benefits = [
    { number: "24/7", label: "Operação contínua" },
    { number: "100%", label: "Taxa de resposta" },
    { number: "3x", label: "Mais agendamentos" },
    { number: "60%", label: "Redução de custos" }
  ];

  return (
    <section ref={sectionRef} className="relative py-8 sm:py-16 lg:py-28 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
      
      {/* Custom Pattern Background */}
      <CustomPattern variant="dots" opacity={0.06} />
      
      {/* Organic Background Elements */}
      <div className="absolute top-[15%] left-[10%] w-[150px] h-[120px] sm:w-[250px] sm:h-[200px] lg:w-[450px] lg:h-[380px] bg-[#00FF88]/10 rounded-[60%_40%_70%_30%] blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[120px] h-[140px] sm:w-[180px] sm:h-[220px] lg:w-[320px] lg:h-[420px] bg-[#00CC6A]/10 rounded-[45%_55%_35%_65%] blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-[60%] left-[5%] w-[80px] h-[100px] sm:w-[120px] sm:h-[150px] lg:w-[200px] lg:h-[250px] bg-[#008855]/8 rounded-[80%_20%_40%_60%] blur-2xl animate-pulse delay-700"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-18">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#00FF88]/20 to-[#00CC6A]/20 border border-[#00FF88]/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 mb-4 sm:mb-6 lg:mb-8 backdrop-blur-sm">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#00FF88]" />
              <span className="text-[#00FF88] font-semibold text-xs sm:text-sm tracking-wide">Resultados Comprovados</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
              Economize{' '}
              <span className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] bg-clip-text text-transparent">
                60% em custos
              </span>{' '}
              e tenha{' '}
              <span className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] bg-clip-text text-transparent">
                3x mais reuniões
              </span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
              Com nossa IA que{' '}
              <span className="text-[#00FF88] font-semibold">encontra clientes e agenda reuniões 24 horas por dia</span>
            </p>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-8 sm:mb-10 lg:mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-[#00FF88] to-[#00CC6A] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                  {benefit.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problems Grid - 5 Cards Layout */}
        <div className="relative mb-8 sm:mb-10 lg:mb-16">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-8 lg:mb-10">
            {problems.slice(0, 3).map((problem, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-1000 delay-${200 + (index * 200)} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 xl:p-7 border border-gray-800 hover:border-[#00FF88]/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#00FF88]/20 ${
                  index === 0 ? 'rounded-[1.5rem_0.5rem_1.5rem_0.5rem]' : index === 1 ? 'rounded-[0.5rem_1.5rem_0.5rem_1.5rem]' : 'rounded-[1rem_1rem_0.5rem_1.5rem]'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    index === 0 ? 'rounded-[1.5rem_0.5rem_1.5rem_0.5rem]' : index === 1 ? 'rounded-[0.5rem_1.5rem_0.5rem_1.5rem]' : 'rounded-[1rem_1rem_0.5rem_1.5rem]'
                  }`}></div>
                  
                  <div className={`relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 xl:w-13 xl:h-13 bg-gradient-to-r ${problem.gradient} flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 xl:mb-6 text-black group-hover:scale-110 transition-transform duration-300 ${
                    index === 0 ? 'rounded-[0.75rem_0.25rem_0.75rem_0.25rem]' : index === 1 ? 'rounded-[0.25rem_0.75rem_0.25rem_0.75rem]' : 'rounded-[0.5rem_0.5rem_0.25rem_0.75rem]'
                  }`}>
                    {problem.icon}
                    <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent ${
                      index === 0 ? 'rounded-[0.75rem_0.25rem_0.75rem_0.25rem]' : index === 1 ? 'rounded-[0.25rem_0.75rem_0.25rem_0.75rem]' : 'rounded-[0.5rem_0.5rem_0.25rem_0.75rem]'
                    }`}></div>
                  </div>
                  
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-[#00FF88] transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                    {problem.description}
                  </p>
                  
                  <div className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00FF88] rounded-full animate-pulse ${
                    index === 0 ? 'top-2 right-2 sm:top-3 sm:right-3' : index === 1 ? 'bottom-2 left-2 sm:bottom-3 sm:left-3' : 'top-2 left-2 sm:top-3 sm:left-3'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {problems.slice(3).map((problem, index) => (
              <div
                key={index + 3}
                className={`group relative transform transition-all duration-1000 delay-${800 + (index * 200)} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 xl:p-8 border border-gray-800 hover:border-[#00FF88]/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#00FF88]/20 ${
                  index === 0 ? 'rounded-[2rem_0.5rem_2rem_0.5rem]' : 'rounded-[0.5rem_2rem_0.5rem_2rem]'
                }`}>
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    index === 0 ? 'rounded-[2rem_0.5rem_2rem_0.5rem]' : 'rounded-[0.5rem_2rem_0.5rem_2rem]'
                  }`}></div>
                  
                  <div className={`relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${problem.gradient} flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 xl:mb-7 text-black group-hover:scale-110 transition-transform duration-300 ${
                    index === 0 ? 'rounded-[1rem_0.25rem_1rem_0.25rem]' : 'rounded-[0.25rem_1rem_0.25rem_1rem]'
                  }`}>
                    {problem.icon}
                    <div className={`absolute inset-0 bg-gradient-to-r from-white/20 to-transparent ${
                      index === 0 ? 'rounded-[1rem_0.25rem_1rem_0.25rem]' : 'rounded-[0.25rem_1rem_0.25rem_1rem]'
                    }`}></div>
                  </div>
                  
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-5 group-hover:text-[#00FF88] transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {problem.description}
                  </p>
                  
                  <div className={`absolute w-2 h-2 sm:w-3 sm:h-3 bg-[#00FF88] rounded-full animate-pulse ${
                    index === 0 ? '-top-1 -right-1 sm:-top-2 sm:-right-2' : '-top-1 -left-1 sm:-top-2 sm:-left-2'
                  }`}></div>
                  <div className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00CC6A] rounded-full animate-pulse delay-500 ${
                    index === 0 ? '-bottom-1 -left-1 sm:-bottom-2 sm:-left-2' : '-bottom-1 -right-1 sm:-bottom-2 sm:-right-2'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl shadow-[#00FF88]/30 hover:shadow-[#00FF88]/50 w-full max-w-xs sm:max-w-sm mx-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#00FF88]">•</span>
              <span className="text-sm sm:text-base lg:text-lg">Escolher Plano</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00CC6A] to-[#00FF88] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;