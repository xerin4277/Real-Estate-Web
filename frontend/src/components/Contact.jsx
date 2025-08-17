import React from 'react'

export default function Contact() {
  return (
    <section className="w-full bg-gray-100 py-16 font-montserrat">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-12">

        {/* Left: Headline & Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Find Your Perfect Property?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Contact our team today and start your journey.
          </p>

          {/* Optional contact info */}
          <div className="text-gray-700 space-y-2">
            <p><strong>Phone:</strong> <a href="tel:+17026667777" className="text-blue-500 hover:underline">(702) 666-7777</a></p>
            <p><strong>Email:</strong> <a href="mailto:marci@ridgerealty.com" className="text-blue-500 hover:underline">marci@ridgerealty.com</a></p>
            <p><strong>Office:</strong> Pahrump, NV</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Get in Touch
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}
