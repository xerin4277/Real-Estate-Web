import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logoWebp from '../img/logo.webp' // Marci Metzger main logo
import Partner1 from '../img/partner1.png'
import Partner2 from '../img/partner2.png'
import Partner3 from '../img/partner3.jpeg'
import Partner4 from '../img/partner4.jpeg'

gsap.registerPlugin(ScrollTrigger)

function Logo() {
  const mainLogoRef = useRef(null)
  const partnerRefs = useRef([])

  useEffect(() => {
    gsap.from(mainLogoRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: mainLogoRef.current,
        start: 'top 90%',
      },
    })

    partnerRefs.current.forEach((logo, index) => {
      gsap.from(logo, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: logo,
          start: 'top 90%',
        },
      })
    })
  }, [])

  const partners = [Partner1, Partner2, Partner3, Partner4]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <div className="mb-12">
          <img 
            ref={mainLogoRef}
            src={logoWebp} 
            alt="Marci Metzger Logo" 
            className="mx-auto h-28 md:h-36 object-contain"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <img
              key={index}
              ref={el => partnerRefs.current[index] = el}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="h-16 md:h-20 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logo
