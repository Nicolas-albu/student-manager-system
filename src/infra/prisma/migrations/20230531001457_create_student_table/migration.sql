-- CreateTable
CREATE TABLE `TBL_STUDENT` (
    `registration` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `status` ENUM('ATIVO', 'INATIVO') NOT NULL,

    UNIQUE INDEX `TBL_STUDENT_email_key`(`email`),
    PRIMARY KEY (`registration`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
