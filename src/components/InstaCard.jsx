import React from "react";
import styled from "styled-components";
import instagram from "../assets/instagram.jpg";

import { BsHeart, BsChat, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import TextArea from "./elements/TextArea";
import Button from "./elements/Button";

const InstaCard = () => {
  return (
    <StCard>
      <StHead>
        <StHeadImage src={instagram}></StHeadImage>
        <div>UserName</div>
      </StHead>
      <img src={instagram}></img>
      <StSection>
        <StButtonDiv>
          <StHeartButton onClick={() => console.log("버튼동작")}>
            <BsHeart size="28" />
          </StHeartButton>
          <StHeartButton onClick={() => console.log("버튼동작")}>
            <BsChat size="28" />
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
      <StBorder></StBorder>

      <StFormDiv>
        <StForm>
          <BsEmojiSmile size="24" />
          <TextArea
            width="370px"
            height="25px"
            margin="0px 0px 0px 10px"
            border="none"
            placeholder="댓글 달기..."
          />
          <Button
            text="게시"
            width="70px"
            bgcolor="transparent"
            fontcolor="blue"
            bgchover="transparent"
            fchover="red"
          ></Button>
        </StForm>
      </StFormDiv>
    </StCard>
  );
};

export default InstaCard;

const StCard = styled.div`
  width: 472px;
  height: 880px;
  margin: 100px auto 50px auto;
  /* border: 1px solid black; */
  box-shadow: 0px 0px 2px 2px lightgray;
  border-radius: 20px;
`;

const StHead = styled.div`
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 18px;
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
  padding: 10px;
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

const StBorder = styled.div`
  border: 1px solid #eeecec;
`;

const StFormDiv = styled.div`
  margin: 14px;
  padding: 4px;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
