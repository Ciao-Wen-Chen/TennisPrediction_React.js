import * as React from 'react';
import{useState, useMemo} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container,Paper,Button,FormHelperText} from '@material-ui/core';
// import {Select} from '@mantine/core';
import Select from 'react-select'
import './Member.css';
import {Link} from "react-router-dom";
import countryList from 'react-select-country-list'
import {useNavigate} from 'react-router-dom'



export default function Member() {

    const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[country, setCountry] = useState('');
    const[age, setAge] = useState('');
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();
    function CountrySelector() {
      const [value, setValue] = useState('')   
      const options = useMemo(() => countryList().getData(), [])
      const changeHandler = value => {
        setCountry(value)
        setValue(value)
      }
      return <Select options={options} value={value} onChange={changeHandler} />
    }

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
      const modal = document.querySelector(".modal")
      const closeBtn = document.querySelector(".close")
      modal.style.display = "block";
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      })
    }


    function isValidEmail(email) {
      if(email == null || email == "") return true;
      return /\S+@\S+\.\S+/.test(email);
    }

  return (
    <>
    <Container className="member">
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
        <div style={{width:"72%" ,margin:"0px 0px 0px 80px"}}>
          {CountrySelector()}
        </div>
        <TextField id="age" label="Age" type="number" 
                  value={age} onChange={(e)=>{
                    if(e.target.value<0){
                      const errorAge = document.getElementById(age)
                      errorAge.error=true;
                    }
                    setAge(e.target.value)}} />
        </div>
        <Button variant="contained" onClick={submitClick} >Submit</Button>
        {/* <Link variant="contained" to="/home">Home</Link> */}
    </Box> 

      </Paper>
    </Container>
    <div class="modal">
      <div class="modal_content">
          <span class="close">&times;</span>
          <div class="notifyFont">Please check your E-mail to verify your account &#128231;</div>
      </div>
    </div>
</>
  );
}
