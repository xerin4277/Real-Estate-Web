import React, { useEffect, useRef } from 'react'
import sampleImage from '../img/marci.webp'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Meet() {
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".meet-image", {
        opacity: 0,
        x: -60,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true
        }
      })

      gsap.from(".meet-title", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true
        }
      })

      gsap.from(".meet-subtitle, .meet-text", {
        opacity: 0,
        y: 25,
        stagger: 0.15,
        duration: 0.6,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true
        }
      })

      if (quoteRef.current) {
        const words = quoteRef.current.querySelectorAll("span")
        gsap.from(words, {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 85%",
            once: true
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const quote = `I love that small-town feeling that our community offers. Spectacular golf courses, 
    parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. 
    Working or retired, fast-paced or looking to relax... there's a place for you here!
    I enjoy living in the Mountain Falls community and will strive to find you a home 
    that will suit you just as this community does me.`

  const splitWords = quote.split(" ").map((word, i) => (
    <span key={i} className="inline-block mr-1">
      {word}
    </span>
  ))

  return (
    <section 
      ref={sectionRef} 
      className="w-full min-h-screen flex flex-col justify-center items-center font-montserrat bg-white px-6 md:px-16 lg:px-24 py-20 text-center"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-12 lg:gap-16">
        
        <div className="flex justify-center md:w-2/5">
          <img
            src={sampleImage}
            alt="Marci J Metzger"
            className="meet-image w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] h-auto object-cover rounded-2xl shadow-xl hover:scale-105 transform transition duration-500"
          />
        </div>

        <div className="md:w-3/5 text-left space-y-5">
          <h4 className="meet-subtitle text-sm md:text-base tracking-wider uppercase text-gray-500">
            Meet
          </h4>
          <h2 className="meet-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-cinzel">
            Marci J Metzger
          </h2>
          <h3 className="meet-subtitle text-lg md:text-xl lg:text-2xl font-semibold text-gray-600">
            Realtor & Property Consultant
          </h3>
          <p className="meet-text text-gray-700 text-base md:text-lg leading-relaxed">
            Marci J Metzger is a dedicated real estate professional with years of experience
            helping clients find their dream homes. With a passion for community and a commitment
            to excellence, Marci ensures every client receives personalized guidance throughout
            the buying or selling process.
          </p>
          <p className="meet-text text-gray-700 text-base md:text-lg leading-relaxed">
            In addition to her real estate expertise, Marci is known for her strong communication
            skills, attention to detail, and ability to make complex transactions smooth and
            stress-free. Whether you're a first-time buyer or a seasoned investor, Marci is your
            trusted partner in real estate.
          </p>
        </div>
      </div>

      <div className="meet-quote border-l-4 border-gray-400 pl-6 italic text-gray-600 mt-14 md:mt-16 w-full md:w-4/5 lg:w-3/4 mx-auto text-left">
        <h4 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">In Her Words</h4>
        <p ref={quoteRef} className="text-gray-700 text-base md:text-lg leading-relaxed">
          {splitWords}
        </p>
      </div>
    </section>
  )
}

export default Meet
