import React from "react";
import { getBalance } from "@/app/actions/getBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getBalance();
  return (
    <>
      <h4 className="center">Your Balance</h4>
      <h1 className="center">£{addCommas(balance ?? 0) || "0"}</h1>
    </>
  );
};

export default Balance;
