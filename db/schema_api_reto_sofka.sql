-- MySQL Workbench Synchronization
-- Generated: 2021-12-22 22:50
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Esteban

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `api_reto_sofka` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE api_reto_sofka;

CREATE TABLE IF NOT EXISTS `api_reto_sofka`.`usuario` (
  `idusuario` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `identificacion` INT(11) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `api_reto_sofka`.`ronda` (
  `idronda` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre_ronda` VARCHAR(45) NOT NULL,
  `puntaje` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idronda`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `api_reto_sofka`.`categoria` (
  `idcategoria` INT(11) NOT NULL,
  `dificultad` VARCHAR(45) NOT NULL,
  `ronda_idronda` INT(11) NOT NULL,
  PRIMARY KEY (`idcategoria`),
  INDEX `fk_categoria_ronda_idx` (`ronda_idronda` ASC) VISIBLE,
  CONSTRAINT `fk_categoria_ronda`
    FOREIGN KEY (`ronda_idronda`)
    REFERENCES `api_reto_sofka`.`ronda` (`idronda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `api_reto_sofka`.`pregunta` (
  `idpregunta` INT(11) NOT NULL AUTO_INCREMENT,
  `pregunta` VARCHAR(250) NULL DEFAULT NULL,
  `categoria_idcategoria` INT(11) NOT NULL,
  PRIMARY KEY (`idpregunta`),
  INDEX `fk_pregunta_categoria1_idx` (`categoria_idcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_pregunta_categoria1`
    FOREIGN KEY (`categoria_idcategoria`)
    REFERENCES `api_reto_sofka`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `api_reto_sofka`.`respuesta` (
  `idrespuesta` INT(11) NOT NULL,
  `respuesta_pregunta` VARCHAR(250) NOT NULL,
  `valida` TINYINT(1) NOT NULL,
  `pregunta_idpregunta` INT(11) NOT NULL,
  PRIMARY KEY (`idrespuesta`),
  INDEX `fk_respuesta_pregunta1_idx` (`pregunta_idpregunta` ASC) VISIBLE,
  CONSTRAINT `fk_respuesta_pregunta1`
    FOREIGN KEY (`pregunta_idpregunta`)
    REFERENCES `api_reto_sofka`.`pregunta` (`idpregunta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `api_reto_sofka`.`ronda_ganada` (
  `idronda_ganada` INT(11) NOT NULL AUTO_INCREMENT,
  `nom_usuario` VARCHAR(45) NOT NULL,
  `ape_usuario` VARCHAR(45) NOT NULL,
  `iden_usuario` INT(11) NOT NULL,
  `puntaje` VARCHAR(45) NOT NULL,
  `usuario_idusuario` INT(11) NOT NULL,
  PRIMARY KEY (`idronda_ganada`),
  INDEX `fk_ronda_ganada_usuario1_idx` (`usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_ronda_ganada_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `api_reto_sofka`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
