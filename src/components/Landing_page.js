import React from 'react';
import '../index';


const HeroSection = () => {
  return (
    <header className="bg-gray-800 text-white text-center py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Coding Circle</h1>
        <p className="text-lg">Learn, Code, and Connect with fellow coders and seniors!</p>
        <div className="mt-8">
          <a href="#" className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-200">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 px-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Why Choose Coding Circle?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">DSA(Data Structures and Algorithms)</h3>
            <p>Here is a guide for you to direct you on the roadmap of success....</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Ongoing Projects With PCSB</h3>
            <p>Get a chance to work with the PCSB club of PICT!</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">CP(Competitive Programming)</h3>
            <p>The roadmap to the journey on how to begin with Competitive Programming</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Coding Skills?</h2>
        <p className="text-lg mb-8">Join Coding Circle today and embark on a journey of continuous learning!</p>
        <a href="#" className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-200">
          Join Now
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <p>&copy; 2023 Coding Circle. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-gray-800">
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default App;

