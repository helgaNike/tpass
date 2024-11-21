const header = document.querySelector('.header--front');

if(header) {

    const handlerScroll = function() {
        if(window.scrollY > 0) {
            header.classList.add('isScrolled');
        }
        else {
            header.classList.remove('isScrolled');
        }
    }

    window.addEventListener('scroll', handlerScroll);
}


