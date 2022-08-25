import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __getMyFeed } from '../redux/modules/MyPageSlice';
import ModalDetail from './ModalDetail';

const MyCard = ({ image }) => {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  console.log(image.images[0].image)


  const ModalHandler = () => {
    setIsModal(!isModal);
  };

  return (
    <StCardBox>
      <img src={image.images[0].image} onClick={ModalHandler}alt='내 게시물 이미지' />

      {/* {isModal ? <ModalDetail ModalHandler={ModalHandler} /> : null} */}
      
    </StCardBox>
  );
};

export default MyCard;

const StCardBox = styled.div`
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;