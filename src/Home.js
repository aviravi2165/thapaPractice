import React from 'react';
import FeatureProducts from './components/FeatureProducts';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
  const heroPropsData = {
    name: 'Avi Store',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente.',
  };
  return (
    <>
      <HeroSection myData={heroPropsData} />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
