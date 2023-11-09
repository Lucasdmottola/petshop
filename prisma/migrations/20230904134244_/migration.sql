/*
  Warnings:

  - You are about to drop the column `description` on the `requests` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `requests` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nameProd` to the `requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "requests" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "nameProd" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "products_name_key" ON "products"("name");

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_nameProd_fkey" FOREIGN KEY ("nameProd") REFERENCES "products"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
