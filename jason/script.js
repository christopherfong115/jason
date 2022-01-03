const button = document.querySelector('.button-detail');

button.addEventListener ('click', () => {
    const f = document.querySelectorAll('.big-f');
    f.forEach(bf => {
        bf.style.opacity = 1;
    })
})
