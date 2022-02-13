import * as React from 'react';
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
var pages = ['Home', 'About Me', 'Projects', 'Blog'];
var ResponsiveAppBar = function () {
    var _a = React.useState(null), anchorElNav = _a[0], setAnchorElNav = _a[1];
    var handleOpenNavMenu = function (event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
        setAnchorElNav(null);
    };
    return (React.createElement("div", null, React.createElement(AppBar, { position: "static" }, React.createElement(Container, { maxWidth: "xl" }, React.createElement(Toolbar, { disableGutters: true }, React.createElement(Typography, { variant: "h6", noWrap: true, component: "div", sx: { mr: 2, display: { xs: 'none', md: 'flex' } } }, "LOGO"), React.createElement(Box, { sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }, React.createElement(IconButton, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit" }, React.createElement(MenuIcon, null)), React.createElement(Menu, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }, keepMounted: true, transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
            display: { xs: 'block', md: 'none' },
        } }, pages.map(function (page) {
        return (React.createElement(MenuItem, { key: page, onClick: handleCloseNavMenu }, React.createElement(Typography, { textAlign: "center" }, page)));
    }))), React.createElement(Typography, { variant: "h6", noWrap: true, component: "div", sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }, "LOGO"), React.createElement(Box, { sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }, pages.map(function (page) { return (React.createElement(Button, { key: page, onClick: handleCloseNavMenu, sx: { my: 2, color: 'white', display: 'block' } }, page)); })))))));
};
export default ResponsiveAppBar;
