/*
  Warnings:

  - You are about to drop the column `idProd` on the `requests` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_idProd_fkey";

-- AlterTable
ALTER TABLE "requests" DROP COLUMN "idProd",
ADD COLUMN     "names" TEXT[];
