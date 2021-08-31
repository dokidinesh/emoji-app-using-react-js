// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emoji
  const onClickEmojiCard = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <img
        className="emoji-icon"
        src={emojiUrl}
        alt={emojiName}
        onClick={onClickEmojiCard}
      />
    </li>
  )
}

export default EmojiCard
