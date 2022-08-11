import * as React from 'react';
import useAuth from '../../hooks/useAuth'
import{useState, useMemo} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container,Paper,Button,FormHelperText} from '@material-ui/core';
import axios from 'axios';
import Select from 'react-select'
import './Member.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Login() {

  const setAutho = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [access_token, setAccessToken] = useState('');

  const loginPayload = {
    "email": email,
    "password": password
  }

  const submitClick=(e)=>{
    fetch("http://localhost:8080/login",{
      method:"POST",
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body: new URLSearchParams(loginPayload)
    })
    .then((response) => Promise.all([response.json(), response.headers]))
    .then((data)=> {
          

      })
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
