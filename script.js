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
const numberForm = document.getElementById("number-form");
// console.log(inputUno, inputDue, inputTre, inputQuattro, inputCinque);

const arrayOfNode = [numUno, numDue, numTre, numQuattro, numCinque];
// console.log(arrayOfNode);

// --------------------------- NUMERI CASUALI ---------------------------
let generatedNumber = [];

function randomucNumbersGenerator() {
  while (generatedNumber.length < 5) {
    let isDoubleNumber = true;

    let currentNumber = Math.floor(Math.random() * (99 - 1 + 1) + 1);

    for (let i = 0; i < generatedNumber.length; i++) {
      if (currentNumber == generatedNumber[i]) {
        isDoubleNumber = false;
      }
    }

    if (isDoubleNumber) {
      generatedNumber.push(currentNumber);
    }
  }

  //   console.log(generatedNumber);

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

setTimeout(switchForm, 30000);

numberForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputUnoEl = inputUno.value;
  const inputDueEl = inputDue.value;
  const inputTreEl = inputTre.value;
  const inputQuattroEl = inputQuattro.value;
  const inputCinqueEl = inputCinque.value;

  const insertNumbers = [
    inputUnoEl,
    inputDueEl,
    inputTreEl,
    inputQuattroEl,
    inputCinqueEl,
  ];

  let guessedNumbers = [];

  insertNumbers.forEach((number) => {
    for (let i = 0; i < 5; i++) {
      if (number == generatedNumber[i]) {
        guessedNumbers.push(generatedNumber[i]);
      }
    }
  });

  if (guessedNumbers.length > 0) {
    alert(
      `I numeri da lei indovinati sono ${guessedNumbers.length} e sono ${guessedNumbers}`
    );
  } else {
    alert(`Questa volta non hai indovinato nessun numero...`);
  }

  //   console.log("guessedNumbers: " + guessedNumbers);
  //   console.log("generatedNumber: " + generatedNumber);

  //   console.log(
  //     inputUnoEl,
  //     inputDueEl,
  //     inputTreEl,
  //     inputQuattroEl,
  //     inputCinqueEl
  //   );
  inputUno.value = "";
  inputDue.value = "";
  inputTre.value = "";
  inputQuattro.value = "";
  inputCinque.value = "";
});
