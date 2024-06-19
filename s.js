const questions = [
  {
    question: "What is the largest internal organ in the human body?",
    answers: [
      {
        text: "Lungs",
        status: "false",
      },
      {
        text: "Heart",
        status: "false",
      },
      {
        text: "Kidneys",
        status: "false",
      },
      {
        text: "Liver",
        status: "true",
      },
    ],
  },
  {
    question: "What is the percentage of the Earth covered by water?",
    answers: [
      {
        text: "51%",
        status: "false",
      },
      {
        text: "61% ",
        status: "false",
      },
      {
        text: "71%",
        status: "true",
      },
      {
        text: "81%",
        status: "false",
      },
    ],
  },
  {
    question: "Which of the following is not a Japanese dish?",
    answers: [
      {
        text: "Sushi",
        status: "false",
      },
      {
        text: "Ramen",
        status: "false",
      },
      {
        text: "Babi guling",
        status: "true",
      },
      {
        text: "Udon",
        status: "false",
      },
    ],
  },
  {
    question: "What is the atomic number of Hydrogen?",
    answers: [
      {
        text: "1",
        status: "true",
      },
      {
        text: "2",
        status: "false",
      },
      {
        text: "3",
        status: "false",
      },
      {
        text: "4",
        status: "false",
      },
    ],
  },
  {
    question:
      "Which one of the following scientists invented the World Wide Web?",
    answers: [
      {
        text: "Tim Berners-Lee",
        status: "true",
      },
      {
        text: "Stephen Hawking",
        status: "false",
      },
      {
        text: "Alan Turing",
        status: "false",
      },
      {
        text: "James D. Watson",
        status: "false",
      },
    ],
  },
  {
    question: "What is the equivalent of 100 Celsius in Fahrenheit?",
    answers: [
      {
        text: "152",
        status: "false",
      },
      {
        text: "182",
        status: "false",
      },
      {
        text: "212",
        status: "true",
      },
      {
        text: "232",
        status: "false",
      },
    ],
  },
  {
    question: "What is the main ingredient of gnocchi?",
    answers: [
      {
        text: "Rice",
        status: "false",
      },
      {
        text: "Potato",
        status: "true",
      },
      {
        text: "Pasta",
        status: "false",
      },
      {
        text: "Chocolate",
        status: "false",
      },
    ],
  },
  {
    question: "What is the oldest university in the UK?",
    answers: [
      {
        text: "Cambridge",
        status: "false",
      },
      {
        text: "Manchester",
        status: "false",
      },
      {
        text: "Bath",
        status: "false",
      },
      {
        text: "Oxford",
        status: "true",
      },
    ],
  },
  {
    question: "Dom Pérignon is known as the Father of what?",
    answers: [
      {
        text: "Computing Science",
        status: "false",
      },
      {
        text: "Telephone",
        status: "false",
      },
      {
        text: "Champagne",
        status: "true",
      },
      {
        text: "Electricity",
        status: "false",
      },
    ],
  },
  {
    question: "What shape is the constellation Ursa Major known to have?",
    answers: [
      {
        text: "A bear",
        status: "false",
      },
      {
        text: "A ladle",
        status: "true",
      },
      {
        text: "A circle",
        status: "false",
      },
      {
        text: "A book",
        status: "false",
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.status) {
      button.dataset.status = answer.status;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isstatus = selectedBtn.dataset.status === "true";
  if (isstatus) {
    selectedBtn.classList.add("status");
    score++;
  } else {
    selectedBtn.classList.add("instatus");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.status === "true") {
      button.classList.add("status");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

  nextButton.innerHTML = "Play Again";

  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
