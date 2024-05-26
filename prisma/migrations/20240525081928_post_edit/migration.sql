/*
  Warnings:

  - You are about to drop the column `supportEmail` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `supportPlatform` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "supportEmail",
DROP COLUMN "supportPlatform";
