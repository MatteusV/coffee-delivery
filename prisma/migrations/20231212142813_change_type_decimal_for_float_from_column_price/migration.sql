/*
  Warnings:

  - You are about to alter the column `original_price` on the `Cart` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "original_price" SET DATA TYPE DOUBLE PRECISION;
