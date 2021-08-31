// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores() {
    const {isGameOver, score, topScore} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="scores-container">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <div className="title-score-container">
          <div className="title-logo-container">
            <img
              className="emoji-logo"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="logo"
            />
            <h1 className="title">Emoji Game</h1>
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}

export default NavBar
