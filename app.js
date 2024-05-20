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

let score = 0;








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
    const firstButton = document.createElement('button')
    const secondButton = document.createElement('button')

    firstButton.classList.add('first-button')
    secondButton.classList.add('second-button')

    firstButton.innerHTML = this.getAttribute('data-answer-1')
    secondButton.innerHTML = this.getAttribute('data-answer-2')

    firstButton.addEventListener('click', (event) => getResult.call(event.target));
    secondButton.addEventListener('click', (event) => getResult.call(event.target));

    this.append(textDisplay,firstButton,secondButton)


    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.removeEventListener('click', flipCard))

}

function getResult() {

    const allCards = Array.from(document.querySelectorAll('.card'))
    allCards.forEach(card => card.addEventListener('click', flipCard))
    const cardOfButton = this.parentElement
    if (cardOfButton.getAttribute('data-correct') === this.innerHTML) {
        score = score + parseInt(cardOfButton.getAttribute('data-value'))
        scoreDisplay.innerHTML = score
        cardOfButton.classList.add('correct-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild) {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = cardOfButton.getAttribute('data-value')
        },100)
    }
    else {
        cardOfButton.classList.add('wrong-answer')
        setTimeout(() => {
            while (cardOfButton.firstChild)
            {
                cardOfButton.removeChild(cardOfButton.lastChild)
            }
            cardOfButton.innerHTML = 0
        },100)
    }
    cardOfButton.removeEventListener('click', flipCard)
}
