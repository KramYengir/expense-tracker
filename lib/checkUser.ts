import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

// Custom error class for more specific error handling
class UserError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserError";
  }
}

export const checkUser = async () => {
  try {
    // Get clerk user data if it exists
    const user = await currentUser();

    // Check if clerk user is logged in
    if (!user) {
      throw new UserError("No user is currently logged in.");
    }

    // Check if user is in the database
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    // If user is in the database, return the user
    if (loggedInUser) {
      return loggedInUser;
    }

    // Create a new user based on the clerk user data
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    if (error instanceof UserError) {
      console.warn(error.message); // Custom warning for user errors
    } else {
      console.error("An error occurred during user check:", error); // General error logging
    }
    return null; // Return null if any error occurs
  }
};
