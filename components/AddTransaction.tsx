"use client";

import React from "react";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Sucessfully added transaction");
    }
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Transaction Name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (+ for income, - for expense)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Transaction Amount..."
            step={0.01}
          />
        </div>
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
