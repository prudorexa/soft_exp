import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-7">About Us</h1>
      <p className="text-lg text-gray-800">
        Our expense tracker app is designed to help you keep track of your expenses and manage your finances more effectively. With our app, you can easily add and categorize your expenses, view your spending history, and set budgets to help you stay on track.
      </p>
      <p className="text-lg text-gray-800">
        Our team is dedicated to providing you with the best possible experience, and we are constantly working to improve our app and add new features. If you have any questions or feedback, please don't hesitate to contact us.
      </p>
      <p className="text-lg text-gray-800">
        Thank you for choosing our expense tracker app. We hope it helps you achieve your financial goals!
      </p>
    </div>
  );
};

export default About;