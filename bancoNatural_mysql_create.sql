CREATE TABLE `Categoria` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`tipo` VARCHAR(255) NOT NULL,
	`descricao` VARCHAR(255) NOT NULL,
	`ativo` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Produto` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL,
	`desconto` DECIMAL NOT NULL DEFAULT '0',
	`quantidade` DECIMAL NOT NULL DEFAULT '0',
	`preco` DECIMAL NOT NULL DEFAULT '0',
	`categoria_id` INT NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`)
);

CREATE TABLE `Usuario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome_completo` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`senha` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Produto` ADD CONSTRAINT `Produto_fk0` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`id`);

