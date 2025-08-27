import React, { useEffect, useState } from 'react';
import { Play, CheckCircle, Users, Clock, TrendingUp, Shield } from 'lucide-react';
import CustomPattern from './CustomPattern';

const Demonstration: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const features = [
    "Qualificação automática de leads",
    "Agendamento inteligente",
    "Relatórios em tempo real",
    "Integração completa"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="demonstration" 
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Custom Pattern Background */}
      <CustomPattern variant="organic" opacity={0.08} />
      
      {/* Organic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[28%] w-[280px] h-[230px] bg-[#00FF88]/10 rounded-[65%_35%_45%_55%] blur-3xl animate-pulse" />
        <div className="absolute bottom-[25%] right-[22%] w-[250px] h-[190px] bg-blue-500/10 rounded-[40%_60%_70%_30%] blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-[55%] right-[8%] w-[130px] h-[180px] bg-purple-500/8 rounded-[80%_20%_30%_70%] blur-2xl animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Plataforma em Ação</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
            Veja a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Idealium</span> em Ação
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interface real do nosso sistema de pré-vendas com IA. Assim que seus leads interagem, 
            nossa plataforma qualifica e agenda automaticamente.
          </p>
        </div>

        {/* Main Content - Responsive Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full px-6 py-2 mb-8">
              <Play className="w-5 h-5 text-[#00FF88]" />
              <span className="text-[#00FF88] font-bold text-caption">Plataforma em Ação</span>
            </div>
            
            <h2 className="text-section-title-mobile lg:text-section-title font-heading text-white mb-8">
              Veja a{' '}
              <span className="bg-gradient-to-r from-[#00FF88] to-green-400 bg-clip-text text-transparent">
                IA em ação
              </span>{' '}
              qualificando leads reais
            </h2>
            
            <p className="text-body-large text-gray-300 mb-8 font-body">
              Interface real do sistema mostrando como nossa IA processa conversas, 
              qualifica leads e agenda reuniões automaticamente 24/7.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#00FF88]/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#00FF88]" />
                  </div>
                  <span className="text-gray-300 font-body text-body">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Screenshot */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-[2rem_1rem_2rem_1rem] p-6 hover:border-[#00FF88]/50 transition-all duration-500 transform hover:scale-105">
              <img 
                src="/flow_print.png" 
                alt="Interface da IA Idealium em ação" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              
              {/* Organic Overlay Elements */}
              <div className="absolute -top-2 -right-2 bg-[#00FF88]/90 text-black px-4 py-2 rounded-[1rem_0.5rem_1rem_0.5rem] text-caption font-bold shadow-lg">
                AO VIVO
              </div>
              
              <div className="absolute -bottom-2 -left-2 bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-[0.5rem_1rem_0.5rem_1rem] border border-[#00FF88]/30">
                <div className="text-caption text-[#00FF88] font-bold">Sistema Ativo</div>
                <div className="text-caption text-gray-300">Processando leads...</div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-[#00FF88] rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "3x", label: "Mais Agendamentos" },
            { number: "60%", label: "Redução de Custos" },
            { number: "24/7", label: "Operação Contínua" },
            { number: "95%", label: "Taxa de Satisfação" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demonstration;