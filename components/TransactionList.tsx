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
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions
          ? transactions?.map((transaction: Transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          : "No transactions found"}
      </ul>
    </>
  );
};

export default TransactionList;
