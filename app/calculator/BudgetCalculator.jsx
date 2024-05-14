'use client';
import React, { useState  } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
function BudgetCalculator() {
    const [income, setIncome] = useState(''); // Start with empty string
    const [error, setError] = useState(false);

  const calculateAllocation = () => {
    const needs = income * 0.5;
    const savings = income * 0.2;
    const wants = income * 0.3;
    return { needs, savings, wants };
  };

  const allocation = calculateAllocation();

  const data = [
    { name: 'Needs', value: allocation.needs },
    { name: 'Savings', value: allocation.savings },
    { name: 'Wants', value: allocation.wants },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const handleIncomeChange = (e) => {
    const newIncome = parseFloat(e.target.value);
    if (newIncome >= 0 || e.target.value === '') { // Allow positive numbers and empty input
      setIncome(e.target.value); 
      setError(false);
    } else {
      setError(true);
    }
  };

  const clearInput = () => {
    setIncome('');
    setError(false)
  };

  return (
    <div className="px-24 py-10 bg-white  shadow-slate-600 rounded-sm shadow-lg ">
      <div className="mb-6">
        <h2 className="text-4xl  text-center mb-2 text-black font-bold">Budget Calculator</h2>
        <p className="text-gray-600 text-left">
          The <span className='font-bold'> 50/20/30 </span> rule is a simple budgeting guideline that helps you manage your finances effectively. It suggests allocating your after-tax income into three categories:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>50% for Needs (essential expenses like housing, food, utilities)</li>
          <li>20% for Savings (financial goals like retirement, emergency fund)</li>
          <li>30% for Wants (discretionary spending like entertainment, hobbies)</li>
        </ul>
        <p className="text-gray-600 text-left mt-2">
          Use this calculator to visualize your budget allocation based on your monthly income.
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="income" className="block text-gray-700 text-sm font-bold mb-2">
          Monthly Income:
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            ₹
          </span>
          <input
            type="number"
            id="income"
            value={income}
            onChange={handleIncomeChange}
            className={`shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              error ? 'border-red-500' : ''
            }`}
          />
          <button
            onClick={clearInput}
            className= "bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded text-lg ml-2"
          >
            Clear
          </button>
        </div>
        {error && <p className="text-red-500 text-xs mt-1">Please enter a positive number.</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold">Needs</h3>
          <p className="text-3xl font-bold">₹{allocation.needs.toFixed(2)}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold">Savings</h3>
          <p className="text-3xl font-bold">₹{allocation.savings.toFixed(2)}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-lg font-semibold">Wants</h3>
          <p className="text-3xl font-bold ">₹{allocation.wants.toFixed(2)}</p>
        </div>
      </div>
      <div className='mt-6'>
      <ResponsiveContainer width="100%" height={300} >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={110} // Make it a donut chart
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Label value={`Total: ₹${income}`} position="center" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 md:mt-0 md:ml-4">
          <h3 className="text-lg font-semibold mb-2">Legend:</h3>
          <ul>
            <li className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[0] }}></div>
              Needs
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[1] }}></div>
              Savings
            </li>
            <li className="flex items-center">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[2] }}></div>
              Wants
            </li>
          </ul>
        </div>
        </div>
      </div>
  );
}

export default BudgetCalculator;
