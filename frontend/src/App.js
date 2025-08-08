import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import ExpenseForm from './pages/ExpenseForm';
import ExpenseChart from './pages/ExpenseChart';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <Router>
      <nav className="nav">
        <Link to="/">Add Expense</Link>
        <Link to="/chart">View Chart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ExpenseForm addExpense={addExpense} />} />
        <Route path="/chart" element={<ExpenseChart expenses={expenses} />} />
      </Routes>
    </Router>
  );
}

export default App;

