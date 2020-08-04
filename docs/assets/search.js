
  const debounce = (func, wait) => {
   let timeout;
   return function executedFunction(...args) {
     const later = () => {
       // null timeout to indicate the debounce ended
       timeout = null;
       // Execute the callback
       func(...args);
     };
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
   };
 };


$(document).ready(function(e){
  var returnedFunction = debounce(function() {
    const value = $("#searchbox").val().toLowerCase();
    const tbl = $("#price-table").DataTable();
    
    $("#price-table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    tbl.draw();
  }, 250);
  
  $("#searchbox").on("keyup change clear", returnedFunction);
});