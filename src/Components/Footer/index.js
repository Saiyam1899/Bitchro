import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <>
        <MainWrapper>
          <Wrapper>
            <Container>
              <Logo>
                <img
                  src={process.env.PUBLIC_URL + "assets/img/mainLogo.svg"}
                  alt="footer"
                />
              </Logo>
              <FooterLinksWrapper>
                <FooterLinksContainer>
                  <FooterLinks href="#">Home</FooterLinks>
                  <FooterLinks href="#overview">Overiew</FooterLinks>
                  <FooterLinks href="#works">How it Works</FooterLinks>
                </FooterLinksContainer>
                <FooterLinksContainer>
                  <FooterLinks href="#tokonomics">TokenNomics</FooterLinks>
                  <FooterLinks href="#roadmap">Roadmap</FooterLinks>
                  <FooterLinks href="#Team">Team</FooterLinks>
                </FooterLinksContainer>
              </FooterLinksWrapper>
              <SocialWrapper>
                <SocialIcon href="#twitter">
                  <SocialIconImg
                    src={process.env.PUBLIC_URL + "assets/img/twitter.svg"}
                    alt="footer"
                  />
                </SocialIcon>
                <SocialIcon href="#telegram">
                  <SocialIconImg
                    src={process.env.PUBLIC_URL + "assets/img/telegram.svg"}
                    alt="footer"
                  />
                </SocialIcon>
                <SocialIcon href="#fb">
                  <SocialIconImg
                    src={process.env.PUBLIC_URL + "assets/img/facebook.svg"}
                    alt="footer"
                  />
                </SocialIcon>
                <SocialIcon href="#ig">
                  <SocialIconImg
                    src={process.env.PUBLIC_URL + "assets/img/instagram.svg"}
                    alt="footer"
                  />
                </SocialIcon>
               
              </SocialWrapper>
            </Container>
          </Wrapper>
        </MainWrapper>
      </>
    );
  }
}

const MainWrapper = styled.div`
  color: #fff;

  background: linear-gradient(
    120deg,
    rgb(203, 1, 255) 0%,
    rgb(0, 255, 87) 100%
  );
  padding-top: 1px;
`;
const Wrapper = styled.div`
  background-color: #000;
`;
const Container = styled.div`
  display: flex;
  background: black;
  align-items: center;
  justify-content: space-around;
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  padding: 72px 0;
  flex-wrap: wrap;
  @media (max-width: 728px) {
    align-items: center;
    padding-right: 0;
  }
`;
const Logo = styled.div`
  cursor: pointer;
`;
const FooterLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 0 20px;
`;
const FooterLinksWrapper = styled.div`
  display: flex;
`;

const FooterLinks = styled.a`
  margin-bottom: 20px;
  cursor: pointer;
  color: white;
  text-decoration: none;
`;
const SocialWrapper = styled.div`
  display: flex;
`;
const SocialIcon = styled.a`
  margin: 0 10px;
  cursor: pointer;
`;

const SocialIconImg = styled.img`
  max-width: 32px;
`;
