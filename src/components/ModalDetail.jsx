import React from "react";
import styled from "styled-components";
import Text from "./elements/Text";
import Button from "./elements/Button";
import Profile from "../assets/img/Profile.jpg";
import { FiMoreHorizontal } from "react-icons/fi";
import Insta from "../assets/img/Login_PhoneImg2.png";
import { BiMessageRounded } from "react-icons/bi";
import { BsHeart, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import DetailComment from "./DetailComment";

const ModalDetail = ({ item }) => {
  console.log(item);

  return (
    <ModalBg>
      <ModalContain>
        <ModalImg item={item.image}></ModalImg>
        <ModalCommentBox>
          <ModalTitle>
            <Titlebox>
              <TitleImg />
              <Textbox>
                <Text color="black" fontSize="14px">
                  {item.userName}
                </Text>
                <Text color="black" fontSize="12px">
                  파일형태
                </Text>
              </Textbox>
            </Titlebox>
            <ModalMenu>
              <FiMoreHorizontal />
            </ModalMenu>
          </ModalTitle>
          <ModalComment>
            <Postboxme>
              <TitleImg />
              <PostText>{item.content}</PostText>
            </Postboxme>
            <DetailComment></DetailComment>
          </ModalComment>
          <ModalIcon>
            <Iconbox>
              <Icon>
                <BsHeart size="25" />
              </Icon>
              <Icon>
                <BiMessageRounded size="28" />
              </Icon>
              <Icon>
                <HiOutlinePaperAirplane size="28" />
              </Icon>
              <Icon style={{ marginLeft: "auto" }}>
                <BsBookmark size="25"></BsBookmark>
              </Icon>
            </Iconbox>
          </ModalIcon>
          <TextboxLike>
            <Text fontSize="15px" color="black" fontWeight="bold">
              좋아요 {item.likeCount}개
            </Text>
            <Text fontSize="8px" color="gray">
              {item.createAt}
            </Text>
          </TextboxLike>
          <SubmitBox>
            <BsEmojiSmile size="24" style={{ marginLeft: "-5px" }} />
            <InputSubmit placeholder="댓글달기..."></InputSubmit>
            <Button text="게시" fontcolor="#0d6efd" bgcolor="#fff"></Button>
          </SubmitBox>
        </ModalCommentBox>
      </ModalContain>
    </ModalBg>
  );
};

export default ModalDetail;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(1.5px);
  z-index: 1;
  box-sizing: border-box;
`;
const ModalContain = styled.div`
  position: fixed;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  width: 1000px;
  height: 90%;
  /* padding: 10px; */
  /* background: rgb(25, 31, 44); */
  border-radius: 10px;
  text-align: center;
`;
const ModalImg = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${(props) => props.item});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ModalCommentBox = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
`;
const ModalTitle = styled.div`
  /* width:90%; */
  height: 70px;
  padding: 14px 4px 14px 16px;
  background-color: #fff;
  display: flex;
`;
const Titlebox = styled.div`
  display: flex;
  width: 90%;
`;
const TitleImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  background-image: url(${Profile});
  background-position: center;
  background-size: cover;
`;
const Textbox = styled.div`
  margin: 3px 0px 0px 10px;
`;
const ModalMenu = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ModalComment = styled.div`
  background: #eee;
  width: 100%;
  height: 75%;
  padding: 14px;
`;
const Postboxme = styled.div`
  display: flex;
`;

const PostText = styled.div`
  background-color: inherit;
  margin-left: 15px;
  width: 85%;
  height: 150px;
  background: white;
  font-size: 15px;
`;

const ModalIcon = styled.div`
  width: 100%;
  height: 55px;
`;
const Iconbox = styled.div`
  display: flex;
  margin-left: 10px;
`;
const Icon = styled.div`
  width: 30px;
  /* padding:5px; */
  margin: 10px 5px 0px;
  cursor: pointer;
`;
const TextboxLike = styled.div`
  padding: 0px 0px 5px 15px;
`;
const SubmitBox = styled.div`
  border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  padding: 10px;
`;
const InputSubmit = styled.input`
  width: 85%;
  padding: 5px;
  border: none;
`;
