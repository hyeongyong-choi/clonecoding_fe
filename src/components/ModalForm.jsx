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
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { __postContent, __postImage } from "../redux/modules/InstaSlice";
// import {__postImage } from '../redux/modules/ImageSlice';

const ModalForm = ({ ModalHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [contents, setContents] = useState("");

  const onChangeTextarea = (e) => {
    setContents(e.target.value);
    // console.log(e.target.value);
  };

  //Dropzone
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxFiles: 5,
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const formdata = new FormData();
  const onChangeImgHandler = (e) => {
    const { files } = e.target;

    for (let i = 0; i < files.length; i++) {
      setFiles(files[i]);
    }
  };

  //공유하기
  const sendImageToServer = (e) => {
    e.preventDefault();
    const newForm = {
      contents: contents,
    };

    files.map((file, i) => {
      formdata.append("multipartFile", files[i]);
    });

    // formdata.append('multipartFile', files);
    formdata.append(
      "dto",
      new Blob([JSON.stringify(newForm), { type: "application/json" }])
    );

    dispatch(__postImage([...formdata.entries()]));
    console.log([...formdata.entries()]);
    console.log(formdata);
    console.log(files);
  };

  // console.log(files);
  // console.log(content);

  return (
    <StForm>
      <FormModal>
        <FormHeader>
          <BiArrowBack onClick={ModalHandler} style={{ cursor: "pointer" }} />

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
                <div
                  {...getRootProps({ className: "dropzone" })}
                  style={{
                    width: "100%",
                    height: "350px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <input
                    {...getInputProps()}
                    type="file"
                    onChange={onChangeImgHandler}
                  />
                  <StImgUpload>
                    <FormImg />
                    <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                    <Button width="300px" text="컴퓨터에서 선택" />
                  </StImgUpload>
                </div>
                <StImgContainer>
                  {files.length !== 0 &&
                    files.map((file, index) => (
                      <div key={index}>
                        <div
                          style={{
                            width: "100px",
                            height: "100px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={file[0].preview}
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundSize: "cover",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onLoad={() => {
                              URL.revokeObjectURL(file[0].preview);
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
                  <Text color="black" fontSize="14px">
                    사용자명
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

const Section = styled.div`
  box-sizing: border-box;
  width: 600px;
  height: 500px;
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
