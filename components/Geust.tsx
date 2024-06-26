import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Geust = () => {
  return (
    <div className="geust">
      <h1>Welcome</h1>
      <p>Please sign in to manage your expenses</p>
      <SignInButton />
    </div>
  );
};

export default Geust;
