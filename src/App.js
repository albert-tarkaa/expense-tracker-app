import React from 'react';
import Header from './components/Header';
import './App.css';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TrabsactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TrabsactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
