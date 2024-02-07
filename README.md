# Wordle : my implementation of the wordle game
> This project is a simple implementation of the wordle game to showcase my skills in the React library.

## What is wordle?
Wordle is a game where you have to guess a word in 5 tries. The word is randomly generated and you have to guess it by typing it in the input field. The game will tell you if the letter you typed is in the word and if it is in the right place. If you guess the word, you win, otherwise you lose.
you will understand more by running the project and playing the game.

## How to run the project?
1. Clone the project
   ```Bash
    git clone https://github.com/reda-benmakdad/wordle.git
    ```
3. Install the dependencies
    ```Bash
    npm install
    ```
4. Run the project
    ```Bash
    npm start
    ```
5. Enjoy the game by visiting [http://localhost:3000/](http://localhost:3000/) in your browser

## Making process of the project

I played a lot of wordle on https://wordlegame.org/ and i was thinking if i was capable of implementing this game myself, soo...i gave it a try and here we are.

first of all i designed this "fun game" looking website on figma, as i wanted to learn figma, it was pretty hard as a newbie to figma but i eventually got a result that you can check [here!](https://www.figma.com/file/lH963810KtCFM2r9hBFjcB/Wordle?type=design&node-id=0%3A1&mode=design&t=SGXbsLIWPJtbIOHR-1)

I then implemted this design in react, i created various components for the different parts of the game, that i styled accordingly to the figma design in pure css. i used axios to fetch the word definition from the free dictionary api.

I then coded the game logic word typing, checking if word exists, tries...etc. using react state and props and basic javascript. 


## Technologies used
- React
- Free Dictionary API
- Node.js
- Pure css


## Left to do:
- Animate the message modal



