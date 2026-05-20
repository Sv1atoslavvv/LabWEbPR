
const isAdmin = localStorage.getItem('isAdmin');


const adminTable = document.querySelector('.admin-table');


const accessDenied = document.querySelector('.access-denied');

// юзери в таблиці
const subscribersList = document.getElementById('subscribers-list');



if (isAdmin !== 'true') {

    adminTable.style.display = 'none';

    accessDenied.style.display = 'block';

} else {

    
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

        
        subscribers.forEach(subscriber => {

            
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



const logoutBtn = document.querySelector('.logout-btn');

logoutBtn.addEventListener('click', () => {

    localStorage.removeItem('isAdmin');

    window.location.href = 'index.html';
});