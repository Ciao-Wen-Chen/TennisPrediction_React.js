import React,{useState,useMemo,useEffect} from 'react'
import { Box, TextInput, Select } from '@mantine/core';
import { Paper } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import './Prediction.css'
import player_names from './player_list.json'
import player_namesA from './player_listA.json'
import player_namesB from './player_listB.json'
import player_namesC from './player_listC.json'
import player_namesD from './player_listD.json'
import player_namesE from './player_listE.json'
import player_namesF from './player_listF.json'
import player_namesG from './player_listG.json'
import player_namesH from './player_listH.json'
import player_namesI from './player_listI.json'
import player_namesJ from './player_listJ.json'
import player_namesK from './player_listK.json'
import player_namesL from './player_listL.json'
import player_namesM from './player_listM.json'
import player_namesN from './player_listN.json'
import player_namesO from './player_listO.json'
import player_namesP from './player_listP.json'
import player_namesQ from './player_listQ.json'
import player_namesR from './player_listR.json'
import player_namesS from './player_listS.json'
import player_namesT from './player_listT.json'
import player_namesU from './player_listU.json'
import player_namesV from './player_listV.json'
import player_namesW from './player_listT.json'


import playerList from './playerList.js'

import Selector from 'react-select'

export default function PlayerOne({ formData, setFormData }) {
    const boxStyle = {
        width: '50%',
        margin: '1rem auto',
        textAlign: 'center',
        padding: '2rem 0',
    }
    const cellBoxStyle = { padding: '10px 50px 60px' , textAlign: 'left', fontFamily:'Varela Round'}
    const cellPaperStyle = { padding:'0px 20px 30px', margin:'10px auto' }
   
    // helper function from Json to array
    function processData(match_names) {
        const matches = Object.keys(match_names).map(key => { 
          return match_names[key];
        });
        return matches;
    }

    const [playerName, setPlayerName] = useState('')

    function PlayerSelector() {
        const [value, setValue] = useState('')
        const playersA = useMemo(() => processData(player_namesA), []);
        const playersB = useMemo(() => processData(player_namesB), []);
        const playersC = useMemo(() => processData(player_namesC), []);
        const playersD = useMemo(() => processData(player_namesD), []);
        const playersE = useMemo(() => processData(player_namesE), []);
        const playersF = useMemo(() => processData(player_namesF), []);
        const playersG = useMemo(() => processData(player_namesG), []);
        const playersH = useMemo(() => processData(player_namesH), []);
        const playersI = useMemo(() => processData(player_namesI), []);
        const playersJ = useMemo(() => processData(player_namesJ), []);
        const playersK = useMemo(() => processData(player_namesK), []);
        const playersL = useMemo(() => processData(player_namesL), []);
        const playersM = useMemo(() => processData(player_namesM), []);
        const playersN = useMemo(() => processData(player_namesN), []);
        const playersO = useMemo(() => processData(player_namesO), []);
        const playersP = useMemo(() => processData(player_namesP), []);
        const playersQ = useMemo(() => processData(player_namesQ), []);
        const playersR = useMemo(() => processData(player_namesR), []);

        let UsedSet=playersA
        
        if(playerName.startsWith("A") || playerName.startsWith("a")){
            UsedSet=playersA
        }else if(playerName.startsWith("B") || playerName.startsWith("b")){
            UsedSet=playersB
        }else if(playerName.startsWith("C") || playerName.startsWith("c")){
            UsedSet=playersC
        }else if(playerName.startsWith("D") || playerName.startsWith("d")){
            UsedSet=playersD
        }else if(playerName.startsWith("E") || playerName.startsWith("e")){
            UsedSet=playersE
        }else if(playerName.startsWith("F") || playerName.startsWith("f")){
            UsedSet=playersF
        }else if(playerName.startsWith("G") || playerName.startsWith("g")){
            UsedSet=playersG
        }else if(playerName.startsWith("H") || playerName.startsWith("h")){
            UsedSet=playersH
        }else if(playerName.startsWith("I") || playerName.startsWith("i")){
            UsedSet=playersI
        }else if(playerName.startsWith("J") || playerName.startsWith("j")){
            UsedSet=playersJ
        }else if(playerName.startsWith("K") || playerName.startsWith("k")){
            UsedSet=playersK
        }else if(playerName.startsWith("L") || playerName.startsWith("L")){
            UsedSet=playersL
        }else if(playerName.startsWith("M") || playerName.startsWith("m")){
            UsedSet=playersM
        }else if(playerName.startsWith("N") || playerName.startsWith("n")){
            UsedSet=playersN
        }else if(playerName.startsWith("O") || playerName.startsWith("o")){
            UsedSet=playersO
        }else if(playerName.startsWith("P") || playerName.startsWith("p")){
            UsedSet=playersP
        }else if(playerName.startsWith("Q") || playerName.startsWith("q")){
            UsedSet=playersQ
        }else if(playerName.startsWith("R") || playerName.startsWith("r")){
            UsedSet=playersR
        }
        console.log(playerName)
        
        return (<Selector options={UsedSet} value={value.value} onChange={(value) => {
            console.log(value["value"]);
            setFormData({ ...formData, p1: value["value"]});
        }} /> )
    }

    return (
        <div className="prediction">
            <Box
                sx={ boxStyle }
                >
            <Paper elevation={3}>
            <Box sx={ cellBoxStyle }>
            <Form.Label className="titleLabel">Input Player One Information<span className="subtitle"> Step (2/3)</span></Form.Label>
                <Paper elevation={3} style={cellPaperStyle}>
                    <Form.Label className="label">The first letter of player's name</Form.Label>
                    {/* <Form.Label className="label">Player I Name</Form.Label> */}
                        <TextInput 
                        onChange={(e) => {
                            console.log(e);
                            setFormData({
                            ...formData,
                            p1: e.target.value,
                            });
                            setPlayerName(e.target.value)
                        }}
                        value={formData.p1}
                        placeholder="e.g. Input 'R' for Roberto Bautista Agut"
                        required
                    />
                    <Form.Label className="label">Search Player</Form.Label>
                    {PlayerSelector()}
                    <Form.Label className="label">Player I ID</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setFormData({
                            ...formData,
                            p1Id: e.target.value,
                            });
                        }}
                        value={formData.p1Id}
                        placeholder="e.g. 105138"
                        required
                    />
                    <Form.Label className="label">Player I Rank</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p1Rank: e.target.value,
                            });
                        }}
                        value={formData.p1Rank}
                        placeholder="e.g. 19"
                        required
                    />
                    <Form.Label className="label">Player I Point</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p1Point: e.target.value,
                            });
                        }}
                        value={formData.p1Point}
                        placeholder="e.g. 1645"
                        required
                    />
                    <Form.Label className="label">Player I Dominant Hand&nbsp;
                        <span class="w3-tag w3-round w3-green w3-border w3-border-white">premium</span>
                    </Form.Label>
                        <Select className="selectItem"
                            data={[
                            { value: 'R', label: 'Right' },
                            { value: 'L', label: 'Left' },
                            ]}
                            onChange={(e) => {
                                console.log(e);
                                setFormData({ ...formData, p1Hand: e });
                            }}
                            value={ formData.p1Hand }
                            placeholder="e.g. Right"
                        />
                    <Form.Label className="label">Player I Height (cm)&nbsp;
                        <span class="w3-tag w3-round w3-green w3-border w3-border-white">premium</span>
                    </Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p1Height: e.target.value,
                            });
                        }}
                        value={formData.p1Height}
                        placeholder="e.g. 181"
                        required
                    />
                    <Form.Label className="label">Player Fatigue&nbsp;
                        <span class="w3-tag w3-round w3-green w3-border w3-border-white">premium</span><br></br>
                        <span style={{"color":"grey"}}>(We will check the set number of each match the player took last five match)</span>
                    </Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p1Fatigue: e.target.value,
                            });
                        }}
                        value={formData.p1Fatigue}
                        placeholder="e.g. 3.8"
                        required
                    />
                    <Form.Label className="label">Player Age&nbsp;
                        <span class="w3-tag w3-round w3-green w3-border w3-border-white">premium</span>
                    </Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p1Age: e.target.value,
                            });
                        }}
                        value={formData.p1Age}
                        placeholder="e.g. 31"
                        required
                    />
                </Paper>
            </Box>
            </Paper>
            </Box>
        </div>
    )
}
