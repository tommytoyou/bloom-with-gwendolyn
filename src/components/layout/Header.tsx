import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between px-4 md:px-8">
        <Link to="/" className="relative z-50">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-medium transition-colors duration-200 hover:text-gold ${
                location.pathname === link.path
                  ? 'text-forest border-b-2 border-gold pb-1'
                  : 'text-forest-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm">
            Schedule Consultation
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 p-2 text-forest"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-cream z-40 md:hidden transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-2xl transition-colors duration-200 hover:text-gold ${
                  location.pathname === link.path
                    ? 'text-forest'
                    : 'text-forest-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-4">
              Schedule Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
