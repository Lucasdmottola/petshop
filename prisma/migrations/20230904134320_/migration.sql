-- DropForeignKey
ALTER TABLE "requests" DROP CONSTRAINT "requests_nameProd_fkey";

-- DropIndex
DROP INDEX "products_name_key";
