import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });
  const [newExpense, setNewExpense] = useState({ name: '', amount: 0, category: '' });
  const [updateExpense, setUpdateExpense] = useState(null);
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);
  const [salary, setSalary] = useState(() => {
    const storedSalary = localStorage.getItem('salary');
    return storedSalary ? parseFloat(storedSalary) : 0;
  });
  const [inputSalary, setInputSalary] = useState('');
  const chartRef = useRef(null);


  useEffect(() => {
    updateChart();
  }, [expenses]);

  useEffect(() => {
    const remainingBalance = salary - total;
    setBalance(remainingBalance);
  }, [total, salary]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('salary', salary.toString());
  }, [salary]);

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
    updateTotal(newExpenses);
  };

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    updateTotal(updatedExpenses);
  };

  const handleUpdateExpense = () => {
    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === updateExpense.id) {
        return { ...updateExpense };
      }
      return expense;
    });
    setExpenses(updatedExpenses);
    updateTotal(updatedExpenses);
    setUpdateExpense(null);
  };


  const updateTotal = (expenses) => {
    const totalAmount = expenses.reduce((total, expense) => total + Number(expense.amount), 0);
    setTotal(totalAmount);
  };

  const handleSetSalary = () => {
    const newSalary = parseFloat(inputSalary);
    if (!isNaN(newSalary)) {
      setSalary(newSalary);
      setInputSalary('');
    } else {
      alert('Please enter a valid salary.');
    }
  };

  
  return (
 <div className='card-container'>
     <div className="bg-gray-100 p-8 mx-3 md:mx-9 mt-5 mb-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-7">Expense Tracker</h1>
      <div className="Salary mb-4">
        <p className="text-2xl font-bold text-center text-gray-800 mb-2">Salary: ${salary}</p>
        <div className="flex items-center justify-center mb-4">
          <input
            className="mr-2 px-3 py-2  border rounded-lg bg-white-250 focus:border-blue-500"
            type="number"
            placeholder="Enter Salary"
            value={inputSalary}
            onChange={(e) => setInputSalary(e.target.value)}
          />
          <button
            className="bg-green-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-white"
            onClick={handleSetSalary}
          >
            Set Salary
          </button>
        </div>
      </div>
      <div className="balance mb-4">
        <p className="text-2xl font-bold text-center text-gray-800 mb-2">Balance: ${balance}</p>
      </div>
      <form onSubmit={(e) => e.preventDefault() || handleAddExpense()}>
        <div className="mb-2">
          <label className="block text-white-500 text-sm font-semibold mb-2 ml-6 mr-6 mx-5" htmlFor="">Expense Name</label>
          <input placeholder="Expense Name..." className="w-full px-7 py-2 mx-7  ml-5 border rounded-lg bg-white-250 focus:border-blue-800" required type="text" value={newExpense.name} onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })} />
        </div>
        <div className="mb-2">
          <label className="block text-white-500 text-sm font-semibold mb-2 ml-6 mx-5 " htmlFor="">Expense Amount</label>
          <input placeholder="Expense Amount..." className="w-full px-3 py-2 mx-5 mr-6 border rounded-lg bg-white-250 focus:border-blue-500" required type="number" value={newExpense.amount} onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })} />
        </div>
        <div className=" mb-2">
          <label className="block text-white-500 text-sm font-bold mb-2 ml-6 mx-8" htmlFor="">Expense Category</label>
          <select className="w-full px-3 py-2 mx-7 ml-5 mr-5 border rounded-lg bg-white-250 focus:border-blue-500" value={newExpense.category} onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}>
            <option value="">Select a category</option>
            <option value="Housing">Housing</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Transportation">Transportation</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
        <button className="bg-green-500 text-black-500 font-semibold px-2 py-2 mx-9 rounded-lg hover:bg-green-500 focus:outline-white" type="submit">Add Expense</button>
      </form>
      <div className='overflow-x-auto text-1g-black font-bold'>
      <table className="w-full text-left px-2 mx-7">
        <thead>
          <tr>
            <th className="py-2 px-3 text-lg font-bold">Category</th>
            <th className="py-2 px-5 text-lg font-bold">Name</th>
            <th className="py-2 px-5 text-lg font-bold">Amount</th>
            <th className="py-2 px-5 text-lg font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td className="py-2 px-5 text-lg font-bold">{expense.category}</td>
              <td className="py-2 px-5 text-lg font-bold">{expense.name}</td>
              <td className="py-2 px-5 text-lg font-bold">${expense.amount}</td>
              <td className="py-2 px-5 text-lg font-bold">
                <button onClick={() => setUpdateExpense(expense)} className='font-serif text-center bg-green-500 mt-1 ml-1 p-1 px-2  text-black-100 hover:text-gray-300 border border-gray-300 rounded-lg' >Update </button>
                <button onClick={() => handleDelete(expense.id)} className='font-serif text-center bg-green-500 mt-1 ml-1 p-1 px-2  text-black-100 hover:text-gray-300 border border-gray-300 rounded-lg' >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
      {updateExpense && (
        <form onSubmit={(e) => e.preventDefault() || handleUpdateExpense()}>
          <div className="mb-2">
            <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Expense Name</label>
            <input placeholder="Expense Name..." className="w-full px-7 py-2 border rounded-lg bg-white-250 focus:border-blue-800" required type="text" value={updateExpense.name} onChange={(e) => setUpdateExpense({ ...updateExpense, name: e.target.value })} />
          </div>
          <div className="mb-2">
            <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Expense Amount</label>
            <input placeholder="Expense Amount..." className="w-full px-3 py-2 border rounded-lg bg-white-250 focus:border-blue-500" required type="number" value={updateExpense.amount} onChange={(e) => setUpdateExpense({ ...updateExpense, amount: e.target.value })} />
          </div>
          <div className="mb-2">
            <label className="block text-white-500 text-sm font-semibold mb-2" htmlFor="">Expense Category</label>
            <select className="w-full px-3 py-2 border rounded-lg bg-white-250 focus:border-blue-500" value={updateExpense.category} onChange={(e) => setUpdateExpense({ ...updateExpense, category: e.target.value })}>
              <option value="">Select a category</option>
              <option value="Housing">Housing</option>
              <option value="Food">Food</option>
              <option value="Utilities">Utilities</option>
              <option value="Transportation">Transportation</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          <button className="bg-green-500 text-black-500 font-semibold px-2 py-2 rounded-lg hover:bg-blue-600 focus:outline-white" type="submit">Update</button>
        </form>
      )}
      <div className="mb-2">
        <label className="block text-white-500 py-2 px-5 text-lg font-bold text-sm font-semibold mb-2 " htmlFor="">Total Amount</label>
        <input type="text" className="form-control py-2 px-5 text-lg font-bold " placeholder="Enter Total" required disabled value={total} />
      </div>
      <canvas ref={chartRef} width="400" height="200"></canvas>
    </div>
 </div>
  );
};
export default ExpenseTracker;
