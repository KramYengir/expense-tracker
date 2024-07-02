import { SignInButton } from "@clerk/nextjs";
import React from "react";

const Geust = () => {
  return (
    <div className="guest">
      <h2>Welcome</h2>
      <p>Please sign in to manage your expenses</p>
      <SignInButton />
    </div>
  );
};

export default Geust;
