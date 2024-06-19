alert("hello");
const questions = [
  {
    ques: "What is the largest internal organ in the human body?",
    answers: [
      {
        ans: "Lungs",
        status: "false",
      },
      {
        ans: "Heart",
        status: "false",
      },
      {
        ans: "Kidneys",
        status: "false",
      },
      {
        ans: "Liver",
        status: "true",
      },
    ],
  },
  {
    ques: "What is the percentage of the Earth covered by water?",
    answers: [
      {
        ans: "51%",
        status: "false",
      },
      {
        ans: "61% ",
        status: "false",
      },
      {
        ans: "71%",
        status: "true",
      },
      {
        ans: "81%",
        status: "false",
      },
    ],
  },
  {
    ques: "Which of the following is not a Japanese dish?",
    answers: [
      {
        ans: "Sushi",
        status: "fasle",
      },
      {
        ans: "Ramen",
        status: "false",
      },
      {
        ans: "Babi guling",
        status: "true",
      },
      {
        ans: "Udon",
        status: "false",
      },
    ],
  },
  {
    ques: "What is the atomic number of Hydrogen?",
    answers: [
      {
        ans: "1",
        status: "true",
      },
      {
        ans: "2",
        status: "false",
      },
      {
        ans: "3",
        status: "false",
      },
      {
        ans: "4",
        status: "false",
      },
    ],
  },
  {
    ques: "Which one of the following scientists invented the World Wide Web?",
    answers: [
      {
        ans: "Tim Berners-Lee",
        status: "true",
      },
      {
        ans: "Stephen Hawking",
        status: "false",
      },
      {
        ans: "Alan Turing",
        status: "false",
      },
      {
        ans: "James D. Watson",
        status: "false",
      },
    ],
  },
  {
    ques: "What is the equivalent of 100 Celsius in Fahrenheit?",
    answers: [
      {
        ans: "152",
        status: "false",
      },
      {
        ans: "182",
        status: "false",
      },
      {
        ans: "212",
        status: "true",
      },
      {
        ans: "232",
        status: "false",
      },
    ],
  },
  {
    ques: "What is the main ingredient of gnocchi?",
    answers: [
      {
        ans: "Rice",
        status: "false",
      },
      {
        ans: "Potato",
        status: "true",
      },
      {
        ans: "Pasta",
        status: "false",
      },
      {
        ans: "Chocolate",
        status: "false",
      },
    ],
  },
  {
    ques: "What is the oldest university in the UK?",
    answer: [
      {
        ans: "Cambridge",
        status: "false",
      },
      {
        ans: "Manchester",
        status: "false",
      },
      {
        ans: "Bath",
        status: "false",
      },
      {
        ans: "Oxford",
        status: "true",
      },
    ],
  },
  {
    ques: "Dom Pérignon is known as the Father of what?",
    answers: [
      {
        ans: "Computing Science",
        status: "false",
      },
      {
        ans: "Telephone",
        status: "false",
      },
      {
        ans: "Champagne",
        status: "true",
      },
      {
        ans: "Electricity",
        status: "false",
      },
    ],
  },
  {
    ques: "What shape is the constellation Ursa Major known to have?",
    answers: [
      {
        ans: "A bear",
        status: "false",
      },
      {
        ans: "A ladle",
        status: "true",
      },
      {
        ans: "A circle",
        status: "false",
      },
      {
        ans: "A book",
        status: "false",
      },
    ],
  },
];
const questionElement = document.getElementbyid("question");
const answerButton = document.getElementbyid("ans");
const nextButton = document.getElementbyid("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.ques;

  //   currentQuestion.answers.forEach((answer) => {
  //     const button = document.createElement("button");
  //     button.innerHTML = answer.ans;
  //     button.classList.add("btn");
  //     answerButton.appendChild(button);
}

showQuestion();
alert("hello");
