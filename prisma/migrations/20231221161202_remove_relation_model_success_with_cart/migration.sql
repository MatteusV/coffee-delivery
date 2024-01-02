/*
  Warnings:

  - You are about to drop the column `cart_id` on the `success` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "success" DROP CONSTRAINT "success_cart_id_fkey";

-- AlterTable
ALTER TABLE "success" DROP COLUMN "cart_id";
