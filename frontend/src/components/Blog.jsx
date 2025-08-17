import React from 'react'

export default function Blog() {
  const articles = [
    {
      title: "Top 10 Tips for Buying Your First Home in Pahrump",
      excerpt: "Navigate the Pahrump real estate market with confidence. Essential tips for first-time homebuyers to make the right choice.",
      link: "#",
      img: "https://via.placeholder.com/400x200" 
    },
    {
      title: "How to Stage Your Home for a Quick Sale",
      excerpt: "Maximize your home's appeal in Pahrump. Learn effective staging techniques that attract buyers and increase value.",
      link: "#",
      img: "https://via.placeholder.com/400x200"
    },
    {
      title: "Understanding Pahrump Real Estate Trends in 2025",
      excerpt: "Stay informed with the latest local market trends. Discover insights into property values, neighborhoods, and investment opportunities in Pahrump.",
      link: "#",
      img: "https://via.placeholder.com/400x200"
    }
  ]

  return (
    <section className="w-full bg-gray-50 py-20 font-montserrat">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 tracking-wide">
          Blog & Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {article.title}
                </h3>
                <p className="text-gray-600 flex-grow">{article.excerpt}</p>
                <a
                  href={article.link}
                  className="mt-6 text-blue-600 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
