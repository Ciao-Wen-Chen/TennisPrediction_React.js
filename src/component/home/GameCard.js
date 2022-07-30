import * as React from 'react';
import liveSummary from './LiveSummary.json'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './GameCard.css';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function GameCard( {row} ) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <p className="smallTitle">
          <img src="/live.gif" alt="wait until the page loads" width="12" height="12"/>
          Live 
          
        </p>
        <p className="title"> {row.gameName} </p>
        <p className="player"> {row.p1} </p>
        <p className="info"> {row.p1Country}{bull}{row.p1Qualifier} </p>

        <p className="player"> {row.p2} </p>
        <p className="info"> {row.p2Country}{bull}{row.p2Qualifier} </p>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}