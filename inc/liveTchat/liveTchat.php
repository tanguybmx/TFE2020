<?php
  session_start();
  $_SESSION['pageActuelle']="liveTchat/liveTchat.php";
?>

<link rel="stylesheet" href="inc/liveTchat/css/liveTchatStyle.css">
<script src="https://cdn.jsdelivr.net/momentjs/2.14.1/moment.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<div class="container py-5 px-4">
    <!-- For demo purpose-->
    <header class="text-center">
      <h1 class="display-4 text-black">Prise de contact</h1>
    </header><br>
    <div class="row rounded-lg overflow-hidden shadow">
      <!-- Users box-->
      <div class="col-5 px-0" id="contentConvers">
        <div class="bg-white">
  
          <div class="bg-gray px-4 py-2 bg-light">
            <p class="h5 mb-0 py-1">Recent</p>
          </div>
  
          <div class="messages-box">
            <div class="list-group rounded-0" id="listConvers">
              <a class="list-group-item list-group-item-action active text-white rounded-0">
                <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">25 Dec</small>
                    </div>
                    <p class="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              </a>
  
              <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">14 Dec</small>
                    </div>
                    <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                  </div>
                </div>
              </a>
  
              <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">9 Nov</small>
                    </div>
                    <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              </a>
  
              <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">18 Oct</small>
                    </div>
                    <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              </a>
  
              <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">17 Oct</small>
                    </div>
                    <p class="font-italic text-muted mb-0 text-small">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              </a>
  
              <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">2 Sep</small>
                    </div>
                    <p class="font-italic text-muted mb-0 text-small">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </a>
  
              <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">30 Aug</small>
                    </div>
                    <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              </a>
  
              <a href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                <div class="media"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50" class="rounded-circle">
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <h6 class="mb-0">Jason Doe</h6><small class="small font-weight-bold">21 Aug</small>
                    </div>
                    <p class="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                </div>
              </a>
  
            </div>
          </div>
        </div>
      </div>
      <!-- Chat Box-->
      <div class="col-7 px-0" id="contentChat">
        <span id="nomContact"></span>
        <div class="px-4 py-5 chat-box bg-white" id="msgConvers">
  
        </div>
  
        <!-- Typing area -->
        <form action="#" class="bg-light">
          <div class="input-group">
            <input type="text" id="contenuNouveauMsg" placeholder="Type a message" aria-describedby="button-addon2" class="form-control rounded-0 border-0 py-4 bg-light">
            <div class="input-group-append" >
              <button id="button-addon2" class="btn btn-link"> <i class="fa fa-paper-plane"></i></button>
              <button id="button-addon3" class="btn btn-link" id="calendrier"> <i class="fa fa-calendar-plus"></i></button>
            </div>
          </div>
        </form>
  
      </div>
    </div>
  </div>
  
  <script>
removeClassActive('navPriseDeContact');
afficherConvers('<?=$_SESSION['userId'] ;?>');
var box = document.getElementById('msgConvers');
box.scrollTop = box.scrollHeight;



</script>