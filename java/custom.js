$(function(){
  
   //back to top
  $('.back-to-top').click(function(){
       $('html,body').animate({scrollTop:0},2000);
  });

  $(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    if(scrolling >200){
        $('.back-to-top').fadeIn(500);
    }
    else{
        $('.back-to-top').fadeOut(500);
    }
   
    if(scrolling > 300){
         $('.nav').addClass('bg');      
    }
    else{
        $('.nav').removeClass('bg');
    }

  });



});