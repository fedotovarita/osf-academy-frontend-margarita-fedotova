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
        '</p></span><div class="hover-buttons"><button class="hover-button-price">' + 
        data.items[i]['price']+ 
        '</button><button class="hover-button-buy">BUY NOW</button></div></div>'
      );
    } 
  })
}

function loadItems(itemCardClass, limit, ofset) {
  $.getJSON('popular-items.json', function(data){
    let splicedArray = data.items.splice(ofset, limit);
    for(var i = 0; i < splicedArray.length; i++) {
      $(itemCardClass).append(
        '<div class="item ' + splicedArray[i]['hover-type'] + '"><img id="img-prod" src="' +
        splicedArray[i]['image'] +
        '" alt=""><span class="popular-item-card-description"><p id="name-prod">' +
        splicedArray[i]['name'] +
        '</p><p id="price-prod">' +
        splicedArray[i]['price'] + '</p></span></div>'
      );
    }
  })
}

$(document).ready(function() {
  let currentYear = new Date();
  $('.year-js').append(currentYear.getFullYear() + '.');
  
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

  let itemsLoaded = 0;

  loadItems('.popular-item-card', 8, 0);
  itemsLoaded += 8;

  $('.more-prod').click(function (e) {
    loadItems('.popular-item-card', 4, itemsLoaded);
    itemsLoaded += 4;
    if (itemsLoaded >= 14) {
      $('.more-prod').addClass('hidden');
    }
  });

});