import React, {useEffect} from 'react';
import styled from 'styled-components';
import MyCard from './MyCard';
import { BiGrid } from 'react-icons/bi';
import { BiMoviePlay } from 'react-icons/bi';
import { BiUserPin } from 'react-icons/bi';
import { BiBookmark } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { __getMyFeed } from '../redux/modules/MyPageSlice';

const MyList = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user.headers.userName);
  const myImageList = useSelector((state) => state.myPage.articles.imageList)

  console.log(user)
  console.log(myImageList)

  useEffect(()=> {
    dispatch(__getMyFeed());
  },[])

  return (
    <Container>
      <StLine />
      <StCategory>
        <Categories>
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
        {myImageList?.map((image) => (
          <MyCard key={image.articlesId} image={image} />
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
