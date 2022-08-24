import React ,{ useEffect, useState }from "react";
import styled from "styled-components";
import Text from "./elements/Text";
import Button from "./elements/Button";
import Profile from "../assets/img/Profile.jpg";
import { FiMoreHorizontal } from "react-icons/fi";
import Insta from "../assets/img/Login_PhoneImg2.png";
import { IoMdClose } from 'react-icons/io';
import { BiMessageRounded,BiArrowBack } from "react-icons/bi";
import { BsHeart, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import DetailComment from "./DetailComment";
import { useDispatch } from "react-redux";
import { __postComment , __getInstaList} from "../redux/modules/InstaSlice";
import instagram from "../assets/instagram2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
SwiperCore.use([Navigation, Pagination]);

const ModalDetail = ({item,ModalDetailHandler}) => {
  const dispatch = useDispatch();
  
  const [comments , setComments] = useState('')
  const [commentBtn , setCommentBtn] = useState(true)

  

  const commentHandler = (e) =>{
    setComments(e.target.value)
  }


  const addCommentSubmit = () =>{
    const commentlist = {
      articlesId : item.articlesId,
      comment :comments
    }
    dispatch(__postComment(commentlist))
    dispatch(__getInstaList())
  
  }

  const errorImg = (e) =>{
    e.target.src = instagram;
  }

  useEffect(()=>{
    if(comments.trim() !== ''){
      setCommentBtn(false)
    }else{
      setCommentBtn(true)
    }

  },[comments])
    
  const swiperStyle = {
    width:"650px",
    height:"100%",
  }


    return (
      <ModalBg>
        <IoMdClose
          style={{
            cursor: 'pointer',
            position: 'fixed',
            right: '0px',
            color: 'white',
            fontSize: '30px',
          }}
          onClick={ModalDetailHandler}
        />
        <ModalContain>
          {Number(item.image.length) === 1 ? (
            <ImgContain>
              <ModalImg src={item.image} onError={errorImg}></ModalImg>
            </ImgContain>
          ) : (
            <ImgContain>
              <Swiper
                style={swiperStyle}
                className='banner'
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {item.image.map((img) => {
                  return (
                    <SwiperSlide key={img}>
                      <ModalImg src={img} onError={errorImg}></ModalImg>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ImgContain>
          )}

          <ModalCommentBox>
            <ModalTitle>
              <Titlebox>
                <TitleImg />
                <Textbox>
                  <Text color='black' fontSize='14px'>
                    {item.userName}
                  </Text>
                 
                </Textbox>
              </Titlebox>
              <ModalMenu>
                <FiMoreHorizontal />
              </ModalMenu>
            </ModalTitle>
            <ModalComment>
              <Postboxme>
                <TitleImg />
                <PostText>
                  <TextName>{item.userName}</TextName>
                  {item.content}
                </PostText>
              </Postboxme>
              {item.commentList.map((item) => (
                <DetailComment key={item.commentId} item={item}></DetailComment>
              ))}
            </ModalComment>
            <ModalIcon>
              <Iconbox>
                <Icon>
                  <BsHeart size='22' />
                </Icon>
                <Icon>
                  <BiMessageRounded size='25' />
                </Icon>
                <Icon>
                  <HiOutlinePaperAirplane size='25' />
                </Icon>
                <Icon style={{ marginLeft: 'auto' }}>
                  <BsBookmark size='22'></BsBookmark>
                </Icon>
              </Iconbox>
            </ModalIcon>
            <TextboxLike>
              <Text fontSize='15px' color='black' fontWeight='bold'>
                좋아요 {item.likeCount}개
              </Text>
              <Text fontSize='8px' color='gray'>
                {item.createAt}
              </Text>
            </TextboxLike>
            <SubmitBox>
              <BsEmojiSmile size='24' />
              <InputSubmit
                placeholder='댓글달기...'
                value={comments}
                onChange={commentHandler}
              ></InputSubmit>
              <Button
                text='게시'
                fontcolor='#0d6efd'
                bgcolor='#fff'
                onClick={addCommentSubmit}
                disabled={commentBtn}
              ></Button>
            </SubmitBox>
          </ModalCommentBox>
        </ModalContain>
      </ModalBg>
    );
};

export default ModalDetail;

const ModalBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(1.5px);
    z-index: 3;
    box-sizing:border-box;
`
const PrevButton = styled.button`
    font-size: 25px;
    border: none;
    background: gray;
    color:white;
    right: 0;
    position: fixed;
`

const ModalContain = styled.div`
  position: fixed;
  display: flex;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  /* max-width: 1100px; */
  min-width: 1100px;
  height: 90%;
  /* padding: 10px; */
  /* background: rgb(25, 31, 44); */
  border-radius: 10px;
  text-align: start;
`;

const ImgContain = styled.div`
  width: 650px;
  /* height: 500px; */
  /* background-image: url(item.image);
   background-repeat: no-repeat;
  background-size: cover;
  background-position: center; */
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ModalCommentBox = styled.div`
  width: 450px;
  height: 100%;
  background-color: #fff;
`;
const ModalTitle = styled.div`
  /* width:90%; */
  height: 70px;
  padding: 14px 4px 14px 16px;
  background-color: #fff;
  display: flex;
`;
const Titlebox = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
`;
const TitleImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 30px;
  background-image: url(${Profile});
  background-position: center;
  background-size: cover;
`;
const Textbox = styled.div`
  margin-left : 10px;
`;
const ModalMenu = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ModalComment = styled.div`
  background: #eee;
  width: 100%;
  height: 75%;
  padding: 14px;
  overflow: scroll;
`;
const Postboxme = styled.div`
  display: flex;
`;

const PostText = styled.div`
  background-color: inherit;
  margin-left: 15px;
  width: 85%;
  height: 80px;
  /* background: white; */
  font-size: 16px;
`;

const ModalIcon = styled.div`
    width:100%;
`
const Iconbox = styled.div`
    display: flex;
    margin:0 0 5px 10px;
    
`
const Icon = styled.div`
  width: 30px;
  /* padding:5px; */
  margin: 10px 5px 0px;
  cursor: pointer;
`;
const TextboxLike = styled.div`
    width:100%;
    padding: 5px 0px 5px 15px;
    
`
const SubmitBox = styled.div`
 /* background-color: yellow; */
 border-top:1px solid rgba(var(--b6a,219,219,219),1);
 display: flex;
 padding:10px;
 width:100%;
 justify-content: space-between;
 align-items: center;
`
const InputSubmit = styled.input`
  width: 80%;
  padding: 5px;
  border: none;
`;
const TextName = styled.span`
    font-weight: bold;
    margin-right:5px;
`