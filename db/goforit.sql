-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  ven. 03 avr. 2020 à 11:25
-- Version du serveur :  5.7.28
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `goforit`
--

DELIMITER $$
--
-- Procédures
--
DROP PROCEDURE IF EXISTS `checkCreationEntreprise`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkCreationEntreprise` (IN `tva` INT(11), IN `address` VARCHAR(60))  BEGIN

SELECT nTva FROM ent
WHERE nTva = tva OR adresse = address;

END$$

DROP PROCEDURE IF EXISTS `checkInscriptionClient`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkInscriptionClient` (IN `username` VARCHAR(300), IN `email` VARCHAR(300))  BEGIN

SELECT idCli FROM cli 
WHERE mail = email OR pseudo = username ;

END$$

DROP PROCEDURE IF EXISTS `checkInscriptionProfessionnel`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkInscriptionProfessionnel` (IN `username` VARCHAR(300), IN `email` VARCHAR(300))  BEGIN

SELECT idPro FROM pro
WHERE mail = email OR pseudo = username;

END$$

DROP PROCEDURE IF EXISTS `connexionClient`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `connexionClient` (IN `login` VARCHAR(300), IN `pass` VARCHAR(300))  BEGIN

SELECT pseudo, nom, prenom, adresse, mail FROM cli
WHERE (pseudo = login OR mail = login) AND (mdp = pass);

END$$

DROP PROCEDURE IF EXISTS `connexionPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `connexionPro` (IN `login` VARCHAR(300), IN `pass` VARCHAR(300))  BEGIN

SELECT pseudo, nom, prenom, mail, idEntreprise, adresse, statut FROM pro
WHERE (pseudo = login OR mail = login) AND (mdp = pass);

END$$

DROP PROCEDURE IF EXISTS `creationClient`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationClient` (IN `username` VARCHAR(300), IN `pwd` VARCHAR(300), IN `name` VARCHAR(300), IN `firstname` VARCHAR(300), IN `adress` VARCHAR(300), IN `email` VARCHAR(300))  BEGIN

INSERT INTO cli(pseudo, mdp, nom, prenom, adresse, mail) VALUES(username, pwd, name, firstname, adress, email);

END$$

DROP PROCEDURE IF EXISTS `creationEntreprise`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationEntreprise` (IN `name` VARCHAR(300), IN `adress` VARCHAR(300), IN `tva` INT(10), IN `secteur` INT(10), IN `admin` INT(10), IN `descri` VARCHAR(3000), IN `serv` VARCHAR(3000))  BEGIN

INSERT INTO cli(nom, adresse, description, services, nTva, idSecteur, idAdmin) VALUES(name, adress, descri, serv, tva, secteur, admin);

END$$

DROP PROCEDURE IF EXISTS `creationProfessionnel`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationProfessionnel` (IN `username` VARCHAR(300), IN `password` VARCHAR(300), IN `name` VARCHAR(300), IN `firstname` VARCHAR(300), IN `email` VARCHAR(300), IN `adress` VARCHAR(300))  BEGIN

INSERT INTO pro(pseudo, mdp, nom, prenom, mail, adresse) VALUES(username, password, name, firstname, adress, email);

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `idAvis` int(11) NOT NULL AUTO_INCREMENT,
  `idRdv` int(11) NOT NULL,
  `lien` varchar(255) NOT NULL,
  `statut` int(1) NOT NULL DEFAULT '0' COMMENT '0 non utilisÃ©; 1 utilisÃ©',
  PRIMARY KEY (`idAvis`),
  KEY `idRdv` (`idRdv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `cli`
--

DROP TABLE IF EXISTS `cli`;
CREATE TABLE IF NOT EXISTS `cli` (
  `idCli` int(255) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(300) NOT NULL,
  `mdp` varchar(300) NOT NULL,
  `nom` varchar(300) NOT NULL,
  `prenom` varchar(300) NOT NULL,
  `adresse` varchar(300) NOT NULL,
  `mail` varchar(300) NOT NULL,
  PRIMARY KEY (`idCli`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cli`
--

INSERT INTO `cli` (`idCli`, `pseudo`, `mdp`, `nom`, `prenom`, `adresse`, `mail`) VALUES
(1, 'test', 'test', 'test', 'test', 'test', 'test'),
(2, 'SkylineEz', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Alexandre', 'Tanguy', 'rue Du Pont Labigniat 1, 1470 Genappe', 'tanguyxp@live.fr');

-- --------------------------------------------------------

--
-- Structure de la table `dem`
--

DROP TABLE IF EXISTS `dem`;
CREATE TABLE IF NOT EXISTS `dem` (
  `idDem` int(11) NOT NULL AUTO_INCREMENT,
  `idServ` int(11) NOT NULL,
  `idCli` int(11) NOT NULL,
  `descr` varchar(255) NOT NULL,
  `statut` int(1) NOT NULL DEFAULT '0' COMMENT '0 pas de prop; 1 prop effectuÃ©; 2 rdv ok',
  PRIMARY KEY (`idDem`),
  KEY `idServ` (`idServ`),
  KEY `idCli` (`idCli`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `ent`
--

DROP TABLE IF EXISTS `ent`;
CREATE TABLE IF NOT EXISTS `ent` (
  `idEnt` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `adresse` varchar(60) NOT NULL,
  `description` varchar(3000) NOT NULL COMMENT 'description de l''entreprise',
  `services` varchar(3000) NOT NULL COMMENT 'liste de services séparé de virgule',
  `nTva` int(11) NOT NULL,
  `idSecteur` int(11) NOT NULL,
  `idAdmin` int(11) NOT NULL COMMENT 'idUser createur de l''entreprise',
  PRIMARY KEY (`idEnt`),
  KEY `idSecteur` (`idSecteur`),
  KEY `idAdmin` (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `pro`
--

DROP TABLE IF EXISTS `pro`;
CREATE TABLE IF NOT EXISTS `pro` (
  `idPro` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(300) NOT NULL,
  `mdp` varchar(300) NOT NULL,
  `nom` varchar(300) NOT NULL,
  `prenom` varchar(300) NOT NULL,
  `mail` varchar(300) NOT NULL,
  `idEntreprise` int(11) DEFAULT NULL,
  `statut` int(1) NOT NULL DEFAULT '0' COMMENT '0 => admin; 1=> employÃ©',
  `adresse` varchar(300) NOT NULL,
  PRIMARY KEY (`idPro`),
  KEY `idEntreprise` (`idEntreprise`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pro`
--

INSERT INTO `pro` (`idPro`, `pseudo`, `mdp`, `nom`, `prenom`, `mail`, `idEntreprise`, `statut`, `adresse`) VALUES
(2, 'Zyppo', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Alexandre', 'Eric', 'service@itrescue.be', NULL, 0, 'rue champ des oiseaux 4b, 1470 Genappe'),
(3, 'DU', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Usai', 'Dimitri', 'dimitri@logicaltic.com', NULL, 0, 'Rue aux loups 1A, 1380 Plancenoit');

-- --------------------------------------------------------

--
-- Structure de la table `prop`
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
-- Structure de la table `rdv`
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
-- Structure de la table `sect`
--

DROP TABLE IF EXISTS `sect`;
CREATE TABLE IF NOT EXISTS `sect` (
  `idSecteur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) NOT NULL,
  PRIMARY KEY (`idSecteur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `serv`
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
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_ibfk_1` FOREIGN KEY (`idRdv`) REFERENCES `rdv` (`idRdv`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `dem`
--
ALTER TABLE `dem`
  ADD CONSTRAINT `dem_ibfk_1` FOREIGN KEY (`idServ`) REFERENCES `serv` (`idServ`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dem_ibfk_3` FOREIGN KEY (`idCli`) REFERENCES `cli` (`idCli`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ent`
--
ALTER TABLE `ent`
  ADD CONSTRAINT `ent_ibfk_1` FOREIGN KEY (`idSecteur`) REFERENCES `sect` (`idSecteur`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ent_ibfk_2` FOREIGN KEY (`idAdmin`) REFERENCES `pro` (`idPro`) ON UPDATE CASCADE,
  ADD CONSTRAINT `ent_ibfk_3` FOREIGN KEY (`idEnt`) REFERENCES `pro` (`idEntreprise`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `prop`
--
ALTER TABLE `prop`
  ADD CONSTRAINT `prop_ibfk_1` FOREIGN KEY (`idDem`) REFERENCES `dem` (`idDem`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `rdv`
--
ALTER TABLE `rdv`
  ADD CONSTRAINT `rdv_ibfk_1` FOREIGN KEY (`idProp`) REFERENCES `prop` (`idProp`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `serv`
--
ALTER TABLE `serv`
  ADD CONSTRAINT `serv_ibfk_1` FOREIGN KEY (`idEnt`) REFERENCES `ent` (`idEnt`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
