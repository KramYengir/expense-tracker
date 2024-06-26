import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import React from "react";
import Geust from "@/components/Geust";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <>
      {/* if user is signed in, show the signed in page */}
      <SignedIn>
        <h1>Expense Tracker</h1>
        <p>Welcome, {user?.firstName + "!"}</p>
      </SignedIn>
      {/* if user is signed out, show the guest page */}
      <SignedOut>
        <Geust />
      </SignedOut>
    </>
  );
};

export default HomePage;
