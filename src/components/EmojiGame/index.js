import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], topScore: 0, isGameInProgress: true}

  onPlayAgain = finalScore => {
    const {topScore} = this.state
    const stateScore = topScore
    console.log(finalScore)
    console.log(stateScore)
    console.log(topScore)

    const score = finalScore > stateScore ? finalScore : stateScore

    this.setState({
      clickedEmojisList: [],
      topScore: score,
      isGameInProgress: true,
    })
  }

  finishGameSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onClickedEmoji = id => {
    const {clickedEmojisList} = this.state
    const isSameEmojiClicked = clickedEmojisList.includes(id)
    const currentEmojisLength = clickedEmojisList.length

    if (isSameEmojiClicked) {
      this.finishGameSetTopScore(currentEmojisLength)
    } else {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))

      if (clickedEmojisList.length + 1 === 12) {
        this.finishGameSetTopScore(clickedEmojisList.length + 1)
      }
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderWinOrLoseCard = () => {
    const {topScore, clickedEmojisList} = this.state
    const {emojisList} = this.props

    return (
      <WinOrLoseCard
        topScore={topScore}
        clickEmojiList={clickedEmojisList}
        totalEmojiList={emojisList}
        onPlayAgain={this.onPlayAgain}
      />
    )
  }

  renderEmojisList = emojisList => (
    <ul className="unOrderList">
      {emojisList.map(eachEmoji => (
        <EmojiCard
          emojiDetails={eachEmoji}
          key={eachEmoji.id}
          onClickedEmoji={this.onClickedEmoji}
        />
      ))}
    </ul>
  )

  render() {
    const emojisList = this.shuffledEmojisList()

    const {clickedEmojisList, isGameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar score={clickedEmojisList.length} topScore={topScore} />
        <div className="emojis-container">
          {isGameInProgress
            ? this.renderEmojisList(emojisList)
            : this.renderWinOrLoseCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
