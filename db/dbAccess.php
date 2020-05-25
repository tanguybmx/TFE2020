<?php

class dbAccess
{

    private $pdo = null;

    public function connexionDB()
    {
        try {
            $this->pdo = new PDO("mysql:host=localhost:3308;dbname=goforit;charset=utf8", "root", "root");
        } catch (Exception $e) {
            die("Erreur :" . $e->getMessage());
        }
    }

    public function callProcedure($nomProcedure, $procParams = array())
    {
        $params = array();

                //procédure avec 0 param
                switch ($nomProcedure) {
                    case'getSecteur':
                    case'getEnt':
                    case 'countPro':
                        array_push($params);
        
                        try {
                            $this->connexionDB();
                            $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                            $requete = $this->pdo->prepare($procedureCall);
                            $requete->execute($procParams);
                            return $requete->fetchAll();
                        } catch (Exception $e) {
                            die("Erreur :" . $e->getMessage());
                        }
                        break;
                }
                //procédure avec 1 param
                switch ($nomProcedure) {
                    case'checkEnt':
                    case'getHisEnt':
                    case 'getMsgConvers':
                    case 'getDernierMsgConvers':
                    case 'getNomCli':
                    case 'getNomPro':
                    case 'getProEnt':
                    case'getConversCli':
                    case'getConversPro':
                        array_push($params, '?');
        
                        try {
                            $this->connexionDB();
                            $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                            $requete = $this->pdo->prepare($procedureCall);
                            $requete->execute($procParams);
                            return $requete->fetchAll();
                        } catch (Exception $e) {
                            die("Erreur :" . $e->getMessage());
                        }
                        break;
                }

                 //procédure avec 2 param
        switch ($nomProcedure) {
            case'checkInscriptionProfessionnel':
            case'checkInscriptionClient':
            case'connexionClient':
            case 'connexionPro':
            case 'addIdEnt':
            case 'checkConvers':
            case 'creationConvers':
            case 'getThisConvers':
                array_push($params, '?', '?');

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }
        //procédure avec 5 param
        switch ($nomProcedure) {
            case 'creationMsg':
                array_push($params, '?', '?', '?', '?', '?');

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }
        //procédure avec 6 param
        switch ($nomProcedure) {
            case 'creationClient':
            case 'creationProfessionnel':
                array_push($params, '?', '?', '?', '?', '?', '?');

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }

        //procédure 7 params
        switch ($nomProcedure) {
            case 'creationEntreprise':
                array_push($params, '?', '?', '?', '?', '?', '?', '?');

                try {
                    $this->connexionDB();
                    $procedureCall = 'call ' . $nomProcedure . '(' . join(',', $params) . ')';
                    $requete = $this->pdo->prepare($procedureCall);
                    $requete->execute($procParams);
                    return $requete->fetchAll();
                } catch (Exception $e) {
                    die("Erreur :" . $e->getMessage());
                }
                break;
        }


    }
}