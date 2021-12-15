import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import "./style.css";

import { StyleSheet, css } from "aphrodite";

export default function FirstSection(props) {
  const styles = StyleSheet.create({
    heading: {
      fontStyle: "normal",
      fontWeight: "bolder",
      margin: "0px",
      fontSize: "89px",
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
        lineHeight: "28px",
        textAlign: "center",
        color: "#7879f1",
        fontFamily: "Franklin Gothic",
      },
    },
    heading2: {
      marginTop: "20px",
      fontStyle: "normal",
      fontWeight: "bolder",
      fontSize: "28px",
      lineHeight: "27px",
      textAlign: "center",
      color: "rgb(8, 255, 33)",
      fontFamily: "Franklin Gothic",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        fontStyle: "normal",
        fontWeight: "bolder",
        marginTop: "20px",
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

      alignItems: "center",
      marginLeft: "20px",
      marginRight: "20px",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        width: "100px",
        height: "100px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        textAlign: "center",
      },
    },
    display: {
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
    secondText: {
      fontSize: "28px",
      color: "white",
      textAlign: "center",
      fontWeight: "bold",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        fontSize: "12px",
        color: "white",
      },
    },
    section_each: {
      margin: "0px",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        margin: "0px",
      },
    },
    secondText: {
      fontSize: "28px",
      color: "white",
      textAlign: "center",
      fontWeight: "bold",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        fontSize: "12px",
        color: "white",
      },
    },
    instruction: {
      fontSize: "20px",
      color: "white",
      textAlign: "left",
      fontWeight: "bold",
      padding:"20px",
      margin:"10px",
      border:"1px solid purple",
     borderRadius:"15px",
  
      boxShadow: "0 0 1rem 0 rgba(0, 0, 0, 0.9)",

      height: "220px",
      overflow: "hidden",
      position: "relative",
      width: "370px",
      textTransform:"capitalize",
      maxWidth:"1000px",
      width:"100%",
      alignItems:"center",
      justifyContent:"center",

      "@media (max-width: 567px)": {
        textAlign: "center",
      },
      "@media only screen and (max-width: 767px)": {
        width:"60%",
        fontSize: "12px",
        color: "white",
      },
    },
  });

  const [statee, setStatee] = useState(0);
  useEffect(() => {
    setStatee(5);
  }, [statee]);
  return (
    <>
      <section
        className={css(styles.section_each)}
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <p className={css(styles.heading)}>Welcome To BITChro AirDrop</p>

        <p className={css(styles.secondText)}>
          {" "}
          You have to complete below mentioned tasks to claim 1000 BITChro(BTCH)
          tokens in your wallet
        </p>
        <p className={css(styles.secondText)}>
          {" "}
        <span style={{color:"red"}}> * All Task are manadtory to participate in BITChro (BTCH) AirDrop
        <center>
        <p className={css(styles.instruction)}>
         <ol>
            <li>Complete all the 5 tasks.</li>
            <li>Click “Pending” options in every task segments, if you have completed the Task.</li>
            <li>claim your 1000 BTCH coins . </li>
             Note- You need to connect your MetaMask or Trust wallet to claim BTCH coins instantly in your wallet. Use  BEP-20/BSC-20 wallet to receive the token.
          </ol>
        </p>
        </center>
       
        
        </span>
        </p>
        <div className={css(styles.heading2)}>
          Task 1: Click the like button to like our facebook page
        </div>

        <div className={css(styles.display)}>
          {/* <BounceInDiv style={{width:"50%"}}> */}

          <img
            src={process.env.PUBLIC_URL + "assets/images/section2.png"}
            className={css(styles.image)}
            alt="footer"
          />

          {/* </BounceInDiv> */}
          <div className={css(styles.button_group)}>
            <ButtonGroup style={{ alignItems: "center" }}>
              {/* <Button
                style={{
                  borderRadius: "15px",
                  border: "2px solid white",
                  width: "100px",
                }}
                className="mx-2"
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/images/like.png"}
                  width={30}
                  alt="sidelogo"
                />
                <span className="mx-1">Like</span>
              </Button> */}
              <div
                class="fb-like"
                data-href="https://www.facebook.com/ChroBIT"
                data-width=""
                data-layout="button"
                data-action="like"
                data-size="large"
                data-share="false"
              ></div>
              {props.first ? (
                <button className="completedButton" />
              ) : (
                <button
                  className="pendingButton"
                  onClick={props.firstClick}
                ></button>
              )}
            </ButtonGroup>
          </div>
        </div>
      </section>
    </>
  );
}
