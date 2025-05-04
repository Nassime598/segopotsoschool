import React from 'react';
import { 
  BookOpen, 
  FileText, 
  BarChart, 
  Calendar,
  ArrowRight 
} from 'lucide-react';
import { RESOURCES } from '../../utils/constants';
import Button from '../ui/Button';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'FileText':
      return <FileText size={40} className="text-blue-800" />;
    case 'BarChart':
      return <BarChart size={40} className="text-blue-800" />;
    case 'BookOpen':
      return <BookOpen size={40} className="text-blue-800" />;
    case 'Calendar':
      return <Calendar size={40} className="text-blue-800" />;
    default:
      return <FileText size={40} className="text-blue-800" />;
  }
};

const Resources: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Educational Resources</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Access valuable tools and guides to help with your school selection process and educational journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESOURCES.map((resource, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4">
                {getIcon(resource.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a 
                href="#" 
                className="text-blue-800 font-medium inline-flex items-center hover:underline"
              >
                Learn more
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Need Personalized Assistance?</h3>
          <p className="text-lg text-blue-900 mb-6 max-w-2xl mx-auto">
            Our team of education specialists can help you find the perfect school based on your specific requirements.
          </p>
          <Button size="lg">
            Get Expert Advice
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;