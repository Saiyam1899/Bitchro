import React, { useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./nft.css";
import Progress_bar from "./Slider";
import Slider from "./Slider";
export function CounterSlider() {
  const [counter, setCounter] = React.useState(5660);
  const now = 60;

  // Third Attempts
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <div className="counterSlider">
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

            <span
              style={{
                textTransform: "uppercase",
                marginLeft: "20px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Bit-chro Raised Bar
            </span>

            <Progress_bar bgcolor="orange" progress="80" height={20} />
          </div>
        </div>
      </div>
    </>
  );
}
