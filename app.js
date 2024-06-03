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
                question: "Cuando / él / ser /  niño / él carse / las escaleras",
                correct: "Cuando él era niño él se cayó por las escaleras",
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
                correct: "La operación médica",
                level: "medium"
            },
            {
                question: "Una cosa en que puedes llenar una batera",
                correct: "Cargador",
                level: "hard"
            },
            {
                question: "I hurt my throat on the spoon",
                correct: "Yo me lastimé la garganta con la cuchara",
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
                correct: "Es muy importante que tú aprendas tomar la temperatura de los pacientes",
                level: "mid"
            },
            {
                question: "I would like that you park the car",
                correct: "Quiero que tú estaciones el carro",
                level: "medium"
            },
            {
                question: "Did you see what he did?",
                correct: "Tú viste lo que él hizo",
                level: "hard"
            },
            {
                question: "He used to wake up ever day",
                correct: "él se despertaba todos los días",
                level: "extreme"
            },
        ],
    },
    {
        genre: "Más Vocabulario",
        questions: [
            {
                question: "To scan, To chat, To download",
                correct: "Escanear, Chatear, Descargar",
                level: "easy",
            },
            {
                question: "La cosaen que puedes buscar por arachivaos,  un sitio web, o navegar el internet",
                correct: "Computadora",
                level: "mid"
            },
            {
                question: "Con esto, puedes grabar videos, borrar videos, y ver los videos",
                correct: "La cámara videoo",
                level: "medium"
            },
            {
                question: "Un otro nombre  para lavar el suelo, limpiar la casa, quitar la mesa, y quitar el polvo",
                correct: "Los quehaceres domésticos",
                level: "hard"
            },
            {
                question: "Donde enctuentras una mesa,  una cuchara, un cuchillo,  y un tenedor",
                correct: "El comedor",
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
        currentTeamDisplay.textContent = `Equipo ${currentTeam}`;
    }
}

// Create a popup window
// Create a popup window
const teamPopup = document.getElementById('teamPopup');
teamPopup.style.display = 'none';

// Create 6 buttons, one for each team
const teamButtons = document.getElementById('teamButtons');
for (let i = 1; i <= 6; i++) {
    const teamButton = document.createElement('button');
    teamButton.textContent = `Equipo ${i}`;
    teamButton.addEventListener('click', function() {
        // Update the current team
        currentTeam = i;

        // Update the current team display
        const currentTeamDisplay = document.getElementById('current-team-display');
        if (currentTeamDisplay) {
            currentTeamDisplay.textContent = `Equipo ${currentTeam}`;
        }

        // Close the popup window
        teamPopup.style.display = 'none';
    });
    teamButtons.appendChild(teamButton);
}

// Add an event listener to the current team box
const currentTeamBox = document.getElementById('current-team-display');
currentTeamBox.addEventListener('click', function() {
    // Open the popup window
    teamPopup.style.display = 'block';
});

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



let cards = [];


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
        cards.push(card);
    })


}


jeapordyCategories.forEach(category => addCategory(category))


function setRandomDoubleJeopardy() {
    const doubleJeopardyCard = cards[Math.floor(Math.random() * cards.length)];
    doubleJeopardyCard.setAttribute('data-double-jeopardy', 'true');
}

setRandomDoubleJeopardy();

function flipCard()
{
    const doubleJeopardyPopup = document.getElementById('doubleJeopardyPopup');
    const teamPopup = document.getElementById('teamPopup');

    // If either popup is active, ignore the click event
    if (doubleJeopardyPopup.style.display === 'block' || teamPopup.style.display === 'block') {
        return;
    }
   

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
    submitButton.innerHTML = "Entregar"

    submitButton.addEventListener('click', (event) => getResult.call(event.target, answerInput.value));
    this.append(textDisplay, answerInput, submitButton)


    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))

    if (this.getAttribute('data-double-jeopardy') === 'true') {
        // Get the double jeopardy popup
        const doubleJeopardyPopup = document.getElementById('doubleJeopardyPopup');

        // Show the double jeopardy popup
        doubleJeopardyPopup.style.display = 'block';
    }
    

}



function updateScoreWithoutChangingTurn(points) {
    scores[currentTeam - 1] += points;
    document.getElementById(`score${currentTeam}`).textContent = scores[currentTeam - 1];
}

function getResult(userAnswer) {
    let points = parseInt(this.parentElement.getAttribute('data-value')); // Declare points with let, not const

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => {
        if (!card.classList.contains('correct-answer') && !card.classList.contains('wrong-answer')) {
            card.addEventListener('click', flipCard)
        }
    })
    const cardOfButton = this.parentElement

    const thisTeam = currentTeam; // Store the current team

    const isDoubleJeopardy = this.parentElement.getAttribute('data-double-jeopardy') === 'true';
    if (isDoubleJeopardy) {
        points *= 2; // Double the points
    }
    
    if (cardOfButton.getAttribute('data-correct').toLowerCase() === userAnswer.toLowerCase()) {
        updateScore(points); // Update the score of the current team
        
        cardOfButton.classList.add('correct-answer')
        cardOfButton.innerHTML = `+${points} Para El Equipo ${thisTeam}`; // Use thisTeam instead of currentTeam
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = `+${points} Para El Equipo ${thisTeam}`; // Use thisTeam instead of currentTeam
            
        },100)
        
    }
    else {
        points = -points; // Get the negative points
        updateScore(points); // Subtract the points from the team's score and change the turn
        cardOfButton.classList.add('wrong-answer')
    
        const correctAnswer = cardOfButton.getAttribute('data-correct');
        cardOfButton.innerHTML = `${points} Para El Equipo ${thisTeam}. \nRespuesta correcta: ${correctAnswer}`; // Use thisTeam instead of currentTeam
    
        // Create override button
        

        const overrideButton = document.createElement('button');
        overrideButton.textContent = 'Anular';
        overrideButton.classList.add('override-btn'); // Add class to override button
        overrideButton.addEventListener('click', function() {
            cardOfButton.classList.remove('wrong-answer');
            cardOfButton.classList.add('correct-answer');
            updateScoreWithoutChangingTurn(-points); // Add the points back to the team's score
            cardOfButton.innerHTML = `+${-points} Para El Equipo ${thisTeam}`; // Use thisTeam instead of currentTeam
            cardOfButton.removeEventListener('click', flipCard);
        });
    
        // Create continue button
        const continueButton = document.createElement('button');
        continueButton.textContent = 'Continuar';
        continueButton.classList.add('continue-btn'); // Add class to continue button
        continueButton.addEventListener('click', function() {
            cardOfButton.innerHTML = `${points} Para El Equipo ${thisTeam}`; // Display only the points lost and the team
            cardOfButton.removeEventListener('click', flipCard);
        });

        cardOfButton.appendChild(overrideButton);
        cardOfButton.appendChild(continueButton);
    }
    cardOfButton.removeEventListener('click', flipCard)
}

// Get the close button for the double jeopardy popup
const closeDoubleJeopardyPopup = document.getElementById('closeDoubleJeopardyPopup');

// Add a click event listener to the close button
closeDoubleJeopardyPopup.addEventListener('click', function() {
    // Hide the double jeopardy popup
    doubleJeopardyPopup.style.display = 'none';
});
if (this.getAttribute('data-double-jeopardy') === 'true') {
    // Get the double jeopardy popup
    const doubleJeopardyPopup = document.getElementById('doubleJeopardyPopup');

    console.log(doubleJeopardyPopup); // Add this line

    // Show the double jeopardy popup
    doubleJeopardyPopup.style.display = 'block';
}