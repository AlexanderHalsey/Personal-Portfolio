import * as React from 'react';
import Navbar from './Navbar';
import ResponsiveAppBar from './Navbar1'; 


export default class HomePage extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div>
				<ResponsiveAppBar />
			</div>
		);
	}
}