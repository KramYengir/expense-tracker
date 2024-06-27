"use server";

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

  const transactionData: TransactionData = {
    text: textValue,
    amount: amountValue,
  };

  return {
    data: transactionData,
  };
}

export default addTransaction;
