import React from 'react'
import './Text.css'

class Text extends React.Component {

  state = {
    italic: false
  }

  changeText = () => {this.setState({italic: !this.state.italic})}

  render() {
    return (
      <div>
        <div className={this.state.italic && 'font'} onClick={this.changeText}> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </div>
        {this.state.text}
      </div>
    )
  }
}
export default Text;

