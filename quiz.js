const questions = [
{
question: "which is the largest animal in the world",
answer: [
{ text: "shark", correct: false },
{ text: "Blue whale", correct: true },
{ text: "Elephant", correct: false },
{ text: "cow", correct: false }
]
},
{
question: "which is the smallest continent in the world",
answer: [
{ text: "asia", correct: false },
{ text: "australia", correct: true },
{ text: "arctic", correct: false },
{ text: "africa", correct: false }
]
}
];

const questionElement = document.getElementById("question");
const answerbutton = document.getElementById("ans-buttons");
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
answerbutton.innerHTML = "";

currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbutton.appendChild(button);

    if(answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});


}

function resetState(){
    nextButton.style.display = "none";
    while(answerbutton.firstChild) {
        answerbutton.removeChild(answerbutton.firstChild);
    } 


}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerbutton.children).forEach(button => {
    if(button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
  }
  ); nextButton.style.display = "block";
}
 function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }


function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex<questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
}
)
startQuiz();
