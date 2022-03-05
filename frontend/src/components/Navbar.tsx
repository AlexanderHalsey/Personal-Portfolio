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
const links: [ string, string, SvgIconProps, string ][] = [
  ['linkedin', 'https://www.linkedin.com/in/alexander-halsey-10a827174/', 
   <LinkedInIcon />, 'blue'], 
  ['gihub', 'https://github.com/AlexanderHalsey', <GitHubIcon />, 'gray'],
  ['email', '',  <MailIcon />, 'yellow'],
  ['phone', '', <PhoneIcon />, 'green'],
];


interface Props {
  children: React.ReactElement
}


function CustomScroll(props: Props) {
  const elevationTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const hideOnTrigger = useScrollTrigger();

  return React.cloneElement(
    <Slide appear={false} direction="down" in={!hideOnTrigger}>
      {props.children}
    </Slide>, {
    elevation: elevationTrigger ? 4 : 0,
  });
}


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = 
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <CustomScroll>
        <AppBar 
          position="fixed" 
          sx={{ backgroundColor: 'transparent' }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to='/' style={{ textDecoration: 'none' }}>
                <Button
                  key='Home'
                  sx={{ mx: 3, my: 2, display: 'block', 
                    color: 'white', fontSize: 18, '&:hover': { 
                      backgroundColor: 'transparent',
                      color: 'purple'
                    } 
                  }}
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
                    <MenuItem 
                      key={page} 
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ justifyContent: 'flex-end', flexGrow: 1, 
                         display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Link 
                    to={"/" + page.toLowerCase().replace(" ", "_")} 
                    style={{ textDecoration: 'none' }}
                    key={page}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ 
                        mx: 5, my: 2, color: 'white', display: 'block', 
                        fontSize: 18, '&:hover': { 
                          backgroundColor: 'transparent',
                          color: 'purple'
                        } 
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
                {links.map(([key, link, icon, hoverColor]) => (
                  <a
                    key={key} 
                    target="_blank"
                    href={link}
                    rel="noopener noreferrer"
                  >
                    <IconButton 
                      sx={{ paddingTop: 3, color: 'white', 
                        '&:hover': { 
                          backgroundColor: 'transparent',
                          color: hoverColor
                        } 
                      }}
                      aria-label={key}
                    >
                      {icon}
                    </IconButton>
                  </a>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </CustomScroll>

      <Outlet />
    </div>
  );
};

export default NavBar;