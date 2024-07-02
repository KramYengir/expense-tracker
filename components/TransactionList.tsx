import React from "react";
import { Transaction } from "@/types/Transaction";
import { getTransactions } from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions
          ? transactions?.map((transaction: Transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          : "No transactions found"}
      </ul>
    </div>
  );
};

export default TransactionList;
