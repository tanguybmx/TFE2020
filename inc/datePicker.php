<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/momentjs/2.14.1/moment.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<div class="container">
    <div class="panel-heading">Proposer un rendez-vous</div>
      <div class="panel-body">
         <div class="row">
            <div class='col-md-2'>
               <div class="form-group">
                  <label class="control-label">Date du rendez-vous</label>
                  <div class='input-group date' id='datetimepicker1'>
                     <input type='text' class="form-control" />
                     <span class="input-group-addon">
                     <span class="glyphicon glyphicon-calendar"></span>
                     </span>
                  </div>
               </div>
            </div>
        </div>
        <input class="btn btn-primary" value="Proposer">
      </div>
</div>

<script>
  $(function () {
    $('#datetimepicker1').datetimepicker();
 });
</script>