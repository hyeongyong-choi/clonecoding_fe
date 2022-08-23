import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Profile from '../assets/img/Profile.jpg';
import { colors } from '../theme/theme';
import { __getName } from '../redux/modules/userSlice';
import { getCookie, setCookie } from '../shared/cookies';

const MyProfile = () => {
  const user = useSelector((state) => state.user.user.headers)

  console.log(user)

  return (
    <StProfile>
      <ProfileContainer>
        <StProfileImg>
          <img src={Profile} />
        </StProfileImg>
      </ProfileContainer>
      
      <StProfileWrap>
        <StName>{user.userName}</StName>
        <StProfileInfo>
          <StProfileText>
            게시물<span> 50</span>
          </StProfileText>
          <StProfileText>
            팔로워<span> 600</span>
          </StProfileText>
          <StProfileText>
            팔로우<span> 400</span>
          </StProfileText>
        </StProfileInfo>
      </StProfileWrap>
    </StProfile>
  );
};

export default MyProfile;

const StProfile = styled.div`
  margin-top: 90px;
  margin-bottom: 40px;
  display: flex;
`;

const ProfileContainer = styled.div`
  width: 295px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
`;
const StProfileImg = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
  }
`;
const StProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StName = styled.div`
  font-size: 30px;
  font-weight: 200;
  color: ${colors.black};
  margin-bottom: 20px;
`;

const StProfileInfo = styled.div`
  margin-top: 20px;
  display: flex;
`;

const StProfileText = styled.div`
  font-size: 16px;
  span {
    font-weight: bold;
    margin-left: 2px;
  }
  & + & {
    margin-left: 30px;
  }
`;
