import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Prediction.css'

export default function Predictionprototype() {
    const paperStyle = { padding:'50px 80px', width:600, margin:'20px auto' }
    const cellPaperStyle = { padding:'10px 20px', margin:'20px auto' }
    return (
        <div className="prediction">
            <Paper elevation={3} style={paperStyle}>
                    <Form.Group className="mb-3" controlId="matchName">
                        <Form.Label>Match Name</Form.Label>
                        <Form.Control type="matchName" placeholder="e.g. Wimbledon" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Paper elevation={2} style={cellPaperStyle}>
                            <Form.Label>Surface Type</Form.Label>
                            <Row>
                                <Col><Form.Check type="checkbox" label="Clay" /></Col>
                                <Col><Form.Check type="checkbox" label="Carpet" /></Col>
                            </Row>
                            <Row>
                                <Col><Form.Check type="checkbox" label="Grass" /></Col>
                                <Col><Form.Check type="checkbox" label="Hard" /></Col>
                            </Row>
                            </Paper>
                        <Paper elevation={2} style={cellPaperStyle}>
                            <Form.Label>Match Level</Form.Label>
                            <Row>
                                <Col><Form.Check type="checkbox" label="A" /></Col>
                                <Col><Form.Check type="checkbox" label="C" /></Col>
                                <Col><Form.Check type="checkbox" label="D" /></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col><Form.Check type="checkbox" label="F" /></Col>
                                <Col><Form.Check type="checkbox" label="G" /></Col>
                                <Col><Form.Check type="checkbox" label="M" /></Col>
                                <Col></Col>
                            </Row>
                        </Paper>
                        <Paper elevation={2} style={cellPaperStyle}>
                            <Form.Label>Player A</Form.Label>
                            <Form.Control type="player" placeholder="e.g. Roberto Bautista Agut" />
                            <p></p>
                            <Form.Label>Player A ID</Form.Label>
                            <Form.Control type="playerid" placeholder="e.g. 105138" />
                        </Paper>
                        <Paper elevation={2} style={cellPaperStyle}>
                            <Form.Label>Player B</Form.Label>
                            <Form.Control type="player" placeholder="e.g. Roberto Bautista Agut" />
                            <p></p>
                            <Form.Label>Player B ID</Form.Label>
                            <Form.Control type="playerid" placeholder="e.g. 105138" />
                        </Paper>
                    </Form.Group>
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
               
               
            </Paper> 
        </div>
    )
}
