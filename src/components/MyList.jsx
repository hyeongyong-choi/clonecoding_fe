import React from 'react';
import styled from 'styled-components';
import MyCard from './MyCard';
import { BiGrid } from 'react-icons/bi';
import { BiMoviePlay } from 'react-icons/bi';
import { BiUserPin } from 'react-icons/bi';
import { BiBookmark } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { __getMyFeed } from '../redux/modules/MyPageSlice';

const MyList = () => {
  const dispatch = useDispatch();

  const myImages = [
    {
      id: 1,
      imgUrl:
        'https://cdn.pixabay.com/photo/2016/11/21/00/47/view-1844110_960_720.jpg',
    },
    {
      id: 2,
      imgUrl:
        'https://cdn.pixabay.com/photo/2014/03/30/09/44/cherry-blossoms-301253_960_720.jpg',
    },
    {
      id: 3,
      imgUrl:
        'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg',
    },
    {
      id: 4,
      imgUrl:
        'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg',
    },
  ];

  const handleMyArticles =() => {
    dispatch(__getMyFeed());
  }

  return (
    <Container>
      <StLine />
      <StCategory>
        <Categories onClick={handleMyArticles}>
          <BiGrid style={{ marginRight: '5px' }} />
          <CategoryText>게시물</CategoryText>
        </Categories>
        <Categories>
          <BiMoviePlay style={{ marginRight: '5px' }}/>
          <CategoryText>릴스</CategoryText>
        </Categories>
        <Categories>
          <BiBookmark style={{ marginRight: '5px' }}/>
          <CategoryText>저장됨</CategoryText>
        </Categories>
        <Categories>
          <BiUserPin style={{ marginRight: '5px' }}/>
          <CategoryText>태그됨</CategoryText>
        </Categories>
      </StCategory>
      <ProfileBottom>
        {myImages.map((myImg) => (
          <MyCard key={myImg.id} myImg={myImg} />
        ))}
      </ProfileBottom>
    </Container>
  );
};

export default MyList;

const Container = styled.div`
  width: 100%;
`;

const StLine = styled.div`
  border-bottom: 0.5px solid #ddd;
  margin-bottom: 15px;
`;

const StCategory = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const CategoryText = styled.div`
  display: flex;
  align-items: center;
`;

const Categories = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
