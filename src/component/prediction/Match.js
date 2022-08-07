import React from 'react'
import { Box, TextInput, Select } from '@mantine/core';
import { Paper } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Prediction.css'

export default function Match({ formData, setFormData }) {
    const boxStyle = {
        width: '50%',
        margin: '1rem auto',
        textAlign: 'center',
        padding: '2rem 0',
    }
    const cellBoxStyle = { padding: '10px 50px 50px' , textAlign: 'left', fontFamily:'Varela Round'}
    const cellPaperStyle = { padding:'0px 20px 30px', margin:'10px auto' }
    return (
    <div className="prediction">
        <Box
            sx={ boxStyle }
            >
        <Paper elevation={3} >
        <Box sx={ cellBoxStyle }>
        <Form.Label className="titleLabel">Prediction (1/3) <span className="subtitle">&#10145; Input Tourney Information</span></Form.Label>
        <Paper elevation={3} style={cellPaperStyle}>
            <Form.Label className="label">Tourney Name</Form.Label>
                <TextInput 
                onChange={(e) => {
                    setFormData({
                    ...formData,
                    matchName: e.target.value,
                    });
                }}
                value={formData.matchName}
                placeholder="e.g. Wimbledon"
                required
            />
            {/* <Form.Label className="label">Match ID</Form.Label>
                <TextInput 
                onChange={(e) => {
                    setFormData({
                    ...formData,
                    matchId: e.target.value,
                    });
                }}
                value={formData.matchId}
                placeholder="e.g. 105138"
                required
            /> */}
            <Form.Label className="label">Tourney Surface</Form.Label>
                <Select className="selectItem"
                    data={[
                    { value: 'Clay', label: 'Clay' },
                    { value: 'Carpet', label: 'Carpet' },
                    { value: 'Grass', label: 'Grass' },
                    { value: 'Hard', label: 'Hard' },
                    ]}
                    onChange={(e) => {
                        console.log(e);
                        setFormData({ ...formData, matchSurface: e });
                    }}
                    value={ formData.matchSurface }
                    placeholder="e.g. Grass"
            />
            <Form.Label className="label">Tourney Level</Form.Label>
                <Select className="selectItem"
                    data={[
                    { value: 'A', label: 'A' },
                    { value: 'C', label: 'C' },
                    { value: 'D', label: 'D' },
                    { value: 'F', label: 'F' },
                    { value: 'G', label: 'G' },
                    { value: 'M', label: 'M' },
                    ]}
                    onChange={(e) => {
                        console.log(e);
                        setFormData({ ...formData, matchLevel: e });
                    }}
                    value={ formData.matchLevel }
                    placeholder="e.g. G"
            />
            </Paper>
        </Box>
        </Paper>
        </Box>
    </div>
  )
}
