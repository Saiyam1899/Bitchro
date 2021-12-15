import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./nft.css";

export function AppCounter() {
  const [counter, setCounter] = React.useState(5660);

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <Container
        style={{
          background: "linear-gradient(120deg, #cb01ff 0%, #00ff57 100%)",
          borderRadius: "8px",
          padding: "3px",
          width: "100%",
          margin: "10px",
          maxWidth: "400px",
        }}
      >
        <div>
          <div className="rowClass">
            <span className="upper-text">
              {" "}
              Don't miss out on the unit sales and distribution
            </span>
            <div className="flex-class">
              <div className="para">
                <span className="fs-48">30</span>

                <br />
                <span>Days</span>
              </div>
              <div className="para">
                <span className="fs-48">10</span>
                <br />
                Hours
              </div>
              <div className="para">
                <span className="fs-48">18</span>
                <br />
                Minutes
              </div>
              <div className="para">
                <span className="fs-48">12</span>
                <br />
                Seconds
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
