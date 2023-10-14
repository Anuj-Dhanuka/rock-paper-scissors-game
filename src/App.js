import './App.css'

import {Component} from 'react'

import RockPaperScissor from './components/RockPaperScissor'

import ImageContext from './context/ImageContext'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gettingResultText = (myId, opponentId) => {
  if (myId === 'ROCK') {
    switch (opponentId) {
      case 'PAPER':
        return 'YOU LOSE'
      case 'SCISSORS':
        return 'YOU WON'
      default:
        return 'IT IS DRAW'
    }
  }

  if (myId === 'PAPER') {
    switch (opponentId) {
      case 'SCISSORS':
        return 'YOU LOSE'
      case 'ROCK':
        return 'YOU WON'
      default:
        return 'IT IS DRAW'
    }
  }

  if (myId === 'SCISSORS') {
    switch (opponentId) {
      case 'ROCK':
        return 'YOU LOSE'
      case 'PAPER':
        return 'YOU WON'
      default:
        return 'IT IS DRAW'
    }
  }
  return null
}

class App extends Component {
  state = {
    score: 0,
    showResult: false,
    clickedObject: choicesList[0],
    randomNumber: 0,
    resultText: 'YOU WON',
  }

  onClickOption = clickedObject => {
    const randomNumber = Math.floor(Math.random() * 3)
    const randomId = choicesList[randomNumber].id
    const myId = clickedObject.id
    const resultText = gettingResultText(myId, randomId)
    if (resultText === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (resultText === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
    this.setState({
      showResult: true,
      clickedObject,
      resultText,
      randomNumber,
    })
  }

  playAgain = () => {
    this.setState({showResult: false})
  }

  showingResult = (clickedObject, resultText) => {
    this.setState({showResult: true, clickedObject})
    if (resultText === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (resultText === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
  }

  render() {
    const {
      showResult,
      clickedObject,
      score,
      randomNumber,
      resultText,
    } = this.state
    return (
      <ImageContext.Provider
        value={{
          score,
          choicesList,
          clickedObject,
          onClickOption: this.onClickOption,
          playAgain: this.playAgain,
          randomNumber,
          resultText,
          showResult,
        }}
      >
        <RockPaperScissor showResult={showResult} />
      </ImageContext.Provider>
    )
  }
}

export default App
