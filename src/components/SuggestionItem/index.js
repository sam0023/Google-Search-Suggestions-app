// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {text, updateSearch} = props
  const update = () => updateSearch(text)

  const x = (
    <li className="li">
      <div className="suggestion-container">
        <p>{text}</p>
        <button onClick={update} type="button" className="arrow-button">
          <img
            className="arrow-img"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
  return x
}
export default SuggestionItem
