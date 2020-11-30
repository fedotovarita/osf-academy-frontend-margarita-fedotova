function getFeaturedProducts(swiperObject) {
    $.getJSON('js/featured-items.json', function(data){
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
$(document).ready(function() {
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
  
  getFeaturedProducts(swiper2);
})
  