import React from 'react';
import styled from 'styled-components';
import Profile from "../assets/img/Profile.jpg"
import Text from './elements/Text';

const DetailComment = () => {
    return (
        <>
            <TitleBox>
                <ImgBox>
                    <TitleImg />
                </ImgBox>
                <TextBox>
                    <TextComment>
                    <TextContent><TextName>사용자명</TextName>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque porro quidem quisquam libero iure praesentium distinctio quod qui, corporis deleniti nesciunt aliquam deserunt maiores. Recusandae officia aliquid sunt iusto!</TextContent>
                    </TextComment>
                    <Text margin="-10px 0 0 0"><span>시간</span>    <span>좋아요</span></Text>
                </TextBox>
            </TitleBox>

            <TitleBox>
                <ImgBox>
                    <TitleImg />
                </ImgBox>
                <TextBox>
                    <TextComment>
                    <TextContent><TextName>사용자명</TextName>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque porro quidem quisquam libero iure praesentium distinctio quod qui, corporis deleniti nesciunt aliquam deserunt maiores. Recusandae officia aliquid sunt iusto!</TextContent>
                    </TextComment>
                    <Text margin="-10px 0 0 0"><span>시간</span>    <span>좋아요</span></Text>
                </TextBox>
            </TitleBox>
        </>
    );
};

export default DetailComment;

const TitleBox = styled.div`
    display: flex;
    width:95%;
`

const ImgBox = styled.div`
    width: 35px;
    height:35px;
    border-radius: 30px;
    margin-right:10px;
`

const TitleImg = styled.div`
    width: 35px;
    height:35px;
    border-radius: 30px;
    background-image: url(${Profile});
    background-position: center;
    background-size: cover;
    
`
const TextBox = styled.div`
    margin: 3px 0px 5px 10px;
`

const TextComment = styled.div`
    display: flex;
    /* margin-bottom: -10px; */
`
const TextName = styled.span`
    font-weight: bold;
    margin-right:5px;
`
const TextContent = styled.p`
    text-align: start;
    width:100%;
`