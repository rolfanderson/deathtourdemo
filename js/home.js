/***** Snackbar *****/
$(document).ready(function() {
    $("#hide").click(function(){
        $("#snackbar").hide();
    });
});

setTimeout(function() {
  $("#snackbar").hide().empty();
}, 10000);
