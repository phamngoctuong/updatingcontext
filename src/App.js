import React, { Component } from 'react';
import themes from './themes';
const style = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
class App extends Component {
  render() {
    return (
      <div className="wrap" style={style}>
        <button style={themes.dark}>Toggle Theme</button>
        <button style={themes.dark}>Do Nothing</button>
      </div>
    );
  }
}
export default App;