import React from "react";
import { getIncome } from "@/app/actions/getIncome";
import { getExpenses } from "@/app/actions/getExpenses";
import { addCommas } from "@/lib/utils";

const IncomeExpense = async () => {
  const { income } = await getIncome();
  const { expenses } = await getExpenses();

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">£{addCommas(income ?? 0)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">£{addCommas(expenses ?? 0)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
