-- ****************** SqlDBM: MySQL ******************;
-- ***************************************************;

DROP TABLE `FK_Rec_Ing`;

DROP TABLE `Recipes`;

DROP TABLE `Ingredients`;

-- ************************************** `Recipes`

CREATE TABLE `Recipes`
(
 `id`           INT NOT NULL ,
 `name`         VARCHAR(45) NOT NULL ,
 `instructions` TEXT NOT NULL ,

PRIMARY KEY (`id`)
);

-- ************************************** `Ingredients`

CREATE TABLE `Ingredients`
(
 `id`   INT NOT NULL ,
 `name` VARCHAR(45) NOT NULL ,

PRIMARY KEY (`id`)
);

-- ************************************** `FK_Rec_Ing`

CREATE TABLE `FK_Rec_Ing`
(
 `id`     INT NOT NULL ,
 `ing_id` INT NOT NULL ,
 `rec_id` INT NOT NULL ,

PRIMARY KEY (`id`),
KEY `fkIdx_22` (`ing_id`),
CONSTRAINT `FK_22` FOREIGN KEY `fkIdx_22` (`ing_id`) REFERENCES `Ingredients` (`id`),
KEY `fkIdx_25` (`rec_id`),
CONSTRAINT `FK_25` FOREIGN KEY `fkIdx_25` (`rec_id`) REFERENCES `Recipes` (`id`)
);
