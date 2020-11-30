$(document).ready(function() {
    $(".cp__color").on('click', function() {
        $(".cp__color").each(function() {
          $(this).removeClass('active');
        });
        $(this).addClass('active');
    });
});