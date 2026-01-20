import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const navLinks = [
  { name: 'Our Story', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Craft', path: '/services' },
  { name: 'Connect', path: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/bloomwithgwendolyn' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/bloomwithgwendolyn' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/bloomwithgwendolyn' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Logo className="mb-6 [&_svg_circle]:fill-cream [&_svg_path:first-of-type]:fill-forest [&_svg_path:nth-of-type(2)]:fill-cream [&_svg_path:nth-of-type(3)]:fill-cream [&_span]:text-cream" />
            <p className="font-body text-cream/80 leading-relaxed max-w-md mb-6">
              At Bloom with Gwendolyn Consulting, we cultivate tailored solutions that facilitate
              transformational change, rooted in collaboration and resilience.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-body text-gold border border-gold/50 px-3 py-1 rounded-full">
                Women-Led
              </span>
              <span className="text-xs font-body text-gold border border-gold/50 px-3 py-1 rounded-full">
                Black-Owned
              </span>
              <span className="text-xs font-body text-gold border border-gold/50 px-3 py-1 rounded-full">
                Equity-Driven
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-cream/80 hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@bloomwithgwendolyn.com"
                className="flex items-center gap-3 font-body text-cream/80 hover:text-gold transition-colors duration-200"
              >
                <Mail size={18} />
                <span>info@bloomwithgwendolyn.com</span>
              </a>
              <a
                href="tel:+19139070916"
                className="flex items-center gap-3 font-body text-cream/80 hover:text-gold transition-colors duration-200"
              >
                <Phone size={18} />
                <span>(913) 907-0916</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-cream/30 rounded-full hover:border-gold hover:text-gold transition-all duration-200"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <p className="font-body text-sm text-cream/60 mt-2">
                @BloomwithGwendolyn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container-custom px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-cream/60">
            &copy; {currentYear} Bloom with Gwendolyn Consulting. All rights reserved.
          </p>
          <p className="font-body text-sm text-cream/60 italic">
            Where vision grows, and communities thrive.
          </p>
        </div>
      </div>
    </footer>
  );
}
