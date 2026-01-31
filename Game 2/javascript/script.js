//variables declaration 
const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const questionStatus = document.querySelector(".question-status");
const resultContainer = document.querySelector(".result-container");
const timerDisplay = document.querySelector(".time-duration");

let currentQuestion = null;
let quizCategory = 'Level 1🌳';
const QUIZ_TIME_LIMIT = 15; //waktu buat game
let currentTime = QUIZ_TIME_LIMIT;
let timer = null; //timer bikin start 0
const questionIndexHistory = [];
let numberOfQuestions = 5;
let correctAnswerCount = 0; //jawaban smua 0 dl trus diitung sesuai progres

// display the quiz result and hide the quiz container

const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `You answered <b>${correctAnswerCount}<b/> out of <b>${numberOfQuestions}</b> questions correctly. Amazing work!`;
    document.querySelector(".result-message").innerHTML = resultText; //yg bagian akhir buat nunjukin berapa pertanyaan bnr dari brp
}

// reset timer
const resetTimer =() => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}`;
}

// mulai lg timer 15 detik
const startTimer = () => {
    timer = setInterval(()=> {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <=0) {
            clearInterval(timer);
            highlightCorrectAnswer();
            document.querySelector(".next-question-btn").style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
            // opsi lain gabisa diklik lg
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    },1000)
}

// dari list pertanyaan yang ada, urutan kuis bisa berubah sesuai random

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];
    console.log(categoryQuestions);

    //kl smua udh, langsung hasil
    if(questionIndexHistory.length >= numberOfQuestions){
        return showQuizResult();
    }

    // pertanyaan udah gaakan muncul lagi
    const availableQuestions = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    console.log(randomQuestion);
    return randomQuestion;
}

// nandain jawaban bener
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class = "material-symbols-outlined">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// cek bener/salah, ngejalanin CSS sesuai bener ato salah itu
const handleAnswer = (option, answerIndex) => {
    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect? 'correct':'incorrect');

    !isCorrect ? highlightCorrectAnswer():correctAnswerCount++;

    // abis satu pertanyaan, soal acak baru, reset timer
    const iconHTML = `<span class = "material-symbols-outlined">${isCorrect? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    document.querySelector(".next-question-btn").style.visibility = "visible";

}

const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    resetTimer();
    startTimer();

    //update the ui
    answerOptions.innerHTML = "";
    document.querySelector(".next-question-btn").style.visibility = "hidden";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    // create option li elements and append them and add click event listeners;
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", ()=> handleAnswer(li, index));
    })

}

// jalanin kuis sesuai pilihan jumlah pertanyaan dan randomize pertanyaan pertama
const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    // update the quiz category and number of questions
    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    renderQuestion();
}


document.querySelectorAll(".category-option,.question-option").forEach(option => {
    option.addEventListener("click", ()=> {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    })
})

// reset kuis


const resetQuiz = () => {
    correctAnswerCount = 0;
    questionIndexHistory.length = 0;
    resultContainer.style.display = "none";
    configContainer.style.display = "block";
}

document.querySelector(".start-quiz-button").addEventListener("click", startQuiz);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".next-question-btn").addEventListener("click", renderQuestion);
