import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <Fragment>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            placeholder='Enter your Text'
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount
            <br />
            [Negative - Expense, Positive - Income]
          </label>
          <input
            type='number'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </Fragment>
  );
};
