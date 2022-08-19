import React from "react";
import InstaList from "../components/InstaList";
import styled from "styled-components";

const MainPage = () => {
  return (
    <StDiv>
      <InstaList />
    </StDiv>
  );
};

export default MainPage;

const StDiv = styled.div`
  background-color: #eee;
`;
