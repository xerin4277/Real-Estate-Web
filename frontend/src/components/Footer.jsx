import React, { useRef, useEffect } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from '../img/logo-white.png';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-logo", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".footer-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.3,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".footer-social", {
        opacity: 0,
        scale: 0.6,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        delay: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="w-full bg-black text-white font-montserrat border-t border-gray-800 font-montserrat"
    >
      <div className="max-w-[1600px] mx-auto px-12 py-20 leading-relaxed">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col items-start">
            <img 
              src={logo} 
              alt="Marci Metzger Logo" 
              className="h-28 mb-6 -mt-6 footer-logo"
            />
            <p className="text-gray-300 footer-text">THE RIDGE REALTY GROUP</p>
            <p className="text-gray-300 footer-text">Pahrump Realtor</p>
          </div>

          <div className="flex flex-col items-start md:ml-20">
            <h3 className="text-mg font-semibold uppercase mb-3 tracking-wide text-white footer-text">Contact</h3>
            <p className="font-semibold footer-text">Marci Metzger</p>
            <p className="footer-text">
              <a href="tel:+17026667777" className="text-gray-300 hover:text-blue-400 transition">(206) 919-6886</a>
            </p>
            <p className="footer-text">
              <a href="mailto:marci@ridgerealty.com" className="text-gray-300 hover:text-blue-400 transition">marci@ridgerealty.com</a>
            </p>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-mg font-semibold uppercase mb-3 tracking-wide text-white footer-text">Office</h3>
            <p className="text-gray-300 footer-text">123 Main St.</p>
            <p className="text-gray-300 footer-text">Pahrump, NV 89048</p>
          </div>

          <div className="flex md:justify-end items-start space-x-6 text-2xl">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110 footer-social"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-transform transform hover:scale-110 footer-social"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-110 footer-social"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110 footer-social"><FaYoutube /></a>
          </div>
        </div>

        <hr className="my-12 border-gray-700" />

        <div className="text-xs text-gray-400 space-y-6 max-w-5xl leading-relaxed">
          <p className="footer-text">&copy; {new Date().getFullYear()} Marci Metzger & The Ridge Realty Group. All rights reserved.</p>
          <p className="footer-text">
            The Ridge Realty Group fully supports the principles of the Fair Housing Act and the Equal Opportunity Act. 
            Each office is independently owned and operated. Any services or products provided by independently owned 
            and operated franchisees are not provided by, affiliated with, or related to The Ridge Realty Group or any of its affiliates.
          </p>
        </div>

        <div className="flex justify-center md:justify-end mt-12 text-gray-400 text-sm space-x-8">
          <a href="#" className="hover:underline footer-text">Privacy Policy</a>
          <a href="#" className="hover:underline footer-text">Made by Jasper James Daquila</a>
        </div>
      </div>
    </footer>
  )
}
