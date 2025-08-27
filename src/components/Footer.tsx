import React from 'react';
import { Mail, Phone, MessageSquare, ArrowUp, Zap, Shield, Award, Clock } from 'lucide-react';
import CustomPattern from './CustomPattern';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Custom Pattern Background */}
      <CustomPattern variant="organic" opacity={0.02} />
      
      {/* Organic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00FF88]/5 via-transparent to-transparent" />
      
      {/* Asymmetric animated background elements */}
      <div className="absolute top-[15%] right-[18%] w-[120px] sm:w-[180px] md:w-[240px] lg:w-[300px] h-[90px] sm:h-[135px] md:h-[180px] lg:h-[225px] bg-gradient-to-l from-[#00FF88]/5 to-transparent rounded-[65%_35%_45%_55%] blur-3xl" />
      <div className="absolute bottom-[10%] left-[22%] w-[100px] sm:w-[150px] md:w-[200px] lg:w-[250px] h-[75px] sm:h-[112px] md:h-[150px] lg:h-[187px] bg-gradient-to-r from-[#00CC6A]/5 to-transparent rounded-[40%_60%_70%_30%] blur-3xl" />
      <div className="absolute top-[60%] left-[8%] w-[50px] sm:w-[75px] md:w-[100px] lg:w-[125px] h-[37px] sm:h-[56px] md:h-[75px] lg:h-[93px] bg-[#008855]/3 rounded-[80%_20%_30%_70%] blur-2xl" />
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content - Asymmetric Layout */}
        <div className="py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="relative">
            {/* Company Info - Larger, offset */}
            <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[45%] mb-6 sm:mb-8 md:mb-10 lg:mb-0">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
                  <img 
                    src="/logos-02.png" 
                    alt="Idealium" 
                    className="h-6 sm:h-8 md:h-10 w-auto"
                  />
                </div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-lg">
                  A plataforma de <span className="text-[#00FF88] font-bold">automação de pré-vendas</span> que transforma leads em agendamentos qualificados 24/7.
                </p>
                
                {/* Key Benefits - Asymmetric Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 max-w-md">
                  <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 md:p-3 bg-gray-800/30 rounded-lg sm:rounded-xl lg:rounded-[1.2rem_0.3rem_1.2rem_0.3rem] border border-gray-700/50 sm:col-span-2">
                    <div className="bg-[#00FF88]/20 p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg lg:rounded-[0.8rem_0.2rem_0.8rem_0.2rem]">
                      <Clock className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-[#00FF88]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xs sm:text-sm">24/7 Disponível</p>
                      <p className="text-gray-400 text-xs">Nunca perde uma oportunidade</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 md:p-3 bg-gray-800/30 rounded-lg sm:rounded-xl lg:rounded-[0.3rem_1.2rem_0.3rem_1.2rem] border border-gray-700/50">
                    <div className="bg-[#00FF88]/20 p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg lg:rounded-[0.2rem_0.8rem_0.2rem_0.8rem]">
                      <Award className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-[#00FF88]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xs sm:text-sm">3x Mais</p>
                      <p className="text-gray-400 text-xs">Agendamentos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 md:p-3 bg-gray-800/30 rounded-lg sm:rounded-xl lg:rounded-[1rem_0.5rem_1rem_0.5rem] border border-gray-700/50">
                    <div className="bg-[#00FF88]/20 p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg lg:rounded-[0.5rem_1rem_0.5rem_1rem]">
                      <Zap className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-[#00FF88]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xs sm:text-sm">48h</p>
                      <p className="text-gray-400 text-xs">Setup</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact & Links - Stacked on right */}
            <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[45%] space-y-4 sm:space-y-6 md:space-y-8">
            
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-[1.5rem_0.5rem_1.5rem_0.5rem] p-3 sm:p-4 md:p-5 lg:p-6 border border-gray-700/30">
                <h4 className="text-base sm:text-lg md:text-xl font-black text-white mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
                  <MessageSquare className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-[#00FF88]" />
                  Contato
                </h4>
                
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="group flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 md:p-3 bg-gray-800/20 rounded-lg sm:rounded-xl lg:rounded-[1.2rem_0.3rem_1.2rem_0.3rem] border border-gray-700/30 hover:border-[#00FF88]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg lg:rounded-[0.8rem_0.2rem_0.8rem_0.2rem]">
                      <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">Email</p>
                      <p className="text-[#00FF88] text-xs sm:text-sm">contato@idealium.com.br</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 md:p-3 bg-gray-800/20 rounded-lg sm:rounded-xl lg:rounded-[0.3rem_1.2rem_0.3rem_1.2rem] border border-gray-700/30 hover:border-[#00FF88]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg lg:rounded-[0.2rem_0.8rem_0.2rem_0.8rem]">
                      <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">Telefone</p>
                      <p className="text-gray-300 text-xs sm:text-sm">+55 (11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 md:p-3 bg-gray-800/20 rounded-lg sm:rounded-xl lg:rounded-[1rem_0.5rem_1rem_0.5rem] border border-gray-700/30 hover:border-[#00FF88]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg lg:rounded-[0.5rem_1rem_0.5rem_1rem]">
                      <MessageSquare className="w-3 sm:w-4 h-3 sm:h-4 text-black" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">WhatsApp</p>
                      <p className="text-gray-300 text-xs sm:text-sm">Resposta em 5min</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="bg-gradient-to-br from-gray-800/15 to-gray-900/15 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-[0.5rem_1.5rem_0.5rem_1.5rem] p-3 sm:p-4 md:p-6 border border-gray-700/20">
                <h4 className="text-base sm:text-lg md:text-xl font-black text-white mb-3 sm:mb-4 md:mb-6">Links Rápidos</h4>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <a href="#hero" className="block text-gray-300 hover:text-[#00FF88] transition-colors duration-300 text-xs sm:text-sm font-medium p-1.5 sm:p-2 rounded-md sm:rounded-lg lg:rounded-[0.8rem_0.2rem_0.8rem_0.2rem] hover:bg-gray-800/30">
                    Início
                  </a>
                  <a href="#features" className="block text-gray-300 hover:text-[#00FF88] transition-colors duration-300 text-xs sm:text-sm font-medium p-1.5 sm:p-2 rounded-md sm:rounded-lg lg:rounded-[0.2rem_0.8rem_0.2rem_0.8rem] hover:bg-gray-800/30">
                    Funcionalidades
                  </a>
                  <a href="#pricing" className="block text-gray-300 hover:text-[#00FF88] transition-colors duration-300 text-xs sm:text-sm font-medium p-1.5 sm:p-2 rounded-md sm:rounded-lg lg:rounded-[0.5rem_1rem_0.5rem_1rem] hover:bg-gray-800/30">
                    Planos
                  </a>
                  <a href="#contact" className="block text-gray-300 hover:text-[#00FF88] transition-colors duration-300 text-xs sm:text-sm font-medium p-1.5 sm:p-2 rounded-md sm:rounded-lg lg:rounded-[1rem_0.5rem_1rem_0.5rem] hover:bg-gray-800/30">
                    Contato
                  </a>
                </div>
                
                <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-700/50 space-y-1.5 sm:space-y-2">
                  <a href="#" className="block text-gray-400 hover:text-[#00FF88] transition-colors duration-300 text-xs p-1 rounded-md sm:rounded-lg lg:rounded-[0.5rem_0.2rem_0.5rem_0.2rem] hover:bg-gray-800/20">
                    Política de Privacidade
                  </a>
                  <a href="#" className="block text-gray-400 hover:text-[#00FF88] transition-colors duration-300 text-xs p-1 rounded-md sm:rounded-lg lg:rounded-[0.2rem_0.5rem_0.2rem_0.5rem] hover:bg-gray-800/20">
                    Termos de Uso
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer - Asymmetric Layout */}
        <div className="py-4 sm:py-6 md:py-8 border-t border-gray-800/50">
          <div className="relative">
            {/* Copyright - Left */}
            <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2">
              &copy; {new Date().getFullYear()} <span className="text-[#00FF88] font-semibold">Idealium</span>. Todos os direitos reservados.
            </div>
            
            {/* Made with - Center */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 md:mb-0">
              <span className="text-gray-400 text-xs sm:text-sm">Feito com</span>
              <div className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] p-1 rounded-[0.5rem_0.2rem_0.5rem_0.2rem]">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
              </div>
              <span className="text-gray-400 text-xs sm:text-sm">para automatizar vendas</span>
            </div>
            
            {/* Scroll to top - Right, offset */}
            <div className="flex justify-center md:justify-end">
              <button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-[#00FF88] to-[#00CC6A] hover:from-[#00CC6A] hover:to-[#00FF88] p-1.5 sm:p-2 md:p-2.5 rounded-lg sm:rounded-xl md:rounded-[1.2rem_0.3rem_1.2rem_0.3rem] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transform hover:scale-110 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:translate-x-4"
              >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;