import React, { useState } from 'react';
import styled from 'styled-components';
import instagramLogo from '../assets/img/instagramLogo.png';
import AppStore from '../assets/img/AppStore.png';
import GooglePlay from '../assets/img/GooglePlay.png';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import Text from '../components/elements/Text';
import HorizonLine from '../utils/HorizonLine';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __loginUser } from '../redux/modules/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // const [userTitle , setUserTitle] = useState('')
  // const [userId , setUserId] = useState('')
  // const [userEmail , setUserEmail] = useState('')
  // const [password , setPassword] = useState('')
  
  const [formValue, setFormValue] = useState({
    userId: '',
    userEmail: '',
    password : '',
  });

  const {userId ,userEmail, password } = formValue
  

  const onChangeHandler =(e)=>{
    setFormValue((prev)=>{
        return{
            ...prev,
            userId : e.target.value,
            userEmail : e.target.value
        }
    })
}

const onChangeEmailHandler =(e)=>{
  setFormValue((prev)=>{
      return{
          ...prev,
          userEmail : e.target.value
      }
  })
}

const onChangePasswordHandler =(e)=>{
  setFormValue((prev)=>{
      return{
          ...prev,
          password : e.target.value
      }
  })
}


const handleSubmit = (e) => {
    const { value } =e.target;
    
    const Idform = {
      userId : userId ,
      password : password
    }
    const Emailform = {
      userEmail : userEmail ,
      password : password
    }
    if(userId.indexOf('@') === -1){
      console.log(userId.indexOf('@'))
      dispatch(__loginUser(Idform))
      // .then(() => {
      //   navigate('/');
      //   window.location.reload();
      // })
    }else{
      // console.log(value.indexOf('@'))
      dispatch(__loginUser(Emailform))
      // .then(() => {
      //   navigate('/');
      //   window.location.reload();
      // })
    }
    
};


 
  // console.log(handleSubmit)
  return (
    <StLogin>
      <StLoginContainer>
        <StLogo>
          <img src={instagramLogo} alt='로고' />
        </StLogo>
        <StLoginInput>
          <Input
            placeholder='사용자 이름 또는 이메일'
            label='사용자 이름 또는 이메일'
            width='100%'
            margin='0 0 10px 0'
            value = {userId}
            onChange = {onChangeHandler}
          />

          <Input
            type='password'
            placeholder='비밀번호'
            label='비밀번호'
            width='100%'
            margin='0 0 10px 0'
            value = {password}
            onChange={onChangePasswordHandler}

          />
        </StLoginInput>
        <Button text='로그인' width='100%' margin='0 0 10px 0' onClick={handleSubmit}/>
        <HorizonLine text='또는' />
        <Button
          text='Facebook으로 로그인'
          fz='14px'
          fw='600'
          fontcolor='#385185'
          bgcolor='white'
          bgchover='white'
          margin='0 0 10px 0'
          bgchoverhover = '#0d6efd'
        />
        <Text fontSize='12px' color='#00376b' fontWeight='400'>
          비밀번호를 잊으셨나요?
        </Text>
      </StLoginContainer>
      <StLoginContainer2>
        <p>
          계정이 없으신가요?
          <span
            onClick={() => {
              navigate('/register');}}
            style={{ color: '#00376b' , cursor:'pointer'}}>
            가입하기
          </span>
        </p>
      </StLoginContainer2>
      <StWrap>
        <Text margin='10px'>앱을 다운로드하세요.</Text>
        <StImg>
          <AppleImg src={AppStore} alt='AppStore' />
          <GoogleImg src={GooglePlay} alt='GooglePlay' />
        </StImg>
      </StWrap>
    </StLogin>
  );
};

export default Login;

const StLogin = styled.div`
  /* width: 100%; */
  height: 100vh;
  border: 1px solid #eee;
  background-color: #eee;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const StLoginContainer = styled.div`
  width: 350px;
  /* height: 500px; */
  margin: 40px auto 0;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StLogo = styled.div`
  display: block;
  margin-bottom: 20px;
`;

const StLoginInput = styled.div`
  width: 100%;
`;

const StLoginContainer2 = styled.div`
  width: 350px;
  margin: 20px auto 0;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StWrap = styled.div`
  width: 350px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StImg = styled.div`
  display: flex;
  justify-content: center;
  /* width: 200px; */
`;

const AppleImg = styled.img`
  width: 136px;
  display: block;
  cursor: pointer;
`;
const GoogleImg = styled.img`
  width: 136px;
  display: block;
  cursor: pointer;
`;