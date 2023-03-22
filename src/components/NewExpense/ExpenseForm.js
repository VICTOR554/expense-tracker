import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm() {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  //Using one State
  //   const [userInput, setUserInput] = useState({
  //     inputTitle: '',
  //     inputAmount: '',
  //     inputDate: '',
  //   });

  function titleChangeHandler(event) {
    setInputTitle(event.target.value);

    //Using one state but relies on previous state and can cause problems
    // setUserInput({
    //   ...userInput,
    //   inputTitle: event.target.value,
    // });

    //Using one state but using a function to rely on previous state to remove problems
    // setUserInput((prevState) => {
    //   return { ...prevState, inputTitle: event.target.value };
    // });
  }

  function amountChangeHandler(event) {
    setInputAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   inputAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //     return { ...prevState, inputAmount: event.target.value };
    //   });
  }

  function dateChangeHandler(event) {
    setInputDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   inputDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //     return { ...prevState, inputDate: event.target.value };
    //   });
  }

  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__action">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
