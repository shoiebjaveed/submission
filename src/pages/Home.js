import React from 'react'
import HeroSection from '../components/hero/Hero';
import B2 from '../components/banner/B2'
import About from '../components/about/About';
import Card from '../components/sections/Card';
import Card2 from '../components/sections/Card2';
import Card3 from '../components/sections/Card3';
import Shapes from '../components/helpers/input/Shapes';
import Card4 from '../components/sections/Card4';
import Card5 from '../components/sections/Card5';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
      <HeroSection />
      <B2 />
      <About />
      <Card />
      <Card2 />
      <Card3 />
      <Shapes />
      <Card4 />
      <Card5 />
      <Footer />
    </>
  )
}

export default Home;
