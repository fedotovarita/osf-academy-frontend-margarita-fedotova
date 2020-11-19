function asdf(swiperObject) {
  $.getJSON('featured-items.json', function(data){
    for(var i = 0; i < data.items.length; i++) {
      swiperObject.appendSlide(
        '<div class="swiper-slide featured-slide"><img src="' +
        data.items[i]['image'] +
        '" alt=""><span class="featured-prod-description"><p>' +
        data.items[i]['name'] +
        '</p><p class="featured-item-label">' +
        data.items[i]['label'] + 
        '</p></span></div>'
      );
    } 
  })
}

$(document).ready(function() {
  $('.menu-burger__header').click(function() {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.main-nav').toggleClass('open-menu');
  });
  // $('.nav-list-links').hover(function(){
  //   if (!$('.submenu').hasClass('active')) {
  //     $('.submenu').removeClass('hidden');
  //   }
  // }, function () {
  //   if (!$('.submenu').hasClass('active')) {
  //     $('.submenu').addClass('hidden');
  //   }
  // });
  $('.nav-list-links').on('click', function (e){
    e.preventDefault();
    // $('.serv-link').addClass('active');
    $(e.target).closest('li').children("ul").toggleClass('hidden');
    if (e.target.tagName === 'IMG') {
      $(e.target).toggleClass('rotate');
    } else {
      $(e.target).children('img').toggleClass('rotate')
    }
  })

  $('.footer-list-links').click(function (e){
    e.preventDefault();
    $(e.target).closest('li').children("ul").toggleClass('hidden');

    if (e.target.tagName === 'IMG') {
      $(e.target).toggleClass('rotate');
    } else {
      $(e.target).children('img').toggleClass('rotate')
    }
  })

  $('.submenu-links').click(function (e){
    e.preventDefault();
    $(e.target).closest('li').children("ul").toggleClass('hidden');
    if (e.target.tagName === 'IMG') {
      $(e.target).toggleClass('rotate');
    } else {
      $(e.target).children('img').toggleClass('rotate')
    }
  });

  $('#js-carousel-2').owlCarousel({
    items: 1,
    dots: true,
  })

  $('.facebook-banner').click(function(){
    location.href = 'https://www.facebook.com/OSFDigital/';
  });

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
    loop: true
  });

	var swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  asdf(swiper2);

  $('.more-prod').click(function() {
    $.getJSON('popular-items.json', function(data){
      for(var i = 0; i < data.items.length; i++) {
        $('.popular-item-card').append('<div class="item"><img id="img-prod" src="' +
        data.items[i]['image'] +
        '" alt=""><span class="popular-item-card-description"><p id="name-prod">' +
        data.items[i]['name'] +
        '</p><p id="price-prod">' +
        data.items[i]['price'] + '</p></span></div>');
      }
  })

  });
});