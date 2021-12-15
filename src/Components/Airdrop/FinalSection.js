import React, { useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./style.css";
import { css } from "aphrodite";
import { styles } from "./SecondSection";

export default function FinalSection(props) {
  return (
    <>
      <div
        className={css(styles.displayRight)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/images/section7.png"}
          className={css(styles.image)}
          alt="six"
        />
        <div>
          <div className={css(styles.button_group)}>
            {props.fourth ? (
              <button className="completedButton" />
            ) : (
              <button
                className="pendingButton"
                onClick={props.fourthClick}
              ></button>
            )}
            <a href="https://t.me/BITChro" target="_blank">
              <Button
                style={{
                  borderRadius: "15px",
                  border: "2px solid white",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/telegram.png"}
                  width={20}
                
                  alt="seventh"
                />
                Follow Group
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={props.connect}
          style={{
            background:
              "linear-gradient( 120deg, rgb(203,1,255) 0%, rgb(0,255,87) 100%",
            maxWidth: "100px",
            textAlign: "center",
            borderRadius: "5px",
            padding: "10px 10px",
            width: "100%",
            margin: "0 auto",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Connect
        </div>
        <center
          onClick={props.claimReward}
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/claim-reward.png"}
            alt="yes"
            className={css(styles.image_mid)}
          />
        </center>
      </div>

      <hr style={{ border: "2px solid black", margin: "0px" }} />
    </>
  );
}
