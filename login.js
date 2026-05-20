
const loginForm = document.getElementById('login-form');


const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');


const errorText = document.querySelector('.login-error');


// Слухаємо submit форми
loginForm.addEventListener('submit', function(e) {

    // Заборона перезавантаження сторінки
    e.preventDefault();


    // приборка пробілів
    const loginValue = loginInput.value.trim();
    const passwordValue = passwordInput.value.trim();


    
    if (loginValue === 'admin' && passwordValue === 'admin') {

        
        localStorage.setItem('isAdmin', 'true');

        
        window.location.href = 'admin.html';

    } else {

    
        errorText.textContent = 'Невірний логін або пароль';
    }
});