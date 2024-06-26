import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const checkUser = async () => {
  // Get clerk user data if it exists
  const user = await currentUser();

  // Check if clerk user is logged in
  if (!user) {
    return null;
  }

  // Check if user is in the database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // if user is in the database, return the user
  if (loggedInUser) {
    return loggedInUser;
  }

  // otherwise, since clerk user is NOT in the database, create a new user based on the clerk user data
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
