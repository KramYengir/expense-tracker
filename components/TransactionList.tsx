"use client";
import React, { use, useEffect, useState } from "react";
import { Transaction } from "@/types/Transaction";
import { getTransactions } from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";
import { SortAsc, SortDesc } from "lucide-react";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    const fetchTransactions = async () => {
      const { transactions, error } = await getTransactions(sort);
      if (error) {
        setError(error);
        setIsLoading(false);
      } else {
        setTransactions(transactions);
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [sort]);

  if (error && error?.length > 0) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="transaction-list">
      <div className="transaction-list-header">
        <h3>Transaction History</h3>
        <button
          aria-label="Sort transactions"
          onClick={() => setSort(sort === "asc" ? "desc" : "asc")}
        >
          {sort === "asc" ? <SortDesc /> : <SortAsc />}
        </button>
      </div>
      <ul className="list">
        {isLoading
          ? "Loading..."
          : transactions
          ? transactions?.map((transaction: Transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))
          : "No transactions found"}
      </ul>
    </div>
  );
};

export default TransactionList;
