import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

const Modal = forwardRef(({ item }, ref) => {
  return (
    <div>
      <ModalBg>
        <ModalContainer item={item.image} ref={ref}>
          <StButton>수정</StButton>
          <StButton>삭제</StButton>
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
  z-index: 1;
  box-sizing: border-box;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 30%;
  top: 20%;
  width: 40%;
  height: 60%;
  border-radius: 40px;
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
  /* padding: 20px; */
  /* margin: 20px 0px 0px 0px; */
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
