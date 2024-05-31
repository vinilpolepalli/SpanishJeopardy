const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeapordyCategories = [
    {
        genre: "SUBJUNCTIVE",
        questions: [
            {
                question: "Arreglar (Que Yo)",
                correct: "Arregle",
                level: "easy",
            },
            {
                question: "Ser (Que él)",
                correct: "Sea",
                level: "mid"
            },
            {
                question: "Es Importante que tú le (decir)",
                correct: "Digas",
                level: "medium"
            },
            {
                question: "Creo que tú (comer) muy rápido",
                correct: "Comes",
                level: "hard"
            },
            {
                question: "Es necesario que tú (levantarse)",
                correct: "Te levantes",
                level: "extreme"
            },
        ],
    },
    {
        genre: "PRETERITE/IMPERFECT",
        questions: [
            {
                question: "Ayer,  yo (prender) la luz",
                correct: "Prendí",
                level: "easy",
            },
            {
                question: "Cuando era niño, yo (jugar) baloncesto",
                correct: "Jugaba",
                level: "mid"
            },
            {
                question: "Cuando  él corría, el ( caerse)",
                correct: "Se cayó",
                level: "medium"
            },
            {
                question: " El (estar)  comiendo, cuando sonó el telefono",
                correct: "Estaba",
                level: "hard"
            },
            {
                question: "Cuando / él / estar /  niño / él carse / las escaleras",
                correct: "Cuando él estaba niño él se cayó por las escaleras",
                level: "extreme"
            },
        ],
    },
    {
        genre: "COMMANDS",
        questions: [
            {
                question: "Put it (tú / I.O.)",
                correct: "Ponle",
                level: "easy",
            },
            {
                question: "Por favor,  (Decirle) a Don Vinil",
                correct: "Dígale",
                level: "mid"
            },
            {
                question: "Por favor, (Esctacionar) Allá",
                correct: "Estacione",
                level: "medium"
            },
            {
                question: "Do not tell him it (tú)",
                correct: "No se lo digas",
                level: "hard"
            },
            {
                question: "Sir, please do not charge the computer here",
                correct: "Señor, por favor no cargue la computadora aquí",
                level: "extreme"
            },
        ],
    },
    {
        genre: "VOCAB",
        questions: [
            {
                question: "Ankle",
                correct: "Tobillo",
                level: "easy",
            },
            {
                question: "To sneeze",
                correct: "Estornuda",
                level: "mid"
            },
            {
                question: "The medical Operation",
                correct: "La operacion medica",
                level: "medium"
            },
            {
                question: "Una cosa en que puedes llenar una batera",
                correct: "Cargador",
                level: "hard"
            },
            {
                question: "I hurt my throat on the spoon",
                correct: "Me Lastimé la garganta con la cuchara",
                level: "extreme"
            },
        ],
    },
    {
        genre: "Tradúzcalo",
        questions: [
            {
                question: "I used to go every day, but now they told me not to",
                correct: "Yo iba todos los días, pero ahora, ellos me dijeron no",
                level: "easy",
            },
            {
                question: "It is really important that you learn to take the patients temperature",
                correct: "Es muy importante que aprendas tomar la temparaturea de los pacientes",
                level: "mid"
            },
            {
                question: "I would like that you park the car",
                correct: "Quiero que tu estaciones el carro",
                level: "medium"
            },
            {
                question: "Did you see what he did?",
                correct: "Viste lo que el hizo",
                level: "hard"
            },
            {
                question: "Es necesario que tú (levantarse)",
                answers: ["Lincoln", "Washington"],
                correct: "Washington",
                level: "extreme"
            },
        ],
    },
]

let currentTeam = 1;
let scores = [0, 0, 0, 0, 0, 0];

function updateScore(points) {
    scores[currentTeam - 1] += points;
    document.getElementById(`score${currentTeam}`).textContent = scores[currentTeam - 1];

    // Move to the next team
    currentTeam = currentTeam % 6 + 1;

    // Update the current team display
    const currentTeamDisplay = document.getElementById('current-team-display');
    if (currentTeamDisplay) {
        currentTeamDisplay.textContent = `Team ${currentTeam}`;
    }
}

// Existing JavaScript code here...

const instructionsPopup = document.getElementById('instructionsPopup');
const closeInstructions = document.getElementById('closeInstructions');

function showInstructions() {
    instructionsPopup.style.display = 'flex';
}

function hideInstructions() {
    instructionsPopup.style.display = 'none';
}

closeInstructions.addEventListener('click', hideInstructions);

// Call this function when you want to show the instructions
showInstructions();






function addCategory(category){

    const column = document.createElement("div");
    column.classList.add('genre-column')

    const genreTitle = document.createElement("div");
    genreTitle.classList.add('genre-title')
    genreTitle.innerHTML = category.genre

    column.appendChild(genreTitle)
    game.append(column)

    category.questions.forEach(question => {
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (question.level === "easy") {
            card.innerHTML = 100
        }
        if (question.level === "mid") {
            card.innerHTML = 200
        }
        if (question.level === "medium") {
            card.innerHTML = 300
        }
        if (question.level === "hard") {
            card.innerHTML = 400
        }
        if (question.level === "extreme") {
            card.innerHTML = 500
        }

        card.setAttribute('data-question', question.question)
        card.setAttribute('data-correct', question.correct)
        card.setAttribute('data-value', card.innerHTML)

        card.addEventListener('click', flipCard)
    })


}
jeapordyCategories.forEach(category => addCategory(category))

function flipCard()
{
    this.innerHTML = ""
    this.style.fontSize = "15px"
    this.style.lineHeight = "30px"
    const textDisplay = document.createElement('div')
    textDisplay.classList.add('card-text')
    textDisplay.innerHTML = this.getAttribute("data-question")
    textDisplay.innerHTML = this.getAttribute("data-question")

    const answerInput = document.createElement('input')
    answerInput.setAttribute('type', 'text')
    answerInput.classList.add('answer-input')

    const submitButton = document.createElement('button')
    submitButton.classList.add('submit-button')
    submitButton.innerHTML = "Submit"

    submitButton.addEventListener('click', (event) => getResult.call(event.target, answerInput.value));
    this.append(textDisplay, answerInput, submitButton)


    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))

}

const doubleJeopardyPopup = document.getElementById('doubleJeopardyPopup');
const doubleJeopardyText = document.getElementById('doubleJeopardyText');
const closeDoubleJeopardy = document.getElementById('closeDoubleJeopardy');

function showDoubleJeopardy() {
    // Randomly select a team
    const team = Math.floor(Math.random() * 6) + 1;
    doubleJeopardyText.textContent = `This card will count for double points. Team ${team}, it's your turn to answer.`;
    doubleJeopardyPopup.style.display = 'flex';
}

closeDoubleJeopardy.addEventListener('click', function() {
    doubleJeopardyPopup.style.display = 'none';
});



function getResult(userAnswer) {

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))
    const cardOfButton = this.parentElement

    const thisTeam = currentTeam; // Store the current team
    if (cardOfButton.getAttribute('data-correct').toLowerCase() === userAnswer.toLowerCase()) {
        const points = parseInt(cardOfButton.getAttribute('data-value')); // Get the points from the card
        updateScore(points); // Update the score of the current team
        
        cardOfButton.classList.add('correct-answer')
        cardOfButton.innerHTML = `+${points} for Team ${thisTeam}`; // Use thisTeam instead of currentTeam
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = `+${points} for Team ${thisTeam}`; // Use thisTeam instead of currentTeam
            
        },100)
        
    }
    else {
        
        const points = -parseInt(cardOfButton.getAttribute('data-value')); // Get the negative points
        updateScore(points); // Subtract the points from the team's score
        cardOfButton.classList.add('wrong-answer')
        cardOfButton.innerHTML = `${points} for Team ${thisTeam}`; // Use thisTeam instead of currentTeam
        setTimeout(() => {
            while (cardOfButton.firstChild)
            {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = `${points} for Team ${thisTeam}`; // Display the points lost and the team
            
        },100)
        
    }
    cardOfButton.removeEventListener('click', flipCard)
}

