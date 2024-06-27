"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Transaction } from "@/types/Transaction";

export const getTransactions = async (): Promise<{
  transactions?: Transaction[];
  error?: string;
}> => {
  // get the user from the database
  const { userId } = auth();

  // if user is not in the database, return an error
  if (!userId) {
    return { error: "User not found" };
  }

  // get all transactions for the user
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // if there are no transactions, return error
  if (!transactions || transactions.length === 0) {
    return { error: "No transactions found" };
  }

  return { transactions };
};
