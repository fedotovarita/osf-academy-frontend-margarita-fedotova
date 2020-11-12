$( document ).ready(function() {
    $('.serv-link').click(function(e){
        e.preventDefault();
        $('.dropdown').toggleClass('show');
    })
});
