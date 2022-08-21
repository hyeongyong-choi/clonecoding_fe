import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import AddPhoto from "../assets/img/AddPhoto.png";
import Button from "./elements/Button";
import Text from "./elements/Text";
import { colors } from "../theme/theme";
import { MdClose } from "react-icons/md";
import Profile from "../assets/img/Profile.jpg";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { __postImage } from "../redux/modules/ImageSlice";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import MyDropzone from "../hooks/MyDropZone";
import { VscSmiley } from "react-icons/vsc";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });

  const onChangeTextarea = (e) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const data = {
    image: image,
    content: content,
  };

  //공유하기
  const sendImageToServer = (e) => {
    e.preventDefault();
    dispatch(__postImage(data));
  };

  return (
    <StForm>
      <FormModal>
        <FormHeader>
          <BiArrowBack
            onClick={() => {
              navigate(-1);
            }}
            style={{ cursor: "pointer" }}
          />
          <FormCreate>새 게시물 만들기</FormCreate>
          <FormButton type="button" onClick={sendImageToServer}>
            공유하기
          </FormButton>
        </FormHeader>
        <FormContainer>
          <FormLeft>
            <FormPhoto>
              <MyDropzone />
            </FormPhoto>
          </FormLeft>
          <FormRight>
            <FormAdd>
              <Titlebox>
                <TitleImg />
                <Textbox>
                  <Text color="black" fontSize="14px">
                    사용자명
                  </Text>
                </Textbox>
              </Titlebox>
              <FormTextarea
                placeholder="내용입력..."
                onChange={onChangeTextarea}
                maxLength={2200}
              />
              <FormWrap>
                <FormSection>
                  <FormWord>/2,200</FormWord>
                </FormSection>
              </FormWrap>
            </FormAdd>
          </FormRight>
        </FormContainer>
      </FormModal>
    </StForm>
  );
};

export default Form;

const StForm = styled.div`
  //modal css
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormModal = styled.div`
  //modal css
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 900px;
  height: 600px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const FormHeader = styled.div`
  display: flex;
  border-bottom: 0.5px solid #ddd;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1rem;
`;

const FormCreate = styled.div`
  position: relative;
  font-weight: bold;
`;

const FormButton = styled.div`
  color: ${colors.primary};
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`;

const FormContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const FormLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FormPhoto = styled.div``;

const FormImg = styled.div`
  width: 130px;
  height: 100px;
  background-image: url(${AddPhoto});
  background-position: center;
  background-size: 100% 100%;
  margin: 0 auto;
`;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;
  border-left: 0.5px solid #ddd;
  padding: 10px;
`;

const FormAdd = styled.div`
  box-sizing: border-box;
`;

const FormWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
`;

const FormSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FormWord = styled.div`
  color: rgb(219, 219, 219);
  padding-right: 15px;
`;

const Titlebox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
  margin: 3px 0px 0px 10px;
`;

const FormTextarea = styled.textarea`
  outline: none;
  border: transparent;
  font-size: 14px;
  min-width: 250px;
  min-height: 400px;
`;
