$(document).ready(function() {
    $('.input-number-increment').click(function() {
        var $input = $(this).parents('.input-number-group').find('.input-number');
        var val = parseInt($input.val(), 10);
        $input.val(val + 1);
      });
      $('.input-number-decrement').click(function() {
        var $input = $(this).parents('.input-number-group').find('.input-number');
        var val = parseInt($input.val(), 10);
        $input.val(val - 1);
      })
      $.fn.clicktoggle = function(a, b) {
        return this.each(function() {
            var clicked = false;
            $(this).click(function() {
                if (clicked) {
                    clicked = false;
                    return b.apply(this, arguments);
                }
                clicked = true;
                return a.apply(this, arguments);
            });
        });
      };
      
      $(".more").clicktoggle(function() {
      $(this).text("Read less").siblings(".complete").show();
      }, function() {
      $(this).text("Read more").siblings(".complete").hide();
      });
      
      $( function() {
        $( "#tabs" ).tabs();
      } );
      
      $('.product-page-btn').click(function() {
        console.log($('.input-number').val());
        if ($('.add-to-cart').children().length == 1) {
          if ($('.input-number').val() > 0) {
            $('<i>', {
              class: 'far fa-circle',
              html: $('.input-number').val(),
            }).appendTo($('.add-to-cart'));
          }
        } else {
          if ($('.input-number').val() > 0) {
            $('.add-to-cart').children('i').html($('.input-number').val());
          }
        }
      })
      
      $(function(){
        $('.thumbnails a').click(function(){                                   // При нажатиина миниатюру
          var images = $(this).find('img');
          var imgSrc = images.attr('src');
       
          $(".big-image img").attr({ src: imgSrc });                         // Подменяем адрес большого изображения на адрес выбранного
          $(this).siblings('a').removeClass('active');                       // Удаляем класс .active со ссылки чтоб убрать рамку
          images.parent().addClass('active');                                // Добавляем класс .active на выбранную миниатюру
          return false;
        });
       
      })
    
})
$('.input-number-increment').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    $input.val(val + 1);
  });
  $('.input-number-decrement').click(function() {
    var $input = $(this).parents('.input-number-group').find('.input-number');
    var val = parseInt($input.val(), 10);
    $input.val(val - 1);
  })
  $.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
  };
  
  $(".more").clicktoggle(function() {
  $(this).text("Read less").siblings(".complete").show();
  }, function() {
  $(this).text("Read more").siblings(".complete").hide();
  });
  
  $( function() {
    $( "#tabs" ).tabs();
  } );
  
  $('.product-page-btn').click(function() {
    console.log($('.input-number').val());
    if ($('.add-to-cart').children().length == 1) {
      if ($('.input-number').val() > 0) {
        $('<i>', {
          class: 'far fa-circle',
          html: $('.input-number').val(),
        }).appendTo($('.add-to-cart'));
      }
    } else {
      if ($('.input-number').val() > 0) {
        $('.add-to-cart').children('i').html($('.input-number').val());
      }
    }
      
  })
  
  $(function(){
    $('.thumbnails a').click(function(){                                   // При нажатиина миниатюру
      var images = $(this).find('img');
      var imgSrc = images.attr('src');
   
      $(".big-image img").attr({ src: imgSrc });                         // Подменяем адрес большого изображения на адрес выбранного
      $(this).siblings('a').removeClass('active');                       // Удаляем класс .active со ссылки чтоб убрать рамку
      images.parent().addClass('active');                                // Добавляем класс .active на выбранную миниатюру
      return false;
    });
   
  })
