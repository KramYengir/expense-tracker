import React from "react";
import { Transaction } from "@/types/Transaction";
import { getTransactions } from "@/app/actions/getTransactions";

const TransactionList = async () => {
  const { transactions, error } = await getTransactions();
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions?.map((transaction: Transaction) => (
          <li key={transaction.id}>
            <div className="list-item">
              <p>{transaction.text}</p>
              <p>{transaction.createdAt.toDateString()}</p>
              <p>{transaction.amount}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
