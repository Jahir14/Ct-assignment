$(document).ready(function(){
           $("#pass").keyup(function(){
               var len= $("#pass").val().length;
           
               if(len<1){
                    $(".status").text("");
                   $(".status").removeClass("weak");
                    $(".status").removeClass("strong");
                    $(".status").removeClass("medium");
               }
               else if(len<=4){
                   $(".status").text("Weak");
                   $(".status").addClass("weak");
                    $(".status").removeClass("strong");
                    $(".status").removeClass("medium");
               }
               else if(len<=7){
                   $(".status").text("Medium");
                   $(".status").addClass("medium");
                    $(".status").removeClass("weak");
                    $(".status").removeClass("strong");
               }
               else{
                   $(".status").text("Strong");
                   $(".status").addClass("strong");
                   $(".status").removeClass("weak");
                   $(".status").removeClass("medium");
                   
               }
           }); 
        });