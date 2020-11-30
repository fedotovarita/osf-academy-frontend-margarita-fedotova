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
  if (favorites.includes(productId)) {
    var index = favorites.indexOf(productId);
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }

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
function loadItems(itemCardClass, limit, ofset) {
  $.getJSON('js/popular-items.json', function(data){
    let cart = $('.add-to-cart');
    let heart = $('.add-to-fav');
    let splicedArray = data.items.splice(ofset, limit);
    for(var i = 0; i < splicedArray.length; i++) {

      if (splicedArray[i]['type'] === 'hover-with-buttons') {
        $(itemCardClass).append(
          '<div class="item hover-with-buttons"><a href="product-detailed-page.html"> <img id="img-prod" src="' +
          splicedArray[i]['image'] +
          '" alt=""></a><span class="popular-item-card-description"><p id="name-prod"><a href="product-detailed-page.html">' +
          splicedArray[i]['name'] +
          '</a></p><p id="price-prod">' +
          splicedArray[i]['price'] + '</p></span><div class="hover-buttons-popular"><button class="hover-button-price"><a href="product-detailed-page.html"><p class="button-p">' + 
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
// -----------owlCarousel-----------
$('#js-carousel-2').owlCarousel({
    items: 1,
    dots: true,
  })
//---------------popular load more button-------
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
  
})
