// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onArrowClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    return (
      <div className="container">
        <img
          alt="google logo"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
        />
        <div className="input-container">
          <div className="input-img">
            <img
              alt=""
              className="search-img"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            />
            <input
              onChange={this.onChangeInput}
              value={searchInput}
              type="search"
              placeholder="Search Google"
            />
          </div>
          <ul>
            {suggestionsList
              .filter(item =>
                item.suggestion
                  .toLowerCase()
                  .includes(searchInput.toLowerCase()),
              )
              .map(eachItem => (
                <SuggestionItem
                  id={eachItem.id}
                  suggestion={eachItem.suggestion}
                  key={eachItem.id}
                  onArrowClicked={this.onArrowClick}
                />
              ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
