$(document).ready(function() {
  $('.menu-burger__header').click(function() {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.main-nav').toggleClass('open-menu');
  });

  $('.nav-list-links').click(function (e){
    e.preventDefault();
    $(e.target).closest('li').children("ul").toggle();
    if (e.target.tagName === 'IMG') {
      $(e.target).toggleClass('rotate');
    } else {
      $(e.target).children('img').toggleClass('rotate')
    }
  })
  $('.footer-list-links').click(function (e){
    e.preventDefault();
    $(e.target).closest('li').children("ul").toggle();

    if (e.target.tagName === 'IMG') {
      $(e.target).toggleClass('rotate');
    } else {
      $(e.target).children('img').toggleClass('rotate')
    }
  })
  $('.submenu-links').click(function (e){
    e.preventDefault();
    $(e.target).closest('li').children("ul").toggle();
    if (e.target.tagName === 'IMG') {
      $(e.target).toggleClass('rotate');
    } else {
      $(e.target).children('img').toggleClass('rotate')
    }
  });

  $('#js-carousel').owlCarousel({
    items: 1,
    dots: true,
  });
  $('#js-carousel-2').owlCarousel({
    items: 1,
    dots: true,
  })

});

