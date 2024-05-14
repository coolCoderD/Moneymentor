'use client';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';

const ExpenseTracker = () => {
    const isBrowser = typeof window !== 'undefined';

    const [expenses, setExpenses] = useState(() => {
        if (isBrowser) {
            const savedExpenses = localStorage.getItem('expenses');
            return savedExpenses ? JSON.parse(savedExpenses) : [];
        }
        return [];
    });

    const [description, setDescription] = useState(() => {
        if (isBrowser) {
            return localStorage.getItem('description') || '';
        }
        return '';
    });

    const [amount, setAmount] = useState(() => {
        if (isBrowser) {
            return localStorage.getItem('amount') || '';
        }
        return '';
    });

    const [type, setType] = useState(() => {
        if (isBrowser) {
            return localStorage.getItem('type') || 'income';
        }
        return 'income';
    });

    const [balance, setBalance] = useState(() => {
        if (isBrowser) {
            const savedBalance = localStorage.getItem('balance');
            return savedBalance ? parseFloat(savedBalance) : 0;
        }
        return 0;
    });

    const [totalIncome, setTotalIncome] = useState(() => {
        if (isBrowser) {
            const savedIncome = localStorage.getItem('totalIncome');
            return savedIncome ? parseFloat(savedIncome) : 0;
        }
        return 0;
    });

    const [totalExpense, setTotalExpense] = useState(() => {
        if (isBrowser) {
            const savedExpense = localStorage.getItem('totalExpense');
            return savedExpense ? parseFloat(savedExpense) : 0;
        }
        return 0;
    });

    const [date, setDate] = useState(() => {
        if (isBrowser) {
            return localStorage.getItem('date') || new Date().toLocaleDateString();
        }
        return new Date().toLocaleDateString();
    });

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('expenses', JSON.stringify(expenses));
        }
    }, [expenses]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('description', description);
        }
    }, [description]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('amount', amount);
        }
    }, [amount]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('type', type);
        }
    }, [type]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('balance', balance);
        }
    }, [balance]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('totalIncome', totalIncome);
        }
    }, [totalIncome]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('totalExpense', totalExpense);
        }
    }, [totalExpense]);

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('date', date);
        }
    }, [date]);

    const addExpense = () => {
        if (!description.trim() || !amount.trim()) return;
        const newExpense = {
            id: expenses.length + 1,
            description,
            amount: parseFloat(amount),
            type,
            date,
        };
        setExpenses([...expenses, newExpense]);
        setBalance(type === 'expense' ? balance - parseFloat(amount) : balance + parseFloat(amount));
        if (type === 'expense') {
            setTotalExpense(totalExpense + parseFloat(amount));
        } else {
            setTotalIncome(totalIncome + parseFloat(amount));
        }
        setDescription('');
        setAmount('');
        setDate(new Date().toLocaleDateString());
    };

    const removeExpense = (id) => {
        const expenseToRemove = expenses.find((expense) => expense.id === id);
        if (expenseToRemove) {
            setExpenses(expenses.filter((expense) => expense.id !== id));
            setBalance(expenseToRemove.type === 'expense' ? balance + expenseToRemove.amount : balance - expenseToRemove.amount);
            if (expenseToRemove.type === 'expense') {
                setTotalExpense(totalExpense - expenseToRemove.amount);
            } else {
                setTotalIncome(totalIncome - expenseToRemove.amount);
            }
        }
    };

    return (
        <div className="container bg-zinc-100 shadow-2xl shadow-zinc-400 mt-5 p-5 col-md-8">
            <h4 className="mt-2 text-3xl font-semibold text-center">Your Daily Expense Tracker</h4>
            <AddTransaction
                description={description}
                setDescription={setDescription}
                amount={amount}
                setAmount={setAmount}
                date={date}
                setDate={setDate}
                type={type}
                setType={setType}
                balance={balance}
                setBalance={setBalance}
                totalIncome={totalIncome}
                setTotalIncome={setTotalIncome}
                totalExpense={totalExpense}
                setTotalExpense={setTotalExpense}
                addExpense={addExpense}
            />
            <TransactionList
                expenses={expenses}
                removeExpense={removeExpense}
            />
        </div>
    );
};

export default ExpenseTracker;