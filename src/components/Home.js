import React from "react";
import MyHeader from "./MyHeader";
import ImgSlider from "./ImgSlider";
import Genres from "./Genres";
import styled from "styled-components";

const Home = () => {
  return (
    <section className="">
      <HeaderContainer className="  top-0 left-0 m-3 md:m-0">
        <MyHeader  />
      </HeaderContainer>  
      <Container >
          <ImgSlider/>
          <Genres/>
          
      </Container>
    </section>
  );
};

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 4% calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("https://drive.google.com/uc?id=1KGsWMXJz6S2Bj_tj3scTKvDMsO5i-wcJ")
      center center / cover no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const HeaderContainer = styled.main`
  position: fixed;
  transition: transform 0.6s ease-in-out;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;
export default Home;
