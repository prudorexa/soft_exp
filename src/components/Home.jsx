
import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Expense Tracker</h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        Expense Tracker is a simple and intuitive tool to help you manage your finances efficiently. Track your expenses, set budgets, and achieve your financial goals with ease.
      </p>
      <div className="flex justify-center mb-8 weight-100">
        <img src="src/assets/istockphoto-1806905453-1024x1024.jpg" alt="weight=100%" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Track Expenses</h2>
          <p className="text-gray-700">
            Easily track your expenses on the go. Categorize your spending, add notes, and stay organized.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Set Budgets</h2>
          <p className="text-gray-700">
            Set monthly budgets for different expense categories. Receive notifications when you're approaching your limits.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Visualize Data</h2>
          <p className="text-gray-700">
            Visualize your spending patterns with insightful charts and graphs. Gain valuable insights to make informed financial decisions.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Achieve Goals</h2>
          <p className="text-gray-700">
            Set financial goals and track your progress over time. Stay motivated and celebrate your achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
