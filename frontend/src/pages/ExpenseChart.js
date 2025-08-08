import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ExpenseChart({ expenses }) {
  const data = {
    labels: expenses.map((e) => e.description),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map((e) => e.amount),
        backgroundColor: 'rgba(75,192,192,0.5)',
      },
    ],
  };

  return (
    <div className="expense-chart">
      <h2>Expenses Chart</h2>
      <Bar data={data} />
    </div>
  );
}

