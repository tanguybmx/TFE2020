-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Mar 03, 2020 at 04:12 PM
-- Server version: 5.7.28
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `goforit`
--

-- --------------------------------------------------------

--
-- Table structure for table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `idAvis` int(11) NOT NULL AUTO_INCREMENT,
  `idRdv` int(11) NOT NULL,
  `lien` varchar(255) NOT NULL,
  `statut` int(1) NOT NULL DEFAULT '0' COMMENT '0 non utilisé; 1 utilisé',
  PRIMARY KEY (`idAvis`),
  KEY `idRdv` (`idRdv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cli`
--

DROP TABLE IF EXISTS `cli`;
CREATE TABLE IF NOT EXISTS `cli` (
  `idCli` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `nom` varchar(25) NOT NULL,
  `prenom` varchar(25) NOT NULL,
  `adresse` varchar(60) NOT NULL,
  `mail` int(40) NOT NULL,
  PRIMARY KEY (`idCli`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `dem`
--

DROP TABLE IF EXISTS `dem`;
CREATE TABLE IF NOT EXISTS `dem` (
  `idDem` int(11) NOT NULL AUTO_INCREMENT,
  `idServ` int(11) NOT NULL,
  `idCli` int(11) NOT NULL,
  `descr` varchar(255) NOT NULL,
  `statut` int(1) NOT NULL DEFAULT '0' COMMENT '0 pas de prop; 1 prop effectué; 2 rdv ok',
  PRIMARY KEY (`idDem`),
  KEY `idServ` (`idServ`),
  KEY `idCli` (`idCli`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ent`
--

DROP TABLE IF EXISTS `ent`;
CREATE TABLE IF NOT EXISTS `ent` (
  `idEnt` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `adresse` varchar(60) NOT NULL,
  `nTva` int(11) NOT NULL,
  `idSecteur` int(11) NOT NULL,
  `idAdmin` int(11) NOT NULL COMMENT 'idUser créateur du compte de l''entreprise',
  PRIMARY KEY (`idEnt`),
  KEY `idSecteur` (`idSecteur`),
  KEY `idAdmin` (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pro`
--

DROP TABLE IF EXISTS `pro`;
CREATE TABLE IF NOT EXISTS `pro` (
  `idPro` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `nom` varchar(25) NOT NULL,
  `prenom` varchar(25) NOT NULL,
  `mail` varchar(40) NOT NULL,
  `idEntreprise` int(11) NOT NULL,
  `statut` int(1) NOT NULL COMMENT '0 => admin; 1=> employé',
  PRIMARY KEY (`idPro`),
  KEY `idEntreprise` (`idEntreprise`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `prop`
--

DROP TABLE IF EXISTS `prop`;
CREATE TABLE IF NOT EXISTS `prop` (
  `idProp` int(11) NOT NULL AUTO_INCREMENT,
  `idDem` int(11) NOT NULL,
  `date` date NOT NULL,
  `descr` varchar(255) NOT NULL,
  PRIMARY KEY (`idProp`),
  KEY `idDem` (`idDem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `rdv`
--

DROP TABLE IF EXISTS `rdv`;
CREATE TABLE IF NOT EXISTS `rdv` (
  `idRdv` int(11) NOT NULL AUTO_INCREMENT,
  `idProp` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`idRdv`),
  KEY `idProp` (`idProp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sect`
--

DROP TABLE IF EXISTS `sect`;
CREATE TABLE IF NOT EXISTS `sect` (
  `idSecteur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) NOT NULL,
  PRIMARY KEY (`idSecteur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `serv`
--

DROP TABLE IF EXISTS `serv`;
CREATE TABLE IF NOT EXISTS `serv` (
  `idServ` int(11) NOT NULL AUTO_INCREMENT,
  `idEnt` int(11) NOT NULL,
  `descr` varchar(255) NOT NULL,
  PRIMARY KEY (`idServ`),
  KEY `idEnt` (`idEnt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_ibfk_1` FOREIGN KEY (`idRdv`) REFERENCES `rdv` (`idRdv`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `dem`
--
ALTER TABLE `dem`
  ADD CONSTRAINT `dem_ibfk_1` FOREIGN KEY (`idServ`) REFERENCES `serv` (`idServ`) ON UPDATE CASCADE,
  ADD CONSTRAINT `dem_ibfk_3` FOREIGN KEY (`idCli`) REFERENCES `cli` (`idCli`) ON UPDATE CASCADE;

--
-- Constraints for table `ent`
--
ALTER TABLE `ent`
  ADD CONSTRAINT `ent_ibfk_1` FOREIGN KEY (`idSecteur`) REFERENCES `sect` (`idSecteur`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ent_ibfk_2` FOREIGN KEY (`idAdmin`) REFERENCES `pro` (`idPro`) ON UPDATE CASCADE;

--
-- Constraints for table `pro`
--
ALTER TABLE `pro`
  ADD CONSTRAINT `pro_ibfk_1` FOREIGN KEY (`idEntreprise`) REFERENCES `ent` (`idEnt`) ON UPDATE CASCADE;

--
-- Constraints for table `prop`
--
ALTER TABLE `prop`
  ADD CONSTRAINT `prop_ibfk_1` FOREIGN KEY (`idDem`) REFERENCES `dem` (`idDem`) ON UPDATE CASCADE;

--
-- Constraints for table `rdv`
--
ALTER TABLE `rdv`
  ADD CONSTRAINT `rdv_ibfk_1` FOREIGN KEY (`idProp`) REFERENCES `prop` (`idProp`) ON UPDATE CASCADE;

--
-- Constraints for table `serv`
--
ALTER TABLE `serv`
  ADD CONSTRAINT `serv_ibfk_1` FOREIGN KEY (`idEnt`) REFERENCES `ent` (`idEnt`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
