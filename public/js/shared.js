$(document).ready(function() {

  let currentYear = new Date();
  $('.year-js').append(currentYear.getFullYear() + '.');

  $('.menu-burger__header').click(function() {
    $('.menu-burger__header').toggleClass('open-menu');
    $('.main-nav').toggleClass('open-menu');
  });
  $('.nav-list-links').on('click', function (e){
    e.preventDefault();
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
  $('.submenu-category').click(function (e){
    e.preventDefault();
    $(e.target).closest('li').children("ul").toggleClass('hidden');
    if (e.target.tagName === 'IMG') {
      $(e.target).toggleClass('rotate');
    } else {
      $(e.target).children('img').toggleClass('rotate')
    }
  });
//-------------selects----------
  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450;

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
//---------popup/------
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
});

});
  