import { Award, Users, Target, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    number: "15+",
    label: "Aastat kogemust",
  },
  {
    icon: Users,
    number: "500+",
    label: "Rahulolev klienti",
  },
  {
    icon: Target,
    number: "1000+",
    label: "Lõpetatud projekti",
  },
  {
    icon: Award,
    number: "100%",
    label: "Kvaliteedi garantii",
  },
];

export function About() {
  return (
    <section id="meist" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517089152318-42ec560349c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY4MzUzMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="RRKopateenused meeskond"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-3xl font-bold mb-2">15+</p>
              <p className="text-orange-100">
                aastat kogemust kopateenuste vallas
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">
              Meist
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Usaldusväärne partner teie projektideks
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              RR Kopateenused on Eestis tegutsev ettevõte, mis
              on spetsialiseerunud professionaalsetele maakaeve-
              ja kopateenustele. Meie pikaajaline kogemus ja
              kaasaegne tehnika tagavad igale projektile
              kvaliteetse ja kiire tulemuse.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Oleme uhked oma professionaalse meeskonna ja
              uusima tehnika üle. Meie eesmärk on pakkuda
              klientidele parimat võimalikku teenust
              konkurentsivõimelise hinnaga.
            </p>

            {/* Why Choose Us */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Sertifitseeritud spetsialistid
                  </h4>
                  <p className="text-gray-600">
                    Meie meeskond on läbinud vajalikud
                    koolitused ja omab kõiki sertifikaate
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Kaasaegne tehnika
                  </h4>
                  <p className="text-gray-600">
                    Kasutame uusimat ja regulaarselt hooldatud
                    seadmeid
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Paindlik teenus
                  </h4>
                  <p className="text-gray-600">
                    Kohandame oma teenused iga kliendi
                    vajadustele
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <Icon className="w-8 h-8 text-orange-600" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.number}
                      </p>
                      <p className="text-sm text-gray-600">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}