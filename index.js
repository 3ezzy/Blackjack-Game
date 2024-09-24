let player = {
    name: "Mehdi",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 // math.random kat3tik number mn 0,000 htal 1 and math.floor katrje3 number bla decimal 
    // if 1     -> return 11
    // if 11-13 -> return 10
    if (randomNumber > 10) {
        return 10

    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "   // textContent katkteb lik l value dial variable wla id w katdir lik hta center lketba
    for (let i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message // hna textContent direct at3tini value li kayna f messgae
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card) // hna dert push bash tzad value dial card ela values li kaynin f Var cards
        renderGame()
    }

}
