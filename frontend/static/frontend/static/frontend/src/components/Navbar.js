import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function Navbar() {
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (React.createElement("div", null, React.createElement(Button, { id: "demo-positioned-button", "aria-controls": open ? 'demo-positioned-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, onClick: handleClick }, "Dashboard"), React.createElement(Menu, { id: "demo-positioned-menu", "aria-labelledby": "demo-positioned-button", anchorEl: anchorEl, open: open, onClose: handleClose, anchorOrigin: {
            vertical: 'top',
            horizontal: 'left',
        }, transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        } }, React.createElement(MenuItem, { onClick: handleClose }, "About Me"), React.createElement(MenuItem, { onClick: handleClose }, "Blog"), React.createElement(MenuItem, { onClick: handleClose }, "Projects"), React.createElement(MenuItem, { onClick: handleClose }, "Contact"))));
}
