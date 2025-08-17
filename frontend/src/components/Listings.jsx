import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BackgroundImg from '../img/list-bg.jpg';
import House1 from '../img/house1.jpg';
import House2 from '../img/house2.jpg';
import House3 from '../img/house3.jpg';
import House4 from '../img/house4.jpg';
import House5 from '../img/house5.jpg';
import House6 from '../img/house6.jpg';

gsap.registerPlugin(ScrollTrigger);

function Listings() {
  const houses = [House1, House2, House3, House4, House5, House6];
  const cardsRef = useRef([]);

  useEffect(() => {
    // Scroll-in animation
    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

        card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            y: -10,
            boxShadow: '0px 20px 40px rgba(0,0,0,0.4)',
            duration: 0.15, // even faster
            ease: 'power1.out', // snappy
        });
        });

        card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
            duration: 0.15, // even faster
            ease: 'power1.out',
        });
        });
        
    });
  }, []);

  return (
    <section className="relative py-16 font-montserrat overflow-hidden">
      {/* Background Image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm z-0"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-white">
        <h2 className="text-5xl mb-10 text-center font-cinzel">Find Your Dream Home</h2>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-lg font-montserrat">
          <h2 className="text-3xl font-semibold mb-10">Property Listings</h2>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mb-4">
            <input
              type="text"
              placeholder="Location"
              className="w-full md:w-1/3 p-3 rounded-lg bg-white/20 text-white placeholder-white outline-none"
            />
            <select className="w-full md:w-1/3 p-3 rounded-lg bg-white/20 text-white outline-none">
              <option>Property Type</option>
              <option>House</option>
              <option>Condo</option>
              <option>Apartment</option>
            </select>
            <select className="w-full md:w-1/3 p-3 rounded-lg bg-white/20 text-white outline-none">
              <option>Sort By</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-end mb-4">
            <input
              type="number"
              placeholder="Bedrooms"
              className="w-full md:w-1/4 p-3 rounded-lg bg-white/20 text-white placeholder-white outline-none"
            />
            <input
              type="number"
              placeholder="Bathrooms"
              className="w-full md:w-1/4 p-3 rounded-lg bg-white/20 text-white placeholder-white outline-none"
            />
            <input
              type="number"
              placeholder="Min Price"
              className="w-full md:w-1/4 p-3 rounded-lg bg-white/20 text-white placeholder-white outline-none"
            />
            <input
              type="number"
              placeholder="Max Price"
              className="w-full md:w-1/4 p-3 rounded-lg bg-white/20 text-white placeholder-white outline-none"
            />
            <button className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/20 transition duration-300 md:ml-4">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-black/40 backdrop-blur-lg transition-transform duration-300"
            >
              <img
                src={house}
                alt={`House ${index + 1}`}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern House {index + 1}</h3>
                <p className="text-lg">Location: Downtown City</p>
                <p className="text-lg">3 Beds • 2 Baths</p>
                <p className="text-lg font-semibold mt-2">$500,000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Listings;
