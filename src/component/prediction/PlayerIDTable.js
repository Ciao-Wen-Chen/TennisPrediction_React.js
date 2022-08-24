import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import playerID from '../predictionData/player_id_name_dic.json'
import './Prediction.css'

export default function PlayerIDTable() {

    const[players, setPlayers] = useState(playerID)
    const[search, setSearch] = useState('')
    const[filteredPlayer, setfilteredPlayer] = useState(playerID)

    const cols=[
        {
            name: "Player Name",
            selector: row=>row.name
        },
        {
            name: "Player ID",
            selector: row=>row.id
        }
    ]

    useEffect(()=>{
        const result = players.filter(player=>{
            return player.name.toLowerCase().match(search.toLowerCase())
        })
        setfilteredPlayer(result)
    },[search])

    return (
        <div className="prediction">
        <div style={{"width": "80%", "padding":"0 0 0 20%"}}>
        
        <DataTable
            //style={{fontFamily:'Varela Round'}}
            title="Player ID Table" 
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
