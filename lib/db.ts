// Import PrismaClient from the Prisma package
import { PrismaClient } from "@prisma/client";

// Declare a global variable to hold the PrismaClient instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a single PrismaClient instance or reuse the existing one
export const db =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query"], // Log all database queries for debugging
  });

// In development, store the PrismaClient instance globally to prevent multiple instances
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
