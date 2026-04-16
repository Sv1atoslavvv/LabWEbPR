const burgerBtn = document.querySelector('.burger-btn');
const header = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
    header.classList.toggle('open');
    
    if (header.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});