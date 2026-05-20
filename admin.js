// Перевіряємо чи залогінений адмін
const isAdmin = localStorage.getItem('isAdmin');

// Таблиця
const adminTable = document.querySelector('.admin-table');

// Access denied
const accessDenied = document.querySelector('.access-denied');

// tbody таблиці
const subscribersList = document.getElementById('subscribers-list');


// Якщо НЕ адмін
if (isAdmin !== 'true') {

    adminTable.style.display = 'none';

    accessDenied.style.display = 'block';

} else {

    // Беремо підписників
    const subscribers =
        JSON.parse(localStorage.getItem('subscribers')) || [];


    // Якщо нема підписників
    if (subscribers.length === 0) {

        subscribersList.innerHTML = `
            <tr>
                <td colspan="2">No subscribers yet</td>
            </tr>
        `;

    } else {

        // Перебираємо всіх
        subscribers.forEach(subscriber => {

            // Створюємо рядок
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${subscriber.name}</td>
                <td>${subscriber.email}</td>
            `;

            // Додаємо в таблицю
            subscribersList.appendChild(row);
        });
    }
}


// Logout
const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', () => {

    localStorage.removeItem('isAdmin');

    window.location.href = 'index.html';
});