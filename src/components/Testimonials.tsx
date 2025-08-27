import React, { useState, useEffect } from 'react';
import { Star, Quote, TrendingUp, Users, Calendar, MessageSquare } from 'lucide-react';
import CustomPattern from './CustomPattern';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Diretor Comercial",
      company: "TechSolutions",
      avatar: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20businessman%20headshot%20corporate%20suit%20confident%20smile%20office%20background&image_size=square",
      content: "Desde que implementamos o Idealium, nossa taxa de conversão de leads aumentou 340%. O sistema funciona 24/7 e nunca perde uma oportunidade.",
      metrics: {
        improvement: "+340%",
        metric: "conversão"
      },
      rating: 5
    },
    {
      name: "Ana Paula Silva",
      role: "Gerente de Marketing",
      company: "Digital Growth",
      avatar: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20businesswoman%20headshot%20corporate%20blazer%20confident%20smile%20modern%20office&image_size=square",
      content: "O Idealium transformou nossa operação. Agora conseguimos qualificar leads automaticamente e nossa equipe foca apenas nos prospects mais quentes.",
      metrics: {
        improvement: "+280%",
        metric: "qualificação"
      },
      rating: 5
    },
    {
      name: "Roberto Oliveira",
      role: "CEO",
      company: "InnovaCorp",
      avatar: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=executive%20CEO%20professional%20headshot%20business%20suit%20confident%20leadership%20corporate&image_size=square",
      content: "ROI de 450% em 3 meses. O sistema paga por si mesmo e ainda gera lucro significativo. Melhor investimento que fizemos este ano.",
      metrics: {
        improvement: "450%",
        metric: "ROI"
      },
      rating: 5
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "2.847",
      label: "Empresas Ativas",
      growth: "+23%"
    },
    {
      icon: TrendingUp,
      value: "340%",
      label: "Aumento Médio em Conversões",
      growth: "comprovado"
    },
    {
      icon: Calendar,
      value: "24/7",
      label: "Operação Contínua",
      growth: "sem parar"
    },
    {
      icon: MessageSquare,
      value: "98.7%",
      label: "Taxa de Satisfação",
      growth: "+5.2%"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Custom Pattern Background */}
      <CustomPattern variant="dots" opacity={0.03} />
      
      {/* Organic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/3 via-transparent to-[#00CC6A]/3" />
      
      {/* Asymmetric background elements */}
      <div className="absolute top-[25%] left-[8%] w-[200px] h-[150px] sm:w-[300px] sm:h-[220px] lg:w-[380px] lg:h-[280px] bg-gradient-to-r from-[#00FF88]/8 to-transparent rounded-[60%_40%_70%_30%] blur-3xl animate-pulse" />
      <div className="absolute bottom-[20%] right-[12%] w-[180px] h-[130px] sm:w-[250px] sm:h-[180px] lg:w-[320px] lg:h-[240px] bg-[#008855]/6 rounded-[45%_55%_35%_65%] blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
            <span className="text-[#00FF88] font-heading font-bold text-xs sm:text-caption">RESULTADOS COMPROVADOS</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-black text-white mb-4 sm:mb-6 leading-tight">
            Empresas Reais,{' '}
            <span className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] bg-clip-text text-transparent">
              Resultados Reais
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-body text-gray-300 max-w-3xl mx-auto">
            Veja como empresas como a sua estão transformando leads em agendamentos qualificados 
            e aumentando suas vendas com nossa IA conversacional.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          {stats.map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-[${index % 2 === 0 ? '1.5rem_0.5rem_1.5rem_0.5rem' : '0.5rem_1.5rem_0.5rem_1.5rem'}] p-4 sm:p-6 border border-gray-700/50 hover:border-[#00FF88]/30 transition-all duration-300 group hover:scale-105`}>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-[${index % 2 === 0 ? '0.8rem_0.2rem_0.8rem_0.2rem' : '0.2rem_0.8rem_0.2rem_0.8rem'}] bg-[#00FF88]/10 flex items-center justify-center group-hover:bg-[#00FF88]/20 transition-colors`}>
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
                </div>
                <span className="text-xs sm:text-caption text-[#00FF88] font-bold">{stat.growth}</span>
              </div>
              <div className="text-lg sm:text-xl lg:text-2xl font-heading font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-caption text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${index === 1 ? 'lg:-translate-y-8' : index === 2 ? 'lg:translate-y-4' : ''}`} style={{ transitionDelay: `${(index + 3) * 200}ms` }}>
              <div className={`relative group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-[${index === 0 ? '2rem_0.5rem_2rem_0.5rem' : index === 1 ? '0.5rem_2rem_0.5rem_2rem' : '1.5rem_1.5rem_0.5rem_2rem'}] p-6 sm:p-8 border border-gray-700/50 hover:border-[#00FF88]/30 transition-all duration-500 hover:scale-105 overflow-hidden`}>
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote icon */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF88]" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FF88] fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-sm sm:text-base lg:text-body text-gray-300 mb-4 sm:mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Metrics */}
                <div className={`inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/20 rounded-[1rem_0.3rem_1rem_0.3rem] px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6`}>
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FF88]" />
                  <span className="text-[#00FF88] font-bold text-xs sm:text-caption">
                    {testimonial.metrics.improvement} {testimonial.metrics.metric}
                  </span>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[${index % 2 === 0 ? '0.8rem_0.2rem_0.8rem_0.2rem' : '0.2rem_0.8rem_0.2rem_0.8rem'}] object-cover border-2 border-[#00FF88]/20`}
                  />
                  <div>
                    <div className="font-heading font-bold text-white text-xs sm:text-caption">{testimonial.name}</div>
                    <div className="text-xs sm:text-caption text-gray-400">{testimonial.role}</div>
                    <div className="text-xs sm:text-caption text-[#00FF88]">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-[2rem_1rem_2rem_1rem] p-6 sm:p-8 border border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-black text-white mb-3 sm:mb-4">
              Pronto para ser o próximo caso de sucesso?
            </h3>
            <p className="text-sm sm:text-base lg:text-body text-gray-300 mb-4 sm:mb-6">
              Junte-se a mais de 2.800 empresas que já transformaram seus resultados
            </p>
            <button className="bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] font-heading font-black text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00FF88]/25">
              Ver Planos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;