//
// GLOBAL VARIABLES //
const words = [
  { word: 'method', clue: 'What is another word for function?' },
  { word: 'course', clue: 'Not fine, but ...?' },
  { word: 'europe', clue: 'Where do we live?' },
  { word: 'frozen', clue: "Who taught the world to 'let it go'" },
  { word: 'weapon', clue: 'What is used in battle' },
  { word: 'remedy', clue: 'Another word for cure of an illness' },
  { word: 'immune', clue: 'Immune system' },
  { word: 'sunday', clue: 'First day of the week' },
  {
    word: 'america',
    clue: 'Who celebrates their independce every 4th of July?'
  },
  { word: 'sunshine', clue: 'Florida is the _____ state' },
  { word: 'complain', clue: 'Another word for whining' },
  { word: 'voice', clue: 'The strongest tool a human has to communicate' }
]
let alphabetList = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
const resetButton = document.querySelector('button')
const inputBoxes = document.querySelector('.game-input')
const question = document.querySelector('.question')
let letters = document.querySelector('.letter')
let alphabetDiv = document.querySelector('#alphabet-buttons')
let triesSection = document.querySelector('.tries-left')
let wrngLetters = document.querySelector('.incorrect-letters')
let triesLeft
let correctGuesses
let wrongGuesses
let inputAmount
let wordGenerated

//
//
// CHECK GUESSED LETTERS WITH HIDDEN WORD,
// DECREMENT TRIES LEFT,
// UPDATE EMPTY SLOT INNERTEXT WITH CORRECT LETTER GUESSED //

const checkGuess = (letter) => {
  if (triesLeft > 0 && correctGuesses.indexOf(letter) === -1) {
    let found = false
    for (let i = 0; i < wordGenerated.length; i++) {
      if (letter.toLowerCase() == wordGenerated[i]) {
        found = true
        correctGuesses.push(letter)
        document.querySelector(`span[index="${i}"]`).innerText = letter + ' '

        if (correctGuesses.length === wordGenerated.length) {
          question.innerText = `Winner! You guessed ${wordGenerated.toUpperCase()} correctly!`
        }
      }
    }

    if (found === false) {
      if (wrongGuesses.indexOf(letter) === -1) {
        wrongGuesses.push(letter)
        wrngLetters.innerText = wrongGuesses
      }
      triesSection.innerHTML = --triesLeft
      if (triesLeft == 0) {
        question.innerText = 'Darn! You lose this round! Try a new word.'
      }
    }
  }
}

//
//
// CREATE ALPHABET BUTTONS FOR SELECTION //

for (let i = 0; i < alphabetList.length; i++) {
  let addAlphabet = document.createElement('li')
  addAlphabet.innerHTML = `<button class="letter-button">${alphabetList[i]}</button>`
  addAlphabet.addEventListener('click', (evt) => {
    checkGuess(evt.target.innerText)
  })

  alphabetDiv.appendChild(addAlphabet)
}

//
//
// GENERATE RANDOM WORD AND RESPECTIVE SPAN AMOUNT,
// RESET GAME FUNCTIONS/VALUES FOR EVERY NEW RANDOM WORD //
//

resetButton.addEventListener('click', () => {
  triesLeft = 6
  correctGuesses = []
  wrongGuesses = []
  inputAmount = ''
  wordGenerated = ''
  wrngLetters.innerText = ''

  let randomWords = words[Math.floor(Math.random() * words.length)]
  wordGenerated = randomWords.word
  let wordLength = wordGenerated.length
  let questionGenerated = randomWords.clue

  for (let i = 0; i < wordLength; i++) {
    inputAmount += `<span index=${i}>_ </span>`
  }

  inputBoxes.innerHTML = inputAmount
  inputAmount = ''

  console.log(wordGenerated)
  console.log(wordLength)
  console.log(questionGenerated)

  resetButton.innerText = 'New Word'
  question.innerText = `${questionGenerated}`
  triesSection.innerHTML = triesLeft
})
