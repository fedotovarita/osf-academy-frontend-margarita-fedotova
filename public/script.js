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
        '</button><button class="hover-button-buy"><a class="add-to-cart" href="">BUY NOW</a></button></div></div>'
      );
    } 
  })
}

function loadItems(itemCardClass, limit, ofset) {
  $.getJSON('popular-items.json', function(data){
    let splicedArray = data.items.splice(ofset, limit);
    for(var i = 0; i < splicedArray.length; i++) {
      switch (splicedArray[i]['type']) {
        case 'hover-with-buttons':
          $(itemCardClass).append(
            '<div class="item hover-with-buttons"><img id="img-prod" src="' +
            splicedArray[i]['image'] +
            '" alt=""><span class="popular-item-card-description"><p id="name-prod">' +
            splicedArray[i]['name'] +
            '</p><p id="price-prod">' +
            splicedArray[i]['price'] + '</p></span><div class="hover-buttons-popular"><button class="hover-button-price"><a href=""><p class="button-p">' + 
            splicedArray[i]['price']+ 
            '</p></a></button><button class="hover-button-buy"><a href=""><p class="button-p">BUY NOW</p></a></button></div></div>'
          )
          break;
        case 'hover-gradient':
          $(itemCardClass).append(
            '<div class="item hover-gradient"><img id="img-prod" src="' +
            splicedArray[i]['image'] +
            '" alt=""><span class="popular-item-card-description"><p id="name-prod">' +
            splicedArray[i]['name'] +
            '</p><p id="price-prod">' +
            splicedArray[i]['price'] + '</p></span><div class="hover-buttons-popular"><button class="hover-button-price"><a href=""><i class="fas fa-plus"></i></a></button><button class="hover-button-buy"><a href=""><i class="fas fa-heart"></i></a></button></div></div>'
          )
          break;
        case 'static':
          $(itemCardClass).append(
            '<div class="item static"><div class="gradient-static"></div><img id="img-prod" src="' +
            splicedArray[i]['image'] +
            '" alt=""><span class="static-card-description"><p id="name-prod">' +
            splicedArray[i]['name'] + 
            '</p><span class="static-description-time"><img id="img-prod" src="' +
            splicedArray[i]['icon'] +
            '" alt=""><p id="price-prod">' +
            splicedArray[i]['time'] + '</p></span></span></div>'
          )
          break;
      }
    }
  })
}

$(document).ready(function() {
  let currentYear = new Date();
  $('.year-js').append(currentYear.getFullYear() + '.');
  
  // let counter = 0;
  // $('.add-to-cart').click(function (e){
  //   e.preventDefault();
  //   // counter++
  //   // $('.fa-circle').append(counter);
  // })


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





  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});



});