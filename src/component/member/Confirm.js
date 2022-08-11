import React from 'react'
import {state, useState,useEffect,useSearchParams} from 'react';
import {Navigate} from 'react-router-dom'
import './Member.css';


export default function Confirm() {

    const params = new URLSearchParams(window.location.search);
    const [token, setToken] = useState(params.get("token"))
    const [emailVerifyState, setemailVerifyState] = useState('')
    //const navigate = useNavigate();

    console.log(token)

    useEffect(() => {
        fetch("http://localhost:8080/api/member/registration/confirm",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(token)}
        )
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            setemailVerifyState(data.message)
            console.log("message"+emailVerifyState)
        });
    },[]);

    const conditionalRender=()=>{
        if(emailVerifyState==="confirmed"){
            return(
                <div class="modal_content">
                    <div class="notifyFont">
                        Congrats! You can start your journey now 
                        Please Log in.
                    </div>
                    <a href="/login" class="myButton">Log in</a>
                </div>
            )
        }else{
            return(
                <div class="modal_content">
                    <div class="notifyFont">
                        Congrats! You can start your journey now, <br></br> 
                        Please Log in.
                        
                    </div>
                    <div class="btn_login" style={{position:"relative",marginRight:"8%"}}>
                        <a href="/login" class="myButton">Log in</a>
                    </div>
                    
                </div>
            )
            // return(
            //     <div class="emial_verify">
            //         <div class="emial_verify_font">
            //         <span class="importantfont">Oh no, it is not a valid link.</span><br></br>
            //         Do not worry, this might happen when:<br></br>
            //         <div class="emial_verify_font" style={{ textAlign:"left", margin:"3px", color:"#938558"}}>
            //         <li>This email has already been confirmed</li>
            //         <li>Token expired</li>
            //         <li>You accidentally modify the URL link</li>
            //         <a href="/member" class="myButton">Sign up again</a>
            //         </div>
            //         </div>
            //     </div>

            // )
        }
    }
    

  return (
    <div class="member">
        {conditionalRender()}
    </div>
  )
}
