import './index.css'

const WinOrLoseCard = props => {
  const {topScore, clickEmojiList, totalEmojiList, onPlayAgain} = props

  const wonOrLoseText = topScore === totalEmojiList.length ? 'Won' : 'Loss'

  const finalScore = topScore

  const wonOrLoseImg =
    topScore === totalEmojiList.length
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgain = () => {
    onPlayAgain(finalScore)
  }

  return (
    <div className="win-or-lose-card-container">
      <div className="text-container">
        <h1 className="you-won">You {wonOrLoseText}</h1>
        <div className="score-container">
          <p className="best-score">Best Score</p>
          <p className="total-score">{clickEmojiList.length}/12</p>
          <button
            className="play-again-btn"
            type="button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img src={wonOrLoseImg} alt="win or lose" className="won-image" />
    </div>
  )
}

export default WinOrLoseCard
