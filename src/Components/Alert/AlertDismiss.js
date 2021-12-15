import { render } from "@testing-library/react";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "./alert.css"

export default function AlertDismiss() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <div>
          <div className="animate-charcter"><b>Private Sale</b> is LIVE Now!</div> 
          
        </div>
      );
    }
    return null
  }
  
  