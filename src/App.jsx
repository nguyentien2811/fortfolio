import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Experience />
        <Banner />
        <Footer/>
      </main>
    </>
  );
}

export default App;
