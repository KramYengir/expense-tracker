import React from "react";
import { getBalance } from "@/app/actions/getBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getBalance();
  return (
    <>
      <h3 className="center">Your Balance</h3>
      <p className="center balance">
        £{addCommas(balance?.toFixed(2) ?? "0") || "0"}
      </p>
    </>
  );
};

export default Balance;
