let questionIndex = 0;
let timerValue = 30;
let timer;
let progressValue = 0;

const questions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 1,
    image: "images/css-icon.png"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: [
      "Laravel",
      "Angular",
      "Django",
      "Bootstrap"
    ],
    correctAnswer: 2,
    image: "images/js-icon.webp"
  },
  {
    question: "Which of the following is NOT a valid HTML5 element?",
    options: [
      "<article>",
      "<footer>",
      "<header>",
      "<panel>"
    ],
    correctAnswer: 4,
    image: "images/html5-icon.png"
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "font-size",
      "text-size",
      "text-style",
      "font-style"
    ],
    correctAnswer: 1,
    image: "images/css-icon.png"
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: [
      "<h6>",
      "<h5>",
      "<h1>",
      "<h3>"
    ],
    correctAnswer: 3,
    image: "images/html-icon.png"
  },
  {
    question: "What does the JavaScript 'alert()' function do?",
    options: [
      "Shows a popup message",
      "Redirects the user",
      "Logs to the console",
      "Changes the text color"
    ],
    correctAnswer: 1,
    image: "images/js-icon.webp"
  },
  {
    question: "Which of the following is used to store data locally in a browser?",
    options: [
      "Cookies",
      "Local Storage",
      "Session Storage",
      "All of the above"
    ],
    correctAnswer: 4,
    image: "images/js-icon.webp"
  }

];

function startTimer() {
  timer = setInterval(() => {
    if (timerValue <= 0) {
      clearInterval(timer);
      alert("Time's up!");
      nextQuestion();
    } else {
      timerValue--;
      document.getElementById("timer").textContent = timerValue;
      updateProgressBar();
    }
  }, 1000);
}

function updateProgressBar() {
  progressValue = (30 - timerValue) * (100 / 30);
  document.getElementById("progress-bar").value = progressValue;
}

function displayQuestion() {
  const question = questions[questionIndex];
  document.getElementById("question").textContent = question.question;
  
  const options = document.querySelectorAll(".option");
  options.forEach((option, index) => {
    option.textContent = question.options[index];
  });

  // Display the image
  const imageElement = document.querySelector(".question-image");
  imageElement.src = question.image;
  
  document.getElementById("result-container").classList.add("hidden");
  startTimer();
}

function checkAnswer(selectedOption) {
  const question = questions[questionIndex];
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");
  
  if (selectedOption === question.correctAnswer) {
    resultText.textContent = "Correct!";
  } else {
    resultText.textContent = "Incorrect!";
  }
  
  resultContainer.classList.remove("hidden");
  clearInterval(timer);  // Stop the timer once the answer is selected
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex < questions.length) {
    timerValue = 30;  // Reset the timer for the next question
    displayQuestion();
  } else {
    alert("Quiz completed!");
  }
}

// Initialize the first question
displayQuestion();
