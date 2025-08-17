import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import kitchen from '../img/kitchen.jpeg';
import pool from '../img/pool.jpeg';
import keys from '../img/house-keys.jpeg';

gsap.registerPlugin(ScrollTrigger);

export default function Sold() {
  const cardsRef = useRef([]);
  const introRef = useRef(null);
  const soldRef = useRef(null);

  useEffect(() => {
    // Animate Marci Metzger intro
    if (introRef.current) {
      gsap.from(introRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 90%',
        },
      });
    }

    // Animate "Get it Sold" heading
    if (soldRef.current) {
      gsap.from(soldRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: soldRef.current,
          start: 'top 90%',
        },
      });
    }

    // Animate each card
    gsap.utils.toArray(cardsRef.current).forEach((card) => {
      const image = card.querySelector('img');
      const content = card.querySelector('.card-content');

      gsap.from(image, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });

      gsap.from(content, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <div className="bg-gray-50 w-full min-h-screen flex flex-col items-center py-20 px-6">
      {/* Marci Metzger Intro */}
      <div ref={introRef} className="max-w-7xl text-center mb-16 space-y-6 px-4">
        <h1 className="text-5xl font-cinzel text-gray-900">
          Local Expertise – Global Connections
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Marci Metzger represents the pinnacle of luxury living, specializing in exquisite homes, prestigious estates, and exclusive properties.
        </p>
        <p className="text-lg md:text-xl text-gray-700">
          With deep-rooted relationships locally and a network that spans internationally, she delivers unparalleled service to discerning clients.
        </p>
        <p className="text-lg md:text-xl text-gray-700">
          Each property in her portfolio reflects exceptional quality, sophistication, and a commitment to excellence that is truly unmatched.
        </p>
      </div>

      {/* Get it Sold Heading */}
      <h2 ref={soldRef} className="text-4xl md:text-5xl font-cinzel text-gray-900 mb-12 text-center">
        Get It Sold
      </h2>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-12 max-w-screen-xl w-full">
        {[kitchen, pool, keys].map((img, index) => {
          const titles = [
            'Top Residential Sales Last 5 Years',
            "Don't Just List It...",
            'Guide to Buyers',
          ];
          const descriptions = [
            'We helped nearly 90 clients in 2021 and closed 28.5 million in sales! Our team works hard every day to grow and learn, ensuring we continually excel in our market.',
            'Get it SOLD! We leave no stone unturned to ensure our listings reach every potential buyer, maximizing the sale price for your home.',
            'Nobody knows the market like we do. Enjoy working with a pro, equipped with market analysis, contractors on speed dial, upgrade lists, and more!',
          ];

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex-1 min-w-[280px] max-w-sm bg-white rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500"
            >
              <img
                src={img}
                alt={titles[index]}
                className="w-full h-72 object-cover rounded-t-3xl"
              />
              <div className="p-8 card-content">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  {titles[index]}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {descriptions[index]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
