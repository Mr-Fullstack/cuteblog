/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateTable
CREATE TABLE "hearts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    CONSTRAINT "hearts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "hearts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "likes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    CONSTRAINT "likes_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    CONSTRAINT "comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "posts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "type_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "type_users_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "categories_on_posts" (
    "post_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    PRIMARY KEY ("post_id", "category_id"),
    CONSTRAINT "categories_on_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "categories_on_posts_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_users" ("email", "id", "name") SELECT "email", "id", "name" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "hearts_authorId_key" ON "hearts"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "hearts_postId_key" ON "hearts"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "likes_authorId_key" ON "likes"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "likes_postId_key" ON "likes"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "comments_authorId_key" ON "comments"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "comments_postId_key" ON "comments"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "posts_authorId_key" ON "posts"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "type_users_authorId_key" ON "type_users"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "categories_on_posts_post_id_key" ON "categories_on_posts"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "categories_on_posts_category_id_key" ON "categories_on_posts"("category_id");
