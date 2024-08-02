// 1 homework

const btn = document.querySelector("#btn")
const randomText = document.querySelector("#random-text")

btn.addEventListener("click", (e) => {
    console.log("Random Text Disappeared ^_^")
    e.target.style.color = 'blue'
    e.target.style.background = 'aqua'

    randomText.remove()
})






// 2 homework

const h1 = document.createElement("h1")
h1.textContent = "2 homework"
h1.style.color = "Aqua"

const divCard = document.createElement("div")
divCard.setAttribute("id", "card")

const h2 = document.createElement("h2")
h2.textContent = "Gandalf";

const a = document.createElement("a")
a.setAttribute("href", "#")
a.textContent = "Go to profile";

divCard.append(h2)
divCard.append(a)


document.body.append(h1)
document.body.append(divCard)






// 3 homework

let score = 0;

function showQuestion (question, answers, correctAnswerIndex) {
    const questionEl = document.getElementById('question');
    questionEl.textContent = question;

    const answerEls = document.querySelectorAll('.answer');
    answerEls.forEach((el, index) => {
        el.textContent = answers[index];
        el.classList.remove('correct', 'incorrect');
    });
}


function checkAnswer(selectedEl) {
    const answerEls = document.querySelectorAll('.answer');
    const selectedAnswerIndex = Array.from(answerEls).indexOf(selectedEl);

    if (selectedAnswerIndex === correctAnswerIndex) {
        selectedEl.classList.add('correct');
        score ++;
    } else {
        selectedEl.classList.add('incorrect');
    }

    updateScore();
}


function updateScore() {
    const scoreEl = document.getElementById('score');
    scoreEl.textContent = `Score: ${score}`;
}


// Sample question
const question = "What is the capital of France";
const answers = ["london", "berlin", "paris", "madrid"];
const correctAnswerIndex = 2;

showQuestion(question, answers, correctAnswerIndex);