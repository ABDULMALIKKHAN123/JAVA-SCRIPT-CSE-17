let userScore = 0;
let compScore = 0;

function play(userChoice) {
  let choices = ["rock", "paper", "scissors"];
  let compChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === compChoice) {
    result = "Draw 🤝";
  } 
  else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    result = "You Win 🎉";
    userScore++;
  } 
  else {
    result = "Computer Wins 💻";
    compScore++;
  }

  document.getElementById("result").innerHTML =
    `You: ${userChoice} | Computer: ${compChoice} → ${result}`;

  document.getElementById("score").innerHTML =
    `Score - You: ${userScore} | Computer: ${compScore}`;
}