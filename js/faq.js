document.querySelectorAll('.faq__btn').forEach((btn) => {
    btn.addEventListener('click', function(){
        this.closest('.faq__item').classList.toggle('active');
    });
});