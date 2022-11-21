import React from 'react';
import HeroSection from './components/HeroSection';

const About = () => {
  const propsData = {
    name: 'Avi ECommerce',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente.',
  };
  return <HeroSection myData={propsData} />;
};

export default About;
