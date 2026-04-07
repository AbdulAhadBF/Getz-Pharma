import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const posts = [
  {
    id: 1,
    title: "Breakthrough in Targeted Oncology Therapy",
    excerpt: "Recent clinical trial results show promising outcomes for our new targeted therapy approach in treating specific solid tumors.",
    date: "Oct 15, 2023",
    author: "Dr. Robert Taylor",
    category: "Research",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Expanding Access to Essential Medicines in Developing Nations",
    excerpt: "GetZ Pharma announces a new initiative to partner with global health organizations to improve supply chains in underserved regions.",
    date: "Sep 28, 2023",
    author: "Elena Rodriguez",
    category: "Corporate",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Understanding the New Guidelines for Hypertension Management",
    excerpt: "A comprehensive review of the latest clinical guidelines and what they mean for healthcare providers and patients.",
    date: "Sep 10, 2023",
    author: "Medical Affairs Team",
    category: "Clinical Insights",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">News & Insights</h1>
          <p className="text-lg text-blue-100">
            Stay updated with the latest from GetZ Pharma and the healthcare industry.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link to="#" className="hover:text-blue-600 transition-colors">{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 self-start hover:text-blue-800">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Get the latest news, clinical insights, and company updates delivered directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
