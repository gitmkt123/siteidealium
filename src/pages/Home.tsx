import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import TargetAudience from '../components/TargetAudience';
import UrgencyCTA from '../components/UrgencyCTA';
import Pricing from '../components/Pricing';

import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Testimonials />
      <TargetAudience />
      <UrgencyCTA />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;