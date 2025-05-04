import React from 'react';
import { MapPin, Phone, School, Building2 } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';

const SchoolInfo: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">School Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Basic Details</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-600">
                          <School className="mr-2 h-5 w-5 text-blue-800" />
                          <span>EMIS: 300101920</span>
                        </li>
                        <li className="flex items-center text-gray-600">
                          <Building2 className="mr-2 h-5 w-5 text-blue-800" />
                          <span>Phase: Secondary School</span>
                        </li>
                        <li className="flex items-start text-gray-600">
                          <MapPin className="mr-2 h-5 w-5 text-blue-800 mt-1" />
                          <div>
                            <p>Mothibistad</p>
                            <p>Northern Cape</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Contact Information</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-600">
                          <Phone className="mr-2 h-5 w-5 text-blue-800" />
                          <span>073 839 2046</span>
                        </li>
                        <li className="text-gray-600">
                          <span className="font-medium">Addressee:</span> S.D TAMOSE
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Municipality Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><span className="font-medium">District Municipality:</span> Kgalagadi District Municipality</li>
                    <li><span className="font-medium">Local Municipality:</span> Moshaweng Municipality</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Specialization</h3>
                  <p className="text-gray-600">Comprehensive Education Program</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SchoolInfo;