import React, { Component } from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>{this.props.children}</Wrapper>
        <Footer />
      </>
    );
  }
}

const Wrapper = styled.div``;
