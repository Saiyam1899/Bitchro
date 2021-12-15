import React, { useEffect } from 'react'
import { render } from "@testing-library/react";
import { useState } from "react";
import "./popup.css"
import { Alert, Button, Container, Modal } from "react-bootstrap";

function Popup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    useEffect(() => {
        setShow(true);
    }, [])
  return (
    <>


      <Modal show={show} onHide={handleClose} className="container">
        <Modal.Header closeButton style={{backgroundColor:"purple"}}/>
        <img src={process.env.PUBLIC_URL+"assets/images/poster.jpg"} />
    
      </Modal>

    </>
  );
  }

export default Popup
