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
import { useLocalUser } from '../util/useLocalUser';
import {ROLES} from "../../App";

export default function Appbar() {

  const [user, setuser] = useLocalUser('','access_token')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // const handleClose = (state) => {
  //   if(state==="login"){
  //     localStorage.setItem("token", "XXX");
  //     localStorage.setItem("user", "USER");
  //   }
  //   setAnchorEl(null);

  // };
  function handleClose(state){
      if(state==="login"){
        localStorage.clear();
        localStorage.clear();
        window.location.href="/welcome";
      }
      setAnchorEl(null);
  
    };

  const conditionalRender=()=>{
    if(ROLES[user]===300){
      return <MenuItem onClick={(event)=>handleClose("login")}>Log out</MenuItem>
    }else{
      return(
      <>
      <MenuItem onClick={(event)=>handleClose("")} component={Link} to="/login">Log in</MenuItem>          
      <MenuItem onClick={(event)=>handleClose("")} component={Link} to="/member">Sign up</MenuItem>
      </>)
    }
  }
  const accountIcon={ position:"relative",float:"right"}
  const titleFont={fontFamily:"Varela Round", fontSize:"22px",fontWeight: "bold"}
  
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          
          <div variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="/welcome"><img src="/logo.png" alt="logo" width="300"/></a>
          </div>

          <div className="menubar">
            <Button
              id="basic-button1"
              color="inherit"
              href="/home"
              style={titleFont}
              // onClick={btnClickedHandler(1)}
            >
              Live score
            </Button>
          </div>

          <div className="menubar">
            <Button
              id="basic-button2"
              color="inherit"
              href="/prediction-trial"
              style={titleFont}
              // onClick={btnClickedHandler(2)}
            >
              Free Trial
            </Button>
          </div>

          <div className="menubar">
            <Button
              id="basic-button3"
              color="inherit"
              href="/prediction"
              style={titleFont}
              // onClick={btnClickedHandler(3)}
            >
              Prediction
            </Button>
          </div>

          <div className="menubar">
            <Button
              id="basic-button4"
              color="inherit"
              href="data/"
              style={titleFont}
              // onClick={btnClickedHandler(4)}
            >
              Query Data
            </Button>
          </div>


          <Box sx={{ flexGrow: 3}}>
            <div style={accountIcon}>
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
                {/* <MenuItem onClick={handleClose} >My Profile</MenuItem> */}
                {/* <MenuItem onClick={handleClose} component={Link} to="/login">Log in</MenuItem>
                <MenuItem onClick={handleClose}>Log out</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/member">Register</MenuItem> */}
                {conditionalRender()}
              </Menu>
            </div>
          </Box>

          {/* to="/member" */}


        </Toolbar>
      </AppBar>
    </Box>

  );
}
