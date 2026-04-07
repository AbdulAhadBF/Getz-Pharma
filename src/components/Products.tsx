import { useState } from "react";
import { Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  { id: 1, name: "CardioMax", category: "Cardiology", type: "Tablet", desc: "Advanced hypertension management." },
  { id: 2, name: "NeuroCalm", category: "Neurology", type: "Capsule", desc: "Relief for severe migraines and nerve pain." },
  { id: 3, name: "OncoShield", category: "Oncology", type: "Injection", desc: "Targeted therapy for specific cell mutations." },
  { id: 4, name: "ImmunoBoost", category: "Immunology", type: "Syrup", desc: "Daily immune system support supplement." },
  { id: 5, name: "PediCare", category: "Pediatrics", type: "Syrup", desc: "Gentle fever and pain relief for children." },
  { id: 6, name: "VitaPlus", category: "Supplements", type: "Tablet", desc: "Complete daily multivitamin complex." },
  { id: 7, name: "HeartGuard", category: "Cardiology", type: "Tablet", desc: "Cholesterol lowering medication." },
  { id: 8, name: "BrainFocus", category: "Neurology", type: "Capsule", desc: "Cognitive enhancement and support." },
];

const categories = ["All", "Cardiology", "Neurology", "Oncology", "Immunology", "Pediatrics", "Supplements"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-lg text-blue-100">
            Comprehensive pharmaceutical solutions designed for optimal patient outcomes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? "bg-blue-600 text-white" 
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {product.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{product.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{product.desc}</p>
                </div>
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0">
                    View Details <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Inquire
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              <Button 
                variant="link" 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="mt-2"
              >
                Clear filters
              </Button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
