import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import AddPhoto from "../assets/img/AddPhoto.png";
import Button from "./elements/Button";
import Text from "./elements/Text";
import { colors } from "../theme/theme";
import Profile from "../assets/img/Profile.jpg";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { __postContent, __postImage } from "../redux/modules/InstaSlice";
import { getCookie } from "../shared/cookies";

const ModalForm = ({ ModalHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [content, setContent] = useState('');
  const [postBtn, setPostBtn] = useState(true);
  const userName = getCookie('userName')
  const token = getCookie('token')


  const onChangeTextarea = (e) => {
    setContent(e.target.value);
    // console.log(e.target.value);
  };





  const [files, setFiles] = useState([]);
  //Dropzone
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxFiles: 4,
    onDrop: (acceptedFiles) => {
      // console.log(files.length);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });


  const formdata = new FormData();

  //공유하기
  const sendImageToServer = () => {
    const newForm = {
      content: content,
      userName: userName,
    };
    files.map((image) => {
      formdata.append("multipartFile", image);
    });
    formdata.append(
      "articlesDto",
      new Blob([JSON.stringify(newForm)], { type: "application/json" })
    );
    dispatch(__postImage(formdata));
    
    window.location.reload();
  };

  useEffect(() => {
    return () =>
      files && files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  useEffect(() => {
    getCookie("token");
  }, []);

  return (
    <StForm>
      <IoMdClose
        onClick={ModalHandler}
        size={28}
        style={{
          position: "fixed",
          top: "20px",
          right: "40px",
          cursor: "pointer",
          zIndex: "10",
        }}
      />
      <FormModal>
        <FormHeader>
          <div />
          <FormCreate>새 게시물 만들기</FormCreate>
          <FormButton type="button" onClick={sendImageToServer}>
            공유하기
          </FormButton>
        </FormHeader>

        <FormContainer>
          {/* 왼쪽 */}
          <FormLeft>
            <FormPhoto>
              <Section>
                <GetRootProps {...getRootProps({ className: "dropzone" })}>
                  <input
                    {...getInputProps()}
                  // type='file'
                  />
                  <StImgUpload>
                    <FormImg />
                    <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                    <Button width="300px" text="컴퓨터에서 선택" />
                  </StImgUpload>
                </GetRootProps>
                <StImgContainer>
                  {files.length !== 0 &&
                    files.map((file, index) => (
                      // console.log("file!!!!!!!", file)
                      <div key={index} style={{ display: "flex" }}>
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={file.preview}
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundSize: "cover",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              objectFit: "cover"
                            }}
                            onLoad={() => {
                              URL.revokeObjectURL(file.preview);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </StImgContainer>
              </Section>
            </FormPhoto>
          </FormLeft>

          {/* 오른쪽 */}
          <FormRight>
            <FormAdd>
              <Titlebox>
                <TitleImg />
                <Textbox>

                  <Text color='black' fontSize='14px'>
                    {userName}

                  </Text>
                </Textbox>
              </Titlebox>
              <FormTextarea
                placeholder="문구 입력..."
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

export default ModalForm;

const StForm = styled.div`
  //modal css
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 8;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;

const FormModal = styled.div`
  //modal css
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 900px;
  height: auto;
  background: #fff;
  border-radius: 10px;
  display: flex;
  z-index: 9;
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

const Section = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 500px;
`;

const GetRootProps = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
`;

const StImgUpload = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.5rem;
`;

const StImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  background: #fff;
  scrollbar-width: none;
  /* border: 1px solid red; */
  > div {
    /* border: 1px solid blue; */
  }
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
