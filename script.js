// --------------------------- INIZIALIZZO ---------------------------
// **** titol ****

const titolForm = document.getElementById("titol");

// **** generated numbers ****
const randomicNumContainer = document.getElementById("randomic-num-container");
const numUno = document.getElementById("num-uno");
const numDue = document.getElementById("num-due");
const numTre = document.getElementById("num-tre");
const numQuattro = document.getElementById("num-quattro");
const numCinque = document.getElementById("num-cinque");
// console.log(numUno, numDue, numTre, numQuattro, numCinque);

// **** input ****
const formContainer = document.getElementById("form-container");
const inputUno = document.getElementById("input-uno");
const inputDue = document.getElementById("input-due");
const inputTre = document.getElementById("input-tre");
const inputQuattro = document.getElementById("input-quattro");
const inputCinque = document.getElementById("input-cinque");
const buttonConferma = document.getElementById("button-conferma");
// console.log(inputUno, inputDue, inputTre, inputQuattro, inputCinque);

const arrayOfNode = [numUno, numDue, numTre, numQuattro, numCinque];
// console.log(arrayOfNode);

// --------------------------- NUMERI CASUALI ---------------------------

function randomucNumbersGenerator() {
  let randomNumber = 0;
  let generatedNumber = [];

  for (let i = 0; i < 5; i++) {
    generatedNumber.push(Math.floor(Math.random() * (99 - 1 + 1) + 1));
  }
  console.log(generatedNumber);

  for (let i = 0; i < 5; i++) {
    arrayOfNode[i].innerHTML = generatedNumber[i];
  }
}

function switchForm() {
  titolForm.innerText = "Scrivi i numeri";
  randomicNumContainer.classList.add("d-none");
  formContainer.classList.remove("d-none");
}

randomucNumbersGenerator();

setTimeout(switchForm, 3000);
