-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  jeu. 28 mai 2020 à 09:41
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
DROP PROCEDURE IF EXISTS `addIdEnt`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `addIdEnt` (IN `email` VARCHAR(300), IN `nTva` INT(11))  BEGIN

UPDATE pro set idEntreprise = nTva
WHERE mail = email;

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

DROP PROCEDURE IF EXISTS `checkSiDejaContact`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `checkSiDejaContact` (IN `cli` INT(255), IN `pro` INT(255))  BEGIN

SELECT convers.idConvers FROM convers
WHERE convers.idClient = cli && convers.idPro = pro;

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
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationMsg` (IN `exp` INT(255), IN `dest` INT(255), IN `conv` INT(255), IN `content` VARCHAR(1000))  BEGIN 

INSERT INTO msg( msg.idExp, msg.idDest, msg.idConvers, msg.contenu) VALUES(exp, dest, conv, content);

END$$

DROP PROCEDURE IF EXISTS `creationProfessionnel`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationProfessionnel` (IN `username` VARCHAR(300), IN `password` VARCHAR(300), IN `name` VARCHAR(300), IN `firstname` VARCHAR(300), IN `email` VARCHAR(300), IN `adress` VARCHAR(300))  BEGIN

INSERT INTO pro(pseudo, mdp, nom, prenom, mail, adresse) VALUES(username, password, name, firstname, adress, email);

END$$

DROP PROCEDURE IF EXISTS `creationRdv`$$
CREATE DEFINER=`root`@`%` PROCEDURE `creationRdv` (IN `pro` INT(255), IN `cli` INT(255), IN `dateRdv` DATETIME)  BEGIN 


INSERT INTO rdv(rdv.idPro, rdv.idCli, rdv.date) VALUES (pro, cli, dateRdv);


END$$

DROP PROCEDURE IF EXISTS `creationSecteur`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationSecteur` (IN `name` VARCHAR(300))  BEGIN 

INSERT INTO sect (nom) VALUES(name);

END$$

DROP PROCEDURE IF EXISTS `getAllRdvCli`$$
CREATE DEFINER=`root`@`%` PROCEDURE `getAllRdvCli` (IN `cli` INT(255))  BEGIN 

SELECT rdv.idRdv, rdv.date, rdv.statutRdv , rdv.idCli, rdv.idPro FROM rdv
WHERE rdv.idCli = cli;

END$$

DROP PROCEDURE IF EXISTS `getAllRdvPro`$$
CREATE DEFINER=`root`@`%` PROCEDURE `getAllRdvPro` (IN `pro` INT(255))  BEGIN 

SELECT rdv.idRdv, rdv.date, rdv.statutRdv , rdv.idCli, rdv.idPro FROM rdv
WHERE rdv.idPro = pro;

END$$

DROP PROCEDURE IF EXISTS `getContactCli`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactCli` (IN `conv` INT(255))  BEGIN 

SELECT convers.idPro FROM convers
WHERE convers.idConvers = conv;

END$$

DROP PROCEDURE IF EXISTS `getContactPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactPro` (IN `conv` INT(255))  BEGIN 

SELECT convers.idClient FROM convers
WHERE convers.idConvers = conv;

END$$

DROP PROCEDURE IF EXISTS `getConversCli`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getConversCli` (IN `idUser` INT(255))  BEGIN 

SELECT msg.idConvers, MAX(msg.dateHeure) as dernierMsg, convers.idClient, convers.idPro 
FROM msg 
INNER JOIN convers ON msg.idConvers = convers.idConvers 
WHERE convers.idClient = idUser
GROUP BY msg.idConvers  
ORDER BY dernierMsg DESC;


END$$

DROP PROCEDURE IF EXISTS `getConversPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getConversPro` (IN `idUser` INT(255))  BEGIN 

SELECT msg.idConvers, MAX(msg.dateHeure) as dernierMsg, convers.idClient, convers.idPro 
FROM msg 
INNER JOIN convers ON msg.idConvers = convers.idConvers 
WHERE convers.idPro = idUser
GROUP BY msg.idConvers  
ORDER BY dernierMsg DESC;


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

SELECT msg.idExp, msg.idDest, msg.contenu, msg.dateHeure, msg.statut, msg.idConvers FROM msg
WHERE msg.idConvers = convers
ORDER BY msg.dateHeure ASC;
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

SELECT pro.idPro,ent.nom FROM ent
INNER JOIN pro ON ent.idAdmin=pro.mail
WHERE pro.idPro = pro;

END$$

DROP PROCEDURE IF EXISTS `getProViaMail`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProViaMail` (IN `email` VARCHAR(300))  BEGIN

SELECT pro.idPro FROM pro 
WHERE pro.mail=email;

END$$

DROP PROCEDURE IF EXISTS `getRdv`$$
CREATE DEFINER=`root`@`%` PROCEDURE `getRdv` (IN `rdv` INT(255))  BEGIN 

SELECT rdv.idRdv, rdv.date, rdv.statutRdv , rdv.idCli, rdv.idPro FROM rdv
WHERE rdv.idRdv = rdv;

END$$

DROP PROCEDURE IF EXISTS `getSecteur`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSecteur` ()  BEGIN

SELECT idSecteur, nom
FROM sect;

END$$

DROP PROCEDURE IF EXISTS `modifDateRdv`$$
CREATE DEFINER=`root`@`%` PROCEDURE `modifDateRdv` (IN `rdv` INT(255), IN `dateRdv` DATETIME)  BEGIN 

UPDATE rdv 
SET rdv.date = dateRdv , rdv.statutRdv = 0
WHERE rdv.idRdv = rdv;

END$$

DROP PROCEDURE IF EXISTS `modifStatutRdv`$$
CREATE DEFINER=`root`@`%` PROCEDURE `modifStatutRdv` (IN `rdv` INT(255), IN `statut` TINYINT)  BEGIN 

UPDATE rdv 
SET rdv.statutRdv = statut
WHERE rdv.idRdv = rdv;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cli`
--

INSERT INTO `cli` (`idCli`, `pseudo`, `mdp`, `nom`, `prenom`, `adresse`, `mail`) VALUES
(1, 'test', 'test', 'test', 'test', 'test', 'test'),
(2, 'SkylineEz', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Alexandre', 'Tanguy', 'rue Du Pont Labigniat 1, 1470 Genappe', 'tanguyxp@live.fr'),
(3, 'JL65', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', 'Depepe', 'Jean-Luc', 'Chaussée de Nivelles 60 Manage', 'Jean-Luc@gmail.com');

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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `convers`
--

INSERT INTO `convers` (`idConvers`, `idClient`, `idPro`) VALUES
(1, 2, 4),
(2, 2, 5),
(4, 2, 6),
(14, 2, 7),
(15, 3, 4);

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
  `dateHeure` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statut` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 = non lu, 1 = lu',
  PRIMARY KEY (`idMsg`),
  UNIQUE KEY `idConvers` (`idConvers`,`idMsg`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `msg`
--

INSERT INTO `msg` (`idMsg`, `idConvers`, `idExp`, `idDest`, `contenu`, `dateHeure`, `statut`) VALUES
(1, 1, 2, 4, 'Test de message et de conversation', '2020-05-25 15:00:00', 0),
(3, 1, 4, 2, 'Test réponse d\'un pro dans une conversation', '2020-05-25 16:00:00', 0),
(4, 2, 2, 5, 'Test envois à un second pro', '2020-05-25 16:30:00', 0),
(18, 1, 4, 2, 'test', '2020-05-26 15:17:18', 0),
(19, 1, 4, 2, 'test2', '2020-05-26 15:18:13', 0),
(20, 1, 2, 4, 'Réponse Client avec date correct', '2020-05-26 15:18:55', 0),
(21, 2, 2, 5, 'Bonne date', '2020-05-26 15:19:19', 0),
(22, 1, 2, 4, 'test refresh', '2020-05-26 15:19:30', 0),
(36, 1, 4, 2, 'test', '2020-05-26 15:26:08', 0),
(37, 1, 4, 2, 'réponse depuis ma fenêtre de tchat', '2020-05-26 15:27:31', 0),
(38, 1, 4, 2, 'test', '2020-05-26 15:28:01', 0),
(39, 1, 4, 2, 'test 2 depuis pro', '2020-05-26 15:28:42', 0),
(40, 1, 4, 2, 'test 2 depuis pro', '2020-05-26 15:28:46', 0),
(41, 1, 4, 2, 'test 2 depuis pro', '2020-05-26 15:28:55', 0),
(42, 1, 4, 2, 'test3', '2020-05-26 15:28:57', 0),
(43, 1, 4, 2, 'test3', '2020-05-26 15:29:00', 0),
(44, 1, 4, 2, 'test réponse 2eme pro', '2020-05-26 15:29:02', 0),
(45, 1, 4, 2, 'réponse depuis ma fenêtre de tchat', '2020-05-26 15:29:58', 0),
(46, 1, 4, 2, 'test', '2020-05-26 15:35:08', 0),
(47, 1, 4, 2, 'test Scroll', '2020-05-26 15:35:51', 0),
(48, 2, 5, 2, 'Test envois depuis DU', '2020-05-26 15:38:03', 0),
(49, 2, 5, 2, 'test envois Convers ', '2020-05-26 15:38:33', 0),
(50, 2, 5, 2, 'Comprends pas pourquoi refresh aléatoire', '2020-05-26 15:38:45', 0),
(51, 1, 2, 4, 'test', '2020-05-26 15:43:33', 0),
(52, 1, 2, 4, 'envois test ', '2020-05-26 15:44:26', 0),
(53, 2, 2, 5, 'test envois', '2020-05-26 15:44:36', 0),
(54, 1, 4, 2, 'testDirect', '2020-05-26 15:48:00', 0),
(55, 1, 2, 4, 'testDirect', '2020-05-26 15:48:24', 0),
(56, 2, 2, 5, 'test tri', '2020-05-26 18:09:22', 0),
(57, 2, 2, 5, 'test 2 depuis cli', '2020-05-26 18:10:08', 0),
(60, 14, 2, 7, 'Première prise de contact effectuée', '2020-05-26 20:00:55', 0),
(61, 15, 3, 4, 'Première prise de contact effectuée', '2020-05-27 10:52:18', 0),
(62, 15, 3, 4, 'Bonjour, je rencontre un problème pour connecter mon imprimante à mon ordinateur. Serait-il possible de m\'aider ?', '2020-05-27 10:52:56', 0),
(63, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 05/28/2020 1:00 PM&lt;br&gt; Pourriez-vous me confirmer celle-ci ?', '2020-05-27 14:31:03', 0),
(64, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 05/30/2020 7:00 AM&lt;br&gt; Pourriez-vous me confirmer celle-ci ?', '2020-05-27 14:32:51', 0),
(65, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 05/30/2020 11:00 AM&lt;br&gt; Pourriez-vous me confirmer celle-ci ?', '2020-05-27 14:33:23', 0),
(66, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 06/02/2020 8:00 AM&lt;br&gt; Pourriez-vous me confirmer celle-ci ?', '2020-05-27 14:36:08', 0),
(67, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 06/27/2020 12:00 AM Pourriez-vous me confirmer celle-ci ?', '2020-05-27 14:37:27', 0),
(68, 1, 4, 2, 'Bonjour, voici ma propositon de rendez-vous: 05/27/2020 7:00 PM Pourriez-vous me confirmer celle-ci ?', '2020-05-27 14:39:20', 0),
(69, 1, 4, 2, 'test', '2020-05-27 15:05:27', 0);

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
-- Structure de la table `rdv`
--

DROP TABLE IF EXISTS `rdv`;
CREATE TABLE IF NOT EXISTS `rdv` (
  `idRdv` int(255) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `statutRdv` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 => en attente 1=> validé 2 => refusé 3=> annulé',
  `idCli` int(255) NOT NULL,
  `idPro` int(255) NOT NULL,
  PRIMARY KEY (`idRdv`),
  KEY `idCli` (`idCli`),
  KEY `idPro` (`idPro`)
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
-- Contraintes pour la table `rdv`
--
ALTER TABLE `rdv`
  ADD CONSTRAINT `idCli` FOREIGN KEY (`idCli`) REFERENCES `cli` (`idCli`) ON UPDATE CASCADE,
  ADD CONSTRAINT `idPro` FOREIGN KEY (`idPro`) REFERENCES `pro` (`idPro`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `serv`
--
ALTER TABLE `serv`
  ADD CONSTRAINT `serv_ibfk_1` FOREIGN KEY (`idEnt`) REFERENCES `ent` (`idEnt`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
