import React, { useRef } from 'react';
import styled from 'styled-components';
import AddPhoto from '../assets/img/AddPhoto.png';
import Button from './elements/Button';


const Form = () => {
  const selectFile = useRef('');

  const handleClick = () => {
    selectFile.current.click();
  };

  return (
    <div>
      <StForm>
        <FormModal>
          <FormTitle>
            <Titile>새 게시물 만들기</Titile>
          </FormTitle>
          <FormWrap />
          <FormPhoto>
            <img src={AddPhoto} alt='' />
            <StText>
              사진과 동영상을 여기에서 선택하세요
            </StText>
            <input
              type='file'
              style={{ display: 'none' }}
              ref={selectFile}
              accept='image/*'
            />
            <Button onClick={handleClick} text='컴퓨터에서 선택' />
          </FormPhoto>
        </FormModal>
      </StForm>
    </div>
  );
};

export default Form;

const StForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  box-sizing: border-box;
`;

const FormModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  width: 564px;
  height: 90%;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  text-align: center;
`;

const FormTitle = styled.h1`
  align-items: center;
  border: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  margin: 0;
  /* min-width: 0; */
  padding: 15px;
  text-align: center;
  vertical-align: baseline;
`;

const Titile = styled.div`
  display: block;
  white-space: nowrap;
  width: 100%;
`;

const FormWrap = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #ddd;
`;

const FormPhoto = styled.div`
    height: 100%;
    width: 100%;
    margin: 170px auto;
    /* justify-content:center;
    align-items:center;
    display: flex; */
`;

const StText= styled.p`
  font-size:20px;
`