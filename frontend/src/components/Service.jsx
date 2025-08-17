import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BackgroundImg from '../img/background.jpg'
import RealEstateImg from '../img/real_estate.jpg'
import CommercialImg from '../img/commercial.jpg'
import ExpertiseImg from '../img/expertise.jpg'

gsap.registerPlugin(ScrollTrigger)

function Service() {
  const cardsRef = useRef([])
  const headingRef = useRef(null)

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    })

    cardsRef.current.forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      })

      tl.from(card.querySelector('img'), {
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        scale: 0.95,
        duration: 1,
        ease: 'power4.out'
      })
      .from(card.querySelector('div'), {
        opacity: 0,
        x: index % 2 === 0 ? 50 : -50,
        duration: 1,
        ease: 'power4.out'
      }, '-=0.7')
    })
  }, [])

  return (
    <section className="relative py-20 font-montserrat">
      <div 
        className="absolute inset-0 bg-black/70 bg-fixed bg-center bg-cover -z-10 filter blur-sm"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      ></div>

      <div className="max-w-[1400px] mx-auto px-6 text-white relative z-10">
        <h2 
          ref={headingRef} 
          className="text-5xl font-bold mb-24 text-center font-cinzel"
        >
          Our Services
        </h2>

        {[
          {
            img: RealEstateImg,
            title: "Real Estate Done Right",
            text: "Feeling nervous about your property journey? Don’t be. Whether you’re buying or selling your home, exploring investment opportunities, or just curious about the market, our team ensures you have the best experience possible.",
            reverse: false
          },
          {
            img: CommercialImg,
            title: "Commercial & Residential",
            text: "From cozy condos to luxury mansions, big or small, we help you find the right property at the right price. Fixer-uppers or dream homes—we handle it all. We live, work, and play in this community, so we’re invested in helping you make the smartest moves with your hard-earned money.",
            reverse: true
          },
          {
            img: ExpertiseImg,
            title: "Rely on Expertise",
            text: "Have questions about affordability, credit, or loan options? We connect you with the right experts to get answers quickly. We make sure you feel confident and informed every step of the way.",
            reverse: false
          }
        ].map((service, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className={`flex flex-col md:flex-row ${service.reverse ? 'md:flex-row-reverse' : ''} items-center mb-20 md:mb-32 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6`}
          >
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full md:w-1/2 h-[350px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-4xl font-semibold mb-6">{service.title}</h3>
              <p className="text-lg leading-relaxed mb-6">{service.text}</p>
              <button className="px-6 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white/10 hover:scale-105 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Service
