import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onEmojiClicks = () => {
    onClickedEmoji(id)
  }

  return (
    <li>
      <button className="emoji-card" type="button" onClick={onEmojiClicks}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
