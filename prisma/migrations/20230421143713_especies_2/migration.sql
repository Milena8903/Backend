/*
  Warnings:

  - Added the required column `fuete` to the `Especie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `especie` ADD COLUMN `fuete` INTEGER NOT NULL;
