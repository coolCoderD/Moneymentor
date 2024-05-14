'use client';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function InvestmentCalculator() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [goal, setGoal] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('moderate');
  const [output, setOutput] = useState(null);

  const calculateInvestment = () => {
    const potentialInvestment = Math.max(0, income - expenses);
    const riskFactors = { low: 0.1, moderate: 0.15, high: 0.2 };
    const recommendedInvestment = potentialInvestment * riskFactors[riskTolerance];

    let monthsToGoal = 0;
    if (recommendedInvestment > 0) {
      monthsToGoal = Math.ceil(goal / recommendedInvestment);
    }

    setOutput({
      potentialInvestment,
      recommendedInvestment,
      monthsToGoal,
    });
  };



  const data = [
    { name: 'Income', amount: income },
    { name: 'Expenses', amount: expenses },
    { name: 'Potential Investment', amount: output?.potentialInvestment || 0 },
    { name: 'Recommended Investment', amount: output?.recommendedInvestment || 0 },
  ];

  return (
    <div className="px-24 py-10 bg-white  shadow-slate-600 rounded-sm shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4  text-black">
        Investment Calculator
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Discover how much you can invest and how long it will take to reach your goals.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Monthly Income (₹):</label>
          <input 
            type="number" 
            value={income} 
            onChange={(e) => setIncome(parseFloat(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Monthly Expenses (₹):</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(parseFloat(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Investment Goal (₹):</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(parseFloat(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2">Risk Tolerance:</label>
          <select
            value={riskTolerance}
            onChange={(e) => setRiskTolerance(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="text-center mb-6">
        <button onClick={calculateInvestment} className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded text-lg ml-2">
          Calculate
        </button>
      </div>


      {output && (
        <div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" /> 
            </BarChart>
          </ResponsiveContainer>
          
          {output.monthsToGoal > 0 && (
            <div className="mt-4 bg-gray-100 p-4 rounded-md">
              <p>Estimated Time to Reach Goal: {output.monthsToGoal} months</p>
            </div>
          )}

          {output.monthsToGoal === 0 && (
            <div className="mt-4 bg-red-100 p-4 rounded-md text-red-500">
              <p>Your goal is not reachable with the recommended investment amount.</p>
            </div>
          )}
        </div>
      )}
        {output && (
        <div className="bg-gray-100 p-4 rounded-md">
          <p>Potential Monthly Investment: ₹{output.potentialInvestment.toFixed(2)}</p>
          <p>Recommended Investment: ₹{output.recommendedInvestment.toFixed(2)}</p>
          {output.monthsToGoal > 0 && (
            <p>Estimated Time to Reach Goal: {output.monthsToGoal} months</p>
          )}
          {output.monthsToGoal === 0 && (
            <p>Your goal is not reachable with the recommended investment amount.</p>
          )}
        </div>
      )}

<div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4 text-slate-600">

      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">What You'll Need:</h3>
          <ul className="list-disc list-inside text-gray-700 ">
            <li className='mb-2'>Monthly Income (₹): Your take-home pay after taxes.</li>
            <li className='mb-2'>Monthly Expenses (₹): Essential living costs (rent, food, bills).</li>
            <li className='mb-2'>Investment Goal (₹): The amount you want to have invested.</li>
            <li className='mb-2'>
              Risk Tolerance: Your comfort level with market fluctuations:
              <ul className="list-disc list-inside">
                <li className='mb-2' >
                  <span className="font-semibold text-green-500">Low:</span> Prefer safe investments with stable but potentially lower returns.
                </li>
                <li className='mb-2'>
                  <span className="font-semibold text-yellow-500">Moderate:</span> Willing to accept some risk for potentially higher returns.
                </li>
                <li className='mb-2'>
                  <span className="font-semibold text-red-500">High:</span> Comfortable with greater risk for potentially much higher returns.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">What You'll Get:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li className='mb-2'>Potential Monthly Investment: The amount left after expenses.</li>
            <li className='mb-2'>
              Recommended Investment: A tailored suggestion based on your risk tolerance.
            </li>
            <li className='mb-2'>Estimated Time to Reach Goal: An approximation of how long it could take.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">How to Use:</h3>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Enter your information in the corresponding fields.</li>
          <li>Select your risk tolerance.</li>
          <li>Click "Calculate" to see your results.</li>
        </ol>
      </div>
    </div>
  

    </div>
  );
}

export default InvestmentCalculator;