import React from "react";
import { Container } from "react-bootstrap";
import { css } from "aphrodite";
import { styles } from "../PublicSale/media";
import { AppCounter } from "../Counter/Counter";
import PrivateSellFunction from "../PrivateSellFunction";
import styled from "styled-components";

export default function PrivateSales() {
  return (
    <Container
      fluid
      style={{
        width: "100%",
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "assets/images/pbg.png"
        })`,

        backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",
        padding: "72px 0",
      }}
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <div
        className={css(styles.displayRight)}
        // style={{ padding: "0 200px " }}
      >
        <div className={css(styles.display)}>
          <p>
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>
              Next Generation NFT Marketplace
            </p>
            An open source platform for creation of 3D NFT compatible web-spaced
            (website) and objects, powered by Blockchain.
            <br/>
            <span style={{color:"red",fontSize:"18px"}}>* Please click approve button before clicking on buy now.</span>
          </p>

          <PrivateSellFunction />

          <div >
            <br />
            <a href="https://t.me/BITChro" target="_blank">
            <button
              style={{
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "assets/Psale/tg.png"}
                className={css(styles.image_Logo)}
              />
            </button>
            </a>
           
            <a href="https://drive.google.com/file/d/17-OAlLGg6RResO9wrcnKlJLBrXyW3TWN/view?usp=sharing">
              <button
                style={{
                  background: "none",
                  outline: "none",
                  border: "none",
                }}

              >
                <img
                  src={process.env.PUBLIC_URL + "assets/Psale/white.png"}
                  className={css(styles.image_Logo)}
                />
              </button>
            </a>
          </div>
        </div>
        <CircleImage src={process.env.PUBLIC_URL + "assets/images/bg.png"} />

        <img
          src={process.env.PUBLIC_URL + "assets/Psale/private-sector-.png"}
          alt=""
          style={{ zIndex: "100" }}
          className={css(styles.image_private)}
        />
      </div>
    </Container>
  );
}

const CircleImage = styled.img`
  max-width: 1000px;
  width: 100%;
  position: absolute;
  z-index:0;
  top: -180px;
  right: 0;
  @media (max-width: 500px) {
    top: 20px;
  }
`;
