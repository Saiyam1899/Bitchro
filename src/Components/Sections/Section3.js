import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default class Section3 extends Component {
  render() {
    return (
      <>
        <Section3Container id="works" style={{   width: "100%",backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/pbg.png"})`,  backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",
        padding: "72px 0"}}>
          <Section2Logo
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            src={process.env.PUBLIC_URL + "assets/img/bitNFT.svg"}
          />
          <Section3Content
            imgURL={process.env.PUBLIC_URL + "assets/img/bitchroBG.svg"}
          >
            <Section3ImgWrapper>
              <Section3ImgContainer>
                <Section3Img
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  src={process.env.PUBLIC_URL + "assets/images/section4.png"}
                />
                <Section3Img
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  src={process.env.PUBLIC_URL + "assets/images/section5.png"}
                />
              </Section3ImgContainer>
              <Section3ImgContainer>
                <Section3Img
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  src={process.env.PUBLIC_URL + "assets/images/section6.png"}
                />
                <Section3Img
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  src={process.env.PUBLIC_URL + "assets/images/section7.png"}
                />
              </Section3ImgContainer>
            </Section3ImgWrapper>
            <Section3ContentWrapper>
              <p>
                Non Fungible Tokens (NFTs) have many use cases,an NFT is a unit
                of data stored on a digital ledger,called a blockchain, that
                certifies a digital asset to be unique and therefore not
                interchangeable.
              </p>
              <p>Non Fungible Tokens (NFTs) have</p>

              <Section1Button
                imgURL={
                  process.env.PUBLIC_URL + "assets/images/items/button1.svg"
                }
                imgURLHover={
                  process.env.PUBLIC_URL + "assets/images/items/button2.svg"
                }
                to="/private-sell"
              >
                <span >Buy Token</span>
              </Section1Button>
            </Section3ContentWrapper>
          </Section3Content>
        </Section3Container>
      </>
    );
  }
}

const Section3Container = styled.div`
  @media (max-width: 768px) {
    padding: 32px 0;
  }
`;
const Section3Content = styled.div`
  background-image: url(${(props) => props.imgURL});
  background-size: cover;
  display: flex;
  padding: 72px;
  align-items: center;
  margin-top: 3rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
  }
`;
const Section3ImgWrapper = styled.div``;
const Section3ImgContainer = styled.div``;
const Section3Img = styled.img`
  width: 200px;
`;
const Section3ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin-top: 7rem;
  align-items: center;
  @media (max-width: 768px) {
    align-items: center;
    margin-top: 1rem;
    p {
      max-width: 532px;
    }
  }
`;

const Section2Logo = styled.img`
  max-width: 700px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;

const Section1Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imgURL});
  background-repeat: no-repeat;
  background-size: contain;
  color: white;
  height: 50px;
  width: 150px;
  background-position: center;
  transition:0.5s ease-out;
   :hover {
    transition:0.5s ease-in;
    background-image: url(${(props) => props.imgURLHover});
    }
`;
