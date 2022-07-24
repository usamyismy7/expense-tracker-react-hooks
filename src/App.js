import './App.css';
import { Balance } from './Components/Balance';
import { Header } from './Components/Header';
import { History } from './Components/History';
import { IncomeExpense } from './Components/IncomeExpense';
import { Transaction } from './Components/Transaction';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <IncomeExpense />
      <History />
      <Transaction />
    </div>
  );
}