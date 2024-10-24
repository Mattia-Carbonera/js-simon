// --------------------------- INIZIALIZZO ---------------------------
// **** generated numbers ****

const numUno = document.getElementById("num-uno");
const numDue = document.getElementById("num-due");
const numTre = document.getElementById("num-tre");
const numQuattro = document.getElementById("num-quattro");
const numCinque = document.getElementById("num-cinque");
// console.log(numUno, numDue, numTre, numQuattro, numCinque);

// **** input ****
const inputUno = document.getElementById("input-uno");
const inputDue = document.getElementById("input-due");
const inputTre = document.getElementById("input-tre");
const inputQuattro = document.getElementById("input-quattro");
const inputCinque = document.getElementById("input-cinque");
// console.log(inputUno, inputDue, inputTre, inputQuattro, inputCinque);

const arrayOfNode = [numUno, numDue, numTre, numQuattro, numCinque];
console.log(arrayOfNode);

// --------------------------- NUMERI CASUALI ---------------------------
let randomNumber = 0;
let generatedNumber = [];

for (let i = 0; i < 5; i++) {
  generatedNumber.push(Math.floor(Math.random() * (99 - 1 + 1) + 1));
}

console.log(generatedNumber);
