"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const getIncome = async (): Promise<{
  income?: number;
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
  });

  // if there are no transactions, return error
  if (!transactions || transactions.length === 0) {
    return { error: "No transactions found" };
  }

  // get a total of all the positive transactions using reduce
  const income = transactions.reduce((acc, curr) => {
    if (curr.amount > 0) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);

  return { income };
};
