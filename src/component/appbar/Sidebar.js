import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import './Bar.css';

export default function Sidebar() {
    const [show, setShow] = useState(false);
    const SiderhandleShow = () => setShow(true);
    const SiderhandleClose = () => setShow(false);
  
    return (
      <>
       <MenuIcon onClick={SiderhandleShow}/>
              <Offcanvas show={show} onHide={SiderhandleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                <ListGroup variant="flush" className="sider">
                    <ListGroup.Item action href="/home">Currently live matches</ListGroup.Item>
                    <ListGroup.Item action href="/prediction">Result Prediction</ListGroup.Item>
                    <ListGroup.Item action href="#link3">Forum</ListGroup.Item>
                    <ListGroup.Item action href="#link3">About Us</ListGroup.Item>

                </ListGroup>
                </Offcanvas.Body>

              </Offcanvas>
      </>
    )
}

