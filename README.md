# Blackjack Game 🎲

This is a simple implementation of the classic **Blackjack** card game using HTML, CSS, and JavaScript.

## Features ✨

- Play a round of Blackjack with virtual cards.
- Dynamically display the cards drawn and the sum of their values.
- Determine if the player has won (Blackjack), lost, or can draw a new card.
- Virtual player starts with a set number of chips.

## How to Play 🃏

1. Open the project in a web browser.
2. Click on the **"START GAME"** button to start a new round.
3. The initial two cards and their sum will be displayed.
4. Decide whether to draw a new card by clicking **"NEW CARD"**.
   - If your card total is **21**, you win!
   - If the total exceeds **21**, you lose the round.

## Project Files 📂

- **`index.html`**: The main structure of the game.
- **`style.css`**: Styles for the game (to be added for better visuals).
- **`index.js`**: The game logic, including card drawing and win/loss conditions.

## Game Logic 🧩

- The deck consists of cards with values between **1–13**.
  - Cards `1` (Ace) count as **11**.
  - Cards `11–13` (Jack, Queen, King) count as **10**.
- The player draws two cards at the start of the game.
- The player can draw additional cards unless they:
  - Achieve Blackjack (total equals **21**).
  - Exceed **21** (lose the game).

## How to Run 🚀

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.

## Future Enhancements 🛠️

- Add a **dealer** to play against.
- Include animations and sound effects.
- Style the game using **CSS** for a more engaging user interface.
- Implement chip betting and dynamic scoring.

## Credits 💻

- Developed by Mehdi with ❤️ and JavaScript.
