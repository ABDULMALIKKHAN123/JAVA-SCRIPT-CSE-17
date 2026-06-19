let questions = [
  {
    q: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: 1
  },
  {
    q: "What is DOM?",
    options: [
      "Document Object Model",
      "Data Object Map",
      "Digital Output Mode",
      "None"
    ],
    answer: 0
  },
  {
    q: "Which is frontend language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: 2
  }
];

let index = 0;
let score = 0;
let time = 15;
let timer;

function loadQuestion() {
  let q = questions[index];

  document.getElementById("question").innerText = q.q;

  let optDiv = document.getElementById("options");
  optDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    optDiv.innerHTML += `
      <button onclick="checkAnswer(${i})">${opt}</button>
    `;
  });

  startTimer();
}

function checkAnswer(i) {
  if (i === questions[index].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizBox").style.display = "none";
  document.getElementById("resultBox").style.display = "block";

  document.getElementById("scoreText").innerText =
    `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
  index = 0;
  score = 0;
  document.getElementById("quizBox").style.display = "block";
  document.getElementById("resultBox").style.display = "none";
  loadQuestion();
}

function startTimer() {
  clearInterval(timer);
  time = 15;

  document.getElementById("timer").innerText = time;

  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;

    if (time === 0) {
      nextQuestion();
    }
  }, 1000);
}

loadQuestion();