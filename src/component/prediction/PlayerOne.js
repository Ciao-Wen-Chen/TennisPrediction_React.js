import React,{useState,useMemo,useEffect} from 'react'
import { Box, TextInput, Select } from '@mantine/core';
import { Paper } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import './Prediction.css'


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
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className="prediction">
            <Box
                sx={ boxStyle }
                >
            <Paper elevation={3}>
            <Box sx={ cellBoxStyle }>
            <Form.Label className="titleLabel">Input Player One Information<span className="subtitle"> Step (2/3)</span></Form.Label>
                <Paper elevation={3} style={cellPaperStyle}>
                    <Form.Label className="label">Player Name</Form.Label>
                    {/* <Form.Label className="label">Player I Name</Form.Label> */}
                        <TextInput 
                        onChange={(e) => {
                            console.log(e);
                            setFormData({
                            ...formData,
                            p1: e.target.value,
                            });
                            
                        }}
                        value={formData.p1}
                        placeholder="e.g. Roberto Bautista Agut"
                        required
                    />
                    
                    
                    <Form.Label className="label">Player I ID</Form.Label>&nbsp;
                    <span class="tag" onClick={()=>openInNewTab("data")}>search player ID</span><br></br>
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
                    <Form.Label className="label">Player I Rank</Form.Label>&nbsp;
                    <span class="tag" onClick={() => openInNewTab("data")} >&nbsp;search player Rank</span><br></br>
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
                    <Form.Label className="label">Player I Point</Form.Label>&nbsp;
                    <span class="tag" onClick={() => openInNewTab("data")} >&nbsp;search player Rank</span><br></br>
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
                    <Form.Label className="label">Number of sets that the Player took on last match&nbsp;
                        <span class="w3-tag w3-round w3-green w3-border w3-border-white">premium</span>
                        <br></br>
                        <span style={{"color":"grey"}}>(Input 0 if you want to skip this factor)</span>
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
                        placeholder="e.g. 3"
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
