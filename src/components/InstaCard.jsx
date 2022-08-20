import React, { useState } from "react";
import styled from "styled-components";
import instagram from "../assets/instagram2.jpg";
import { BsHeart, BsChat, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import TextArea from "./elements/TextArea";
import Button from "./elements/Button";
import ModalDetail from "./ModalDetail";

import { useNavigate } from "react-router-dom";

const InstaCard = ({ item }) => {
  const [isModal, setIsModal] = useState(false);
  const [moreView, setMoreView] = useState(false);
  const navigate = useNavigate();

  // console.log(isModal)
  const ModalHandler = () => {
    setIsModal(!isModal);
  };
  const onClickMoreViewHandler = () => {
    setMoreView(!moreView);
  };
  const handleImgError = (e) => {
    e.target.src = instagram;
  };
  console.log("moreView", moreView);

  return (
    <StCard>
      <StHead>
        <StHeadImage src={item.image} onError={handleImgError}></StHeadImage>
        <div>UserName</div>
      </StHead>
      <StBodyImage src={item.image} onError={handleImgError}></StBodyImage>
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

      <StContent>
        <div>좋아요 {item.likeCount}개</div>
        <StUserContent>
          {moreView ? (
            <div>
              <div>{item.userName}</div>
              {item.content}{" "}
              <StMoreButton onClick={onClickMoreViewHandler}>
                내용접기
              </StMoreButton>
            </div>
          ) : (
            <div>
              <div>{item.userName}</div>
              {item.content.length < 24 ? (
                item.content
              ) : (
                <StContentMoreDiv>
                  <div>{item.content.slice(0, 23) + "..."}</div>
                  <StMoreButton onClick={onClickMoreViewHandler}>
                    더보기
                  </StMoreButton>
                </StContentMoreDiv>
              )}
            </div>
          )}
        </StUserContent>
        <div onClick={ModalHandler}>댓글 {item.commentcount}개 모두보기</div>
        <div>{item.createAt}</div>
      </StContent>
      <StBorder></StBorder>


      {isModal ? <ModalDetail ModalHandler={ModalHandler}/> : null}


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
            fontcolor="gray"
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
  /* height: 880px; */
  height: auto;
  margin: 20px auto 0px auto;
  /* border: 1px solid black; */
  box-shadow: 0px 0px 2px 2px lightgray;
  border-radius: 20px;
  background-color: white;
`;

const StHead = styled.div`
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

const StBodyImage = styled.img`
  width: 472px;
  height: 520px;
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
  padding: 20px;
`;

const StUserContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
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

const StContentMoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

const StMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: gray;
`;
