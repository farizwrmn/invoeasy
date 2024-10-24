/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `item_category_item_fkey` ON `item`;

-- DropIndex
DROP INDEX `item_tax_id_fkey` ON `item`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `role`;
