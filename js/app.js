
// ejercicio 1

const blackButton = document.querySelector('.btn-dark');
const blueButton = document.querySelector('.btn-primary');
const redButton = document.querySelector('.botonRojo');
const whiteButton = document.querySelector('.btn-light');

blackButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});

blueButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
});

redButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
});

whiteButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    
});
