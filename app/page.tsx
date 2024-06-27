import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import Geust from "@/components/Geust";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <>
      {/* if user is signed in, show the signed in page */}
      <SignedIn>
        <h1>Expense Tracker</h1>
        <p>Welcome, {user?.firstName + "!"}</p>
        <Balance />
        <IncomeExpense />
        <AddTransaction />
      </SignedIn>
      {/* if user is signed out, show the guest page */}
      <SignedOut>
        <Geust />
      </SignedOut>
    </>
  );
};

export default HomePage;
