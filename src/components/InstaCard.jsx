import React from "react";
import styled from "styled-components";
import instagram from "../assets/instagram.jpg";
import { RiKakaoTalkLine } from "react-icons/ri";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const InstaCard = () => {
  return (
    <StCard>
      <StHead>
        <StHeadImage src={instagram}></StHeadImage>
        <p>UserName</p>
      </StHead>
      <img src={instagram}></img>
      <StSection>
        <StButtonDiv>
          <StHeartButton onClick={() => console.log("버튼동작")}>
            <BsHeart size="28" />
          </StHeartButton>
          <StHeartButton onClick={() => console.log("버튼동작")}>
            <RiKakaoTalkLine size="31" />
          </StHeartButton>
          <StHeartButton onClick={() => console.log("버튼동작")}>
            <HiOutlinePaperAirplane size="28" />
          </StHeartButton>
        </StButtonDiv>
        <StHeartButton onClick={() => console.log("버튼동작")}>
          <BsBookmark size="28"></BsBookmark>
        </StHeartButton>
      </StSection>
      <div>
        <StContent>좋아요 100개</StContent>
      </div>

      <StContent>
        <span>UserName</span>
        <span>게시글 내용...</span>
        <div>댓글 30개</div>
        <div>10시간 전</div>
      </StContent>
      <div></div>
    </StCard>
  );
};

export default InstaCard;

const StCard = styled.div`
  width: 472px;
  height: 826px;
  margin: 1px auto;
  /* border: 1px solid black; */
  box-shadow: 0px 0px 2px 2px lightgray;
  border-radius: 20px;
`;

const StHead = styled.div`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

const StHeadImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 100px;
  /* background-image: url(${instagram}); */
`;

const StSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StButtonDiv = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  gap: 5px;
  padding: 5px;
`;

const StHeartButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: #ff5656;
  }
`;

const StContent = styled.div`
  padding: 15px;
`;

const StTextArea = styled.div`
  width: 367px;
`;
