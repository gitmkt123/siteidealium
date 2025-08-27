import React from 'react';
import { TrendingUp, PieChart, Shield, Target, Users, BarChart3, MessageSquare, Calendar } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group hover:transform hover:scale-105">
      <div className="flex items-center justify-center w-12 h-12 bg-green-400/10 rounded-lg mb-4 group-hover:bg-green-400/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-400">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversa e Qualifica Seus Leads",
      description: "Nossa IA conversa com seus visitantes e identifica quais têm real interesse em comprar",
      features: [
        "Conversa natural como um vendedor",
        "Identifica leads qualificados automaticamente",
        "Conecta com seu sistema de vendas",
        "Relatórios simples e claros"
      ],
      gradient: "from-[#00FF88] to-[#00CC6A]",
      delay: "delay-200"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Agenda Reuniões Automaticamente",
      description: "Quando encontra um lead interessado, agenda a reunião na sua agenda sem você precisar fazer nada",
      features: [
        "Conecta com sua agenda do Google/Outlook",
        "Confirma reuniões automaticamente",
        "Envia lembretes personalizados",
        "Reagenda quando necessário"
      ],
      gradient: "from-[#00CC6A] to-[#008855]",
      delay: "delay-400"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Mostra Seus Resultados",
      description: "Acompanhe quantos leads foram qualificados, reuniões agendadas e vendas geradas",
      features: [
        "Veja seus resultados em tempo real",
        "Acompanhe o funil de vendas",
        "Descubra o que funciona melhor",
        "Melhore baseado nos dados"
      ],
      gradient: "from-[#008855] to-[#00FF88]",
      delay: "delay-600"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Nossas <span className="text-green-400">Soluções</span>
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Sistema inteligente que trabalha 24 horas qualificando leads e agendando reuniões 
            para sua equipe focar apenas em fechar vendas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-400/10 to-green-400/5 border border-green-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">
              Pronto para Automatizar Suas Vendas?
            </h3>
            <p className="text-gray-300 mb-6">
              Veja como nossa IA pode dobrar suas vendas trabalhando 24 horas por dia.
            </p>
            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors duration-300 shadow-lg hover:shadow-green-400/25"
            >
              Ver Planos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;