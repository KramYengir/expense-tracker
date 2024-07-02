"use client";
import { Transaction } from "@/types/Transaction";
import React from "react";
import { addCommas } from "@/lib/utils";
import { toast } from "react-toastify";
import deleteTransaction from "@/app/actions/deleteTransaction";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const handleDeleteTransaction = async (id: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete this transaction?`
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(id);
    if (error) {
      toast.error(error);
      return;
    }

    toast.success(message);
  };

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <span>{transaction.text}</span>
      <span className="date">
        {transaction.createdAt.getDate()}/{transaction.createdAt.getMonth()}/
        {transaction.createdAt.getFullYear()}
      </span>
      <span>
        {sign}£{addCommas(Math.abs(transaction.amount).toFixed(2))}
      </span>
      <button
        onClick={() => handleDeleteTransaction(transaction.id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
};

export default TransactionItem;
