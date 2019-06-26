$(document).ready(function() {

    $(".nav-link, .nav__logo").on("click", function(event) {
        // Closing the Menu Down
        $("div.menu-btn").removeClass("close");
        $("div.menuHead").removeClass("show");
        $("div.menu-profilepic").removeClass("show");
        $("ul.menu-nav").removeClass("show");
        $("li.nav-item").removeClass("show");

        showMenu = false;
    });

    $(window).resize(function(){
        if ($(window).width() >= 1120){
            $("div.menu-btn").removeClass("close");
            $("div.menuHead").removeClass("show");
            $("div.menu-profilepic").removeClass("show");
            $("ul.menu-nav").removeClass("show");
            $("li.nav-item").removeClass("show");

            showMenu = false;
        }
    });

});
