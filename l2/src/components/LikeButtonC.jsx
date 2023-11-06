import { Component } from 'react'

export default class LikeButtonC extends Component {
  state = { likes: 0 }

  handleAddLike = () => {
    this.setState({ likes: this.state.likes + 1 })
  }
  
  render() {
    return (
      <button onClick={this.handleAddLike}>{`Likes ${this.state.likes}`}</button>
    )
  }
}
