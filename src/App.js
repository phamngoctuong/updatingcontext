import React, { Component } from 'react';
import themes from './themes';
const style = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
class App extends Component {
  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(
        (state) => ({ theme: state.theme === themes.dark ? themes.light : themes.dark })
      );
    };
    this.state = { 
      theme: themes.light
    };
  }
  render() {
    return (
      <div className="wrap" style={style}>
        <button onClick={this.toggleTheme} style={this.state.theme}>Toggle Theme</button>
        <button onClick={this.toggleTheme} style={this.state.theme}>Do Nothing</button>
      </div>
    );
  }
}
export default App;