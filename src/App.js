import React, { Component } from 'react';
import themes from './themes';
const style = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      theme: themes.light
    };
  }
  render() {
    return (
      <div className="wrap" style={style}>
        <button style={this.state.theme}>Toggle Theme</button>
        <button style={this.state.theme}>Do Nothing</button>
      </div>
    );
  }
}
export default App;