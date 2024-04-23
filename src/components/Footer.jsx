


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white p-4 text-center">
      <p>&copy; 2023 My Expense Tracker. All rights reserved.</p>
      <p>Check your account statements.
        <br />
        Categorize your expenses.
        <br />
        Build a budget that works for your expenses.
        <br />
        Use budgeting or expense-tracking apps.
        <br />
        Explore other expense-tracking methods.
        <br />
        Look for ways to lower your expenses.</p>
      <p>Contact us at <a href="mailto:info@myexpensetracker.com" className="text-blue-500 hover:underline">info@myexpensetracker.com</a></p>
    </footer>
  );
};

export default Footer;