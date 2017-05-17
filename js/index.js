//Run some jQuery
$(document).ready(function(){
  //On click run code
  $("#search").click(function(){ 
    //Get value of input field
 var searchTerm = $('#searchTerm').val();
//Run ajax and get return in data type JSON
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    console.log(url);
      $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          
          $('#output').html('');
          for(var i=0;i<data[1].length;i++){
             $('#output').prepend("<div class='output-list'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div>");      
          }    
   $("#searchTerm").val('');
        },
        error: function (errorMessage) {
         console.log(errorMessage);
        }
    });
    

  });
  $('button').click(function (e) { 
  $(this).toggleClass('submit');
  $('body').toggleClass('hue');
  $('form').toggleClass('rotate');
  $('input').toggleClass('grow');
 if(e.which==13){
        $("#search").click();
      }
  e.preventDefault();
});
    
});