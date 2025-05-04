import React from 'react';
import { School, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <School className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Segopotso Middle School</span>
            </div>
            <p className="text-blue-100 mb-4">
              Providing quality comprehensive secondary education in Mothibistad, Northern Cape.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Mothibistad, Northern Cape</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-100">073 839 2046</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-blue-100">info@schools4sa.co.za</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">School Hours</h3>
            <div className="text-blue-100">
              <p>Monday - Friday: 7:30 AM - 2:30 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Administrative Office</h4>
              <p className="text-blue-100">Monday - Friday: 8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Segopotso Middle School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;