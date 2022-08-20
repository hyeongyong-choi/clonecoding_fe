import React from "react";
import InstaList from "../components/InstaList";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StDiv>
      <NavBar />
      <InstaList />
    </StDiv>
  );
};

export default MainPage;

const StDiv = styled.div`
  background-color: #eee;
  height: 100vh;
`;
