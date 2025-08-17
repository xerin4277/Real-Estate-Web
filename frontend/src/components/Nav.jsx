import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from '../img/logo-white.png'
import logoWebp from '../img/logo.webp'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const leftLinksRef = useRef(null)
  const rightLinksRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (!navRef.current) return

    gsap.set(navRef.current, { y: '-100%', opacity: 0, backgroundColor: 'rgba(0,0,0,0)', padding: '24px 32px' })

    gsap.to(navRef.current, { y: '0%', opacity: 1, duration: 1, ease: 'power3.out' })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        gsap.to(navRef.current, { y: '-100%', duration: 0.4, ease: 'power2.out' })
      } else {
        gsap.to(navRef.current, { y: '0%', duration: 0.4, ease: 'power2.out' })
      }

      setScrolled(currentScrollY > 100)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return

    gsap.to(navRef.current, {
      backgroundColor: scrolled ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,0)',
      padding: scrolled ? '12px 32px' : '24px 32px', 
      duration: 0.6,
      ease: 'power2.out'
    })

    gsap.to(logoRef.current, {
      scale: scrolled ? 0.75 : 1,
      duration: 0.6,
      ease: 'power2.out'
    })

    gsap.to([leftLinksRef.current, rightLinksRef.current], {
      color: scrolled ? '#000000' : '#ffffff',
      duration: 0.6,
      ease: 'power2.out'
    })
  }, [scrolled])

  return (
    <nav ref={navRef} className="w-full fixed top-0 left-0 z-50 font-montserrat">
      <div className="flex items-center justify-between px-8">
        <div ref={leftLinksRef} className="flex space-x-8">
          <a href="#">Home</a>
          <a href="#">Listings</a>
        </div>

        <div className="flex justify-center">
          <img
            ref={logoRef}
            src={scrolled ? logoWebp : logo}
            alt="logo"
            className="w-[320px] h-auto object-contain"
          />
        </div>

        <div ref={rightLinksRef} className="flex space-x-8">
          <a href="#">Let's Move</a>
          <a href="#">About Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
