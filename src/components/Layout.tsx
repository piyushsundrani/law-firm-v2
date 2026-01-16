import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-white sticky top-0 z-40 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <Scale className="h-8 w-8 text-amber-500 group-hover:text-amber-400 transition-colors" />
              <div>
                <h1 className="text-2xl font-serif font-bold">Sterling & Associates</h1>
                <p className="text-xs text-slate-400">Attorneys at Law</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`hover:text-amber-500 transition-colors font-medium ${isActive('/') ? 'text-amber-500' : ''}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`hover:text-amber-500 transition-colors font-medium ${isActive('/about') ? 'text-amber-500' : ''}`}
              >
                About Us
              </Link>
              <Link
                to="/practice-areas"
                className={`hover:text-amber-500 transition-colors font-medium ${isActive('/practice-areas') ? 'text-amber-500' : ''}`}
              >
                Practice Areas
              </Link>
              <Link
                to="/resources"
                className={`hover:text-amber-500 transition-colors font-medium ${isActive('/resources') ? 'text-amber-500' : ''}`}
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className={`hover:text-amber-500 transition-colors font-medium ${isActive('/contact') ? 'text-amber-500' : ''}`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-md font-medium transition-colors"
              >
                Free Consultation
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <Link
                to="/"
                className={`block hover:text-amber-500 transition-colors ${isActive('/') ? 'text-amber-500' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block hover:text-amber-500 transition-colors ${isActive('/about') ? 'text-amber-500' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/practice-areas"
                className={`block hover:text-amber-500 transition-colors ${isActive('/practice-areas') ? 'text-amber-500' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <Link
                to="/resources"
                className={`block hover:text-amber-500 transition-colors ${isActive('/resources') ? 'text-amber-500' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/contact"
                className={`block hover:text-amber-500 transition-colors ${isActive('/contact') ? 'text-amber-500' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-amber-500" />
                <h3 className="font-serif font-bold text-lg">Sterling & Associates</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Providing exceptional legal services with integrity and dedication since 1995.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                <li><Link to="/practice-areas" className="hover:text-amber-500 transition-colors">Practice Areas</Link></li>
                <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/practice-areas#corporate" className="hover:text-amber-500 transition-colors">Corporate Law</Link></li>
                <li><Link to="/practice-areas#family" className="hover:text-amber-500 transition-colors">Family Law</Link></li>
                <li><Link to="/practice-areas#criminal" className="hover:text-amber-500 transition-colors">Criminal Defense</Link></li>
                <li><Link to="/practice-areas#estate" className="hover:text-amber-500 transition-colors">Estate Planning</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>123 Legal Avenue</li>
                <li>Suite 500</li>
                <li>New York, NY 10001</li>
                <li className="pt-2">Phone: (555) 123-4567</li>
                <li>Email: info@sterling-law.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Sterling & Associates. All rights reserved.</p>
            <p className="mt-2">
              <span className="text-amber-500">Disclaimer:</span> This website is for informational purposes only and does not constitute legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
