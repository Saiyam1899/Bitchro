import React, { Component } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
export default class Sidebar extends Component {
  render() {
    console.log(this.props.too);
    return (
      <>
        <Wrapper too={this.props.too}>
          <Container>
            <Icon>
              <ImCross
                size={20}
                color="#fff"
                onClick={this.props.toogleButton}
              />
            </Icon>
            <NavWrapper>
              <NavLink>Home</NavLink>
              <NavLink href="#overview" onClick={this.props.toogleButton}>Overview</NavLink>
              <NavLink href="#works" onClick={this.props.toogleButton}>How it Works</NavLink>
              <NavLink href="#tokonomics" onClick={this.props.toogleButton}>TokenNomics</NavLink>
              <NavLink href="#roadmap" onClick={this.props.toogleButton}>Roadmapo</NavLink>
              <NavLink href="#Team" onClick={this.props.toogleButton}>Team</NavLink>
            </NavWrapper>
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
  width: 300px;
  height: 100vh;
  background-color: black;
  position: absolute;
  right: 0;
  top: 1px;
  bottom: 0;
  display: ${(props) => (props.too ? "block" : "none")};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  cursor: pointer;
`;

const NavWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  padding: 20px 40px;
  color: white;
  text-direction: none;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
const SocialIcon = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const SocialIconImg = styled.img`
  width: 32px;
`;
