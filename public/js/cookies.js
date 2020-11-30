$(document).ready(function() {
    $('.cookies-close-btn').click(function (e) {
        e.preventDefault();
        $('.cookies-window').addClass('hidden');
    })
    $(".cookies-window").hide();
    $(".cookies-window").delay(8000).fadeIn(100);  

    function getCookie(name) {
        var cookie_arr = document.cookie.split('; ');
        var cookie_obj = {};

        for (let i = 0; i < cookie_arr.length; i++) {
            var nv = cookie_arr[i].split('=');
            cookie_obj[nv[0]] = nv[1]; 
        }

        return cookie_obj[name];
    }        
    if ( getCookie('hide_popup') == 'yes' ) {
        $('.cookies-window').addClass('hidden');
    }
    $('#hide_popup').click(function(e) {
        e.preventDefault();
        var date = new Date(new Date().getTime() + 60 * 100000);
        document.cookie = "hide_popup=yes; path=/; expires=" + date.toUTCString();
        $('.cookies-window').addClass('hidden');
    })
    
})