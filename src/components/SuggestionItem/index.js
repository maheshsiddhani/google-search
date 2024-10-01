// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {id, suggestion, onArrowClicked} = props

  const handleArrowClick = () => {
    onArrowClicked(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <button type="button" className="arrow-button" onClick={handleArrowClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
