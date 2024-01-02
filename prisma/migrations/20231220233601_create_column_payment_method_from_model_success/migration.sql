/*
  Warnings:

  - Added the required column `payment_method` to the `success` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "success" ADD COLUMN     "payment_method" TEXT NOT NULL;
