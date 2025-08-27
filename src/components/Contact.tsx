import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MessageSquare, Zap, Shield, Clock, Award } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Dados do formulário:', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: new Date().toISOString()
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/5 via-transparent to-[#00CC6A]/5" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300FF88%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-[#00FF88]/10 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-l from-[#00CC6A]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
            <span className="text-[#00FF88] font-semibold text-xs sm:text-caption">Contato</span>
          </div>
            
          <h2 className="text-xl sm:text-section-title-mobile lg:text-section-title font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-[#00FF88] to-green-600 bg-clip-text text-transparent">
              multiplicar suas vendas?
            </span>
          </h2>
            
          <p className="text-sm sm:text-body lg:text-body-large text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Fale com nossos especialistas e descubra como a Idealium pode transformar seus resultados
          </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">

            {/* Contact Info Cards */}
            <div className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-[#00FF88]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">Telefone</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Atendimento direto</p>
                </div>
              </div>
              <a href="tel:+5511999999999" className="text-[#00FF88] hover:text-[#00CC6A] transition-colors duration-300 font-bold text-xs sm:text-sm lg:text-base group-hover:underline">
                (11) 99999-9999
              </a>
            </div>

            <div className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-[#00FF88]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">WhatsApp</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Resposta rápida</p>
                </div>
              </div>
              <a href="https://wa.me/5511999999999" className="text-[#00FF88] hover:text-[#00CC6A] transition-colors duration-300 font-bold text-xs sm:text-sm lg:text-base group-hover:underline">
                (11) 99999-9999
              </a>
            </div>

            <div className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-[#00FF88]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} sm:col-span-2 lg:col-span-1`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">Email</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Suporte técnico</p>
                </div>
              </div>
              <a href="mailto:contato@idealium.com.br" className="text-[#00FF88] hover:text-[#00CC6A] transition-colors duration-300 font-bold text-xs sm:text-sm lg:text-base group-hover:underline break-all">
                contato@idealium.com.br
              </a>
            </div>

          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">

            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#00FF88]/30 shadow-2xl">
                <h3 className="text-lg sm:text-xl lg:text-card-title font-heading text-white mb-6 sm:mb-8">
                  <span className="text-[#00FF88]">Vamos conversar</span> sobre seu projeto
                </h3>
                
                {/* Contact methods */}
                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/40 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-[#00FF88]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] p-2 sm:p-3 rounded-lg sm:rounded-xl">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-heading text-sm sm:text-body lg:text-body-large">Telefone</h4>
                      <p className="text-gray-400 font-body text-xs sm:text-body">+55 (11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/40 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-[#00FF88]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] p-2 sm:p-3 rounded-lg sm:rounded-xl">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-heading text-sm sm:text-body lg:text-body-large">Email</h4>
                      <p className="text-gray-400 font-body text-xs sm:text-body">contato@idealium.com.br</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-800/40 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-[#00FF88]/50 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#00FF88] to-[#00CC6A] p-2 sm:p-3 rounded-lg sm:rounded-xl">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-heading text-sm sm:text-body lg:text-body-large">WhatsApp</h4>
                      <p className="text-gray-400 font-body text-xs sm:text-body">Resposta em até 5 minutos</p>
                    </div>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-white font-heading text-sm sm:text-body lg:text-body-large mb-3 sm:mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#00FF88]" />
                    Por que escolher a Idealium?
                  </h4>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-[#00FF88] p-1 rounded-md sm:rounded-lg">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                      </div>
                      <span className="text-gray-300 font-body text-xs sm:text-body">Setup em 48h ou menos</span>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-[#00FF88] p-1 rounded-md sm:rounded-lg">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                      </div>
                      <span className="text-gray-300 font-body text-xs sm:text-body">Suporte 24/7 especializado</span>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-[#00FF88] p-1 rounded-md sm:rounded-lg">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                      </div>
                      <span className="text-gray-300 font-body text-xs sm:text-body">Garantia de resultados</span>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-[#00FF88] p-1 rounded-md sm:rounded-lg">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                      </div>
                      <span className="text-gray-300 font-body text-xs sm:text-body">ROI comprovado em 30 dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-xl">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg lg:text-card-title font-bold text-gray-900 mb-3 sm:mb-4">
                    Fale conosco e <span className="text-[#00FF88]">escolha seu plano</span>
                  </h3>
                  <p className="text-gray-400 font-body text-xs sm:text-body">
                    Preencha o formulário e nossa equipe entrará em contato em até 1 hora
                  </p>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="mb-3 sm:mb-4 lg:mb-6 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-[#00FF88]/20 to-[#00CC6A]/20 border border-[#00FF88]/30 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center backdrop-blur-sm">
                    <div className="bg-[#00FF88] p-1 sm:p-1.5 lg:p-2 rounded-md sm:rounded-lg lg:rounded-xl mr-2 sm:mr-3 lg:mr-4">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-[#00FF88] font-heading text-xs sm:text-sm lg:text-base">Mensagem enviada com sucesso!</h4>
                      <p className="text-gray-600 text-xs sm:text-caption font-body">Nossa equipe entrará em contato em breve para apresentar nossos planos.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-3 sm:mb-4 lg:mb-6 p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center backdrop-blur-sm">
                    <div className="bg-red-500 p-1 sm:p-1.5 lg:p-2 rounded-md sm:rounded-lg lg:rounded-xl mr-2 sm:mr-3 lg:mr-4">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-red-600 font-heading text-xs sm:text-sm lg:text-base">Erro ao enviar mensagem</h4>
                      <p className="text-gray-600 text-xs sm:text-caption font-body">Tente novamente ou entre em contato via WhatsApp.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF88] focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        focusedField === 'name' 
                          ? 'border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.3)]' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Seu nome completo"
                      required
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'name' ? 'opacity-100' : ''
                    }`} />
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF88] focus:border-transparent transition-all duration-300 text-sm sm:text-base ${
                        focusedField === 'email' 
                          ? 'border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.3)]' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Seu melhor email"
                      required
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'email' ? 'opacity-100' : ''
                    }`} />
                  </div>

                  <div className="relative group">
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-300 rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF88] focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base ${
                        focusedField === 'message' 
                          ? 'border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.3)]' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Conte-nos sobre seu negócio e como podemos ajudar..."
                      required
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 to-transparent rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'message' ? 'opacity-100' : ''
                    }`} />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-[#00FF88] to-[#00CC6A] hover:from-[#00CC6A] hover:to-[#00FF88] text-black py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-xl lg:rounded-2xl font-heading text-xs sm:text-sm lg:text-base transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] overflow-hidden transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 border-2 border-black border-t-transparent"></div>
                          <span className="text-xs sm:text-sm lg:text-base">Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                          <span className="text-xs sm:text-sm lg:text-base">Enviar Mensagem</span>
                        </>
                      )}
                    </span>
                  </button>
                  
                  <div className="flex items-center justify-center gap-4 sm:gap-6 text-xs text-gray-500 font-body pt-3 sm:pt-4 lg:pt-6">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FF88]" />
                      <span>100% Seguro</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-[#00FF88]" />
                      <span>Resposta em 1h</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;