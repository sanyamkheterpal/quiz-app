const questions = [
    {
        question: "which is the largest animal in the world",
        answer: [
            {text: "shark" , correct:false},
            {text: "Blue whale" , correct:true},
            {text: "Elephant" , correct:false},
            {text: "cow" , correct:false},
        ]
    },
     {
        question: "which is the smallest continent in the world",
        answer: [
            {text: "asia" , correct:false},
            {text: "australia" , correct:true},
            {text: "arctic" , correct:false},
            {text: "africa" , correct:false},
        ]
    }

];

const questionElement = document.getElementsById("question");
const answerbutton = document.getElementsById("ans-buttons");
const nextButton = document.getElementsById("nextbtn");

let currentQuestionIndex = 0;
let score = 0 ;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.appendChild("btn");
        answerbutton.appendChild(button);
        
    });
}

