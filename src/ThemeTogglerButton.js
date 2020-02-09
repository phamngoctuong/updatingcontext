import React, { Fragment, Component } from 'react';
import ThemeContext from './ThemeContext';
class ThemeTogglerButton extends Component {
    render() {
        return (
        	<Fragment>
	          <ThemeContext.Consumer>
							{
								({ theme, toggleTheme }) => {
									return (
										<button onClick={toggleTheme} style={theme}>Toggle Theme</button>
									)	
								}
							}
						</ThemeContext.Consumer>
				</Fragment>
      );
    }
}
export default ThemeTogglerButton;
