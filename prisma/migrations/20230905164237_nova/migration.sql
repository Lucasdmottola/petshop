/*
  Warnings:

  - You are about to drop the column `requestId` on the `products` table. All the data in the column will be lost.
  - Made the column `category_id` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `idProd` to the `requests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_requestId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "requestId",
ADD COLUMN     "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "category_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "requests" ADD COLUMN "idProd" TEXT DEFAULT NULL NOT NULL;

-- AddForeignKey
ALTER TABLE "requests" ADD CONSTRAINT "requests_idProd_fkey" FOREIGN KEY ("idProd") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
