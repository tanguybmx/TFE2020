<?php
////ce controlleur permet de faire une requêtes http vers ec.europa.eu pour vérifier qu'un numéro de TVA existe
$nComplet= 'BE0882610819'/*htmlspecialchars($_POST['nTva'])*/;
$longueur = strlen($nComplet);
$country = substr($nComplet,0,2);
$vatnum = substr($nComplet,2,$longueur);
echo $country;
echo $vatnum;

$client = new SoapClient("http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl");
$response=$client->checkVat(array(
  'countryCode' => $country,
  'vatNumber' => $vatnum
));



$tabResponse =  json_encode($response);

echo $tabResponse;

