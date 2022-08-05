import React from 'react'
import liveSummary from './LiveSummary.json'
import GameCard from './GameCard';
import {Paper,Grid} from '@material-ui/core';

//TennHowWin
// in home page we need to introduce the API 
export default function Home() {

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

    const paperStyle={padding:'50px 20px', width:900, margin:'20px auto', flexGrow:1}

    return (
        // <Container>
        <Paper elevation={3} style={paperStyle}>
        <Grid container spacing={4}>
            
            { gameSumAry.map(item => (
                <Grid item xs={4}>
                <GameCard row={createData(item.gameName, item.p1, item.p1Country, item.p1Qualifier,
                    item.p2, item.p2Country, item.p2Qualifier)}/>
                </Grid>
            ))}
            
        </Grid>
        </Paper> 
        // </Container>
    ) 
}
