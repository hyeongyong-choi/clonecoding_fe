import React from 'react';
import styled from 'styled-components';

const MyCard = ({ myImg }) => {
  return (
    <StCardBox>
      <img src={myImg.imgUrl} alt='내 게시물 이미지' />
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