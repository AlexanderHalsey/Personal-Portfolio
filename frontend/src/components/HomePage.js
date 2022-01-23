import React from 'react';
import { 
	BrowserRouter as Router, 
	Routes,
	Route, 
	Link,
	Redirect,
} from 'react-router-dom';


export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={
						<p>Is this working?</p>
					} />
				</Routes>
			</Router>
		);
	}
}