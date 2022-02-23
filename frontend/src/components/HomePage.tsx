import * as React from 'react';

// mui components
import Container from '@mui/material/Container';

const HomePage = () => {

	return (
		<Container maxWidth="lg">
		  <div className="introMain">
			<h1>I'm Alex Halsey</h1>
			<h3>A Junior Web Developper</h3>
			<img 
			  id="coverPhoto" 
			  src="../static/img/cover_photo.jpg" 
			  alt="Cover Photo" 
			  title="Me!" 
			/> 
		  </div>
		  <div className="introText">
		    <p>
		      Text to be changed: An adept and hard working adult
		      with an interest in back-end development & data analytics. 
		      Looking to further develop work experience and meet 
		      standards set to a high level.
		    </p>
		  </div>
		</Container>
	);
}

export default HomePage;
