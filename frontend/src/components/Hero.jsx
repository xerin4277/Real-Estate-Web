import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Hero() {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    // Fade in and slide up animation for text
    gsap.from(textRef.current.children, {
      y: 50,           // start 50px below
      opacity: 0,       // start invisible
      duration: 1.2,    // animation duration
      stagger: 0.3,     // animate children one after another
      ease: 'power3.out'
    })
  }, [])

  return (
    <div className="w-full h-screen relative bg-transparent text-white font-montserrat">
      {/* Text at bottom-left */}
      <div ref={textRef} className="absolute bottom-4 left-8 text-left">
        <h1 className="text-2xl ml-4">THE RIDGE REALTY GROUP</h1>
        <p className="text-[160px]">Pahrump Realtor</p>
      </div>
    </div>
  )
}

export default Hero
