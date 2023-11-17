//бургер меню
let open_menu = document.querySelector('.open_burg_menu');
let close_menu = document.querySelector('.close_burg_menu');
let nav = document.querySelector('nav');
let burger_list = document.querySelector('.bg_menu-list');


open_menu.addEventListener('click', function() {
    open_menu.style.display = 'none';
    close_menu.style.display = 'block';
    nav.style.display = 'block';
    burger_list.style.display = 'flex';
});

close_menu.addEventListener('click', function() {
    close_menu.style.display = 'none';
    open_menu.style.display = 'block';
    nav.style.display = 'flex';
    burger_list.style.display = 'none';
});


//слайдер
let slider_line = document.querySelector('.slider__line');
let lefts = document.querySelectorAll('.arrow__left');
let rights = document.querySelectorAll('.arrow__right');

for(let right of rights) {
    right.addEventListener('click', function () {
        if(right.parentElement.classList.contains('slide_1') == true) {
            slider_line.style.marginLeft = -(slider_line.clientWidth / 4) + 'px';
        }
        if(right.parentElement.classList.contains('slide_2') == true) {
            slider_line.style.marginLeft = -(slider_line.clientWidth / 4 * 2) + 'px';
        }
        if(right.parentElement.classList.contains('slide_3') == true) {
            slider_line.style.marginLeft = -(slider_line.clientWidth / 4 * 3) + 'px';
        }
    });
}

for(let left of lefts) {
    left.addEventListener('click', function () {
        if(left.parentElement.classList.contains('slide_2') == true) {
            slider_line.style.marginLeft = '0px';
        }
        if(left.parentElement.classList.contains('slide_3') == true) {
            slider_line.style.marginLeft = -(slider_line.clientWidth / 4) + 'px';
        }
        if(left.parentElement.classList.contains('slide_4') == true) {
            slider_line.style.marginLeft = -(slider_line.clientWidth / 4 * 2) + 'px';
        }
    });
}


