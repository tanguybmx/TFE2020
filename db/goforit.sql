-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  sam. 30 mai 2020 à 12:06
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

DROP PROCEDURE IF EXISTS `countRdvFini`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `countRdvFini` ()  BEGIN 

SELECT COUNT(rdv.idRdv) as nbRdv FROM rdv
WHERE rdv.statutRdv = 4 || rdv.statutRdv = 5;

END$$

DROP PROCEDURE IF EXISTS `creationAvis`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `creationAvis` (IN `rdvId` INT, IN `avisCote` DOUBLE)  BEGIN

INSERT INTO avis (avis.idRdv, avis.cote) VALUES (rdvId,  avisCote);

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

SELECT rdv.idRdv, DATE_FORMAT(rdv.date,'%d-%m-%Y %H:%i:%s') as rdvDate, rdv.statutRdv , rdv.idCli, rdv.idPro, pro.pseudo, convers.idConvers FROM rdv
JOIN pro ON rdv.idPro = pro.idPro
JOIN convers ON rdv.idPro = convers.idPro && rdv.idCli= convers.idClient
WHERE rdv.idCli = cli;

END$$

DROP PROCEDURE IF EXISTS `getAllRdvPro`$$
CREATE DEFINER=`root`@`%` PROCEDURE `getAllRdvPro` (IN `pro` INT(255))  BEGIN 

SELECT rdv.idRdv, DATE_FORMAT(rdv.date,'%d-%m-%Y %H:%i:%s') as rdvDate, rdv.statutRdv , rdv.idCli, cli.pseudo, rdv.idPro, convers.idConvers FROM rdv
JOIN cli ON rdv.idCli = cli.idCli
JOIN convers ON rdv.idPro = convers.idPro && rdv.idCli= convers.idClient
WHERE rdv.idPro = pro;


END$$

DROP PROCEDURE IF EXISTS `getAvisPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAvisPro` (IN `pro` INT)  BEGIN 

SELECT SUM(avis.cote) as coteTotal FROM avis
INNER JOIN rdv ON avis.idRdv = rdv.idRdv
WHERE rdv.idPro = pro;

END$$

DROP PROCEDURE IF EXISTS `getClientSatisfait`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getClientSatisfait` ()  BEGIN

SELECT COUNT(avis.idAvis) as nbCli FROM avis
WHERE avis.cote>2.5;

END$$

DROP PROCEDURE IF EXISTS `getContactCli`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactCli` (IN `conv` INT(255))  BEGIN 

SELECT convers.idPro FROM convers
WHERE convers.idConvers = conv;

END$$

DROP PROCEDURE IF EXISTS `getContactPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContactPro` (IN `conv` INT(255))  BEGIN 

SELECT convers.idClient, convers.idPro FROM convers
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

DROP PROCEDURE IF EXISTS `getCotePro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCotePro` (IN `pro` INT(255))  BEGIN

SELECT AVG(avis.cote) as moyenne, COUNT(avis.cote) as nbAvis FROM avis
INNER JOIN rdv ON avis.idRdv = rdv.idRdv
WHERE rdv.idPro = pro;

END$$

DROP PROCEDURE IF EXISTS `getDernierMsgConvers`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getDernierMsgConvers` (IN `conv` INT(255))  BEGIN

SELECT msg.idExp, msg.idDest, msg.contenu, DATE_FORMAT(msg.dateHeure,'%d-%m-%Y %H:%i:%s') as msgDate FROM msg
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

DROP PROCEDURE IF EXISTS `getInfoPro`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getInfoPro` (IN `pro` INT(255))  BEGIN

SELECT pro.pseudo, pro.nom as proNom, pro.prenom, pro.mail, pro.adresse, ent.nom as entNom, AVG(avis.cote) as moyenne, COUNT(avis.idAvis) as nbAvis from pro
JOIN ent ON pro.mail = ent.idAdmin 
JOIN rdv ON pro.idPro = rdv.idPro
JOIN avis ON rdv.idRdv = avis.idRdv
WHERE pro.idPro = pro;

END$$

DROP PROCEDURE IF EXISTS `getMsgConvers`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getMsgConvers` (IN `convers` INT(255))  BEGIN 

SELECT msg.idExp, msg.idDest, msg.contenu, DATE_FORMAT(msg.dateHeure,'%d-%m-%Y %H:%i:%s') as msgDate, msg.statut, msg.idConvers FROM msg
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

SELECT rdv.idRdv, DATE_FORMAT(rdv.date,'%d-%m-%Y %H:%i:%s') as dateEu, rdv.statutRdv , rdv.idCli, rdv.idPro FROM rdv
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
  `cote` double(10,1) NOT NULL COMMENT 'valeur entre 0 et 5',
  PRIMARY KEY (`idAvis`),
  KEY `idRdv` (`idRdv`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `avis`
--

INSERT INTO `avis` (`idAvis`, `idRdv`, `cote`) VALUES
(4, 14, 4.5);

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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `convers`
--

INSERT INTO `convers` (`idConvers`, `idClient`, `idPro`) VALUES
(16, 2, 4),
(17, 2, 5),
(18, 2, 7);

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
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Déchargement des données de la table `msg`
--

INSERT INTO `msg` (`idMsg`, `idConvers`, `idExp`, `idDest`, `contenu`, `dateHeure`, `statut`) VALUES
(95, 15, 4, 3, 'Bonjour, voici la nouvelle proposition de rendez-vous 01/06/2020 09:00:00. Merci de valider celle-ci si elle vous convient.', '2020-05-29 10:06:45', 0),
(96, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 10/06/2020 1::0:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:07:39', 0),
(97, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 03/06/2020 9:00:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:12:52', 0),
(98, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: // ::00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:24:32', 0),
(99, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 16/06/2020 1::0:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:24:51', 0),
(100, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: // ::00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:27:38', 0),
(101, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 17/06/2020 1::0:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:27:52', 0),
(102, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 17/06/2020 1::0:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:27:57', 0),
(103, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 28/05/2020 1::0:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:29:23', 0),
(104, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 31/05/2020 1::0:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:30:58', 0),
(105, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 05/06/2020 1::0:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:42:28', 0),
(106, 15, 4, 3, 'Bonjour, voici ma propositon de rendez-vous: 03/06/2020 10:00:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:45:34', 0),
(107, 16, 2, 4, 'Première prise de contact effectuée', '2020-05-29 10:53:00', 0),
(108, 16, 2, 4, 'Bonjour, je suis un jeune en pleine rédaction de mon TFE, et mon PC ne veut plus démarrer. Pourriez-vous m\'aider ? Bien à vous.', '2020-05-29 10:54:20', 0),
(109, 16, 4, 2, 'Bonjour, oui tout a fait nous pouvons planifier un rendez-vous. Je vais vous faire une proposition.', '2020-05-29 10:55:30', 0),
(110, 16, 4, 2, 'Bonjour, voici ma propositon de rendez-vous: 10/06/2020 10:00:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 10:55:59', 0),
(111, 16, 2, 4, 'Bonjour, serait-il possible de convenir d\'une autre date de rendez-vous ? Celui-ci était fixé au 10-06-2020 10:00:00. Merci.', '2020-05-29 10:56:44', 0),
(112, 16, 2, 4, 'Cela me conviendrait en semaine et plutôt en soirée. ', '2020-05-29 10:57:51', 0),
(115, 16, 4, 2, 'Bonjour, voici la nouvelle proposition de rendez-vous 18/06/2020 19:00:00. Merci de valider celle-ci si elle vous convient.', '2020-05-29 11:02:08', 0),
(116, 16, 2, 4, 'Bonjour, je viens de valider notre rendez-vous du 18-06-2020 19:00:00. Merci.', '2020-05-29 11:06:50', 0),
(117, 17, 2, 5, 'Première prise de contact effectuée', '2020-05-29 16:00:45', 0),
(118, 18, 2, 7, 'Première prise de contact effectuée', '2020-05-29 16:01:59', 0),
(119, 18, 2, 7, 'test', '2020-05-29 16:02:15', 0),
(120, 18, 2, 7, 'test', '2020-05-29 16:04:00', 0),
(121, 17, 2, 5, 'test', '2020-05-29 16:04:08', 0),
(122, 17, 5, 2, 'Bonjour, voici ma propositon de rendez-vous: 31/05/2020 8:00:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 16:12:54', 0),
(123, 17, 2, 5, 'Bonjour, serait-il possible de convenir d\'une autre date de rendez-vous ? Celui-ci était fixé au 31-05-2020 08:00:00. Merci.', '2020-05-29 16:23:45', 0),
(124, 16, 4, 2, 'Bonjour, voici ma propositon de rendez-vous: 16/06/2020 10:00:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-29 16:25:57', 0),
(125, 16, 4, 2, 'test', '2020-05-30 11:57:54', 0),
(126, 16, 4, 2, 'test', '2020-05-30 12:02:23', 0),
(127, 16, 4, 2, 'test', '2020-05-30 12:02:41', 0),
(130, 16, 4, 2, 'Bonjour, voici ma propositon de rendez-vous: 05/06/2020 12:30:00 Pourriez-vous me confirmer celle-ci ?', '2020-05-30 12:30:30', 0);

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
  `statutRdv` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 => en attente 1=> validé 2 => refusé 3=> annulé 4=> Effectuée 5=> avis donné',
  `idCli` int(255) NOT NULL,
  `idPro` int(255) NOT NULL,
  PRIMARY KEY (`idRdv`),
  KEY `idCli` (`idCli`),
  KEY `idPro` (`idPro`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rdv`
--

INSERT INTO `rdv` (`idRdv`, `date`, `statutRdv`, `idCli`, `idPro`) VALUES
(14, '2020-06-18 19:00:00', 5, 2, 4),
(16, '2020-05-31 08:00:00', 0, 2, 5),
(17, '2020-06-16 10:00:00', 0, 2, 4),
(20, '2020-06-05 12:30:00', 0, 2, 4);

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
