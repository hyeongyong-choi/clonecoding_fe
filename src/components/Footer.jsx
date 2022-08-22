import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StFooter>
      <StUl>
        <StLi>Meta</StLi>
        <StLi>소개</StLi>
        <StLi>블로그</StLi>
        <StLi>채용 정보</StLi>
        <StLi>도움말</StLi>
        <StLi>API</StLi>
        <StLi>개인정보처리방침</StLi>
        <StLi>약관</StLi>
        <StLi>인기 계정</StLi>
        <StLi>해시태그</StLi>
        <StLi>위치</StLi>
        <StLi></StLi>
        <StLi>Instagram Lite</StLi>
        <StLi>연락처 업로드 & 비사용자</StLi>
      </StUl>
      <StUl>
        <StLi>한국어</StLi>
        <StLi>2022 Instagram from Meta</StLi>
      </StUl>
    </StFooter>
  );
};

export default Footer;

const StFooter = styled.div`
  font-size: 14px;
  margin: 100px auto;
  color: #bbb;
`;

const StUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
`

const StLi = styled.li`
  padding: 0 8px;
  cursor: pointer;
`
