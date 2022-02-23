import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

// mui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

// mui icons
import { SvgIconProps } from '@mui/material/SvgIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';


const pages: string[] = ['Projects', 'About Me', 'Skills'];
const links: [ string, string, SvgIconProps ][] = [
  ['linkedin', 'https://www.linkedin.com/in/alexander-halsey-10a827174/', <LinkedInIcon />], 
  ['gihub', 'https://github.com/AlexanderHalsey', <GitHubIcon />],
  ['email', '',  <MailIcon />],
  ['phone', '', <PhoneIcon />],
];

interface ScrollProps {
  children: React.ReactElement
}

function HideOnScroll(props: ScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <HideOnScroll>
        <AppBar position="sticky">
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Link to='/'>
                <Button
                  key='Home'
                  sx={{ mx: 3, my: 2, color: 'white', display: 'block' }}
                >
                  Home
                </Button>
              </Link>
              <Box sx={{ justifyContent: 'flex-end', flexGrow: 1, 
                         display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ justifyContent: 'flex-end', flexGrow: 1, 
                         display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Link 
                    to={"/" + page.toLowerCase().replace(" ", "_")} 
                    key={page}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ mx: 5, my: 2, color: 'white', display: 'block'}}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
                {links.map(([key, link, icon]) => (
                  <a 
                    target="_blank"
                    href={link}
                    rel="noopener noreferrer"
                  >
                    <IconButton aria-label={key}>
                      {icon}
                    </IconButton>
                  </a>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Outlet />
    </div>
  );
};

export default NavBar;