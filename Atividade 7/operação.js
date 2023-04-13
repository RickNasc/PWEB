const choices = ["pedra", "papel", "tesoura"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Empate!";
  } else if (
    (playerSelection === "pedra" && computerSelection === "tesoura") ||
    (playerSelection === "papel" && computerSelection === "pedra") ||
    (playerSelection === "tesoura" && computerSelection === "papel")
  ) {
    return "Você venceu!";
  } else {
    return "Você perdeu!";
  }
}

function game(playerSelection) {
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    const resultDiv = document.querySelector("#result");
    const computerChoiceDiv = document.querySelector("#computer-choice");
  
    computerChoiceDiv.textContent = "O computador escolheu: " + computerSelection;
  
    resultDiv.textContent = roundResult;
  
    if (roundResult === "Você venceu!") {
      resultDiv.classList.add("win");
    } else if (roundResult === "Você perdeu!") {
      resultDiv.classList.add("lose");
    } else {
      resultDiv.classList.remove("win", "lose");
    }
  }
  

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    game(button.id);
  });
});
