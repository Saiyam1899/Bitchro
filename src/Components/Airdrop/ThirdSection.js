import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import "./style.css";
import { StyleSheet, css } from "aphrodite";

import styled, { keyframes } from "styled-components";

import { styles } from "./SecondSection";

export default function ThirdSection(props) {
  const textContent =
    "Participate in World's Most innovative 	%23NFT 	%23Metaverse 	%23ICO of the Year. Join BIT_Chro  	%23PrivateSale followed by 	%23publicSale. Officially Registered in UK. BIT_Chro(BTCH) coin will be the next 1000x coin. 	%23PrivateSale price: 0.003 	%23BUSD 	%23Exchange listing price will be 0.1 	%23BUSD.";
  return (
    <>
      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div className={css(styles.heading2)}>
          Task 4: Click the tweet button to tweet something about BITChro (BTCH) platfrom.
        </div>
        <div className={css(styles.display)}>
          <div className={css(styles.button_group)}>
            <ButtonGroup style={{ alignItems: "center" }}>
              {props.third ? (
                <button className="completedButton" />
              ) : (
                <button
                  className="pendingButton"
                  onClick={props.thirdClick}
                ></button>
              )}
              {/* <Button
                style={{ borderRadius: "15px", border: "2px solid white" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/twitter.png"}
                  width={30}
                  alt="fifth"
                />
                <span
                  style={{ fontStretch: "extra-condensed" }}
                  className="mx-1"
                >
                  Tweet
                </span>
              </Button> */}
              <a
                class="twitter-share-button"
                href={`${
                  "https://twitter.com/intent/tweet?text=" + textContent
                }`}
                data-size="large"
              >
                Tweet
              </a>
            </ButtonGroup>
          </div>

          <img
            src={process.env.PUBLIC_URL + "assets/images/section3.png"}
            className={css(styles.image)}
            alt="sixth"
          />
        </div>
      </section>
      {/* <RainParticle/> */}
      <section className={css(styles.section_each)}>
        <div className={css(styles.heading2)}>
          Task 5: Join our telegram group to recive latest updates regarding our
          platform.
        </div>
      </section>
    </>
  );
}
