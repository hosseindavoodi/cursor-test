import { PrismaClient } from "./generated/prisma/client";
const prismaClient = new PrismaClient();
const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClient;
};
export const prisma: PrismaClient = globalForPrisma.prisma ?? prismaClient;
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
