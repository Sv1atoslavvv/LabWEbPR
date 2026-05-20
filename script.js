
const burgerBtn = document.querySelector('.burger-btn');
const header = document.querySelector('.header');

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        header.classList.toggle('open');
        document.body.style.overflow = header.classList.contains('open') ? 'hidden' : 'auto';
    });
}



const subscribeForm = document.getElementById('subscribe-form');
const userNameInput = document.getElementById('userName');
const userEmailInput = document.getElementById('userEmail');
const submitBtn = document.querySelector('.subscribe-btn');

if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        
        e.preventDefault(); 

        let isValid = true;

        
        if (userNameInput.value.trim() === "") {
            userNameInput.classList.add('error'); 
            isValid = false;
        } else {
            userNameInput.classList.remove('error');
        }

        // 2. Перевіряємо правильність Email (за методичкою)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmailInput.value.trim())) {
            userEmailInput.classList.add('error'); // Робимо лінію червоною
            isValid = false;
        } else {
            userEmailInput.classList.remove('error');
        }

        
        if (isValid) {
            submitBtn.textContent = 'loading...';
            submitBtn.style.opacity = '0.5';

            
            const formData = {
                name: userNameInput.value.trim(),
                email: userEmailInput.value.trim()
            };

            
const subscribers =
    JSON.parse(localStorage.getItem('subscribers')) || [];


// Додаємо нового
subscribers.push(formData);


// Зберігаємо
localStorage.setItem(
    'subscribers',
    JSON.stringify(subscribers)
);

            // ---- ОСЬ ТУТ МАГІЯ ДЛЯ F12 ----
            console.log("ВІДПРАВКА ДАНИХ З ФОРМИ:");
            console.log("Ім'я:", formData.name);
            console.log("Пошта:", formData.email);
            // --------------------------------

            // Робимо реальний запит в інтернет на тестовий сервер
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then(json => {
                console.log("СЕРВЕР ПРИЙНЯВ ДАНІ:", json);
                
                
                subscribeForm.innerHTML = `<p style="font-family: 'Oswald', sans-serif; font-size: 32px; color: #000; text-transform: lowercase;">merci, ${formData.name} !</p>`;
            })
            .catch(error => {
                console.error("Помилка відправки:", error);
            });
        }
    });

    // Прибираємо червоний колір
    userNameInput.addEventListener('input', () => userNameInput.classList.remove('error'));
    userEmailInput.addEventListener('input', () => userEmailInput.classList.remove('error'));
}
// Шукаємо кнопку login/logout
const authLink = document.querySelector('.auth-link');


// Якщо кнопка існує
if (authLink) {

    // Перевіряємо чи адмін залогінений
    const isAdmin = localStorage.getItem('isAdmin');


    // Якщо залогінений
    if (isAdmin === 'true') {

        // Міняємо текст
        authLink.textContent = 'logout';


        // При кліку logout
        authLink.addEventListener('click', function(e) {

            // Забираємо стандартний перехід
            e.preventDefault();

            // Видаляємо авторизацію
            localStorage.removeItem('isAdmin');

            // Перекидаємо на головну
            window.location.href = 'index.html';
        });

    }
}
// SWIPER


const swiper = new Swiper('.kannSwiper', {

    // Безкінечний цикл
    loop: true,

    // Відстань 
    spaceBetween: 30,

    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // Pagination dots
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    
    breakpoints: {

        // Mobile
        0: {
            slidesPerView: 1,
        },

        // Desktop
        900: {
            slidesPerView: 1,
        }
    }
});