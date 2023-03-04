
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


// Ejercicio 2

let selectElement = document.getElementById('modulo');
let cardElements = document.querySelectorAll('.card');

selectElement.addEventListener('change', (event) => {

  let selectedModule = event.target.value;
  cardElements.forEach((card) => {

    if (selectedModule === 'all') {
      card.classList.remove('d-none');
    } else if (card.querySelector(`.${selectedModule}`)) {
      card.classList.remove('d-none');
    } else {
      card.classList.add('d-none');
    }
  });
});


