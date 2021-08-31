/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLossCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    topScore: 0,
    isGameOver: false,
  }

  setTopScore = currentScore => {
    const {topScore} = this.state
    if (topScore < currentScore) {
      this.setState({topScore: currentScore})
    }
  }

  setIsGameOver = value => {
    this.setState({isGameOver: value})
  }

  finishGameAndSetTopScore = newScore => {
    this.setIsGameOver(true)
    this.setTopScore(newScore)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isEmojiPresent = clickedEmojis.includes(id)
    const clickedEmojisLength = clickedEmojis.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    this.setState({isGameOver: false})
    this.setState({clickedEmojis: []})
  }

  renderEmojisList() {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emoji-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            emoji={eachEmoji}
            key={eachEmoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  renderScoreCard() {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = clickedEmojis.length === emojisList.length

    return (
      <WinOrLossCard
        isWon={isWon}
        score={clickedEmojis.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  render() {
    const {clickedEmojis, isGameOver, topScore} = this.state

    return (
      <div className="emoji-game-container">
        <NavBar
          score={clickedEmojis.length}
          topScore={topScore}
          isGameOver={isGameOver}
        />
        <div className="emoji-game-body">
          {isGameOver ? this.renderScoreCard() : this.renderEmojisList()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
