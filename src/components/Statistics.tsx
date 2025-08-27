import React from 'react';

const Statistics: React.FC = () => {
  const stats = [
    {
      number: '24/7',
      label: 'Disponibilidade',
      description: 'Sistema sempre ativo'
    },
    {
      number: '100%',
      label: 'Automação',
      description: 'Processos automatizados'
    },
    {
      number: '5%',
      label: 'Erro Humano',
      description: 'Redução significativa'
    },
    {
      number: '+100',
      label: 'Clientes',
      description: 'Empresas atendidas'
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4">
            <span className="text-[#00FF88]">N</span>úmeros impressionantes
          </h2>
          <p className="text-lg text-gray-400">
            Resultados que comprovam nossa eficiência
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="text-lg lg:text-xl font-bold text-[#00FF88] block">
                  {stat.number}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nossa plataforma já transformou centenas de negócios, 
            proporcionando resultados mensuráveis e crescimento sustentável.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;