import React,{useEffect, useState} from 'react'
import liveSummary from './LiveSummary.json'
import GameCard from './GameCard';
import {Paper,Grid} from '@material-ui/core';
import axios from 'axios';
import './Home.css'

//TennHowWin
// in home page we need to introduce the API 
export default function Home() {
    
    //fetch summary data: key:met85e2j3944nf2f7dkr84uy,
    const url=`https://api.sportradar.com/tennis/trial/v3/en/schedules/live/summaries.json?api_key=met85e2j3944nf2f7dkr84uy`
    const [gameSumAry, setGameSumAry] = useState([])
    
    
    const testData=()=>{
        setGameSumAry(liveSummary.summaries.map(item=>({
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

            //new
            gameStartTime: item.sport_event.start_time,//2022-07-29T13:35:00+00:00

            homeScores:item.sport_event_status.game_state?.home_score,
            awayScores:item.sport_event_status.game_state?.away_score,
            serving:item.sport_event_status.game_state?.serving,
            last_point_result:item.sport_event_status.game_state?.last_point_result,
            tie_break:item.sport_event_status.game_state?.tie_break,

        })))
        //console.log("here"+gameSumAry[2].last_point_result)
    }
    
    useEffect(()=>{
        console.log('use effect')
        searchLiveData();
        //testData()

    },[])

    const searchLiveData = () => {
        console.log('fetch data')
        fetch(url)                  
        .then((response) => response.json()) 
        .then((data) => {
            console.log(data)
            getGameSumAryFormat(data)
        });
        
    }

    function getGameSumAryFormat(liveSummary){
        console.log("getGameSumAryFormat")
        console.log(liveSummary)
        console.log(liveSummary.summaries)
        setGameSumAry(liveSummary.summaries.map(item=>({
            gameid: item.sport_event.id, //sr:sport_event:35034841
            //start: item.sport_event.start_time,//2022-07-29T13:35:00+00:00
            cat: item.sport_event.sport_event_context.category.name, //ITF
            gameName: item.sport_event.sport_event_context.season.name, //"ITF Denmark F1, Men Singles 2022"

            p1: item.sport_event.competitors[0].name,
            p1Country: item.sport_event.competitors[0].country,
            p1Qualifier: item.sport_event.competitors[0].qualifier, //home or away
        
            p2: item.sport_event.competitors[1].name,
            p2Country: item.sport_event.competitors[1].country,
            p2Qualifier: item.sport_event.competitors[1].qualifier, //home or away

            //new
            gameStartTime: item.sport_event.start_time,//2022-07-29T13:35:00+00:00

            homeScores: item.sport_event_status.game_state?.home_score,
            awayScores: item.sport_event_status.game_state?.away_score,
            serving: item.sport_event_status.game_state?.serving,
            last_point_result: item.sport_event_status.game_state?.last_point_result,
            tie_break: item.sport_event_status.game_state?.tie_break,
            
        })))
        console.log(liveSummary)
        
    }
    
    function createData(
        gameName: string,
        p1: string,
        p1Country: string,
        p1Qualifier: string, 
        p2: string,
        p2Country: string,
        p2Qualifier: string,

        gameStartTime: string,

        homeScores:string,
        awayScores:string,
        serving:string,
        last_point_result:string,
        tie_break:string,
            
    ) {
        // console.log({ gameName, p1, p1Country, p1Qualifier, p2, p2Country, p2Qualifier, 
        //     gameStartTime, 
        //     homeScores, awayScores, serving, last_point_result, tie_break })
        return { gameName, p1, p1Country, p1Qualifier, p2, p2Country, p2Qualifier, 
                gameStartTime, 
                homeScores, awayScores, serving, last_point_result, tie_break };
    }

    const paperStyle={padding:'20px 20px', width:900, margin:'20px auto', flexGrow:1}
    
    return (
        <Paper elevation={3} style={paperStyle}>
        <div className="back">
            <span className='bigTitle'>Live Summary of current match</span>
        </div>
        <Grid container spacing={4}>
            { gameSumAry.map(item => (
                <Grid item xs={4}>
                <GameCard row={createData(item.gameName, item.p1, item.p1Country, item.p1Qualifier,
                    item.p2, item.p2Country, item.p2Qualifier, 
                    item.gameStartTime,
                    item.homeScores, item.awayScores, item.serving, item.last_point_result, item.tie_break
                    )}/>
                </Grid>
            )) }
        </Grid>
        </Paper> 
        // </Container>
    ) 
}
