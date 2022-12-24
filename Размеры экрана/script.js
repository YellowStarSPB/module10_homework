
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    alert(`
    Ширина с учетом полосы прокрутки: ${window.innerWidth}
    Высота с учетом полосы прокрутки: ${window.innerHeight}

    Ширина без учета полосы прокрутки: ${document.documentElement.clientWidth}
    Высота без учета полосы прокрутки: ${document.documentElement.clientHeight}
    `)

})
