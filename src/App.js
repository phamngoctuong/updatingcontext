import React, { Component, PropTypes } from 'react';
import Toolbar from './Toolbar';
import themes from './themes';
import ThemeContext from './ThemeContext';
const style = {
  textAlign: 'center'
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    }
  }
  render() {
    return (
      <div style={style}>
        <ThemeContext.Provider value={this.state}>
          <Toolbar/>
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default App;