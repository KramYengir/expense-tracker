"use client";

import React from "react";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    console.log(formData.get("text"));
    console.log(formData.get("amount"));
    console.log(formData.get("date"));
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
