"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const text = formData.get("text");
  const amount = formData.get("amount");

  // validate form data
  if (!text || !amount) {
    return {
      error: "Please enter a transaction name and amount",
    };
  }

  // Make sure text & amount is a number
  const textValue: string = text.toString();
  const amountValue: number = parseFloat(amount.toString());

  // Get the current user
  const { userId } = auth();

  if (!userId) {
    return {
      error: "User not found",
    };
  }

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text: textValue,
        amount: amountValue,
        userId: userId,
      },
    });

    //refresh the page
    revalidatePath("/");

    return {
      data: transactionData,
    };
  } catch (error) {
    return {
      error: "Error adding transaction",
    };
  }
}

export default addTransaction;
