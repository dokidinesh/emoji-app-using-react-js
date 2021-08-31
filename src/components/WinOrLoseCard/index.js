// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const lossImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const wonImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const imgUrl = isWon ? wonImage : lossImage
  const gameResult = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <img src={imgUrl} alt="win or lose" className="win-or-lose-image" />
      <div className="details-section">
        <h1 className="game-result">{gameResult}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          onClick={onClickPlayAgain}
          type="button"
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLossCard
