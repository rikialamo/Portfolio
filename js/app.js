
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


// Ejercicio 3

const subjectInput = document.getElementById("subject");
const ccInput = document.getElementById("cc");
const bodyInput = document.getElementById("body");

subjectInput.addEventListener("blur", () => {
  if (subjectInput.value.trim() === "") {
    subjectInput.classList.add("border", "border-danger");
    const errorText = document.createElement("small");
    errorText.classList.add("text-danger");
    errorText.innerText = "El asunto no puede estar vacío.";
    subjectInput.parentNode.appendChild(errorText);
  } else {
    subjectInput.classList.remove("border", "border-danger");
    subjectInput.classList.add("border-success");
    const errorText = subjectInput.parentNode.querySelector(".text-danger");
    if (errorText) {
      errorText.remove();
    }
  }
});

ccInput.addEventListener("blur", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (ccInput.value.trim() !== "" && !emailRegex.test(ccInput.value.trim())) {
    ccInput.classList.add("border", "border-danger");
    const errorText = document.createElement("small");
    errorText.classList.add("text-danger");
    errorText.innerText = "El correo no es válido.";
    ccInput.parentNode.appendChild(errorText);
  } else {
    ccInput.classList.remove("border", "border-danger");
    ccInput.classList.add("border-success");
    const errorText = ccInput.parentNode.querySelector(".text-danger");
    if (errorText) {
      errorText.remove();
    }
  }
});

bodyInput.addEventListener("blur", () => {
  if (bodyInput.value.trim() === "") {
    bodyInput.classList.add("border", "border-danger");
    const errorText = document.createElement("small");
    errorText.classList.add("text-danger");
    errorText.innerText = "El cuerpo del mensaje no puede estar vacío.";
    bodyInput.parentNode.appendChild(errorText);
  } else {
    bodyInput.classList.remove("border", "border-danger");
    bodyInput.classList.add("border-success");
    const errorText = bodyInput.parentNode.querySelectorAll(".text-danger");
    if (errorText) {
      errorText.forEach((el) => el.remove());
    }
  }
});

const inputs = [subjectInput, ccInput, bodyInput];

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    const errorText = input.parentNode.querySelectorAll(".text-danger");
    if (errorText) {
      errorText.forEach((el) => el.remove());
    }
    input.classList.remove("border", "border-danger", "border-success");
  });
});


