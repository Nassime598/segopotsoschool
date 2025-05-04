import React from 'react';
import { BookOpen, Users, Trophy, Lightbulb } from 'lucide-react';
import Card, { CardContent } from '../ui/Card';

const Programs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Programs</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            At Segopotso Middle School, we offer a comprehensive educational experience designed to nurture academic excellence and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent>
              <div className="flex items-start">
                <BookOpen className="h-8 w-8 text-blue-800 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Academic Curriculum</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Mathematics and Physical Sciences</li>
                    <li>• Languages (English, Setswana, Afrikaans)</li>
                    <li>• Life Sciences and Geography</li>
                    <li>• History and Life Orientation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-start">
                <Trophy className="h-8 w-8 text-blue-800 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Sports Program</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Soccer and Netball Teams</li>
                    <li>• Athletics Program</li>
                    <li>• Inter-school Competitions</li>
                    <li>• Physical Education</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-start">
                <Users className="h-8 w-8 text-blue-800 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Student Development</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Leadership Programs</li>
                    <li>• Career Guidance</li>
                    <li>• Mentorship Opportunities</li>
                    <li>• Life Skills Workshops</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-start">
                <Lightbulb className="h-8 w-8 text-blue-800 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Extra-Curricular</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Cultural Activities</li>
                    <li>• Debate Club</li>
                    <li>• Environmental Club</li>
                    <li>• Community Service Projects</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;