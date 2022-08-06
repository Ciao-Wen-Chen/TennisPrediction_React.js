import React, {state, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Match from './Match'
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import './Prediction.css';
import { useAsync } from "react-async"
import Calculate from './Calculate';


export default function Prediction() {

    const[step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        matchName: 'Wimbledon', matchId: 0, matchSurface: 'Grass', matchLevel: 'G',
        p1: 'Roberto Bautista Agut', p1Id: 105138, p1Rank: 19, p1Point: 1645, p1Hand: 'R', p1Height: 181, p1Fatigue: 3.8, p1Age: 31,
        p2: 'Taylor Harry Fritz', p2Id: 126203, p2Rank: 40, p2Point: 1090, p2Hand: 'R', p2Height: 193, p2Fatigue: 4, p2Age: 22,
    });
    const [winner, setWinner]=useState('plauyer')
    
    function handleNext() {
        setStep(step + 1);
    }
    function handlePrev(){
        setStep(step - 1);
    }
    
    const handleSubmit=(e)=>{
        
        setStep(step + 1);
        // console.log(formData);
        // fetch("http://localhost:8080/api/prediction",{
        // method:"POST",
        // headers:{'Content-Type':'application/json'},
        // body:JSON.stringify(formData)

        // }).then(res => (res.ok ? res : Promise.reject(res)))
        // .then((response)=>{console.log("New match predicting")
        //     console.log(response); 
        //     return response.json()

        // }).then(data => {
        //     console.log(data)
        //     setWinner(data.p1Name)

        // });
    }

    const conditionalComponent=()=>{
        switch (step) {
            case 1: 
                return <Match formData={formData} setFormData={setFormData} />;
            case 2: 
                return <PlayerOne formData={formData} setFormData={setFormData} />;
            case 3:
                return <PlayerTwo formData={formData} setFormData={setFormData} setWinner={setWinner} winner={winner}/>;
            case 4:
                return <Calculate formData={formData}/>
            default: 
        }
    }
    const conditionalBtnBack=()=>{
        if(step>1){
            return (
                <Button variant="contained" onClick={ handlePrev }>
                    Back
                </Button>
            )
        }
    }
    const conditionalBtnNext=()=>{
        if(step<3){
            return(
                <Button variant="contained" onClick={ handleNext }>
                    >>>
                </Button>
            )
        }else if(step===3){
            return(
                <>
                <Button variant="contained" onClick={ handleSubmit }>
                    Start Prediction
                </Button>
                </>
            )
        }
        
    }
  return (
    <>
        <div>
            <div> {conditionalComponent()} </div>
            <div> {conditionalBtnBack()} </div>
            <div> {conditionalBtnNext()} </div>
            
        </div>
    </>
   
  )
}
