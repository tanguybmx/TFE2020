<?php
  session_start();
  $_SESSION['pageActuelle']="liveTchat/liveTchat.php";
  if($_SESSION['typeCompte'] == "professionnel" && !isset($_SESSION['idEnt'])){
    echo "<script>entreprise()</script>";}
  ?>

?>

<link rel="stylesheet" href="inc/liveTchat/css/liveTchatStyle.css">
<script src="https://cdn.jsdelivr.net/momentjs/2.14.1/moment.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css">

<div class="container py-5 px-4">
    <!-- For demo purpose-->
    <header class="text-center">
      <h1 class="display-4 text-black">Prise de contact</h1>
      <h3 id="pasDeContact"></h3>
    </header><br>
    <div class="row rounded-lg overflow-hidden shadow">
      <!-- Users box-->
      <div class="col-12 px-0" id="contentConvers">
        <div class="bg-white">
  
          <div class="bg-gray px-4 py-2 bg-light">
            <p class="h5 mb-0 py-1">Récent</p>
          </div>
  
          <div class="messages-box">
            <div class="list-group rounded-0" id="listConvers">

            </div>
          </div>
      </div>
      </div>
    </div>
      <!-- Chat Box-->
      <div class="col-12 px-0" id="contentChat" style="display:none;">
        <span id="nomContact"></span>
        <div class="px-4 py-5 chat-box bg-white" id="msgConvers">
  
        </div>
  
        <!-- Typing area -->
        
          <div class="input-group">
            <input type="text" id="contenuNouveauMsg" placeholder="Type a message" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light">
            <div class="input-group-append" >
              <button id="button-addon2" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
              <?php 
              if($_SESSION['typeCompte']== 'professionnel'){
                echo'<button id="button-addon3" class="btn btn-link" id="calendrier"> <i class="fa fa-calendar-plus"></i></button>';
              }
              if($_SESSION['typeCompte']== 'client'){
                echo '<button id="button-addon4" class="btn btn-link" id="infoClient"> <i class="fa fa-info-circle" aria-hidden="true"></i></button>';
              }
              ?>
            </div>
          </div>
  
      </div>
    </div>
  
  <script>
removeClassActive('navPriseDeContact');
afficherConvers();
//$('#contentConvers a:first').click();
var box = document.getElementById('msgConvers');
box.scrollTop = box.scrollHeight;




</script>