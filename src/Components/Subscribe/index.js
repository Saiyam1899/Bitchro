import React, { Component } from "react";
import styled from "styled-components";
import Certificate from "../certificate/Certificate";
export default class Subscribe extends Component {
  render() {
    return (
      <>
        <Wrapper style={{   width: "100%",backgroundImage: `url(${process.env.PUBLIC_URL + "assets/images/pbg.png"})`,  backgroundPosition: "right",
        backgroundSize: "cover",
        backgroundColor: "#000",
        padding: "72px 0"}}>
          <Container>
            <SubscribeLogo
              width="100%"
              src={process.env.PUBLIC_URL + "assets/img/subscribe.svg"}
            />
            <SubscribeContent>
              A non-fungible token (NFT) is a unit of data stored on a digital
              ledger, called a blockchain, that certifies a digital asset to be{" "}
            </SubscribeContent>
            <SubscribeFormWrapper>
              <SubscribeFormInput placeholder="Enter Email Address" />
              <SubscribeFormButton>Subscribe</SubscribeFormButton>
            </SubscribeFormWrapper>

            <SocialWrapper>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/twitter.svg"}
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/telegram.svg"}
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/facebook.svg"}
                />
              </SocialIcon>
              <SocialIcon>
                <SocialIconImg
                  src={process.env.PUBLIC_URL + "assets/img/instagram.svg"}
                />
              </SocialIcon>
            </SocialWrapper>
    
          </Container>
        
        </Wrapper>
        
      </>
    );
  }
}

const Wrapper = styled.div`
  background-color: #000;
  padding-top: 8rem;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubscribeLogo = styled.img`
  margin: 2rem 0;
  max-width: 800px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const SubscribeContent = styled.div`
  color: white;
  margin: 1rem 0;
  width: 100%;
  font-size:24px;

  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const SubscribeFormWrapper = styled.form`
  display: flex;
  background: linear-gradient(120deg, #00ff57, #c901fd);
  border-radius: 5px;
  padding: 3px;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
const SubscribeFormInput = styled.input`
  outline: none;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #fff;
  background: black;
  max-width: 300px;
  padding-left: 20px;
  ::placeholder {
    color: white;
  }
`;
const SubscribeFormButton = styled.form`
  color: #fff;
  padding: 10px 20px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(180deg, #c901fd, #00ff57);
`;

const SocialWrapper = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const SocialIconImg = styled.img`
  width: 32px;
`;
