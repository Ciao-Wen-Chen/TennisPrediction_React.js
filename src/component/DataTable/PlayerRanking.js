import React, {useState, useEffect} from 'react'
import playerRank from './playerRanking.json'
import DataTable from 'react-data-table-component'
import '../prediction/Prediction.css'

export default function PlayerRanking() {

    
    const[search, setSearch] = useState('')
    

    //https://api.sportradar.com/tennis/{access_level}/{version}/{language_code}/sport_events/{sport_event_id}/timeline.{format}?api_key={your_api_key}
    
    const [players, setPlayers] = useState(
    // const testData=()=>{
    //     console.log(playerRank.rankings[0].competitor_rankings[0])
            playerRank.rankings[0].competitor_rankings.map(item=>({
                rank: item.rank,
                points: item.points,
                competitor: item.competitor.name,
                country: item.competitor.country,
            }))
    )
    console.log(players)
    const[filteredPlayer, setfilteredPlayer] = useState(players)
    // useEffect(()=>{
    //     console.log('use effect')
    //     //searchLiveData();
    //     testData()
    //     setfilteredPlayer(players)
    // },[])

    const cols=[
        {
            name: "Rank",
            selector: row=>row.rank
        },
        {
            name: "Points",
            selector: row=>row.points
        },
        {
            name: "Player Name",
            selector: row=>row.competitor
        },
        {
            name: "Country",
            selector: row=>row.country
        }
    ]
    useEffect(()=>{
        console.log("use effect")
        const result = players.filter(player=>{
            return player.competitor.toLowerCase().match(search.toLowerCase())
        })
        setfilteredPlayer(result)
    },[search])


    return (
        <div className="prediction">
        <div style={{"width": "80%", "padding":"0 0 0 20%"}}>
        <DataTable
            //style={{fontFamily:'Varela Round'}}
            title="ATP Ranking &nbsp;&nbsp;&#128308;Live" 
            columns={cols} 
            data={filteredPlayer} 
            pagination
            fixedHeader
            fixedHeaderScrollHeight="100vh"
            highlightOnHover
            subHeader
            subHeaderComponent={
                <input type="text" placeholder='Search player' className='w-25 form-control'
                value={search} onChange={(e)=> setSearch(e.target.value)}/>
            }
            subHeaderAlign="left"
            
        />
        </div>
        </div>
    )
}
