import React from 'react'
import liveSummary from './LiveSummary.json'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//TennHowWin
// in home page we need to introduce the API 
export default function GameTable() {

    const gameSumAry = liveSummary.summaries.map(item=>({
        gameid: item.sport_event.id, //sr:sport_event:35034841
        start: item.sport_event.start_time,//2022-07-29T13:35:00+00:00
        cat: item.sport_event.sport_event_context.category.name, //ITF
        gameName: item.sport_event.sport_event_context.season.name, //"ITF Denmark F1, Men Singles 2022"
        
        p1: item.sport_event.competitors[0].name,
        p1Country: item.sport_event.competitors[0].country,
        p1Qualifier: item.sport_event.competitors[0].qualifier, //home or away

        p2: item.sport_event.competitors[1].name,
        p2Country: item.sport_event.competitors[1].country,
        p2Qualifier: item.sport_event.competitors[1].qualifier, //home or away
     }))

    console.log(gameSumAry)
    function createData(
        gameName: string,
        p1: string,
        p1Country: string,
        p1Qualifier: string,
        p2: string,
        p2Country: string,
        p2Qualifier: string
      ) {
        return { gameName, p1, p1Country, p1Qualifier, 
                p2, p2Country, p2Qualifier };
      }
    
    const row = []
    gameSumAry.map(item=>(
        row.push(
            createData(item.gameName, item.p1, item.p1Country, item.p1Qualifier,
            item.p2, item.p2Country, item.p2Qualifier)            
        )
    ))

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Live (pic)</TableCell>
            <TableCell align="right">Player</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Qualifier</TableCell>
            <TableCell align="right">Player</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Qualifier</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { gameSumAry.map((row) => (
            <TableRow key={row.gameName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.gameName}
              </TableCell>
              <TableCell align="right">{row.p1}</TableCell>
              <TableCell align="right">{row.p1Country}</TableCell>
              <TableCell align="right">{row.p1Qualifier}</TableCell>
              <TableCell align="right">{row.p2}</TableCell>
              <TableCell align="right">{row.p2Country}</TableCell>
              <TableCell align="right">{row.p2Qualifier}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}
