const words = [
  { word: 'method', question: 'What is another word for function?' },
  { word: 'course', question: 'Not fine, but ...?' },
  { word: 'europe', question: 'Where do we live?' },
  { word: 'frozen', question: "Who taught us to 'let it go'" },
  { word: 'bananas', question: 'What word did Gwen Stefani teach us to spell' },
  { word: 'weapon', question: 'What is used in battle' },
  { word: 'remedy', question: 'Another word for cure of an illness' },
  { word: 'immune', question: 'Immune system' },
  { word: 'sunday', question: 'First day of the week' },
  {
    word: 'america',
    question: 'Who celebrates their independce every 4th of July?'
  },
  { word: 'sunshine', question: 'Florida is the _____ state' },
  { word: 'complain', question: 'Another word for whining' },
  { word: 'voice', question: 'The strongest tool a human has to communicate' }
]
const resetButton = document.querySelector('button')
const inputBoxes = document.querySelector('.game-input')
const question = document.querySelector('.question')
let triesLeft = document.querySelector('.tries-left')
let letters = document.querySelector('.letter')

// function wordLengths(...strings) {
//   return words.map((words) => words.length)
// }

// const wordsLength = words.map((word) => {
//   return word.length
// })

resetButton.addEventListener('click', () => {
  let randomWords = words[Math.floor(Math.random() * words.length)]
  let wordGenerated = randomWords.word
  let wordLength = wordGenerated.length
  let questionGenerated = randomWords.question

  let inputAmount = ''
  for (let i = 0; i < wordLength; i++) {
    inputAmount += `<input type="text" maxlength="1">`
  }
  inputBoxes.innerHTML = inputAmount

  console.log(wordGenerated)
  console.log(wordLength)
  console.log(questionGenerated)

  resetButton.innerText = 'New Word'
  question.innerText = `${questionGenerated}`
  triesLeft.innerText = `${wordLength - 1}`
})

letters.addEventListener('click', () => {
  if (
    letters.innerText === 'A' ||
    'B' ||
    'C' ||
    'D' ||
    'E' ||
    'F' ||
    'G' ||
    'H' ||
    'I' ||
    'J'
  ) {
    console.log(letters.innerText)
  }
})
