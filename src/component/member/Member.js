import * as React from 'react';
import{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container,Paper,Button,FormHelperText} from '@material-ui/core';
import './Member.css';
import {Link} from "react-router-dom";

export default function Member() {

    const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[country, setCountry] = useState('');
    const[age, setAge] = useState('');
    const [error, setError] = useState(null);

    const submitClick=(e)=>{
      e.preventDefault();
      const member={firstName, lastName, email, password, country, age};
      console.log(member);
      fetch("http://localhost:8080/api/member/registration",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(member)
      }).then(()=>{
        console.log("New member registered")
      })

    }

    function isValidEmail(email) {
      if(email == null || email == "") return true;
      return /\S+@\S+\.\S+/.test(email);
    }

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1>Create An Account</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField required id="firstName" label="First Name"  
                  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />

        <TextField required id="lastName" label="Last Name"  
                  value={lastName} onChange={(e)=>setLastName(e.target.value)} />

         <TextField required id="email" label="Email" type="email" 
                  value={email} onChange={(e)=>{
                    if (!isValidEmail(e.target.value)) {
                      setError('Email is invalid');
                    } else {
                      setError(null);
                    }
                    setEmail(e.target.value)
                  }}/>
        <p>{error}</p>

        <TextField required id="password" label="Password"
                  value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <TextField id="country" label="Country of residence"
                  value={country} onChange={(e)=>setCountry(e.target.value)}/>
                  
        <TextField id="age" label="Age" type="number" 
                  value={age} onChange={(e)=>{
                    if(e.target.value<0){
                      const errorAge = document.getElementById(age)
                      errorAge.error=true;
                    }
                    setAge(e.target.value)}} />
        </div>
        <Button variant="contained" onClick={submitClick} >Submit</Button>
        <Link variant="contained" to="/home">Home</Link>
    </Box> 

      </Paper>
    </Container>
  );
}
