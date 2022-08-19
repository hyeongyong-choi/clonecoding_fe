import React from "react";
import styled from "styled-components";
import Text from "./elements/Text"
import Profile from "../assets/img/Profile.jpg"
import {AiOutlineMenu} from "react-icons/ai";
import Insta from '../assets/img/Login_PhoneImg2.png';


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
    background-color: yellow;
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
`
const ModalComment = styled.div`
    background: #eee;
    width:100%;
    height:92%;
`
