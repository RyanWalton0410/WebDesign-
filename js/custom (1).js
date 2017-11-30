/*
  * @package 
  * @subpackage template name HTML
  * 
  * Template Scripts
  * Created by themeturn
  1. navigation scroll
  2. Sticky nav
  3. POrtfolio Isotope
  4. Counter
  5. Pretty photo
  8. Isotope
  9. Animation (wow)
  10. Back to top
  
*/


jQuery(function($) {
  "use strict";



    $.noConflict();
     $('.navbar-nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });


  /* === jQuery for page scrolling feature - requires jQuery Easing plugin === */
    (function () {
        $('a.scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }());



  /* ----------------------------------------------------------- */
  /*  Main Navigation sticky
  /* ----------------------------------------------------------- */  
    $(".main-nav").sticky();

  /* ----------------------------------------------------------- */
  /*  Main slideshow
  /* ----------------------------------------------------------- */

  $('#slider_part').carousel({
    pause: true,
    interval: 100000,
  });

  /* ----------------------------------------------------------- */
 /*ISotope Portfolio
 /* ----------------------------------------------------------- */   
    $(window).load(function(){
      var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
          itemSelector : '.grid',
          layoutMode : 'fitRows'
        });
        
        $portfolio_selectors.on('click', function(){
          $portfolio_selectors.removeClass('active');
          $(this).addClass('active');
          var selector = $(this).attr('data-filter');
          $portfolio.isotope({ filter: selector });
          return false;
        });
      });
   
   
    // jQuery(document).ready(function( $ ) {
        $('.count').counterUp({
            delay: 100,
            time: 2000
        });
    // }); 

// prettyphoto

 $("a[data-rel^='prettyPhoto']").prettyPhoto();
 
 
    // modal ========================
      $('#projectModal').on('shown.bs.modal', function () {
          $('#myInput').focus()
        })

/* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        //Wow
        new WOW().init();

/* ==============================================
Back To Top Button
=============================================== */  
 
  $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-top').click(function () {
          $('#back-top a').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      
      $('#back-top').tooltip('hide');




});