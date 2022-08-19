import React from "react";
import styled from "styled-components";
import Text from "./elements/Text"
import Input from "./elements/Input";
import Profile from "../assets/img/Profile.jpg"
import {AiOutlineMenu} from "react-icons/ai";
import Insta from '../assets/img/Login_PhoneImg2.png';
import { BiMessageRounded } from "react-icons/bi";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { HiOutlinePaperAirplane } from "react-icons/hi";


const Modal = () => {
    return (
        <ModalBg>
            <ModalContain>
                <ModalImg></ModalImg>
                <ModalCommentBox>
                    <ModalTitle>
                        <Titlebox>
                            <TitleImg/>
                            <Textbox>
                                <Text color="black" fontSize="14px">사용자명</Text>
                                <Text color="black" fontSize="12px">파일형태</Text>
                            </Textbox>
                        </Titlebox>
                        <ModalMenu>
                            <AiOutlineMenu/>
                        </ModalMenu>
                    </ModalTitle>
                    <ModalComment>
                        {/* comment map */}
                    </ModalComment>
                    <ModalIcon>
                        <Iconbox>
                            <Icon>
                                <BsHeart size="25" />
                            </Icon>
                            <Icon>
                                <BiMessageRounded size="28" />
                            </Icon>
                            <Icon>
                                <HiOutlinePaperAirplane size="28" />
                            </Icon>
                            <Icon style={{marginLeft : 'auto'}}>
                                <BsBookmark size="25"></BsBookmark>
                            </Icon>
                        </Iconbox>
                    </ModalIcon>
                    <TextboxLike>
                        <Text fontSize="15px" color="black" fontWeight="bold">좋아요 OOO개</Text>
                        <Text fontSize="8px" color="gray" >날짜</Text>
                    </TextboxLike>
                    <InputSubmit></InputSubmit>
                </ModalCommentBox>
            </ModalContain>
        </ModalBg>
    );
};

export default Modal;

const ModalBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.10);
    z-index: 0;
    box-sizing:border-box;
`
const ModalContain = styled.div`
    position: fixed;
    display:flex;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-height: 90%;
    width: 1000px;
    height: 90%;
    /* padding: 10px; */
    background: rgb(25, 31, 44);
    border-radius: 10px;
    text-align: center;
`
const ModalImg = styled.div`
    width:50%;
    height:100%;
    background-image: url(${Insta});
    background-repeat: no-repeat;
    background-size : cover;
    background-position: center;
`
const ModalCommentBox = styled.div`
    width:50%;
    height:100%;
    background-color: #fff;
`
const ModalTitle = styled.div`
    /* width:90%; */
    height:70px;
    padding:14px 4px 14px 16px;
    background-color:#fff; 
    display:flex;
`
const Titlebox = styled.div`
    display: flex;
    width:90%;
`
const TitleImg = styled.div`
    width: 35px;
    height:35px;
    border-radius: 30px;
    background-image: url(${Profile});
    background-position: center;
    background-size: cover;
`
const Textbox = styled.div`
    margin: 3px 0px 0px 10px;
`
const ModalMenu = styled.div`
    width:10%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const ModalComment = styled.div`
    background: #eee;
    width:100%;
    height:75%;
`
const ModalIcon = styled.div`
    width:100%;
    height: 55px;
`
const Iconbox = styled.div`
    display: flex;
    margin-left:10px;
    
`
const Icon = styled.div`
    width:30px;
    /* padding:5px; */
    margin: 10px 5px 0px;
    cursor:pointer;
`
const TextboxLike = styled.div`
    padding: 0px 0px 5px 15px;
`
const InputSubmit = styled.div`
    

`


