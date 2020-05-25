-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  lun. 25 mai 2020 à 20:52
-- Version du serveur :  5.7.28
-- Version de PHP :  7.4.0

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
DROP PROCEDURE IF EXISTS `addIdEnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addIdEnt` (IN `email` VARCHAR(300), IN `nTva` INT(11))  BEGIN

UPDATE pro set idEntreprise = nTva
WHERE mail = email;

END$$

DROP PROCEDURE IF EXISTS `checkConvers`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkConvers` (IN `client` INT(255), IN `pro` INT(255))  BEGIN 

SELECT convers.idConvers FROM convers
WHERE convers.idClient=client && convers.idPro = pro;

END$$

DROP PROCEDURE IF EXISTS `checkEnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkEnt` (IN `tva` INT(255))  BEGIN

SELECT nom FROM ent
WHERE nTva = tva;

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

SELECT idCli,pseudo, nom, prenom, adresse, mail FROM cli
WHERE (pseudo = login OR mail = login) AND (mdp = pass);

END$$

DROP PROCEDURE IF EXISTS `connexionPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `connexionPro` (IN `login` VARCHAR(300), IN `pass` VARCHAR(300))  BEGIN

SELECT idPro, pseudo, nom, prenom, mail, idEntreprise, adresse, statut FROM pro
WHERE (pseudo = login OR mail = login) AND (mdp = pass);

END$$

DROP PROCEDURE IF EXISTS `countPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `countPro` ()  BEGIN 

SELECT count(pro.idPro) as nbPros FROM pro;

END$$

DROP PROCEDURE IF EXISTS `creationClient`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationClient` (IN `username` VARCHAR(300), IN `pwd` VARCHAR(300), IN `name` VARCHAR(300), IN `firstname` VARCHAR(300), IN `adress` VARCHAR(300), IN `email` VARCHAR(300))  BEGIN

INSERT INTO cli(pseudo, mdp, nom, prenom, adresse, mail) VALUES(username, pwd, name, firstname, adress, email);

END$$

DROP PROCEDURE IF EXISTS `creationConvers`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationConvers` (IN `cli` INT(255), IN `pro` INT(255))  BEGIN 

INSERT INTO convers(convers.idClient, convers.idPro) VALUES(cli, pro);

END$$

DROP PROCEDURE IF EXISTS `creationEntreprise`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationEntreprise` (IN `name` VARCHAR(300), IN `adress` VARCHAR(300), IN `tva` INT(11), IN `idSector` INT(11), IN `admin` VARCHAR(300), IN `descri` VARCHAR(3000), IN `serv` VARCHAR(3000))  BEGIN

INSERT INTO ent(nom, adresse, description, services, nTva, idSect, idAdmin) VALUES(name, adress, descri, serv, tva, idSector, admin);

END$$

DROP PROCEDURE IF EXISTS `creationMsg`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationMsg` (IN `exp` INT(255), IN `dest` INT(255), IN `conv` INT(255), IN `content` VARCHAR(1000), IN `date` DATE)  BEGIN 

INSERT INTO msg( msg.idExp, msg.idDest, msg.idConvers, msg.contenu, msg.dateHeure) VALUES(exp, dest, conv, content, date);

END$$

DROP PROCEDURE IF EXISTS `creationProfessionnel`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationProfessionnel` (IN `username` VARCHAR(300), IN `password` VARCHAR(300), IN `name` VARCHAR(300), IN `firstname` VARCHAR(300), IN `email` VARCHAR(300), IN `adress` VARCHAR(300))  BEGIN

INSERT INTO pro(pseudo, mdp, nom, prenom, mail, adresse) VALUES(username, password, name, firstname, adress, email);

END$$

DROP PROCEDURE IF EXISTS `creationSecteur`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationSecteur` (IN `name` VARCHAR(300))  BEGIN 

INSERT INTO sect (nom) VALUES(name);

END$$

DROP PROCEDURE IF EXISTS `getConversCli`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getConversCli` (IN `idUser` INT(255))  BEGIN 

SELECT convers.idConvers, convers.idClient, convers.idPro FROM convers 
WHERE convers.idClient = idUser;

END$$

DROP PROCEDURE IF EXISTS `getConversPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getConversPro` (IN `idUser` INT(255))  BEGIN 

SELECT convers.idConvers, convers.idClient, convers.idPro FROM convers 
WHERE convers.idPro = idUser;

END$$

DROP PROCEDURE IF EXISTS `getDernierMsgConvers`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getDernierMsgConvers` (IN `conv` INT(255))  BEGIN

SELECT msg.idExp, msg.idDest, msg.contenu, msg.dateHeure FROM msg
WHERE msg.idConvers = conv AND msg.dateHeure = (SELECT MAX(msg.dateHeure)FROM msg WHERE msg.idConvers = conv)
GROUP BY msg.idConvers;
END$$

DROP PROCEDURE IF EXISTS `getEnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getEnt` ()  BEGIN

SELECT ent.idEnt, ent.nom, ent.adresse, ent.description, ent.services, ent.nTva, sect.nom as nomSect, ent.idAdmin
FROM ent

INNER JOIN sect ON ent.idSect = sect.idSecteur;

END$$

DROP PROCEDURE IF EXISTS `getHisEnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getHisEnt` (IN `id` INT(255))  BEGIN

SELECT ent.nom, ent.adresse, ent.nTva, ent.idAdmin, sect.nom as nomSect, ent.description, ent.services FROM ent
INNER JOIN sect ON ent.idSect = sect.idSecteur;

END$$

DROP PROCEDURE IF EXISTS `getMsgConvers`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getMsgConvers` (IN `convers` INT(255))  BEGIN 

SELECT msg.idExp, msg.contenu, msg.dateHeure, msg.statut, msg.idConvers FROM msg
WHERE msg.idConvers = convers;

END$$

DROP PROCEDURE IF EXISTS `getNomCli`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getNomCli` (IN `cli` INT(255))  BEGIN 

SELECT cli.pseudo FROM cli WHERE cli.idCli = cli;

END$$

DROP PROCEDURE IF EXISTS `getNomPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getNomPro` (IN `pro` INT(255))  BEGIN 

SELECT pro.pseudo FROM pro WHERE pro.idPro = pro;

END$$

DROP PROCEDURE IF EXISTS `getProEnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProEnt` (IN `pro` INT(255))  BEGIN 

SELECT ent.nom FROM ent
INNER JOIN pro ON ent.idAdmin=pro.mail
WHERE pro.idPro = pro;

END$$

DROP PROCEDURE IF EXISTS `getSecteur`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSecteur` ()  BEGIN

SELECT idSecteur, nom
FROM sect;

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
  PRIMARY KEY (`idCli`),
  UNIQUE KEY `mail` (`mail`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cli`
--

INSERT INTO `cli` (`idCli`, `pseudo`, `mdp`, `nom`, `prenom`, `adresse`, `mail`) VALUES
(1, 'test', 'test', 'test', 'test', 'test', 'test'),
(2, 'SkylineEz', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Alexandre', 'Tanguy', 'rue Du Pont Labigniat 1, 1470 Genappe', 'tanguyxp@live.fr');

-- --------------------------------------------------------

--
-- Structure de la table `convers`
--

DROP TABLE IF EXISTS `convers`;
CREATE TABLE IF NOT EXISTS `convers` (
  `idConvers` int(255) NOT NULL AUTO_INCREMENT,
  `idClient` int(255) NOT NULL,
  `idPro` int(255) NOT NULL,
  PRIMARY KEY (`idConvers`),
  UNIQUE KEY `clientPro` (`idClient`,`idPro`),
  KEY `idPro` (`idPro`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `convers`
--

INSERT INTO `convers` (`idConvers`, `idClient`, `idPro`) VALUES
(1, 2, 4),
(2, 2, 5);

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
  `nom` varchar(300) NOT NULL,
  `adresse` varchar(60) NOT NULL,
  `description` varchar(3000) NOT NULL COMMENT 'description de l''entreprise',
  `services` varchar(3000) NOT NULL COMMENT 'liste de services séparé de virgule',
  `nTva` int(11) NOT NULL,
  `idSect` int(11) NOT NULL,
  `idAdmin` varchar(300) NOT NULL COMMENT 'mail useer createur de l''entreprise',
  PRIMARY KEY (`idEnt`),
  UNIQUE KEY `tva` (`nTva`),
  KEY `idAdmin` (`idAdmin`),
  KEY `idSect` (`idSect`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `ent`
--

INSERT INTO `ent` (`idEnt`, `nom`, `adresse`, `description`, `services`, `nTva`, `idSect`, `idAdmin`) VALUES
(21, 'Itrescue', 'rue Chant des Oiseaux 4b', 'service informatique pour tous', 'dépannage à domicile', 1, 2, 'service@itrescue.be'),
(22, 'LogicalTIC', 'Rue aux loups 4a Plancenoit', 'B2B', 'Cloud Computing,Gestion parc informatique', 2, 2, 'dimitri@logicaltic.com'),
(23, 'test', 'rue test  Test', 'test test test', 'test1,test2,test3', 3, 4, 'testSansEntreprise@testSansEntreprise');

-- --------------------------------------------------------

--
-- Structure de la table `msg`
--

DROP TABLE IF EXISTS `msg`;
CREATE TABLE IF NOT EXISTS `msg` (
  `idMsg` int(255) NOT NULL AUTO_INCREMENT,
  `idConvers` int(255) NOT NULL,
  `idExp` int(255) NOT NULL,
  `idDest` int(255) NOT NULL,
  `contenu` varchar(1000) COLLATE utf8mb4_bin NOT NULL,
  `dateHeure` datetime NOT NULL,
  `statut` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 = non lu, 1 = lu',
  PRIMARY KEY (`idMsg`),
  UNIQUE KEY `idConvers` (`idConvers`,`idMsg`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `msg`
--

INSERT INTO `msg` (`idMsg`, `idConvers`, `idExp`, `idDest`, `contenu`, `dateHeure`, `statut`) VALUES
(1, 1, 2, 4, 'Test de message et de conversation', '2020-05-25 15:00:00', 0),
(3, 1, 4, 2, 'Test réponse d\'un pro dans une conversation', '2020-05-25 16:00:00', 0),
(4, 2, 2, 5, 'Test envois à un second pro', '2020-05-25 16:30:00', 0),
(5, 1, 2, 4, 'test ajax', '2020-05-25 00:00:00', 0);

-- --------------------------------------------------------

--
-- Structure de la table `pro`
--

DROP TABLE IF EXISTS `pro`;
CREATE TABLE IF NOT EXISTS `pro` (
  `idPro` int(255) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(300) NOT NULL,
  `mdp` varchar(300) NOT NULL,
  `nom` varchar(300) NOT NULL,
  `prenom` varchar(300) NOT NULL,
  `mail` varchar(300) NOT NULL,
  `idEntreprise` int(255) DEFAULT NULL,
  `statut` int(1) NOT NULL DEFAULT '0' COMMENT '0 => admin; 1=> employÃ©',
  `adresse` varchar(300) NOT NULL,
  PRIMARY KEY (`idPro`),
  UNIQUE KEY `mail` (`mail`),
  KEY `idEntreprise` (`idEntreprise`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pro`
--

INSERT INTO `pro` (`idPro`, `pseudo`, `mdp`, `nom`, `prenom`, `mail`, `idEntreprise`, `statut`, `adresse`) VALUES
(4, 'zyppo', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Alexandre', 'Eric', 'service@itrescue.be', 1, 0, 'Rue Chant des Oiseaux 4b'),
(5, 'DU', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Usai', 'Dimitri', 'dimitri@logicaltic.com', 2, 0, 'rue aux loups'),
(6, 'sky', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Alexandre', 'Tanguy', 'contact@itsky.be', NULL, 0, 'rue Du Pont Labigniat 1'),
(7, 'testSansEntreprise', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'testSansEntreprise', 'testSansEntreprise', 'testSansEntreprise@testSansEntreprise', 3, 0, 'rue testSansEntreprise'),
(8, 'Advensys', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'NA', 'Jean-Charles', 'Jean-Charles@advensys.be', NULL, 0, 'Rue à Wavre');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `sect`
--

INSERT INTO `sect` (`idSecteur`, `nom`) VALUES
(1, 'Infographie'),
(2, 'Infrastructure'),
(3, 'Telephonie'),
(4, 'Web');

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
-- Contraintes pour la table `convers`
--
ALTER TABLE `convers`
  ADD CONSTRAINT `convers_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `cli` (`idCli`) ON UPDATE CASCADE,
  ADD CONSTRAINT `convers_ibfk_2` FOREIGN KEY (`idPro`) REFERENCES `pro` (`idPro`) ON UPDATE CASCADE;

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
  ADD CONSTRAINT `idAdmin` FOREIGN KEY (`idAdmin`) REFERENCES `pro` (`mail`) ON DELETE CASCADE,
  ADD CONSTRAINT `idSect` FOREIGN KEY (`idSect`) REFERENCES `sect` (`idSecteur`) ON DELETE CASCADE;

--
-- Contraintes pour la table `msg`
--
ALTER TABLE `msg`
  ADD CONSTRAINT `msg_ibfk_1` FOREIGN KEY (`idConvers`) REFERENCES `convers` (`idConvers`) ON UPDATE CASCADE;

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
