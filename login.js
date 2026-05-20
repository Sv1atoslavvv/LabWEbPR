// Беремо форму
const loginForm = document.getElementById('login-form');

// Беремо поля
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');

// Блок для помилки
const errorText = document.querySelector('.login-error');


// Слухаємо submit форми
loginForm.addEventListener('submit', function(e) {

    // Забороняємо перезавантаження сторінки
    e.preventDefault();


    // Забираємо пробіли
    const loginValue = loginInput.value.trim();
    const passwordValue = passwordInput.value.trim();


    // Перевірка логіна і пароля
    if (loginValue === 'admin' && passwordValue === 'admin') {

        // Зберігаємо авторизацію
        localStorage.setItem('isAdmin', 'true');

        // Перекидаємо на адмінку
        window.location.href = 'admin.html';

    } else {

        // Якщо неправильні дані
        errorText.textContent = 'Невірний логін або пароль';
    }
});