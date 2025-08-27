import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageSquare, BarChart3, Users, Calendar, Shield, Zap, Crown, Rocket, Award, Check } from 'lucide-react';
import CustomPattern from './CustomPattern';

const Pricing: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('pricing');
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

  const plans = [
    {
      name: "Starter WhatsApp",
      subtitle: "Ideal para começar",
      icon: <MessageSquare className="w-6 h-6" />,
      isPopular: false,
      monthlyPrice: 997,
      yearlyPrice: 9970,
      originalPrice: 1297,
      discount: "23% OFF",
      badge: "Mais Vendido",
      color: "blue",
      features: [
        "Chatbot WhatsApp inteligente",
        "Qualificação automática de leads",
        "Agendamento direto na agenda",
        "Relatórios básicos de conversão",
        "Suporte por chat",
        "Integração com calendários"
      ]
    },
    {
      name: "Vendas Pro",
      subtitle: "Solução completa",
      icon: <Crown className="w-6 h-6" />,
      isPopular: true,
      monthlyPrice: null,
      yearlyPrice: null,
      originalPrice: null,
      discount: "Lançamento 01/10/2025",
      badge: "Em Breve",
      color: "green",
      launchDate: "01/10/2025",
      isComingSoon: true,
      features: [
        "Tudo do plano Starter",
        "IA avançada de qualificação",
        "Múltiplos canais (WhatsApp, Site, Email)",
        "Automação de follow-up",
        "Dashboard completo com métricas",
        "Integração CRM avançada",
        "Suporte prioritário",
        "Treinamento personalizado"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Solução personalizada",
      icon: <Rocket className="w-6 h-6" />,
      isPopular: false,
      monthlyPrice: null,
      yearlyPrice: null,
      originalPrice: null,
      discount: "Lançamento 01/10/2025",
      badge: "Em Breve",
      color: "purple",
      launchDate: "01/10/2025",
      isComingSoon: true,
      features: [
        "Solução 100% customizada",
        "Integração com sistemas internos",
        "IA treinada para seu negócio",
        "Múltiplas equipes e usuários",
        "API dedicada",
        "Suporte 24/7 dedicado",
        "Consultoria estratégica",
        "SLA garantido"
      ]
    }
  ];

  const getColorClasses = (color: string, isPopular: boolean) => {
    const colors = {
      blue: {
        border: isPopular ? 'border-blue-500' : 'border-gray-700/50',
        bg: isPopular ? 'from-blue-500/10 to-blue-600/5' : 'from-gray-800/40 to-gray-900/40',
        badge: 'from-blue-500 to-blue-600',
        button: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
      },
      green: {
        border: isPopular ? 'border-[#00FF88]' : 'border-gray-700/50',
        bg: isPopular ? 'from-[#00FF88]/10 to-[#00CC6A]/5' : 'from-gray-800/40 to-gray-900/40',
        badge: 'from-[#00FF88] to-[#00CC6A]',
        button: 'from-[#00FF88] to-[#00CC6A] hover:from-[#00CC6A] hover:to-[#00FF88]'
      },
      purple: {
        border: isPopular ? 'border-purple-500' : 'border-gray-700/50',
        bg: isPopular ? 'from-purple-500/10 to-purple-600/5' : 'from-gray-800/40 to-gray-900/40',
        badge: 'from-purple-500 to-purple-600',
        button: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Custom Pattern Background */}
      <CustomPattern variant="lines" opacity={0.04} />
      
      {/* Organic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/5 via-transparent to-[#00CC6A]/5" />
      
      {/* Asymmetric animated background elements */}
      <div className="absolute top-[18%] left-[12%] w-[240px] sm:w-[360px] lg:w-[480px] h-[180px] sm:h-[270px] lg:h-[360px] bg-gradient-to-r from-[#00FF88]/10 to-transparent rounded-[70%_30%_40%_60%] blur-3xl animate-pulse" />
      <div className="absolute bottom-[15%] right-[8%] w-[210px] sm:w-[315px] lg:w-[420px] h-[190px] sm:w-[285px] lg:h-[380px] bg-gradient-to-l from-[#00CC6A]/10 to-transparent rounded-[35%_65%_55%_45%] blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[55%] right-[25%] w-[125px] sm:w-[187px] lg:w-[250px] h-[150px] sm:h-[225px] lg:h-[300px] bg-[#008855]/8 rounded-[80%_20%_30%_70%] blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FF88]/20 to-[#00CC6A]/20 backdrop-blur-sm border border-[#00FF88]/30 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <Award className="w-4 sm:w-5 h-4 sm:h-5 text-[#00FF88]" />
            <span className="text-[#00FF88] font-bold text-xs sm:text-sm uppercase tracking-wider">Planos Pré-vendas Automatizadas</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-white mb-6 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Escolha o plano 
            </span>
            <span className="text-[#00FF88] block mt-1 sm:mt-2 drop-shadow-[0_0_30px_rgba(0,255,136,0.5)]">
              ideal para você
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl lg:max-w-4xl mx-auto font-body leading-relaxed">
            Planos que <span className="text-[#00FF88] font-bold">multiplicam seus agendamentos</span> e reduzem custos de pré-venda
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full p-1 sm:p-2 border border-gray-700/50">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-body text-sm sm:text-base font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-[#00FF88] text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-body text-sm sm:text-base font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-[#00FF88] text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Anual
              <span className="ml-1 sm:ml-2 bg-[#00FF88] text-black px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards - Improved Layout */}
        <div className="relative max-w-7xl mx-auto pt-4 sm:pt-6 lg:pt-8">
          {/* All Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const colorClasses = getColorClasses(plan.color, plan.isPopular);
              const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
              const originalPrice = billingCycle === 'monthly' ? plan.originalPrice : (plan.originalPrice ? plan.originalPrice * 10 : null);
              
              return (
                <div key={plan.name} className={`relative group bg-gradient-to-br ${colorClasses.bg} backdrop-blur-xl rounded-2xl lg:rounded-[2rem_1rem_2rem_1rem] p-4 sm:p-5 lg:p-6 border-2 ${colorClasses.border} hover:border-opacity-80 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${plan.isPopular ? 'md:col-span-2 lg:col-span-1 lg:scale-110 lg:-translate-y-4 shadow-2xl shadow-[#00FF88]/20' : ''}`} style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-[2rem_1rem_2rem_1rem]" />
                  
                  {/* Popular badge */}
                  {plan.isPopular && (
                    <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 z-20">
                      <div className={`bg-gradient-to-r ${colorClasses.badge} text-black px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl lg:rounded-[1.5rem_0.5rem_1.5rem_0.5rem] text-xs sm:text-sm font-heading font-black flex items-center gap-1 sm:gap-2 shadow-lg whitespace-nowrap transform rotate-3`}>
                        <Star className="w-3 sm:w-4 h-3 sm:h-4" />
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  {/* Plan header */}
                  <div className="text-center mb-4 sm:mb-5 lg:mb-6 relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br ${colorClasses.badge} rounded-xl lg:rounded-2xl mb-3 sm:mb-4 text-black`}>
                      <div className="w-5 sm:w-6 lg:w-6 h-5 sm:h-6 lg:h-6">{plan.icon}</div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-heading text-white mb-1 sm:mb-2">{plan.name}</h3>
                    <p className="text-gray-400 font-body text-sm sm:text-base">{plan.subtitle}</p>
                    
                    {/* Discount badge */}
                    {plan.discount && (
                      <div className={`inline-block px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold mt-2 sm:mt-3 ${
                        plan.isComingSoon 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {plan.discount}
                      </div>
                    )}
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-4 sm:mb-5 lg:mb-6 relative z-10">
                    {plan.isComingSoon ? (
                      <div className="text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-heading font-black text-orange-400 mb-1 sm:mb-2">
                          Em Breve
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base">
                          Disponível a partir de {plan.launchDate}
                        </p>
                      </div>
                    ) : price ? (
                      <>
                        <div className="flex items-center justify-center gap-2 mb-1 sm:mb-2">
                          {originalPrice && billingCycle === 'monthly' && (
                            <span className="text-gray-500 line-through text-sm sm:text-base font-body">
                              R$ {originalPrice}
                            </span>
                          )}
                        </div>
                        {billingCycle === 'yearly' ? (
                          <>
                            <div className={`${plan.isPopular ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl lg:text-2xl'} font-heading font-black text-white mb-1 sm:mb-2`}>
                              12x de R$ {Math.round(price / 12).toLocaleString()}
                            </div>
                            <p className="text-gray-400 text-xs sm:text-sm font-body mb-2">
                              Total: R$ {price.toLocaleString()}/ano
                            </p>
                            {plan.monthlyPrice && (
                              <p className="text-[#00FF88] font-bold text-xs sm:text-sm">
                                Economize R$ {((plan.monthlyPrice * 12) - price).toLocaleString()}/ano
                              </p>
                            )}
                          </>
                        ) : (
                          <>
                            <div className={`${plan.isPopular ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl lg:text-2xl'} font-heading font-black text-white mb-1 sm:mb-2`}>
                              R$ {price}
                              <span className="text-xs sm:text-sm lg:text-base text-gray-400 font-body">
                                /mês
                              </span>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-black text-white mb-1 sm:mb-2">
                        Sob Consulta
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="mb-6 sm:mb-7 lg:mb-8 relative z-10">
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                          <div className={`flex-shrink-0 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-r ${colorClasses.badge} flex items-center justify-center mt-0.5`}>
                            <Check className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-black" />
                          </div>
                          <span className="text-gray-300 font-body text-sm sm:text-base leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <button
                    onClick={plan.isComingSoon ? undefined : scrollToContact}
                    disabled={plan.isComingSoon}
                    className={`group/btn relative w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl lg:rounded-[1.5rem_0.5rem_1.5rem_0.5rem] font-heading text-sm sm:text-base font-bold transition-all duration-500 overflow-hidden relative z-10 ${
                      plan.isComingSoon 
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                        : `bg-gradient-to-r ${colorClasses.button} text-black shadow-2xl hover:shadow-xl transform hover:scale-105`
                    }`}
                  >
                    {!plan.isComingSoon && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {plan.isComingSoon ? (
                        <>
                          <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />
                          Aguarde o Lançamento
                        </>
                      ) : plan.name === 'Enterprise' ? (
                        <>
                          <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                          Falar com consultor
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
                          Escolher Plano
                        </>
                      )}
                    </span>
                  </button>
                  
                  {!plan.isComingSoon && plan.name !== 'Enterprise' && (
                    <p className="text-center text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 relative z-10">
                      Pagamento seguro • Cancelamento a qualquer momento
                    </p>
                  )}
                  

                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-[#00FF88]/30 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
              <span className="text-[#00FF88]">Garantia de 30 dias</span> ou seu dinheiro de volta
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Teste nossa solução sem risco. Se não aumentarmos seus agendamentos em 30 dias, devolvemos 100% do valor.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00FF88]" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00FF88]" />
                <span>Suporte especializado</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00FF88]" />
                <span>Resultados garantidos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;