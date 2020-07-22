import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const totalPlus = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalMinus =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0) * -(1).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money-plus'>
          ${totalPlus}
        </p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id='money-minus' className='money-minus'>
          ${totalMinus}
        </p>
      </div>
    </div>
  );
};
