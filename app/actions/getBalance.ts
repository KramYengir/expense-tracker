import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const getBalance = async (): Promise<{
  balance?: number;
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

  // get a total of all the transactions using reduce
  const balance = transactions.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  return { balance };
};
