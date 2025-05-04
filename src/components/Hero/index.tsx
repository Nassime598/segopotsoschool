import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] opacity-20 bg-cover bg-center" />
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Segopotso Middle School
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Empowering minds and shaping futures through comprehensive secondary education
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>Mothibistad, Northern Cape</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <span>073 839 2046</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;