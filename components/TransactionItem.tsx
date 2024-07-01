import { Transaction } from "@/types/Transaction";
import React from "react";
import { addCommas } from "@/lib/utils";
import { toast } from "react-toastify";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>{sign + addCommas(Math.abs(transaction.amount))}</span>
    </li>
  );
};

export default TransactionItem;
