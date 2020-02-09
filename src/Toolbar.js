import React, { Fragment, Component } from 'react';
import ThemeTogglerButton from './ThemeTogglerButton';
class Toolbar extends Component {
	render() {
		return (
			<Fragment>
				<ThemeTogglerButton />
			</Fragment>
		);
	}
}
export default Toolbar;