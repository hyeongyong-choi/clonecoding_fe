import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __getMyFeed } from '../redux/modules/MyPageSlice';

const MyCard = ({ myImg }) => {
  const dispatch = useDispatch();
  console.log(myImg)
  useEffect(()=> {
    dispatch(__getMyFeed());
  })
  return (
    <StCardBox>
      <img src={myImg} alt='내 게시물 이미지' />
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