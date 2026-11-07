const quizContainer =  document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");
const configContainer = document.querySelector(".config-container");
const Resetbtn = document.querySelector(".try-again-btn");

const QUIZ_TIME = 5;
let currentTime = QUIZ_TIME;
let timer = null;
let quizCategory = "questions";
let numberOfQuestions = 8;
let currentQuestion = null;
const questionIndexHistory = [];
let correctAnswerCount = 0;


//Reset


const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionIndexHistory.length = 0;
    window.removeEventListener("click", configContainer);
}   

const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";


    const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort`;
    document.querySelector(".result-message").innerHTML = resultText;
}   

const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME;
    timerDisplay.textContent = `${currentTime}s`;
}

const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;


        if (currentTime <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}



//Fetch

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.subject.toLowerCase() === quizCategory.toLowerCase()).questions || [];

    if (questionIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return  showQuizResult();
        
    }
//Ready
    const availableQuestion = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));

    const randomQuestion = availableQuestion[Math.floor(Math.random() * categoryQuestions.length)];

    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");

}



const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);
    const  isCorrect = currentQuestion.correctAnswer = answerIndex;
    option.classList.add(isCorrect ? 'incorrect': 'correct');   
    !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++;


    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'cancel' : 'check_circle'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);
//Answer option
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
    nextQuestionBtn.style.visibility = "visible";
}

//Render
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;
    console.log(currentQuestion);

    resetTimer();
    startTimer();

 //Update   
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `${numberOfQuestions}</b> Questions`;
//Create
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
}
 
const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";
}


renderQuestion();

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);