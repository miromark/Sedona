//burger menu

let btn = document.querySelector(".burger-btn");
    menu = document.querySelector(".header-menu");

   btn.onclick = function() {
        btn.classList.toggle("burger-btn_open");
        menu.classList.toggle("header-menu_open");
    };

    
