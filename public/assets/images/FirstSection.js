import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import "./style.css";

import { StyleSheet, css } from "aphrodite";

export default function FirstSection() {
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
      color: "#7879f1",
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
        <p className={css(styles.heading)}>Welcome To Airdrop Feature</p>

        <p className={css(styles.secondText)}>
          {" "}
          You have to complete below mentioned tasks to claim 1000 bitchro
          tokens in your wallet
        </p>
        <div className={css(styles.heading2)}>
          Task 1: Like our facebook page what you can get of updates regarding
          our platform.
        </div>

        <div className={css(styles.display)} >
          {/* <BounceInDiv style={{width:"50%"}}> */}

          <img
            src={process.env.PUBLIC_URL + "assets/images/section2.png"}
            className={css(styles.image)}
            alt="footer"
          />

          {/* </BounceInDiv> */}
          <div className={css(styles.button_group)}>
            <ButtonGroup>
              <Button
                style={{
                  borderRadius: "15px",
                  border: "2px solid white",
                  width: "100px",
                }}
                className="mx-2"
              >
                <img
                  src={process.env.PUBLIC_URL + "assets/Airdrop/like.png"}
                  width={30}
                  alt="sidelogo"
                />
                <span className="mx-1">Like</span>
              </Button>

              <button className="pendingButton"></button>
            </ButtonGroup>
          </div>
        </div>
      </section>
    </>
  );
}
