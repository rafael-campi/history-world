-- CreateTable
CREATE TABLE `author` (
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
CREATE TABLE `author_relation` (
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
CREATE TABLE `history_type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `description` VARCHAR(200) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `phrase` (
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
ALTER TABLE `author_relation` ADD CONSTRAINT `author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `author_relation` ADD CONSTRAINT `author_relationed_id_foreign` FOREIGN KEY (`author_relationed_id`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `author_relation` ADD CONSTRAINT `history_type_id_foreign` FOREIGN KEY (`history_type_id`) REFERENCES `history_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `phrase` ADD CONSTRAINT `author_id_foreign_key` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
