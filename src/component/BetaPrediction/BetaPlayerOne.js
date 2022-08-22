import React, {useState,useMemo,useEffect} from 'react'
import { Box, TextInput, Select } from '@mantine/core';
import { Paper } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import '../prediction/Prediction.css'
import player_names from '../prediction/player_list.json'
import player_namesA from '../prediction/player_listA.json'
import player_namesB from '../prediction/player_listB.json'
import Selector from 'react-select'

export default function BetaPlayerOne({ formData, setFormData }) {
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

    // let players=[]
    // //function MyComponent() {
    // players = useMemo(() => processData(player_names), []);
    // //}
    const [playerName, setPlayerName] = useState('')

    function PlayerSelector() {
        const [value, setValue] = useState('')
        const playersA = useMemo(() => processData(player_namesA), []);
        const playersB = useMemo(() => processData(player_namesB), []);
        console.log(processData(playersB))
        //console.log(players)
        // const changeHandler = e => {
        //     setMatchName(value)
        //     setValue(value)
        //     setFormData({ ...formData, matchName: e.target.value, }); 
        // }
        // if(typeof(e) != "undefined"){
            //if(e.startsWith("A") || e.startsWith("a")){
        if(playerName.startsWith("A")){
            return <Selector options={playersA} value={value.value} onChange={(value) => {
                console.log(value["value"]);
                setFormData({ ...formData, p1: value["value"]});
            }} /> 
        }else if(playerName.startsWith("B")){
            return <Selector options={playersB} value={value.value} onChange={(value) => {
                console.log(value["value"]);
                setFormData({ ...formData, p1: value["value"]});
            }} /> 
        }
            // return <Selector options={playersB} value={value.value} onChange={(value) => {
            //     console.log(value["value"]);
            //     setFormData({ ...formData, p1: value["value"]});
            // }} /> 
        //}
    //}
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
                <br/>
                    
                    <Form.Label className="label">Player I Name</Form.Label>
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
                        placeholder="e.g. Roberto Bautista Agut"
                        required
                    />
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
                    {/* <Form.Label className="label">Player I Dominant Hand</Form.Label>
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
                        /> */}
                    {/* <Form.Label className="label">Player I Height (cm)</Form.Label>
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
                    /> */}
                    {/* <Form.Label className="label">Player Fatigue</Form.Label>
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
                    /> */}
                    {/* <Form.Label className="label">Player Age</Form.Label>
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
                    /> */}
                </Paper>
            </Box>
            </Paper>
            </Box>
        </div>
    )
}
