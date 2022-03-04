import * as React from 'react';
import BackgroundCover from './BackgroundCover/BackgroundCover';

// mui components
import Container from '@mui/material/Container';

const HomePage = () => {
	return (
		<div className="homepage">
	 	  <div className="introMain">
	 	    
	 	    <BackgroundCover />
			<h1 className="titleName">I'm Alex Halsey</h1>
			<h3 className="titlePosition">A Junior Web Developper</h3>
		  </div>
		  <Container 
		    maxWidth="lg" 
		    className="introText"
		    sx={{ color: 'white' }}
		  >
		    <p>
		      Text to be changed: An adept and hard working adult
		      with an interest in back-end development and data analytics. 
		      Looking to further develop work experience and meet 
		      standards set to a high level.
		    </p>
		  </Container>
		</div>
	);
}

export default HomePage;
