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
const inputField = document.querySelector('input')
const resetButton = document.querySelector('button')
const inputBoxes = document.querySelector('.game-input')
const question = document.querySelector('.question')
let triesLeft = document.querySelector('.tries-left')

// function wordLengths(...strings) {
//   return words.map((words) => words.length)
// }

const newInput = document.createElement('input')
newInput.type = 'text'
newInput.maxLength = '1'

// const wordsLength = words.map((word) => {
//   return word.length
// })

resetButton.addEventListener('click', () => {
  let randomWords = words[Math.floor(Math.random() * words.length)]
  let wordGenerated = randomWords.word
  let wordLength = wordGenerated.length
  let questionGenerated = randomWords.question

  console.log(wordGenerated)
  console.log(wordLength)
  console.log(questionGenerated)

  resetButton.innerText = 'New Word'
  question.innerText = `${questionGenerated}`
  triesLeft.innerText = `${wordLength - 1}`
  inputBoxes.append(newInput)

  // for (let i = 0; i < wordGenerated.length; i++) {
  //   if (inputField !== wordGenerated[i]) {
  //     input = ''
  //   } else {
  //     input = input
  //   }
  // }
})