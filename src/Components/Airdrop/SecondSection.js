import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import { StyleSheet, css } from "aphrodite";

import styled, { keyframes } from "styled-components";
import "./style.css";

export const styles = StyleSheet.create({
  heading: {
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "79px",
    lineHeight: "118px",
    textAlign: "center",
    color: "#7879f1",
    fontFamily: "Franklin Gothic",
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media (max-width: 767px)": {
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "29px",
      lineHeight: "18px",
      textAlign: "center",
      color: "#7879f1",
      fontFamily: "Franklin Gothic",
    },
  },
  heading2: {
    fontStyle: "normal",
    fontWeight: "bolder",
    fontSize: "28px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#7879f1",
    fontFamily: "Franklin Gothic",
    color: "#08ff21",
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "16px",
      lineHeight: "13px",
      textAlign: "center",
      color: "#08ff21",
      fontFamily: "Franklin Gothic",
    },
  },
  image: {
    width: "20%",
    "@media (max-width: 567px)": {
      textAlign: "center",
      float: "center",
      width: "100%",
    },
    "@media only screen and (max-width: 767px)": {
      width: "80%",
      textAlign: "center",
    },
  },
  button_group: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "10px",
    "@media (max-width: 320px)": {
     margin:"0px"
    },
    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      width: "100%",
      marginTop: "10px",

      textAlign: "center",
    },
    
  },
  display: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      display: "flex",
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      marginTop: "10px",
      textAlign: "center",
    },
  },
  displayRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start !important",
    alignItems: "center",
    width: "100%",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      flexDirection: "column",
      textAlign: "center",
      width: "100%",
      marginTop: "10px",
      textAlign: "center",
    },
  },
  button_group2: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "80px",
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "80%",
      marginTop: "20px",
      textAlign: "center",
    },
  },
  section_each: {
    margin: "20px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      margin: "10px",
    },
  },
  image_mid: {
    width: "20%",
    padding: "50px",

    "@media (max-width: 567px)": {
      textAlign: "center",
    },
    "@media only screen and (max-width: 767px)": {
      width: "50%",
    },
  },
});
export default function SecondSection(props) {
  return (
    <>
      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div className={css(styles.heading2)}>
          Task 2: Click the share button to share information regarding BITChro (BTCH) platform.
        </div>

        <div className={css(styles.display)}>
          <div className={css(styles.button_group)}>
            <ButtonGroup style={{ alignItems: "center" }}>
              {props.second ? (
                <button className="completedButton" />
              ) : (
                <button
                  className="pendingButton"
                  onClick={props.secondClick}
                ></button>
              )}
              {/* <Button
                style={{ borderRadius: "15px", border: "2px solid white" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/share.png"}
                  width={30}
                  alt="secondimage"
                />
                Share
              </Button> */}
              <div
                class="fb-share-button"
                data-href="https://www.facebook.com/ChroBIT"
                data-layout="button"
                data-size="small"
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FChroBIT&amp;src=sdkpreparse"
                  class="fb-xfbml-parse-ignore"
                >
                  Share
                </a>
              </div>
            </ButtonGroup>
          </div>

          <img
            src={process.env.PUBLIC_URL + "assets/images/section4.png"}
            className={css(styles.image)}
            alt="second"
          />
        </div>
      </section>

      {/* <RainParticle /> */}

      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <div className={css(styles.heading2)}>
          Task 3:Click the follow button to follow our twitter page.
        </div>

        <div className={css(styles.displayRight)}>
          <img
            src={process.env.PUBLIC_URL + "assets/images/section6.png"}
            alt="First"
            className={css(styles.image)}
          />
          <div className={css(styles.button_group2)}>
            <ButtonGroup style={{ alignItems: "center" }}>
              {props.second2 ? (
                <button className="completedButton" />
              ) : (
                <button
                  className="pendingButton"
                  onClick={props.second2Click}
                ></button>
              )}

              {/* <Button
                style={{ borderRadius: "15px", border: "2px solid white" }}
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/twitter.png"}
                  width={30}
                  alt="secondimage"
                />
                Follow
              </Button> */}

              <a
                class="twitter-follow-button"
                href="https://twitter.com/bit_chro"
                data-size="large"
                data-show-count="false"
              >
                Follow @bit_chro
              </a>
            </ButtonGroup>
          </div>
        </div>
      </section>
    </>
  );
}
