import React from 'react'

class Player extends React.Component {

  state = {
    change: 'off'
  }

  changeButton = () => {
    const changeState = this.state.change === 'off' ? 'one' : this.state.change === 'one' ? 'all' : 'off' 
    this.setState({change: changeState})
  }

  render() {
    return (
        <div onClick={() => this.changeButton()}> {this.state.change} </div>
    )
  }
}
export default Player;

