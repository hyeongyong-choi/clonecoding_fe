import React ,{ useState } from "react";
import InstaCard from "./InstaCard";
import styled from "styled-components";

const InstaList = () => {
  const [isModal , setIsModal] = useState(false)
  const ModalHandler = () =>{
    setIsModal(!isModal)
  }

  return (
    <StDiv>
      <InstaCard isModal={isModal} ModalHandler={ModalHandler}/>
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
