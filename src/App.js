import React, { Component } from 'react';
import themes from './themes';
import Toolbar from './Toolbar';
import ThemeContext from './ThemeContext';
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
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }
  render() {
    return (
      <div className="wrap" style={style}>
        <ThemeContext.Provider value={this.state}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default App;