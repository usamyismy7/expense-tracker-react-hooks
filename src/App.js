import React from 'react';
import Balance from './Components/Balance';
import { Header } from './Components/Header';
import { History } from './Components/History';
import { IncomeExpense } from './Components/IncomeExpense';
import { Transaction } from './Components/Transaction';

import { GlobalProvider } from './Components/Context/GlobalState';

import './App.css';

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}