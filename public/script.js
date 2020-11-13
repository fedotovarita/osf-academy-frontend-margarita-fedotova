$(document).ready(function() {
 $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.main-nav').toggleClass('open-menu');
    });

    $('#js-carousel').owlCarousel({
        
        items: 1,
        dots: true,
      
        responsive: {
          600: {
            items: 1
          }
        }
      });
    
});

