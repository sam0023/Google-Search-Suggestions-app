// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {currentValue: ''}

  updateSearch = value => {
    this.setState({currentValue: value})
  }

  filter = list => {
    const {currentValue} = this.state
    const x = list.filter(element =>
      element.suggestion.toLowerCase().includes(currentValue.toLowerCase()),
    )
    return x
  }

  inputUpdate = event => {
    const x = event.target.value
    this.setState({currentValue: x})
  }

  render() {
    const {currentValue} = this.state

    // console.log('---------')
    const {suggestionsList} = this.props
    // console.log(suggestionsList)
    const updatedList = this.filter(suggestionsList)

    const x = (
      <div className="bg">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />

        <div className="container">
          <div className="search-container">
            <img
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="search"
              placeholder="Search Google"
              type="search"
              value={currentValue}
              onChange={this.inputUpdate}
            />
          </div>
          <ul className="ul">
            {updatedList.map(element => (
              <SuggestionItem
                key={element.id}
                updateSearch={this.updateSearch}
                text={element.suggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
    return x
  }
}
export default GoogleSuggestions
