'use strict'
// 1 задание

const text = document.getElementById('text');
const button = document.getElementById('hideButton');

let isHidden = false;

button.addEventListener('click', function () {
    if (isHidden) {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
    isHidden = !isHidden;
});

// 2 задание
const ball = document.getElementById('ball');

document.body.addEventListener('click', (event) => {
    ball.style.transform = `translate(${event.clientX - 20}px, ${event.clientY - 20}px)`;
});