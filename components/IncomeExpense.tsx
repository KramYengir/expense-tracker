import React from "react";

const IncomeExpense = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">£3000</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">£2000</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
