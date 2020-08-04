$(document).ready(function(){
  $("#searchbox").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    console.log(value);
    $("#price-table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});