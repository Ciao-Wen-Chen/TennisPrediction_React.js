import * as React from 'react';
import useAuth from '../../hooks/useAuth'
import{useRef, useState, useMemo} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container,Paper,Button,FormHelperText} from '@material-ui/core';
import axios from 'axios';
import Select from 'react-select'
import './Member.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLocalState } from '../util/useLocalState';

export default function Login() {

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [access_token, setAccess_token]=useLocalState('', "access_token");

  const navigate = useNavigate();
  const location = useLocation();

  const loginPayload = {
    "email": email,
    "password": password
  }

  const submitClick=(e)=>{
    console.log("sending request")
    fetch("http://localhost:8080/api/login",{
      method:"POST",
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body: new URLSearchParams(loginPayload)
    })
    .then((response) => {
      if (response.status === 200) return response.json();
      else if (response.status === 401 || response.status === 403) {
        console.log("Invalid username or password");
      } else {
        console.log( "Something went wrong");
      }
    })
    .then((data) => {
        console.log(data.access_token)
        setAccess_token(data.access_token)
        window.location.href="/welcome"
    });
  }

  const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}

  return (
    <div>
      <Container className="member">
        <Paper elevation={3} style={paperStyle}>
          <h1>Log in</h1>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '40ch' },
            }}
            noValidate
            autoComplete="on"
          >
              <div>
              <TextField required id="email" label="Email" type="email" 
                        value={email} onChange={(e)=>{
                          setEmail(e.target.value)
                        }}/>

              <TextField required id="password" label="Password"
                        value={password} onChange={(e)=>setPassword(e.target.value)}/>
              
              </div>
              <Button variant="contained" onClick={submitClick} >Submit</Button>
          </Box> 
      </Paper>
    </Container>
    </div>
  )
}
