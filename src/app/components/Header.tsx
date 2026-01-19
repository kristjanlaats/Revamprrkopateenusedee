import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">RRK</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">RR Kopateenused</h1>
              <p className="text-xs text-gray-600">Professionaalsed maakaeve tööd</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Avaleht
            </button>
            <button onClick={() => scrollToSection('teenused')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Teenused
            </button>
            <button onClick={() => scrollToSection('meist')} className="text-gray-700 hover:text-orange-600 transition-colors">
              meist
            </button>
            <button onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-orange-600 transition-colors">
              Kontakt
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+3725551234" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+372 555 1234</span>
            </a>
            <Button onClick={() => scrollToSection('kontakt')} className="bg-orange-600 hover:bg-orange-700">
              Küsi pakkumist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                Avaleht
              </button>
              <button onClick={() => scrollToSection('teenused')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                Teenused
              </button>
              <button onClick={() => scrollToSection('meist')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                Meist
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-left text-gray-700 hover:text-orange-600 transition-colors">
                Kontakt
              </button>
              <a href="tel:+3725551234" className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+372 555 1234</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
