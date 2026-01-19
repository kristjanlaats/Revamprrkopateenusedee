import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1652922660696-60c68ec51582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTc2ODM4ODcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kopamasina teenused"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-orange-600/20 border border-orange-600/50 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 text-sm">✓ Üle 15 aasta kogemust</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Professionaalsed
            <span className="text-orange-500"> Kopateenused</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Pakume kvaliteetseid maakaeve- ja kopateenuseid eramutele, korteriühistutele ja äriettevõtetele. 
            Kiire ja usaldusväärne teenus kogu Eestis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              onClick={() => scrollToSection('kontakt')}
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6"
            >
              Küsi pakkumist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('teenused')}
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6"
            >
              Vaata teenuseid
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Kiire reaktsioon</h3>
                <p className="text-gray-400 text-sm">Reageerime päringutele 24h jooksul</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Kaasaegne tehnika</h3>
                <p className="text-gray-400 text-sm">Uusim ja hästi hooldatud varustus</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Kvaliteet garanteeritud</h3>
                <p className="text-gray-400 text-sm">Kõik tööd tähtaegselt ja kvaliteetselt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
