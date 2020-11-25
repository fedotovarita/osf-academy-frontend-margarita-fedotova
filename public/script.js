let cartCounter = 0;
function incrementCartCounter(cart) {
  if (cartCounter === 0) {
    $('<i>', {
      class: 'far fa-circle',
      html: cartCounter + 1,
    }).appendTo(cart);
  } else {
    cart.children('i').html(cartCounter + 1);
  }
  cartCounter += 1;
}

let favorites = [];
function toggleFavorite(heart, productId) {
  console.log('productId inside toggleFavorite', productId)
  if (favorites.includes(productId)) {
    var index = favorites.indexOf(productId);
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }

  // number of products liked = favorites.length


  // this number must be shown neer the heart
  // if number of products liked > 0
  // then add circle with number of products liked
  // if number of products liked = 0
  // delete the circle
  
  console.log(heart.children())

  if (heart.children('i').length) {
    if (favorites.length > 0) {
      heart.children('i').html(favorites.length);
    } else {
      heart.children('i').remove();
    }
  } else {
    $('<i>', {
      class: 'far fa-circle',
      html: favorites.length,
    }).appendTo(heart);
  } 
  
}


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
    let cart = $('.add-to-cart');
    let heart = $('.add-to-fav');
    let splicedArray = data.items.splice(ofset, limit);
    for(var i = 0; i < splicedArray.length; i++) {

      if (splicedArray[i]['type'] === 'hover-with-buttons') {
        $(itemCardClass).append(
          '<div class="item hover-with-buttons"><img id="img-prod" src="' +
          splicedArray[i]['image'] +
          '" alt=""><span class="popular-item-card-description"><p id="name-prod">' +
          splicedArray[i]['name'] +
          '</p><p id="price-prod">' +
          splicedArray[i]['price'] + '</p></span><div class="hover-buttons-popular"><button class="hover-button-price"><a href=""><p class="button-p">' + 
          splicedArray[i]['price']+ 
          '</p></a></button><button id="product-' + 
          splicedArray[i]['id'] +
          '" class="hover-button-buy"><a href=""><p class="button-p">BUY NOW</p></a></button></div></div>'
        )
        // add add-cart listener
        $('#product-' + splicedArray[i]['id']).click(function(e) {
          e.preventDefault();
          incrementCartCounter(cart);
        });
      } else if (splicedArray[i]['type'] === 'hover-gradient') {
        $(itemCardClass).append(
          '<div class="item hover-gradient"><img id="img-prod" src="' +
          splicedArray[i]['image'] +
          '" alt=""><span class="popular-item-card-description"><p id="name-prod">' +
          splicedArray[i]['name'] +
          '</p><p id="price-prod">' +
          splicedArray[i]['price'] + '</p></span><div class="hover-buttons-popular"><button id="product-' + 
          splicedArray[i]['id'] + 
          '"class="hover-button-price"><a href=""><i class="fas fa-plus"></i></a></button><button id="product-like-' +
          splicedArray[i]['id'] +
          '" class="hover-button-buy"><a href=""><i class="fas fa-heart"></i></a></button></div></div>'
        )
        $('#product-' + splicedArray[i]['id']).click(function(e) {
          e.preventDefault();
          incrementCartCounter(cart);
        });
        
        $('#product-like-' + splicedArray[i]['id']).click(function(e) {
          e.preventDefault();
          toggleFavorite(heart, $(this).attr('id'));
        });
      } else if (splicedArray[i]['type'] === 'static') {
        $(itemCardClass).append(
          '<div class="item static"><div class="gradient-static"></div><img id="img-prod" src="' +
          splicedArray[i]['image'] +
          '" alt=""><span class="static-card-description"><p id="name-prod">' +
          splicedArray[i]['name'] + 
          '</p><span class="static-description-time"><img id="img-prod" src="' +
          splicedArray[i]['icon'] +
          '" alt=""><p id="price-prod">' +
          splicedArray[i]['time'] + '</p></span></span></div>'
        );
      }
    }
  })
}

$(document).ready(function() {
  let currentYear = new Date();
  $('.year-js').append(currentYear.getFullYear() + '.');
  
 
  $('.add-to-cart').click(function (e){
    e.preventDefault();
    // counter++
    // $('.fa-circle').append(counter);
  })


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
      $(e.target).closest('li').children("ul").toggleClass('hidden');
    if (e.target.tagName === 'IMG') {
      $(e.target).toggleClass('rotate');
    } else {
      $(e.target).children('img').toggleClass('rotate')
    }
  })

  $('.submenu-links').click(function (e){
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
      clickable: true
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

    $('<img>', {
      class: 'link-arrow',
      src: 'images/strelka.png',
    }).insertAfter(selectList);

    const linkArrow = selectList.next('.link-arrow');
    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);
            linkArrow.addClass('rotate');

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
                linkArrow.removeClass('rotate');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
            linkArrow.removeClass('rotate');
        }
    });
});

$( function() {
  var dialog, form,
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    email = $( "#email" ),
    password = $( "#password" ),
    allFields = $( [] ).add( name ).add( email ).add( password ),
    tips = $( ".validateTips" );

  function updateTips( t ) {
    tips
      .text( t )
  }

  function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
      o.addClass( "ui-state-error" );
      updateTips( "Length of " + n + " must be between " +
        min + " and " + max + "." );
      return false;
    } else {
      return true;
    }
  }

  function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ) ) ) {
      o.addClass( "ui-state-error" );
      updateTips( n );
      return false;
    } else {
      return true;
    }
  }

  function addUser() {
    var valid = true;
    allFields.removeClass( "ui-state-error" );

    valid = valid && checkLength( email, "email", 6, 80 );
    valid = valid && checkLength( password, "password", 5, 16 );

    valid = valid && checkRegexp( email, emailRegex, "Enter a valid email adress" );
    valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

    return valid;
  }

  dialog = $( "#dialog-form" ).dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      "LOGIN": addUser,
      "I don't have an account": addUser
    },
    close: function() {
      form[ 0 ].reset();
      allFields.removeClass( "ui-state-error" );
    }
  });

  form = dialog.find( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    addUser();
  });

  $( "#create-user" ).button().on( "click", function() {
    dialog.dialog( "open" );
  });
  $(document).mouseup(function (e){
    if (!$('.ui-dialog').is(e.target) && $('.ui-dialog').has(e.target).length === 0){
      dialog.dialog( "close" );
    }
  });
  $('.fa-eye').click(function () {
    $('#password').attr('type', function(index, attr){
      return attr == 'text' ? 'password' : 'text';
    }); 
 });

} );
$(".cp__color").on('click', function() {
  $(".cp__color").each(function() {
    $(this).removeClass('active');
  });
  $(this).addClass('active');
});


});