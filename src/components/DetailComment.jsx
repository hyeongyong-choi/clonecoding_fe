import React, { useEffect } from 'react';
import styled from 'styled-components';
import Profile from "../assets/img/Profile.jpg"
import Text from './elements/Text';


const DetailComment = ({item}) => {
  
    
    return (
        <>
            <TitleBox>
                <ImgBox>
                    <TitleImg />
                </ImgBox>
                <TextBox>
                    <TextComment>
                    <TextContent><TextName>{item.userName}</TextName>{item.comment}</TextContent>
                    </TextComment>
                    <Text margin="-10px 0 0 0"><span style={{fontSize : "12px"}}>{item.createdAt}</span>  </Text>
                </TextBox>
            </TitleBox>

        </>
    );
};

export default DetailComment;

const TitleBox = styled.div`
    display: flex;
    width:95%;
    margin: 10px 0;
    align-items: center;
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
    font-size: 14px;
`