/*
  Warnings:

  - You are about to drop the column `isClient` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `isClient` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clients" DROP COLUMN "isClient";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isClient";
