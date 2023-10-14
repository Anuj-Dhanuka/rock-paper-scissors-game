import React from 'react'

const ImageContext = React.createContext({
  score: 0,
  choicesList: [],
  onClickOption: () => {},
  clickedImage: '',
  playAgain: () => {},
  randomNumber: 0,
  resultText: 'YOU WON',
  showResult: false,
})

export default ImageContext
