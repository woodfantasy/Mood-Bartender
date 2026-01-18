import React from 'react';
import { Hero } from '../components/home/Hero';
import { Concept } from '../components/home/Concept';
import { BentoGrid } from '../components/home/BentoGrid';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <Concept />
      <BentoGrid />
    </div>
  );
};