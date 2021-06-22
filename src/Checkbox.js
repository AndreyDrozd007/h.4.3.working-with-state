import React from 'react'

class Checkbox extends React.Component {

  state = {
    change: true
  }

  onClick = () => {this.setState({change: !this.state.change})}

  render() {
      return (
        <div>
            <div onClick={() => this.onClick()}> {this.state.change ? 'v' : 'x'} </div>
      </div>
      )
  }

}

export default Checkbox;

