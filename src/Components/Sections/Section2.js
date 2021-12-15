import React, { Component } from "react";
import styled from "styled-components";
export default class Section2 extends Component {
  render() {
    return (
      <>
        <Section2Wrapper id="overview" style={{   width: "100%",backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/pbg.png"})`,  backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",
        padding: "72px 0"}}>
          <Section2Logo
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            src={process.env.PUBLIC_URL + "assets/img/title01.svg"}
          />
          <Section2Container>
            <Section2Image1Container
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="2000"
            >
              <img
                width="100%"
                src={process.env.PUBLIC_URL + "assets/images/Screen.png"}
                alt="footer"
              />
            </Section2Image1Container>
            <Section2Content>
              <div>
                A non-fungible token is a cryptographic beneficial resource on
                blockchain with an excellent identifiable proof code and
                information that distinguishes it from any other identical
                useful resource. As a result, unlike digital currencies, non-
                fungible tokens cannot be exchanged or sold at parity.
              </div>
              <h2>NFT STANDARDS</h2>
              <Section2ListWrapper>
                <Section2ListContainer>
                  <Section2List>
                    <Section2ListSpan
                      width="12px"
                      src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                    />
                    ERC-1155
                  </Section2List>
                  <Section2List>
                    <Section2ListSpan
                      width="12px"
                      src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                    />
                    FA2
                  </Section2List>
                  <Section2List>
                    <Section2ListSpan
                      width="12px"
                      src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                    />
                    dGoods
                  </Section2List>
                  <Section2List>
                    <Section2ListSpan
                      width="12px"
                      src={process.env.PUBLIC_URL + "assets/img/circle.svg"}
                    />
                    TRC-721
                  </Section2List>
                </Section2ListContainer>
              </Section2ListWrapper>
              <Section2Button
                imgURL={
                  process.env.PUBLIC_URL + "assets/images/items/button1.svg"
                }
                imgURLHover={
                  process.env.PUBLIC_URL + "assets/images/items/button2.svg"
                }
                href="#FAQ"
              >
                <span>Check out our FAQ</span>
              </Section2Button>
            </Section2Content>

            <Section2Image2Container
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
            >
              <img
                width="100%"
                src={process.env.PUBLIC_URL + "assets/images/duck.png"}
                alt="footer"
              />
            </Section2Image2Container>
          </Section2Container>
        </Section2Wrapper>
      </>
    );
  }
}

const Section2Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Section2Logo = styled.img`
  max-width: 900px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const Section2Container = styled.div`
  display: flex;
  align-items: center;
  padding: 72px 0;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Section2Content = styled.div`
  max-width: 400px;
  width: 100%;
  text-align: left;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Section2ListWrapper = styled.div`
  display: flex;
`;
const Section2Image1Container = styled.div`
  max-width: 630px;
  min-width: 200px;
  width: 100%;
  margin-top: 2rem;
  marginLeft:2rem;

  @media (max-width: 920px) {
    padding-bottom: 32px;
  }
`;
const Section2ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;
`;
const Section2Button = styled.a`
  background-image: url(${(props) => props.imgURL});
  background-repeat: no-repeat;
  background-size: contain;
  height: 64px;
  max-width: 200px;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  background-position: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition:0.5s ease-out;
  :hover {
    background-image: url(${(props) => props.imgURLHover});
    transition:0.5s ease-in;
  }
`;
const Section2Image2Container = styled.div`
  align-self: end;
  max-width: 320px;
  width: 100%;
  min-width: 100px;
  @media (max-width: 1200px) {
    padding: 32px;
    display: none;
  }
  @media (max-width: 1024px) {
    padding: 32px;
  }
`;
const Section2ListSpan = styled.img`
  border-radius: 999px;
  margin-right: 10px;
`;
const Section2List = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;
