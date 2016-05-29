$(document).ready(function(){
   $('.nav_toggler').click(function(){
      $('header nav ul').toggleClass('nav-active');
      $('body').toggleClass('body_disabled');
   });
      var $root = $('html, body');
      $('.anchor_link').click(function() {
          $root.animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 700);
          return false;
      });
      $("#toTop").click(function(){
         $("html, body").animate({ scrollTop: 0 }, "slow");
      });


   var blocks = $('.menu_link'),
       nav = $('nav');
   $(window).scroll(function() {
      var scrollHeight = $(window).scrollTop();

      if(scrollHeight  > 300) {
          $("#toTop").show();
          $("nav").css("border-bottom", "1px solid #eee");
      } else {
         $("#toTop").hide();
      }
      //Change active links state on scroll
        blocks.each(function() {
          var top = $(this).offset().top,
              bottom = top + $(this).outerHeight();

          if (scrollHeight >= top && scrollHeight <= bottom) {
            nav.find('a').removeClass('active');
            blocks.removeClass('active');
            $(this).addClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
         }
      });
      //fix for 'change active linkst state on scroll' last element bug
   	if ($(window).scrollTop() + document.body.clientHeight == $(document).height()) {
   	    $('nav ul li:last-child a').addClass('active');
   	}
      else{
         $('nav ul li:last-child a').removeClass('active');
      }
    });
});
