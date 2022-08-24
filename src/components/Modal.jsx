import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

const Modal = forwardRef((props, ref) => {

  const deleteHandler = () =>{
    window.confirm('정말 삭제하시겠습니까?')
    props.onClickDelete(props.item.articlesId)
  }

  return (
    <div>
      <ModalBg>
        <ModalContainer ref={ref}>
          <StButton>수정</StButton>
          <StButton onClick={deleteHandler}>
            삭제
          </StButton>
          <StButton>신고</StButton>
          <StButton>팔로우취소</StButton>
          <StButton>즐겨찾기에 추가</StButton>
          <StButton>링크복사</StButton>
          <StButton>퍼가기</StButton>
          <StCancelButton onClick={props.onClickCancel}>취소</StCancelButton>
        </ModalContainer>
      </ModalBg>
    </div>
  );
});

export default Modal;

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  z-index: 3;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 35%;
  top: 20%;
  width: 30%;
  height: 50%;
  border-radius: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;

  /* background-image: url(${(props) => props.item});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
`;

const StButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid lightgray;
  &:hover {
    color: #ff3300;
    font-weight: bold;
  }
`;

const StCancelButton = styled.button`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border: none;
  &:hover {
    color: #ff3300;
    font-weight: bold;
  }
`;

// const ModalContain = styled.div`
//   position: fixed;
//   display: flex;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   max-height: 90%;
//   width: 1000px;
//   height: 90%;
//   /* padding: 10px; */
//   /* background: rgb(25, 31, 44); */
//   border-radius: 10px;
//   text-align: center;
// `;
