import React from 'react';
import { ArrowRight, Database, Brain, Zap } from 'lucide-react';

const FlexGPT: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            <span className="text-[#00FF88]">C</span>FlexGPT mais do que uma CRM,
          </h2>
          <p className="text-2xl text-white">
            é controle total do seu funil.
          </p>
        </div>

        {/* Flowchart */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#00FF88]/10 rounded-full flex items-center justify-center mb-4 border-2 border-[#00FF88]">
                <Database className="w-8 h-8 text-[#00FF88]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dados</h3>
              <p className="text-gray-400 text-sm max-w-32">Coleta e organização de informações</p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:block">
              <ArrowRight className="w-6 h-6 text-[#00FF88]" />
            </div>
            <div className="lg:hidden">
              <div className="w-6 h-6 rotate-90">
                <ArrowRight className="w-6 h-6 text-[#00FF88]" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#00FF88]/10 rounded-full flex items-center justify-center mb-4 border-2 border-[#00FF88]">
                <Brain className="w-8 h-8 text-[#00FF88]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">IA</h3>
              <p className="text-gray-400 text-sm max-w-32">Processamento inteligente</p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden lg:block">
              <ArrowRight className="w-6 h-6 text-[#00FF88]" />
            </div>
            <div className="lg:hidden">
              <div className="w-6 h-6 rotate-90">
                <ArrowRight className="w-6 h-6 text-[#00FF88]" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#00FF88]/10 rounded-full flex items-center justify-center mb-4 border-2 border-[#00FF88]">
                <Zap className="w-8 h-8 text-[#00FF88]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ação</h3>
              <p className="text-gray-400 text-sm max-w-32">Execução automatizada</p>
            </div>

          </div>

          {/* Description */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nossa plataforma integra dados, inteligência artificial e automação para 
              criar um sistema completo de gestão de vendas que funciona 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexGPT;