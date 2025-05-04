import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SchoolInfo from '../components/FeaturedSchools';
import Programs from '../components/Programs';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <SchoolInfo />
        <Programs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;