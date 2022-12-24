//Первое задание
const svg = document.querySelectorAll('svg')
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    svg.forEach((item) => {
        item.classList.toggle('none')
    })
})
