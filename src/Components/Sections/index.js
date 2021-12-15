import React, { Component } from "react";
import { FaWindows } from "react-icons/fa";

import styled from "styled-components";
import Popup from "../Popup/Popup";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
export default class Section extends Component {
  render() {
    return (
      <>
        <HeroSectionContainer>
        <Popup/>
          <Section1 />
          <Section2 />
          <Section3 />
     
        </HeroSectionContainer>
      </>
    );
  }
}

const HeroSectionContainer = styled.div`
  padding: 72px;
  background: black;
  color: #fff;

  @media (max-width: 1200px) {
    padding: 42px;
  }
  @media (max-width: 1024px) {
    padding: 32px;
  }
`;
