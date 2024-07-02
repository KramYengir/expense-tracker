import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import Geust from "@/components/Geust";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpense from "@/components/IncomeExpense";
import TransactionList from "@/components/TransactionList";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return (
      <>
        <Geust />
      </>
    );
  }

  return (
    <>
      {/* if user is signed in, show the signed in page */}
      <SignedIn>
        <div>
          <h2 className="center">Expense Tracker</h2>
          <p className="center">
            Welcome{user?.firstName ? ", " + user?.firstName + "!" : "!"}
          </p>
          <Balance />
          <IncomeExpense />
          <AddTransaction />
        </div>
        <TransactionList />
      </SignedIn>
      {/* if user is signed out, show the guest page */}
      <SignedOut>
        <Geust />
      </SignedOut>
    </>
  );
};

export default HomePage;
