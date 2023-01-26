import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="nav-container">
      <div className="game-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo-image"
          alt="emoji logo"
        />
        <h1 className="game-heading">Emoji Game</h1>
      </div>
      <div className="score-conatiner">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
