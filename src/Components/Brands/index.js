import React, { Component } from "react";
import styled from "styled-components";
export default class Brand extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <Logo
              data-aos="flip-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              src={process.env.PUBLIC_URL + "assets/img/partners.svg"}
            />
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <BrandWrapper>
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
              </BrandWrapper>
              <BrandWrapper>
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
                <BrandImage
                  src={process.env.PUBLIC_URL + "assets/img/brandLogo.svg"}
                />
              </BrandWrapper>
            </div>
          </Container>
        </Wrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  background: #000;
  padding-top: 8rem;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const Container = styled.div`
  div {
    @media (max-width: 768px) {
      padding: 10px;
    }
  }
`;
const Logo = styled.img`
  max-width: 600px;
  width: 100%;
  margin: 2rem 0;
  @media (max-width: 768px) {
    max-width: 532px;
  }
`;
const BrandWrapper = styled.div`
  /* padding: 3rem 0; */
`;
const BrandImage = styled.img`
  max-width: 150px;
  width: 100%;
  min-width: 30px;
  margin: 10px 1rem;
  opacity: 0.5;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;
