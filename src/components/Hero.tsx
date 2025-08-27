import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const animatedWords = ['mais vendas', 'mais leads', 'mais resultados', 'mais conversões', 'mais lucro'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedWords.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    const particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 50 : 150;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        color: Math.random() > 0.7 ? '#00FF88' : '#00CC6A'
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * 0.3;
            ctx.strokeStyle = '#00FF88';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });
      
      requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      
      {/* Animated Particles Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />
      
      {/* Organic Glowing Elements */}
      <div className="absolute top-[15%] left-[15%] w-[80px] sm:w-[120px] md:w-[200px] lg:w-[280px] xl:w-[320px] h-[60px] sm:h-[100px] md:h-[180px] lg:h-[240px] xl:h-[280px] bg-[#00FF88]/20 rounded-[60%_40%_70%_30%] blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[25%] right-[15%] w-[60px] sm:w-[100px] md:w-[160px] lg:w-[220px] xl:w-[260px] h-[50px] sm:h-[80px] md:h-[140px] lg:h-[180px] xl:h-[220px] bg-[#00CC6A]/15 rounded-[45%_55%_35%_65%] blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-[40%] left-[5%] w-[40px] sm:w-[60px] md:w-[100px] lg:w-[120px] xl:w-[140px] h-[40px] sm:h-[70px] md:h-[120px] lg:h-[140px] xl:h-[160px] bg-[#00FF88]/10 rounded-[80%_20%_60%_40%] blur-2xl animate-pulse delay-500"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-32 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="text-center max-w-6xl mx-auto flex flex-col justify-center min-h-[calc(100vh-160px)] sm:min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-80px)]">
          {/* Main Heading */}
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight px-2 sm:px-4 md:px-6 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block mb-1 sm:mb-2">Gere</span>
            <span className={`inline-block bg-gradient-to-r from-[#00FF88] to-[#00CC6A] bg-clip-text text-transparent transition-all duration-500 ${
              isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
            }`}>
              {animatedWords[currentWordIndex]}
            </span>
            <span className="block mt-1 sm:mt-2">com inteligência artificial</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-6 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Nossa plataforma de automação inteligente <span className="text-[#00FF88] font-semibold">qualifica leads, agenda reuniões e fecha vendas</span> 24 horas por dia, 7 dias por semana. Triplique seus agendamentos qualificados enquanto reduz o tempo gasto em tarefas repetitivas.
          </p>

          {/* CTA Button */}
          <div className={`flex justify-center items-center mb-6 sm:mb-8 md:mb-12 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-[#00FF88] to-[#00CC6A] text-black px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl text-base sm:text-lg md:text-xl font-bold hover:from-[#00CC6A] hover:to-[#008855] transition-all duration-300 shadow-lg hover:shadow-[#00FF88]/25 hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto"
            >
              <span className="flex items-center justify-center gap-1 sm:gap-2">
                Começar Agora
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;