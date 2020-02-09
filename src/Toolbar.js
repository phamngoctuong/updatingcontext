import React, { Component, Fragment } from 'react';
import ThemeContext from './ThemeContext';
class Toolbar extends Component {
	render() {
		return (
			<Fragment>
				<ThemeContext.Consumer>
					{
						({theme}) => {
							return(
								<div>
									{console.log(theme)}
								</div>
							);
						}
					}
		    </ThemeContext.Consumer>
      </Fragment>
		);
	}
}
export default Toolbar;