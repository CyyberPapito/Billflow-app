import { useState } from 'react';

export default function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addExpense({ id: Date.now(), description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

