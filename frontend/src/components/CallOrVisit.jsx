import React, { useEffect, useRef } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contactBg from "../img/contact-bg.webp";

gsap.registerPlugin(ScrollTrigger);

export default function CallOrVisit() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".contact-bg", {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".contact-card", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".contact-left > *", {
        opacity: 0,
        y: 25,
        duration: 1,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".fake-input", {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".send-btn", {
        opacity: 0,
        y: 20,
        scale: 0.85,
        duration: 0.9,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.to(".send-btn", {
        y: -4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={sectionRef}
  className="relative bg-fixed bg-center bg-cover py-20 px-6 font-montserrat overflow-hidden"
  style={{
    backgroundImage: `url(${contactBg})`,
    backgroundAttachment: "fixed", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-10 contact-card">
    <div className="contact-left">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight font-cinzel">
        Call or Visit
      </h2>
      <p className="text-lg mb-8 text-gray-700 leading-relaxed">
        Ready to find your perfect property? Contact{" "}
        <span className="font-semibold text-gray-900">
          Marci Metzger & The Ridge Realty Group
        </span>{" "}
        today.
      </p>

      <div className="space-y-5">
        <p className="flex items-center text-lg">
          <FaMapMarkerAlt className="text-gray-600 mr-3 text-xl" />
          3190 HW-160, Suite F, Pahrump, NV 89048
        </p>
        <p className="flex items-center text-lg">
          <FaPhoneAlt className="text-gray-600 mr-3 text-xl" />
          (206) 919-6886
        </p>
        <p className="flex items-center text-lg">
          <FaWhatsapp className="text-gray-600 mr-3 text-xl" />
          Message us on WhatsApp
        </p>
      </div>

      <div className="mt-8">
        <p className="font-semibold text-gray-900 text-lg">Office Hours:</p>
        <p className="text-gray-700">Open daily: 8:00 am – 7:00 pm</p>
        <p className="text-gray-700">
          Appointments outside hours available upon request.
        </p>
      </div>
    </div>

    <div>
      <h3 className="text-3xl font-bold text-gray-900 mb-8 font-cinzel">
        Send Us a Message
      </h3>

      <div className="space-y-6">
        <div className="fake-input w-full px-5 py-4 border-b border-gray-400 text-gray-600 text-lg">
          Name
        </div>
        <div className="fake-input w-full px-5 py-4 border-b border-gray-400 text-gray-600 text-lg">
          Email*
        </div>
        <div className="fake-input w-full px-5 py-4 border-b border-gray-400 text-gray-600 text-lg">
          Phone
        </div>
        <div className="fake-input w-full px-5 py-4 border-b border-gray-400 text-gray-600 text-lg">
          Message
        </div>

        <div className="send-btn px-8 py-4 bg-gray-800 text-white font-semibold text-lg rounded-full text-center shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer">
          Send Message
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-6 max-w-md leading-relaxed">
        This site is protected by reCAPTCHA and the Google Privacy Policy
        and Terms of Service apply.
      </p>
    </div>
  </div>
</section>

  );
}
