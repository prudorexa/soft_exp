
import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Chart as ChartJS } from 'chart.js/auto'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    // { id: 1, name: 'Rent', amount: 500, category: 'housing' },
    // { id: 2, name: 'Groceries', amount: 200, category: 'food' },
    // { id: 3, name: 'Electricity', amount: 300, category: 'utilities' },
  ]);

  const [newExpense, setNewExpense] = useState({ name: '', amount: 0, category: '' });
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);
  const [salary, setSalary] = useState(100000);

  const chartRef = useRef(null);


  useEffect(() => {
    updateChart();
  }, [expenses]);

  const updateChart = () => {
    const categories = {};
    expenses.forEach((expense) => {
      categories[expense.category] = categories[expense.category] || 0;
      categories[expense.category] += expense.amount;
    });
    const labels = Object.keys(categories);
    const data = Object.values(categories);
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      chartRef.current.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Expense Amount',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(52, 152, 235, 0.5)',
              'rgba(255, 205, 85, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 52, 0.5)',
              'rgba(255, 99, 132, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(52, 152, 235, 1)',
              'rgba(255, 205, 85, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 52, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  };



  const handleAddExpense = () => {
    const newExpenses = [...expenses, { id: Date.now(), ...newExpense }];
    setExpenses(newExpenses);
    setNewExpense({ name: '', amount: 0, category: '' });

    // setBalance(balance - newExpense.amount);


    const totalAmount = expenses.reduce((total, expense) => total + Number(expense.amount), 0);
    setTotal(totalAmount);

    const totalSalary = salary;
    setSalary(totalSalary);

    const remainingBalance = salary - totalAmount;
    setBalance(remainingBalance);

    function handleDelete(id) {
      const newExpense = expenses.filter(expense => expense.id !== index);
      setExpenses(newExpense);



      const updatedExpenses = expenses.filter(expense => expense.id !== index);
      setExpenses(updatedExpenses);



      const totalAmount = updatedExpenses.reduce((total, expense) => total + Number(expense.amount), 0);
      setTotal(totalAmount);


      const handleCategorizeExpense = (id, category) => {
        const newExpenses = expenses.map((expense) => {
          if (expense.id === id) {
            return { ...expense, category };
          }
          return expense;

        });
        setExpenses(newExpenses);

      };
    };
  }


  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-7">Expense Tracker</h1>
      <div className="Salary">
        <p className="text-2xl font-bold text-center text-gray-800 mb-2">Salary: ${salary}</p>

      </div>


      <div className="balance">
        <p className="text-2xl font-bold text-center text-gray-800 mb-2">Balance: ${balance}</p>
      </div>


      <form onSubmit={(e) => e.preventDefault() || handleAddExpense()}>

      
        <div className="mb-2">
          <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Expense Name</label>
          <input placeholder="Expense Name..." className="w-full px-7 py-2 border rounded-lg bg-white-250 focus:border-blue-800" required type="text" value={newExpense.name} onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })} />
        </div>
        <div className="mb-2">
          <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Expense Amount</label>
          <input placeholder="Expense Amount..." className="w-full px-3 py-2 border rounded-lg bg-white-250 focus:border-blue-500" required type="number" value={newExpense.amount} onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })} />
        </div>


        <div className="mb-2">
          <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Expense Category</label>
          <select className="w-full px-3 py-2 border rounded-lg bg-white-250 focus:border-blue-500" value={newExpense.category} onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}>
            <option value="">Select a category</option>
            <option value="Housing">Housing</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Personal">Personal</option>
          </select>
        </div>


        <button className="bg-green-500 text-white-500 font-semibold px-2 py-2 rounded-lg hover:bg-green-500 focus:outline-white" type="submit">Add Expense</button>
      </form>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-3 text-lg font-bold">Category</th>
            <th className="py-2 px-5 text-lg font-bold">Name</th>
            <th className="py-2 px-5 text-lg font-bold">Amount</th>

          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="py-2 px-5 text-lg font-bold">{expense.category}</td>
              <td className="py-2 px-5 text-lg font-bold">{expense.name}</td>
              <td className="py-2 px-5 text-lg font-bold">${expense.amount}</td>

              <td className="py-2 px-5 text-lg font-bold">





                <button onClick={() => handleDelete(expense.id)} className='font-serif text-center bg-blue-500 mt-1 ml-1 p-2 px-3 text-gray-100 hover:text-gray-300 border border-gray-300 rounded-lg' >Delete</button>

              </td>
            </tr>
          ))}
        </tbody >

      </table>
      <div className="mb-2">
        <label className="block text-white-500 py-2 px-5 text-lg font-bold text-sm font-semibold mb-2 " htmlFor="">Total Amount</label>
        <input type="text" className="form-control py-2 px-5 text-lg font-bold " placeholder="Enter Total" required disabled
          value={total} />
      </div>
      <canvas ref={chartRef} width="400" height="200"></canvas>


    </div>


  );
};

export default ExpenseTracker;

