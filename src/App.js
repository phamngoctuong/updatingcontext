import React, { Component } from 'react';
const style = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};
const button = {
  color: '#ffffff', 
  backgroundColor: '#222222',
  border: 'none',
  borderRadius: '10px',
  fontSize: '1em',
  padding: '10px',
  marginRight: '10px'
};
class App extends Component {
  render() {
    return (
      <div className="wrap" style={style}>
        <button style={button}>Toggle Theme</button>
        <button style={button}>Do Nothing</button>
      </div>
    );
  }
}
export default App;