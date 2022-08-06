import React from 'react'
import { Box, TextInput, Select } from '@mantine/core';
import { Paper } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import './Prediction.css'

export default function PlayerTwo({ formData, setFormData, winner }) {
    const boxStyle = {
        width: '50%',
        margin: '1rem auto',
        textAlign: 'center',
        padding: '2rem 0',
    }
    const cellBoxStyle = { padding: '10px 50px 60px' , textAlign: 'left', fontFamily:'Varela Round'}
    const cellPaperStyle = { padding:'0px 20px 30px', margin:'10px auto' }

    return (
        <div className="prediction">
            <Box
                sx={ boxStyle }
                >
            <Paper elevation={3} >
            <Box sx={ cellBoxStyle }>
                <Form.Label className="titleLabel" >Player Two</Form.Label>
                <Form.Label className="titleLabel" >{winner}</Form.Label>
                <br/>
                <Paper elevation={3} style={cellPaperStyle} >
                    <Form.Label className="label">Player Name</Form.Label>
                        <TextInput 
                        onChange={(e) => {
                            console.log(e);
                            setFormData({
                            ...formData,
                            p2: e.target.value,
                            });
                            
                        }}
                        value={formData.p2}
                        placeholder="e.g. Taylor Harry Fritz"
                        required
                    />
                    <Form.Label className="label">Player ID</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            console.log(e);
                            setFormData({
                            ...formData,
                            p2Id: e.target.value,
                            });
                            
                        }}
                        value={formData.p2Id}
                        placeholder="e.g. 105138"
                        required
                    />
                    <Form.Label className="label">Player Rank</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p2Rank: e.target.value,
                            });
                        }}
                        value={formData.p2Rank}
                        placeholder="e.g. 19"
                        required
                    />
                    <Form.Label className="label">Player Point</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p2Point: e.target.value,
                            });
                        }}
                        value={formData.p2Point}
                        placeholder="e.g. 1645"
                        required
                    />
                    <Form.Label className="label">Player Hand</Form.Label>
                    <Select className="selectItem"
                        data={[
                        { value: 'R', label: 'Right' },
                        { value: 'L', label: 'Left' },
                        ]}
                        onChange={(e) => {
                            console.log(e);
                            setFormData({ ...formData, p2Hand: e });
                        }}
                        value={ formData.p2Hand }
                        placeholder="e.g. Right"
                    />
                    <Form.Label className="label">Player Height</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p2Height: e.target.value,
                            });
                        }}
                        value={formData.p2Height}
                        placeholder="e.g. 181"
                        required
                    />
                    <Form.Label className="label">Player Fatigue</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p2Fatigue: e.target.value,
                            });
                        }}
                        value={formData.p2Fatigue}
                        placeholder="e.g. 3.8"
                        required
                    />
                    <Form.Label className="label">Player Age</Form.Label>
                        <TextInput 
                        type="number"
                        onChange={(e) => {
                            setFormData({
                            ...formData,
                            p2Age: e.target.value,
                            });
                        }}
                        value={formData.p2Age}
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
