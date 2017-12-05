$(document).ready(function(){
 
    $("#close").hide();
  
  
    
 });

 $("#random").on("click",function(){ 
  window.open('https://en.wikipedia.org/wiki/Special:Random','_blank');
    });

$("#close").on("click",function(){
  $("#data").empty();
   $("#search_box").val('');
   $("#close").hide();
});
  
$('#search_box').keypress(function(e){
  var key = e.which;
  if(key == 13){
    perform(e);
  }
});

    $("#search_btn").on("click",function(e) {
     perform(e);
    
     
    });

function perform(e){
    $("#search_box").show();
      $("#random").show();
       
      e.preventDefault();
        console.log("Submit button clicked");
        var pattern = $("#search_box").val();
      if(pattern=="") {alert("Search box is blank!, Please input the search box."); return;}
            
     var url="https://en.wikipedia.org/w/api.php?action=opensearch&search="+pattern+"&format=json&callback=?";

      $("#data").empty();
      $("#close").show();
      $.ajax( {
            type: "GET",
            url: url,
            async:false,
            dataType: "json",
            success: function(data) {
 
              
     
            for(var i=0;i<10;i++){
                $('#data').append('<br><br>');
                   $('#data').append('<p style="font-size:160%;"><b>"'+data[1][i]+'"</b></p>');
              $('#data').append('<br>');
                $('#data').append('<p>'+data[2][i]+'</p>');
                $('#data').append('<br>');
                $('#data').append('<a href="'+data[3][i]+'" target="_blank">'+data[3][i]+'</a>');
               $('#data').append('<HR WIDTH="60%" ALIGN="LEFT" NOSHADE>');
              $('#data').append('<br><br><br>');
                  console.log("over here");
         
                
              }
      
   
           var result = $('<div />').append(data).find('#data').html();
            $('#data').html(result);
           
            },
            error: function(errorMessage) {
                 console.log("damnn");
              $('#data').append('<br><br><center>No Results found!, Please search something different.</center>');
              }
        
          
         
        });

      
     
}