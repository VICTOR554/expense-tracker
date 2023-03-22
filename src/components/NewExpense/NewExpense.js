import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense() {
  function saveExpenseDataHandler(inputExpenseData) {
    const expenseData = {
      ...inputExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
