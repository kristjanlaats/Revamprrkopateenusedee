import { Wrench, Home, Building2, TreePine, Droplets, Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

const services = [
  {
    icon: Home,
    title: 'Vundamendi kaeve',
    description: 'Professionaalne vundamendi kaevamine uute hoonete jaoks. Täpne ja ohutu töö.',
  },
  {
    icon: Building2,
    title: 'Maatööd',
    description: 'Ulatuslikud maatööd, pinnase tasandamine ja teisaldamine. Kõik maastikutööd.',
  },
  {
    icon: Droplets,
    title: 'Drenaažitööd',
    description: 'Drenaažisüsteemide paigaldamine ja hooldus. Kaitseme teie vara vee eest.',
  },
  {
    icon: TreePine,
    title: 'Maastiku kujundus',
    description: 'Maastiku ettevalmistus, kujundamine ja haljastustööd.',
  },
  {
    icon: Truck,
    title: 'Materjali transport',
    description: 'Pinnase, kruusa ja liiva transport. Kiire ja usaldusväärne veoteenus.',
  },
  {
    icon: Wrench,
    title: 'Kommunikatsioonid',
    description: 'Kaablite ja torude paigaldus, trasside kaevamine ja taastamine.',
  },
];

export function Services() {
  return (
    <section id="teenused" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Meie teenused</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Mida me teeme?
          </h2>
          <p className="text-xl text-gray-600">
            Pakume laia valikut kopateenuseid erinevatele projektidele. Meie professionaalne meeskond tagab kvaliteetse tulemuse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ei leidnud sobivat teenust?
          </h3>
          <p className="text-xl text-orange-100 mb-6">
            Võta meiega ühendust - leiame lahenduse igale projektile!
          </p>
          <a 
            href="tel:+3725551234"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Helista kohe: +372 555 1234
          </a>
        </div>
      </div>
    </section>
  );
}
