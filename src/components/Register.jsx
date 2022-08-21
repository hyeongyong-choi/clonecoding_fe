import React ,{useRef, useState} from 'react';
import styled from 'styled-components';
import InstaLogo from '../assets/img/instagramLogo.png';
import Button from './elements/Button';
import Input from './elements/Input';
import Apple from '../assets/img/AppStore.png';
import Google from '../assets/img/GooglePlay.png';
import HorizonLine from "../utils/HorizonLine";
import { __signupUser } from '../redux/modules/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // const user = useSelector((state)=>state.user.user)
    // console.log(user)
    
    const [inputValue, setInputValue] = useState({
        userName: '',
        userId: '',
        userEmail: '',
        password: '',
      });
      
    // 아이디, 비밀번호 확인
    const [email,setEmail] = useState('')
    const [id, setId] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // 오류메시지 상태 저장
    const [emailMessage,setEmailMessage] = useState('');
    const [idMessage, setIdMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    
    // 중복버튼 활성화, 회원가입버튼 활성화
    const [idOverlap, setIdOverlap] = useState(false);
    const [registerBtn, setRegisterBtn] = useState(true);
    const [idDbCheck, setIdDbCheck] = useState(false);

    // 유효성 검사
    const [isEmail,setIsEmail] = useState(false);
    const [isId, setIsId] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    

    // id, password 정규식
    const { userName, userId, userEmail, password } = inputValue;


    const userEmailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    const passwordRegEx = /^[a-zA-Z0-9]{6,15}$/;
      
    
    const onChangeEmailHandler = (e) =>{
        const { value } = e.target;      
        let temp = '';
        if(!userEmailRegex.test(value)){
            setEmailMessage('이메일 형식에 맞게 입력해주세요');
            setIsEmail(false);
        } else {
            temp = value;
            setEmailMessage('올바른 이메일 형식입니다.')
            if(temp === value){
                setIsEmail(true)
            }else{
                setIsEmail(false)
            }
        }
        setInputValue((prev)=>{
            return{
                ...prev,
                userEmail: e.target.value
            }
        })
    }

    const onChangeNameHandler =(e)=>{
        setInputValue((prev)=>{
            return{
                ...prev,
                userName: e.target.value
            }
        })
    }

    const onChangeIdHandler =(e)=>{
        setInputValue((prev)=>{
            return{
                ...prev,
                userId: e.target.value
            }
        })
    }


    const onChangePasswordHandler = (e) => {
        const { value } = e.target;
        if (!passwordRegEx.test(value)) {
            setPasswordMessage('숫자, 영문자 조합 4~15자리를 입력해주세요');
            setIsPassword(false);
        } else {
            setPasswordMessage('올바른 비밀번호 형식입니다.');
            setIsPassword(true);
        }
        setInputValue((prev)=>{
            return{
                ...prev,
                password: e.target.value
            }
        })
    }

    


    //로그인 디스패치
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(__signupUser(inputValue)).then(
          (res) => !res.error && navigate('/login')
        );
      };

    
    return (
        <RegisterBG>
        <RegisterContain>
           <LogoImg src={InstaLogo} alt="" />
            <RegisterH2>친구들의 사진과 동영상을 보려면 가입하세요.</RegisterH2>
            <Button width='268px' margin='0px auto' display='block' text='Facebook으로 로그인'></Button>
            <SpanBox>
                <HorizonLine text="또는"/>
            </SpanBox>
                <Input variant='Register' type='email' placeholder='이메일 주소' label='이메일 주소' onChange={onChangeEmailHandler} text={emailMessage} value={userEmail}></Input>
                <Input variant='Register' type='text' placeholder='성명' label='성명' value={userName} onChange={onChangeNameHandler}></Input>
                <Input variant='Register' type='text'placeholder='사용자 이름(ID)' label='사용자 이름(ID)' value={userId} onChange={onChangeIdHandler}></Input>
                <Input variant='Register' type='password' placeholder='비밀번호' label='비밀번호' onChange={onChangePasswordHandler} text={passwordMessage} value={password}></Input>
            <Registertext>서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.</Registertext>
            <Button onClick={handleSubmit} width='268px' margin='0px auto' display='block' text='가입' ></Button>
        </RegisterContain>
            <Loginbox>
                <LoginP>계정이 있으신가요? <span onClick={() => {navigate('/login');}} 
                style={{color:'#0d6efd' , cursor:'pointer'}}>로그인</span></LoginP>
            </Loginbox>
            <FootRegister>
                <p>앱을 다운로드하세요.</p>
                <Imgbox>
                <AppleImg src={Apple}/>
                <GoogleImg src={Google}/>
                </Imgbox>
            </FootRegister>
        </RegisterBG>
    );
    }


export default Register;

const RegisterBG = styled.div`
    background-color : #eee;
    height: 100vh;
    border:1px solid #eee;
`

const RegisterContain = styled.div`
    width: 350px;
    /* height: 500px; */
    background-color: #fff;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    margin: 40px auto 0px;
    padding: 40px;
`

const LogoImg = styled.img`
    width : 175px;
    margin:0 auto;
    display: block;
`

const RegisterH2 = styled.h2`
    font-size: 17px;
    color : rgba(var(--f52,142,142,142),1);
    margin: 10px 20px 10px;
    text-align: center;
`
const SpanBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:10px 10px 18px ;
`
const LoginP = styled.p`
    margin:0px;
`

const SpanLine = styled.span`
    border : 1px solid rgba(var(--b6a,219,219,219),1); 
    width:200px;
    height:1px;
`
const SpanP = styled.p`
    font-size:13px;
    width:45px;
    margin: 0px 10px;
`


const Inputbox = styled.div`
    
`
const Registertext = styled.p`
    font-size:12px;
    color : rgba(var(--f52,142,142,142),1);
    text-align: center;
    
`

const Loginbox = styled.div`
    width:350px;
    padding:20px 50px;
    background: white;
    margin: 10px auto;
    text-align: center;
    font-size : 14px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
`

const FootRegister = styled.div`
    margin:0 auto;
    width:350px;
    text-align: center;
    font-size: 14px;
    color: rgba(var(--i1d,38,38,38),1);
`
const Imgbox =styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    
`
const AppleImg = styled.img`
    width : 136px;
    display: block;
    cursor:pointer;
`
const GoogleImg = styled.img`
    width : 136px;
    display: block;
    cursor:pointer;
`