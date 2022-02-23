import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import NavBar from './Navbar'; 
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';


const App = () => {
	return (
	  <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="about_me" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="*" element={
            	<div>Error 404 - Oops! Page not found.</div>
            } />
          </Route>
        </Routes>
      </Router>
	);
}

export default App;