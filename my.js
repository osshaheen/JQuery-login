$(document).ready(function()
{
   $(".zero").animate({
       top:'150px'     
   },1000,function(){
       $(".first").animate({
           width:'400',
           height:'250',
           borderRadius:'20px',
       },2000,function(){
           $(".text").fadeIn(1000);
           $(".password").fadeIn(1000);
           $(".h2").fadeIn(1000,function(){
           $(".login").fadeIn(1000);
            $(".login").animate({
            left:'480px',
           },1000);
           });
       });
   });
});