const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')

const jeapordyCategories = [
    {
        genre: "WHO",
        questions: [
            {
                question: "Who wrote Harry Potter?",
                answers: ["JK Rowling", "JRR Tolkien"],
                correct: "JK Rowling",
                level: "easy",
            },
            {
                question: "Who made the album Scorpion",
                answers: ["Kanye West", "Drake"],
                correct: "drake",
                level: "mid"
            },
            {
                question: "Who developed the first car",
                answers: ["Karl Benz", "Henry Ford"],
                correct: "Karl Benz",
                level: "medium"
            },
            {
                question: "Who is the president",
                answers: ["Obama", "Biden"],
                correct: "Biden",
                level: "hard"
            },
            {
                question: "Who was the first president",
                answers: ["Lincoln", "Washington"],
                correct: "Washington",
                level: "extreme"
            },
        ],
    },
    {
        genre: "WHAT",
        questions: [
            {
                question: "Who wrote Harry Potter?",
                answers: ["JK Rowling", "JRR Tolkien"],
                correct: "JK Rowling",
                level: "easy",
            },
            {
                question: "Who made the album Scorpion",
                answers: ["Kanye West", "Drake"],
                correct: "Drake",
                level: "mid"
            },
            {
                question: "Who developed the first car",
                answers: ["Karl Benz", "Henry Ford"],
                correct: "Karl Benz",
                level: "medium"
            },
            {
                question: "Who is the president",
                answers: ["Obama", "Biden"],
                correct: "Biden",
                level: "hard"
            },
            {
                question: "Who was the first president",
                answers: ["Lincoln", "Washington"],
                correct: "Washington",
                level: "extreme"
            },
        ],
    },
    {
        genre: "WHERE",
        questions: [
            {
                question: "Who wrote Harry Potter?",
                answers: ["JK Rowling", "JRR Tolkien"],
                correct: "JK Rowling",
                level: "easy",
            },
            {
                question: "Who made the album Scorpion",
                answers: ["Kanye West", "Drake"],
                correct: "Drake",
                level: "mid"
            },
            {
                question: "Who developed the first car",
                answers: ["Karl Benz", "Henry Ford"],
                correct: "Karl Benz",
                level: "medium"
            },
            {
                question: "Who is the president",
                answers: ["Obama", "Biden"],
                correct: "Biden",
                level: "hard"
            },
            {
                question: "Who was the first president",
                answers: ["Lincoln", "Washington"],
                correct: "Washington",
                level: "extreme"
            },
        ],
    },
    {
        genre: "WHEN",
        questions: [
            {
                question: "Who wrote Harry Potter?",
                answers: ["JK Rowling", "JRR Tolkien"],
                correct: "JK Rowling",
                level: "easy",
            },
            {
                question: "Who made the album Scorpion",
                answers: ["Kanye West", "Drake"],
                correct: "Drake",
                level: "mid"
            },
            {
                question: "Who developed the first car",
                answers: ["Karl Benz", "Henry Ford"],
                correct: "Karl Benz",
                level: "medium"
            },
            {
                question: "Who is the president",
                answers: ["Obama", "Biden"],
                correct: "Biden",
                level: "hard"
            },
            {
                question: "Who was the first president",
                answers: ["Lincoln", "Washington"],
                correct: "Washington",
                level: "extreme"
            },
        ],
    },
    {
        genre: "WHY",
        questions: [
            {
                question: "Who wrote Harry Potter?",
                answers: ["JK Rowling", "JRR Tolkien"],
                correct: "JK Rowling",
                level: "easy",
            },
            {
                question: "Who made the album Scorpion",
                answers: ["Kanye West", "Drake"],
                correct: "Drake",
                level: "mid"
            },
            {
                question: "Who developed the first car",
                answers: ["Karl Benz", "Henry Ford"],
                correct: "Karl Benz",
                level: "medium"
            },
            {
                question: "Who is the president",
                answers: ["Obama", "Biden"],
                correct: "Biden",
                level: "hard"
            },
            {
                question: "Who was the first president",
                answers: ["Lincoln", "Washington"],
                correct: "Washington",
                level: "extreme"
            },
        ],
    },
]

let currentTeam = 1;
let scores = [0, 0, 0, 0, 0];

function updateScore(points) {
    scores[currentTeam - 1] += points;
    document.getElementById(`score${currentTeam}`).textContent = scores[currentTeam - 1];

    // Move to the next team
    currentTeam = currentTeam % 5 + 1;

    // Update the current team display
    const currentTeamDisplay = document.getElementById('current-team-display');
    if (currentTeamDisplay) {
        currentTeamDisplay.textContent = `Current team: Team ${currentTeam}`;
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
        card.setAttribute('data-answer-1', question.answers[0])
        card.setAttribute('data-answer-2', question.answers[1])
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

function getResult(userAnswer) {

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))
    const cardOfButton = this.parentElement

    const thisTeam = currentTeam; // Store the current team
    if (cardOfButton.getAttribute('data-correct') === userAnswer.toLowerCase()) {
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

