import { Link } from 'react-router-dom';

const Blog = () => {
  const data = [
    {
      id: 1,
      title: "How to Use an Expense Tracker for Better Financial Management",
      description: "Managing personal finances can be challenging, but with the help of an expense tracker, you can gain better control over your spending habits and budget. In this blog post, we'll explore how to effectively use an expense tracker to improve your financial management."

    },
    {
      id: 2,
      title: "1. Set Financial Goals",
      image: "src/assets/goal setting.jpg",
      description: "Before you start tracking your expenses, it's essential to set clear financial goals. Determine what you want to achieve, whether it's saving for a vacation, paying off debt, or building an emergency fund. Having specific goals will help you stay motivated and focused."


    },
    {
      id: 3,
      title: "2. Track Your Spending",
      image: "src/assets/track spendings.jpg",
      description: "Use your expense tracker to record all your expenditures, including bills, groceries, entertainment, and other purchases. Be thorough and consistent in tracking your spending to get an accurate picture of where your money goes each month"
      

    },
    {
      id: 4,
      title: "3. Categorize Your Expenses",
      image: "src/assets/Categorize expenses.jpg",
      description: "Organize your expenses into categories such as housing, transportation, food, utilities, and entertainment This categorization will help you identify areas where you can potentially cut back on spending and allocate more resources to your financial goals."
    },
    {
      id: 5,
      title: "4. Analyze Your Spending Patterns",
      image: "src/assets/analyze spending patterns.webp",
      description: "Regularly review your expense tracker to analyze your spending patterns Look for trends, such as excessive dining out or impulse purchases, and identify areas where you can make adjustments to align with your financial goals."
    },
    {
      id: 6,
      title: "5. Create a Budget",
      image: "src/assets/create budget.webp",
      description:"Based on your spending analysis, create a realistic budget that outlines your income, expenses, and savings goals. Allocate a portion of your income to essential expenses, debt repayment, savings, and discretionary spending."
    },
    {
      id: 7,
      title: "6. Track Your Progress",
      image: "src/assets/track progress.webp",
      description:"Regularly monitor your progress towards your financial goals using your expense tracker Celebrate small victories and adjust your budget as needed to stay on track. Over time, you'll build better financial habits and achieve greater financial stability."
    },
    {
      id: 8,
      title: "Conclusion",
      image: "src/assets/conclusion.jpg",
      description:"An expense tracker is a valuable tool for improving your financial management skills and achieving your financial goals By tracking your spending, analyzing your habits, and creating a budget, you can take control of your finances and build a brighter financial future"
    }
  ];
  return (
    <div className='grid grid-cols-2 gap-4 mx-10 mt-8 mb-8 bg-white rounded-lg shadow-md p-8'>
      {data.map((blog) => (
        <div key={blog.id} className='border p-4'>
          <div className='text-xl font-bold text-red'>{blog.title}</div>
          <div><img src={blog.image} alt={{ width: 100, height: 200 }} /></div>
          <div className='text-gray-700 mb-4'>{blog.description}</div>
          <Link to={`/blog/${blog.id}`} state={blog}>
            <button className="font-serif text-center bg-red-500 mt-4 text-gray-100 hover:text-gray-300 border border-gray-300 rounded-lg">View blog</button>
          </Link>

        </div> 
      ))}
    </div>
  );
};
export default Blog;



// import React from 'react';

// const ExpenseTrackerBlogPost = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-8">
//       <h1 className="text-3xl font-bold mb-4">How to Use an Expense Tracker for Better Financial Management</h1>
//       <p className="text-gray-700 mb-4">Managing personal finances can be challenging, but with the help of an expense tracker, you can gain better control over your spending habits and budget. In this blog post, we'll explore how to effectively use an expense tracker to improve your financial management.</p>
      
//       <h2 className="text-2xl font-bold mb-2">1. Set Financial Goals</h2>
//       <p className="text-gray-700 mb-4">Before you start tracking your expenses, it's essential to set clear financial goals. Determine what you want to achieve, whether it's saving for a vacation, paying off debt, or building an emergency fund. Having specific goals will help you stay motivated and focused.</p>
      
//       <h2 className="text-2xl font-bold mb-2">2. Track Your Spending</h2>
//       <p className="text-gray-700 mb-4">Use your expense tracker to record all your expenditures, including bills, groceries, entertainment, and other purchases. Be thorough and consistent in tracking your spending to get an accurate picture of where your money goes each month.</p>
      
//       <h2 className="text-2xl font-bold mb-2">3. Categorize Your Expenses</h2>
//       <p className="text-gray-700 mb-4">Organize your expenses into categories such as housing, transportation, food, utilities, and entertainment. This categorization will help you identify areas where you can potentially cut back on spending and allocate more resources to your financial goals.</p>
      
//       <h2 className="text-2xl font-bold mb-2">4. Analyze Your Spending Patterns</h2>
//       <p className="text-gray-700 mb-4">Regularly review your expense tracker to analyze your spending patterns. Look for trends, such as excessive dining out or impulse purchases, and identify areas where you can make adjustments to align with your financial goals.</p>
      
//       <h2 className="text-2xl font-bold mb-2">5. Create a Budget</h2>
//       <p className="text-gray-700 mb-4">Based on your spending analysis, create a realistic budget that outlines your income, expenses, and savings goals. Allocate a portion of your income to essential expenses, debt repayment, savings, and discretionary spending.</p>
      
//       <h2 className="text-2xl font-bold mb-2">6. Track Your Progress</h2>
//       <p className="text-gray-700 mb-4">Regularly monitor your progress towards your financial goals using your expense tracker. Celebrate small victories and adjust your budget as needed to stay on track. Over time, you'll build better financial habits and achieve greater financial stability.</p>
      
//       <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
//       <p className="text-gray-700">An expense tracker is a valuable tool for improving your financial management skills and achieving your financial goals. By tracking your spending, analyzing your habits, and creating a budget, you can take control of your finances and build a brighter financial future.</p>
//     </div>
//   );
// };

// export default ExpenseTrackerBlogPost;





