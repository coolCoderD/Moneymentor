import React from 'react';

const AddTransaction = ({ 
    description, setDescription, amount, setAmount, date, setDate, type, setType, 
    balance, setBalance, totalIncome, setTotalIncome, totalExpense, setTotalExpense, 
    addExpense 
}) => {

    return (
        <div className="container mt-4"> 
            <div className="card shadow-sm p-4">  {/* Card container */}

                {/* Balance */}
                <h3 className="text-center mb-3">
                    Balance: <strong className="text-dark">₹{balance.toFixed(2)}</strong>
                </h3>

                {/* Income and Expense */}
                <div className="row mb-3">
                    <div className="col-6 text-center">
                        <h3>Income: <span className="text-success">₹{totalIncome.toFixed(2)}</span></h3>
                    </div>
                    <div className="col-6 text-center">
                        <h3>Expense: <span className="text-danger">₹{totalExpense.toFixed(2)}</span></h3>
                    </div>
                </div>

                {/* Form Inputs */}
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="row mb-3">
                    <div className="col-4">
                        <input type="number" className="form-control" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <select className="form-select" value={type} onChange={e => setType(e.target.value)} style={{ height: '40px' }} >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                    </div>
                </div>

                {/* Add Transaction Button */}
                <button className="bg-slate-700 text-white px-3 py-2 rounded-lg" onClick={addExpense}>
                    Add Transaction
                </button>
            </div>
        </div>
    );
};

export default AddTransaction;
