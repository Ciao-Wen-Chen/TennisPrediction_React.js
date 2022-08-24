import React,{useState,useEffect} from 'react'
import PlayerIDTable from '../prediction/PlayerIDTable';
import './Data.css'
import PlayerRanking from './PlayerRanking';
import { Paper } from '@material-ui/core';
import { Box } from '@mantine/core';

export default function Data() {

    const[step, setStep] = useState(1)

    const conditionalComponent=()=>{
        switch (step) {
            case 1: 
                return <PlayerIDTable/>;
            case 2: 
                return <PlayerRanking/>;
            default: 
        }
    }
    useEffect(()=>{
        if(step===1){
            const btn = document.getElementById('btn1');
            btn.style.color = 'white';
        }else{
            const btn2 = document.getElementById('btn2');
        btn2.style.color = 'white';
        }
    },[])

    const handleStep1=()=>{
        setStep(1)
        const btn = document.getElementById('btn1');
        btn.style.color = 'white';
        const btn2 = document.getElementById('btn2');
        btn2.style.color = '#333333';
    }
    const handleStep2=()=>{
        
        setStep(2)
        const btn2 = document.getElementById('btn2');
        btn2.style.color = 'white';
        const btn1 = document.getElementById('btn1');
        btn1.style.color = '#333333';
    }

  return (
    <>
    <div className='data'>
        <div style={{margin:"0 0 0 0", padding:"0 0 0 0"}}>
        <span class="myButton" id="btn1" onClick={ handleStep1 }>Player ID Table</span>
        <span class="myButton" id="btn2" onClick={ handleStep2 }>ATP Ranking Table</span>
        </div>
        {conditionalComponent()}
    </div>
    </>
  )
}
