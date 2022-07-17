let checkButton = document.querySelector(".check");
let restartButton = document.querySelector(".reset");
let inputNumber = document.querySelector(".number");
let score = document.querySelector(".winner");
let ross = document.querySelector(".congrats")
let informBox = document.getElementById("note");
let guessedNumbers = document.getElementById("guessedNumber");
let result = document.getElementById("attemptNumber");

let targetNumber = Math.floor(Math.random() * 100 + 1);
let maxNumber = 100;
let minNumber = 0;
let counter = 10;

console.log(targetNumber);

inputNumber.addEventListener("keypress", (e) => {

  if (e.key == "Enter") {
      checkButton.click();
  }
});

checkButton.addEventListener("click", () => {
  if (targetNumber == inputNumber.value) {
    // inputNumber.focus();
    informBox.innerText = "Congratulations, you won!!"
    informBox.style.backgroundColor = "yellow"
    informBox.style.color = "blueviolet"
    informBox.style.borderRadius = "5em"
    informBox.style.fontWeight = "bolder"
    counter--;
    guessedNumbers.value += Number(inputNumber.value) + ", ";
    result.value = counter;
    // checkButton.setAttribute("disabled", true);
    inputNumber.style.display = "none";
    checkButton.style.display = "none";
    score.innerHTML = `${targetNumber}`
    score.style.display = "inline-block"
    score.style.color = "yellow"
    score.style.fontWeight = "bolder"
    ross.style.display = "inline"

  }

  else if (inputNumber.value == "") {
    window.alert("Please Enter a Number!!");
    return;
  }

  else if (inputNumber.value > targetNumber) {
    if (inputNumber.value > 100) {
      informBox.innerText = "Please Enter a number less than 100";
      inputNumber.value = "";
      return; 
    }
    inputNumber.focus();
    maxNumber = Number(inputNumber.value);
    informBox.innerHTML = `Enter a number between ${minNumber} and ${maxNumber}`;
    counter--;
    guessedNumbers.value += Number(inputNumber.value) + ", ";
    result.value = counter;
    inputNumber.value = "";
    
    if (counter == 0) {
            
      informBox.innerText = "Sorry You Lost";
      informBox.style.color = "red";
      informBox.style.fontSize = "3rem";
      checkButton.setAttribute("disabled", true);
                           
    }
  } 

  else if (inputNumber.value < targetNumber) {

    if (inputNumber.value < 0) {
      informBox.innerText = "Please Enter a number bigger than 0";
      inputNumber.value = ""; 
      return; 
    }

    inputNumber.focus();
    minNumber = Number(inputNumber.value);
    informBox.innerText = `Enter a number between ${minNumber} and ${maxNumber}`;
    counter--;
    guessedNumbers.value += Number(inputNumber.value) + ", ";
    result.value = counter;
    inputNumber.value = "";

    if (counter == 0) {
      informBox.innerText = "Sorry You Lost";
      informBox.style.color = "red";
      informBox.style.fontSize = "3rem";                    
      checkButton.setAttribute("disabled", true);       
    }
  } 
})

restartButton.addEventListener("click", () => {
  window.location.reload();
})