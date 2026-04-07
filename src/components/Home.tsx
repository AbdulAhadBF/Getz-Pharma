import { ArrowRight, CheckCircle2, FlaskConical, ShieldCheck, Users, Activity, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
            alt="Pharmaceutical Laboratory"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-800/50 text-blue-200 text-sm font-semibold tracking-wider mb-6 border border-blue-700/50 backdrop-blur-sm">
              ADVANCING GLOBAL HEALTH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Innovative Science for a <span className="text-green-400">Healthier Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              GetZ Pharma is dedicated to developing, manufacturing, and delivering high-quality, accessible pharmaceutical products to improve lives worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white border-none">
                <Link to="/products">Explore Our Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">25+</p>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">200+</p>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Products Developed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">10k+</p>
              <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">Healthcare Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose GetZ Pharma</h2>
            <p className="text-lg text-gray-600">
              We combine cutting-edge research with rigorous quality control to deliver pharmaceutical solutions you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Our state-of-the-art manufacturing facilities adhere to the strictest global cGMP standards, ensuring every product is safe and effective.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <FlaskConical className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative R&D</h3>
              <p className="text-gray-600 leading-relaxed">
                We invest heavily in research and development to bring novel formulations and improved delivery systems to market.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Everything we do is driven by a commitment to improving patient outcomes and making essential medicines accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Therapeutic Areas</h2>
              <p className="text-lg text-gray-600">
                Discover our comprehensive range of high-quality medications across key therapeutic categories.
              </p>
            </div>
            <Link to="/products" className="hidden md:flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              View All Products <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cardiology", desc: "Advanced solutions for heart health and hypertension.", img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=800&auto=format&fit=crop" },
              { title: "Neurology", desc: "Treatments for central nervous system disorders.", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop" },
              { title: "Oncology", desc: "Targeted therapies for various types of cancer.", img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=800&auto=format&fit=crop" },
              { title: "Immunology", desc: "Innovative treatments for autoimmune conditions.", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop" }
            ].map((category, i) => (
              <Link key={i} to={`/products?category=${category.title.toLowerCase()}`} className="group block rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={category.img} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-gray-600 text-sm mb-4">{category.desc}</p>
                  <span className="text-blue-600 text-sm font-medium flex items-center group-hover:underline">
                    Explore Category <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Partner With Us for Better Healthcare</h2>
          <p className="text-xl text-blue-100 mb-10">
            Whether you are a healthcare provider, distributor, or looking for contract manufacturing, we are ready to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link to="/contact">Request a Callback</Link>
            </Button>
            <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
              <Link to="/products">Download Product Catalog</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
