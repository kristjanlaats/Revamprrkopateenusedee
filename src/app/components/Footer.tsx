import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">RRK</span>
              </div>
              <span className="text-xl font-bold">RRK Kopateenused</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professionaalsed maakaeve- ja kopateenused üle Eesti. Usaldusväärne partner teie projektideks.
            </p>
            <p className="text-gray-400 text-sm">
              Reg. nr: 12345678<br />
              KMKR nr: EE123456789
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kiirlingid</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Avaleht
                </a>
              </li>
              <li>
                <a href="#teenused" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Teenused
                </a>
              </li>
              <li>
                <a href="#meist" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Meist
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="tel:+3725551234" className="text-gray-400 hover:text-orange-500 transition-colors">
                  +372 555 1234
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@rrkopateenused.ee" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@rrkopateenused.ee
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Tallinn, Harjumaa<br />Eesti
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} RRK Kopateenused. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
}
