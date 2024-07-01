"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionResult {
  message?: string;
  error?: string;
}

async function deleteTransaction(id: string): Promise<TransactionResult> {
  // Get the current user
  const { userId } = auth();

  if (!userId) {
    return {
      error: "User not found",
    };
  }

  try {
    await db.transaction.delete({
      where: {
        id: id,
        userId,
      },
    });

    //refresh the page
    revalidatePath("/");

    return {
      message: "Transaction deleted successfully!",
    };
  } catch (error) {
    return {
      error: "Error deleting transaction",
    };
  }
}

export default deleteTransaction;
