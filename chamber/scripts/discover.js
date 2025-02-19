const monthYearElement = document.getElementById('month-year');
    const daysElement = document.getElementById('days');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentDate = new Date();

    function renderCalendar() {
        
        daysElement.innerHTML = '';

        const options = { month: 'long', year: 'numeric' };
        monthYearElement.textContent = currentDate.toLocaleDateString('en-US', options);

        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            daysElement.innerHTML += `<div></div>`;
        }

        for (let i = 1; i <= lastDate; i++) {
            const dayElement = document.createElement('div');
            
            dayElement.textContent = i;
            if (i === new Date().getDate() && 
                currentDate.getMonth() === new Date().getMonth() && 
                currentDate.getFullYear() === new Date().getFullYear()) {
                dayElement.classList.add('today');
            }
            daysElement.appendChild(dayElement);
        }
    }

    // Previous and next month navigation
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();

const greetingMsg = document.getElementById('greeting-msg');
const aDayInMillseconds = 1000 * 60 * 60 * 24;
const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = new Date().getTime();

function displayGreeting() {
    if(!lastVisit) {
        greetingMsg.textContent = "Welcome! We are happy for your visit.";

    } else {
        const timeDiff = currentVisit - parseInt(lastVisit);
        const daysDiff = Math.floor(timeDiff / aDayInMillseconds);

        if (timeDiff < aDayInMillseconds) {
            greetingMsg.textContent = "Back so soon!";

        } else {
            const daysText = daysDiff === 1 ? 'day' : 'days';
            greetingMsg.textContent =  `You last visited ${daysDiff} ${daysText}`; 
        }
    }

    localStorage.setItem('lastVisit', currentVisit);

    setTimeout(() => {
        greetingMsg.classList.add('hidden');

    }, 10000)
}

displayGreeting();