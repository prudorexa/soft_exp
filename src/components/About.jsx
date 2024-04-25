
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">Welcome to Expense Tracker, your personal finance assistant. Our mission is to help you manage your expenses efficiently and make smarter financial decisions.</p>
      <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img src="src/assets/prudence.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mb-4 md:mr-8 md:mb-0" />
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-2">Prudence Mathu</h3>
          <p className="text-gray-700 mb-2">Co-Founder & CEO</p>
          <p className="text-gray-700">Prudence is passionate about personal finance and technology. With years of experience in software development, she leads our team with innovation and dedication.</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img src="src/assets/diana.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mb-4 md:mr-8 md:mb-0 mt-5" />
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-2">Diana Kara</h3>
          <p className="text-gray-700 mb-2">Co-Founder & CTO</p>
          <p className="text-gray-700">Diana is a tech enthusiast with expertise in web development and cybersecurity. She ensures our platform's security and reliability.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img src=" src/assets/Eliud.jpg" alt="Team Member 3" className="w-24 h-24 rounded-full mb-4 md:mr-8 md:mb-0" />
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-2">Eliud Muthui</h3>
          <p className="text-gray-700 mb-2">Co-Founder & Director</p>
          <p className="text-gray-700">Prudence is passionate about personal finance and technology. With years of experience in software development, she leads our team with innovation and dedication.</p>
        </div>
        </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img src="src/assets/Lydia.jpg" alt="Team Member 4" className="w-24 h-24 rounded-full mb-4 md:mr-8 md:mb-0" />
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-2">Lydia Gathoni</h3>
          <p className="text-gray-700 mb-2">Co-Founder & Producer</p>
          <p className="text-gray-700">Lydia is passionate about personal finance and technology. With years of experience in software development, she leads our team with innovation and dedication.</p>
        </div>
    </div>
    </div>
    
  );
};

export default AboutUs;
