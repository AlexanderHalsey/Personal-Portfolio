import * as React from 'react';

// mui components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const HomePage = () => {

	return (
		<div className="homepage">
	 	  <div className="introMain">
		    <Container maxWidth="xl" className="introMain">
			  <Grid container spacing={2} justifyContent="space-around" alignItems="center">
			    <Grid item xs={3}>
			      <div className="introMainTitle">
				    <h1>I'm Alex Halsey</h1>
				    <h3>A Junior Web Developper</h3>
				  </div>
		        </Grid>
		        <Grid item xs={5}>
				  <img 
				    id="coverPhoto" 
				    src="../static/img/cover_photo.jpg" 
				    alt="Cover Photo" 
				    title="Me!" 
				  /> 
		        </Grid>
			  </Grid>
		    </Container>
		  </div>
		  <Container 
		    maxWidth="lg" 
		    className="introText"
		    sx={{ color: 'white' }}
		  >
		    <p>
		      Text to be changed: An adept and hard working adult
		      with an interest in back-end development & data analytics. 
		      Looking to further develop work experience and meet 
		      standards set to a high level.
		    </p>
		  </Container>
		  <br />
		  <br />
		  <br />
		  <br />
		  <br />
		  <br />
		  <br />
		  <br />
		  <br />
		  <br />
		  <br />
		</div>
	);
}

export default HomePage;
