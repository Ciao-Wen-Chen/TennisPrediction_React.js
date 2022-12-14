import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import Sidebar from './Sidebar';


export default function Appbar() {
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menubar={ padding :"10px"}
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar disableGutters>

          <div variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="/logo.png" alt="logo" width="300"/>
          </div>

          <a style={menubar}
            {/* <Button */}
              
              color="inherit"
              href="/home"
              variant="outlined"
            >
              Home
            {/* </Button> */}
          
          </a>
          <div style={menubar}>
            <Button
              id="basic-button"
              color="inherit"
              href="/prediction"
              variant="outlined"
            >
              Prediction
            </Button>
          </div>


          <div>
            <Button
              id="basic-button"
              color="inherit"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              variant="outlined"
            >
              Account
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose} >My Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/member">Login</MenuItem>
              
            </Menu>
          </div>

          {/* to="/member" */}


        </Toolbar>
      </AppBar>
    </Box>

  );
}
