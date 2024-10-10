/*
  Warnings:

  - You are about to drop the `category_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoice_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tax` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `category_item` DROP FOREIGN KEY `category_item_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `category_item` DROP FOREIGN KEY `category_item_invoice_id_fkey`;

-- DropForeignKey
ALTER TABLE `category_item` DROP FOREIGN KEY `category_item_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `invoice_item` DROP FOREIGN KEY `invoice_item_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_category_item_fkey`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_tax_id_fkey`;

-- DropForeignKey
ALTER TABLE `tax` DROP FOREIGN KEY `tax_customer_id_fkey`;

-- DropForeignKey
ALTER TABLE `tax` DROP FOREIGN KEY `tax_user_id_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` VARCHAR(191) NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE `category_item`;

-- DropTable
DROP TABLE `invoice_item`;

-- DropTable
DROP TABLE `tax`;
