import React, { Component } from "react";
import styled from "styled-components";

export default class TokenNomics extends Component {
  render() {
    return (
      <>
        <Wrapper style={{   width: "100%",backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/pbg.png"})`,  backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",
        padding: "72px 0"}}>
          <Container id="tokonomics">
            <Logo
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              src={process.env.PUBLIC_URL + "assets/img/TokonomicsLogo.svg"}
            />
            <TokonomicsLogo
              data-aos="zoom-in-up"
              data-aos-delay="5000"
              data-aos-duration="2000"
              src={process.env.PUBLIC_URL + "assets/img/Tokonomics.svg"}
            />
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: #000;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 500px;
  width: 100%;
  margin: 2rem 0;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const TokonomicsLogo = styled.img`
  max-width: 700px;
  margin: 2rem 0;
  @media (max-width: 768px) {
    max-width: 532px;
  }
  :hover{
    transition:width 2s 
    max-width: 800px;
   
  }
`;
