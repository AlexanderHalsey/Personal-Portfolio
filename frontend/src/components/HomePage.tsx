import * as React from 'react';
import BackgroundCover from './BackgroundCover/BackgroundCover';

// mui components
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

const HomePage = () => {
	return (
		<div className="homepage">
	 	  <div 
	 	    className="introMain"
	 	    style= {{
	 	      height: window.innerHeight
	 	    }}
	 	  >
	 	    <BackgroundCover />
		  </div>
		  <Container 
		    maxWidth="lg" 
		    className="introText"
		    sx={{ color: 'white', my: 10 }}
		  >
		    <p>
		      Text to be changed: An adept and hard working adult
		      with an interest in back-end development and data analytics. 
		      Looking to further develop work experience and meet 
		      standards set to a high level.
		      <br />
		      <br />
		      <br />
		      <br />
		      <br />
		      <br />
		      <br />
		      <br />
		    </p>
		  </Container>
		</div>
	);
}

export default HomePage;
