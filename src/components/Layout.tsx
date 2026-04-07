import { Link, Outlet, useLocation } from "react-router-dom";
import { Pill, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { cn } from "@/src/lib/utils";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "R&D", path: "/research" },
    { name: "Insights", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-2" /> +1 (800) 123-4567</span>
            <span className="flex items-center"><Mail className="w-3 h-3 mr-2" /> info@getzpharma.com</span>
          </div>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-blue-200 transition-colors">Careers</Link>
            <Link to="#" className="hover:text-blue-200 transition-colors">Investors</Link>
            <Link to="#" className="hover:text-blue-200 transition-colors">Media</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-white py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-900 tracking-tight">GetZ<span className="text-green-600">Pharma</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.path ? "text-blue-600" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="ml-4">
              <Link to="/contact">Request Sample</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium py-2 border-b border-gray-100",
                  location.pathname === link.path ? "text-blue-600" : "text-gray-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link to="/contact">Request Sample</Link>
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Pill className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">GetZ<span className="text-green-500">Pharma</span></span>
              </Link>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Dedicated to improving global health through innovative research, rigorous quality standards, and accessible pharmaceutical solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-blue-400 transition-colors">Our Products</Link></li>
                <li><Link to="/research" className="hover:text-blue-400 transition-colors">R&D and Innovation</Link></li>
                <li><Link to="/blog" className="hover:text-blue-400 transition-colors">News & Insights</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Product Categories</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/products?category=cardiology" className="hover:text-blue-400 transition-colors">Cardiology</Link></li>
                <li><Link to="/products?category=neurology" className="hover:text-blue-400 transition-colors">Neurology</Link></li>
                <li><Link to="/products?category=oncology" className="hover:text-blue-400 transition-colors">Oncology</Link></li>
                <li><Link to="/products?category=pediatrics" className="hover:text-blue-400 transition-colors">Pediatrics</Link></li>
                <li><Link to="/products?category=supplements" className="hover:text-blue-400 transition-colors">Supplements</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Info</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>123 Innovation Drive, Science Park<br />Boston, MA 02110, USA</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>+1 (800) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                  <span>info@getzpharma.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} GetZ Pharma. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
