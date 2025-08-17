import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Listings from './components/Listings'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Meet from './components/Meet';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Blog from './components/Blog';
import CallOrVisit from './components/CallOrVisit';
import Service from './components/Service';
import Logo from './components/Logo';
import Sold from './components/Sold';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Sold />
      <Listings />
      <Logo />
      <Service />

      <Meet />
      
      <CallOrVisit />
      
      <Footer />

            
    </div>
  )
}

export default App
