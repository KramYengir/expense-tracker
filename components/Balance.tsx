import React from "react";
import { getBalance } from "@/app/actions/getBalance";

const Balance = async () => {
  const { balance } = await getBalance();
  return (
    <>
      <h4>Your Balance</h4>
      <h1>£{balance || "200"}</h1>
    </>
  );
};

export default Balance;
