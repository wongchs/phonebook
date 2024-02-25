/*
  Warnings:

  - You are about to drop the column `userEmail` on the `Entry` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Entry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Entry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Entry" ("createdAt", "email", "id", "name", "phoneNo", "updatedAt") SELECT "createdAt", "email", "id", "name", "phoneNo", "updatedAt" FROM "Entry";
DROP TABLE "Entry";
ALTER TABLE "new_Entry" RENAME TO "Entry";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
