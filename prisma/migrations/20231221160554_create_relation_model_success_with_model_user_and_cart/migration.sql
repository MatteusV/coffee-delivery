/*
  Warnings:

  - Added the required column `cart_id` to the `success` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `success` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "success" ADD COLUMN     "cart_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "success" ADD CONSTRAINT "success_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "success" ADD CONSTRAINT "success_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
