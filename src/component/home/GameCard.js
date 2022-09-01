import React, {useState} from 'react';
import liveSummary from './LiveSummary.json'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './GameCard.css';
import ScoreTable from './ScoreTable';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const dealWithTimeFormat =(input)=>{
  let tem = input.split('T');
  return tem[0] + ' '+ tem[1].split('+')[0] + ' GMT'
}

const learMoreClickHandler=()=>{
  const modal = document.querySelector(".modal")
      const closeBtn = document.querySelector(".close")
      modal.style.display = "block";
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      })
}

export default function GameCard( {row} ) {
  
  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <p className="smallTitle">
          <img src="/live.gif" alt="wait until the page loads" width="12" height="12"/>
          Live 
          
        </p>
        <p className="title"> {row.gameName} </p>
        <p className="time"> {dealWithTimeFormat(row.gameStartTime) } </p>

        <p className="player"> {row.p1} </p>
        <p className="info"> {row.p1Country}{bull}{row.p1Qualifier} </p>

        <p className="player"> {row.p2} </p>
        <p className="info"> {row.p2Country}{bull}{row.p2Qualifier} </p>

        <div>
          <p className="player">Home v.s. Away:&nbsp;
            <span className='score'>{row.homeScores} {row.awayScores}</span></p>
          <p className="player">Sever:&nbsp; 
            <span className='score'>{row.serving}</span></p>
          <p className="player">Last Point:&nbsp; 
            <span className='score'>{row.last_point_result}</span></p>
          <p className="player">Tie Break:&nbsp; 
            <span className='score'>{row.tie_break}</span></p>
        </div>
      
      </CardContent>
      {/* <CardActions>
        <Button size="small" onClick={learMoreClickHandler} >Learn More</Button>
      </CardActions> */}
    </Card>
    {/* <div class="modal">
      <div class="modal_content">
          <span class="close">&times;</span>
          <div class="notifyFont">
          <tr>
            <li>Home Score: {row.homeScores}</li>
            <li>Away Score: {row.awayScores}</li>
            <li>Who Is Sever: {row.serving}</li>
            <li>Last Point: {row.last_point_result}</li>
            <li>Tie Break: {row.tie_break}</li>
          </tr>
          </div>
      </div>
    </div> */}
    </>
  );
}

// item.homeScores, item.awayScores, item.serving, item.last_point_result, item.tie_break