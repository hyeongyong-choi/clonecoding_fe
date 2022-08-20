import React from "react";
import InstaCard from "./InstaCard";
import styled from "styled-components";

const InstaList = () => {
  return (
    <StDiv>
      <InstaCard />
      <InstaCard />
      <InstaCard />
    </StDiv>
  );
};

export default InstaList;

const StDiv = styled.div`
  padding-top: 100px;
  background-color: #eee;
`;
