function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);

function updateDate() {
    const date = document.querySelector('.date');
    date.innerText = new Date().toLocaleDateString();
}
setInterval(updateDate);