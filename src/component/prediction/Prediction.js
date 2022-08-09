import React, {state, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import Match from './Match'
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import './Prediction.css';
import { useAsync } from "react-async"
import Calculate from './Calculate';
import { Paper } from '@material-ui/core';

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
    const btnStyleBack1={ position:"absolute", bottom:"42%", left:"12%"}
    const conditionalBtnBack=()=>{
        if(step>1&&step<4){
            return (
                // variant="contained"
                <div style={btnStyleBack1}>
                <div class="iconR" onClick={ handlePrev }>
                    <div class="arrowR"></div>
                </div>
                </div>
                // <Button variant="contained" onClick={ handlePrev }>
                //     Back
                // </Button>
            )
        }
    }
    const btnStyleNext1={ position:"absolute", top:"35%", left:"80%" }
    const btnStyleNext2={ position:"absolute", bottom:"38%", left:"80%" }
    const btnStyleNext3={ position:"absolute", bottom:"30%", left:"80%"}

    const conditionalBtnNext=()=>{
        if(step===1){
            return(
                <div style={btnStyleNext1}>
                {/* <Button className="BtnStyleSelf" onClick={ handleNext }>
                    <span style={{fontSize: "30px", fontFamily: 'Varela Round', color:"#fff"}}>Next</span>
                </Button> */}
                <div class="icon" onClick={ handleNext }>
                    <div class="arrow"></div>
                </div>
                </div>
            )
        }else if(step<3){
            return(
            <div style={btnStyleNext2}>
            <div class="icon" onClick={ handleNext }>
                    <div class="arrow"></div>
            </div>
            </div>
            )
        }else if(step===3){
            return(
                <div style={btnStyleNext3}>
                <div class="parent">
                <button class="round-6" onClick={ handleSubmit }>Start</button>
                </div>
                {/* <Button variant="contained" onClick={ handleSubmit }>
                    Start Prediction
                </Button> */}
                </div>
            )
        }
    }
    // const btnStyleNext={
    //     position:"absolute", 
    //     top:"70%", 
    //     left:"70%"
    // }
    // const btnStyleBack={
    //     position:"absolute", 
    //     top:"60%", 
    //     left:"30%"
    // }
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
