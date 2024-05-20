/*
  Warnings:

  - You are about to drop the `author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `author_relation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `history_type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `phrase` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `author_relation` DROP FOREIGN KEY `author_id_foreign`;

-- DropForeignKey
ALTER TABLE `author_relation` DROP FOREIGN KEY `author_relationed_id_foreign`;

-- DropForeignKey
ALTER TABLE `author_relation` DROP FOREIGN KEY `history_type_id_foreign`;

-- DropForeignKey
ALTER TABLE `phrase` DROP FOREIGN KEY `author_id_foreign_key`;

-- DropTable
DROP TABLE `author`;

-- DropTable
DROP TABLE `author_relation`;

-- DropTable
DROP TABLE `history_type`;

-- DropTable
DROP TABLE `phrase`;

-- CreateTable
CREATE TABLE `Author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `last_name` VARCHAR(100) NULL,
    `description` TEXT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AuthorRelation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_relation` VARCHAR(200) NOT NULL,
    `type_relation` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `author_id` INTEGER NOT NULL,
    `author_relationed_id` INTEGER NOT NULL,
    `history_type_id` INTEGER NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `author_id_foreign_idx`(`author_id`),
    INDEX `author_relationed_id_foreign_idx`(`author_relationed_id`),
    INDEX `history_type_id_foreign_idx`(`history_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoryType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(200) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Phrase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phrase` TEXT NOT NULL,
    `date` DATE NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `author_id` INTEGER NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `author_id_foreign_idx`(`author_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AuthorRelation` ADD CONSTRAINT `author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `Author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `AuthorRelation` ADD CONSTRAINT `author_relationed_id_foreign` FOREIGN KEY (`author_relationed_id`) REFERENCES `Author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `AuthorRelation` ADD CONSTRAINT `history_type_id_foreign` FOREIGN KEY (`history_type_id`) REFERENCES `HistoryType`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Phrase` ADD CONSTRAINT `author_id_foreign_key` FOREIGN KEY (`author_id`) REFERENCES `Author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
