import React from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import MyProfile from '../components/MyProfile';
import MyList from '../components/MyList';
import styled from 'styled-components';
import Footer from '../components/Footer';

const MyPage = () => {
  return (
    <StMyPage>
      <NavBar />
      <Layout>
        <MyProfile />
        <MyList />
        <Footer />
      </Layout>
    </StMyPage>
  );
};

export default MyPage;

const StMyPage = styled.div`
  background-color: #fff;
  height: 100vh;
  margin-bottom: 200px;
`;
