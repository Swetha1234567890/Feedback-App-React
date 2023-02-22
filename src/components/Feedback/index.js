// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedback: false,
  }

  onChangeEmoji = () => {
    this.setState({isFeedback: true})
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="background">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list-container">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  className="emoji-btn"
                  type="button"
                  onClick={this.onChangeEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    className="emojis"
                    alt={emoji.name}
                  />
                </button>
                <p className="name">{emoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="background">
        <div className="card-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
          <h1 className="text">Thank You!</h1>
          <p className="description">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="card-container">
        {isFeedback ? this.renderThankYou() : this.renderFeedback()}
      </div>
    )
  }
}

export default Feedback
