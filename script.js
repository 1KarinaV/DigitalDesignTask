function getDayInfo(date) {
    const dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    //const newDate = new Date(date);

    // Преобразуем дату из формата "дд.мм.гггг" в объект Date
    const [day, month, year] = date.split('.').map(Number);
    const newDate = new Date(year, month - 1, day);

    const dayOfWeek = dayNames[newDate.getDay()];
    //const weekNumber = Math.ceil(newDate.getDate()/ 7);
    const weekNumber = Math.ceil((newDate.getDate() + newDate.getDay()) / 7);
    // const month = monthNames[newDate.getMonth()];
    //const year = newDate.getFullYear();
    const monthName = monthNames[newDate.getMonth()];
    const formattedDate = `${day} ${monthName} ${year} года`;
    return `${dayOfWeek}, ${weekNumber} неделя ${monthName} ${year} года`;
}

const dateElements = document.querySelectorAll('.dateValue');

dateElements.forEach(function(element) {
    const date = element.textContent;
    element.textContent = getDayInfo(date);
});


function toggleScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 0) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark'); // Добавить/удалить класс "dark" у элемента <body>
}

window.addEventListener('scroll', toggleScrollToTopButton);

const scrollToTopButton = document.getElementById('scrollToTopButton');
scrollToTopButton.addEventListener('click', scrollToTop);

const buyButtons = document.querySelectorAll('.buyButton');
const overlay = document.getElementById('overlay');

buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        overlay.style.display = 'flex';
    });
});


const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', function() {
    overlay.style.display = 'none';
});


const purchaseForm = document.getElementById('purchaseForm');

purchaseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за покупку!');
    overlay.style.display = 'none';
});
