import React, {useState, useMemo} from 'react'
import { Box, TextInput, Select } from '@mantine/core';
import { Paper } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import '../prediction/Prediction.css'
import match_names from '../prediction/match_list.json'
import Selector from 'react-select'

export default function BetaMatch({ formData, setFormData }) {
    const boxStyle = {
        width: '50%',
        margin: '1rem auto',
        textAlign: 'center',
        padding: '2rem 0',
    }
    
    // helper function from Json to array
    function processData(match_names) {

        const matches = Object.keys(match_names).map(key => { 
          return match_names[key];
        });
        return matches;
    }
    
    function MatchesSelector(e) {
        const [value, setValue] = useState('')
        const [matchName, setMatchName] = useState('')
        const matches = useMemo(() => processData(match_names), []);
        console.log(processData(match_names))
        console.log(matches)
        return <Selector options={matches} value={value.value} onChange={(value) => {
            console.log(value["value"]);
            setFormData({ ...formData, matchName: value["value"]});
        }} />
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
        <Form.Label className="titleLabel">Input Match Information<span className="subtitle"> Step (1/3) </span></Form.Label>
        <Paper elevation={3} style={cellPaperStyle}>
            <Form.Label className="label">The Tournament Name</Form.Label>
            {/* https://react-select.com/home */}
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
            {MatchesSelector()}
            
            <Form.Label className="label">Choose Court Surface Type</Form.Label>
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
            {/* <Form.Label className="label">Choose Tournament Level</Form.Label>
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
            /> */}
            </Paper>
        </Box>
        </Paper>
        </Box>
    </div>
  )
}
