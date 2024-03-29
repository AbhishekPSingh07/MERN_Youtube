import React, { useState } from 'react'
import styled from "styled-components"
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { auth , provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Container =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
`
const Wrapper =styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color:${({theme})=>theme.bgLighter};
    border: 1px solid ${({theme})=>theme.soft};
    padding: 20px 50px;
    gap: 5px;
`
const Title =styled.h1`
    font-size: 24px;
`
const SubTitle = styled.h2`
    font-size:20px;
    font-weight: 300;
`
const Input = styled.input`
    border: 1px solid ${({theme})=>theme.soft};
    border-radius :20px;
    padding: 10px;
    width: 100%;
    background-color : transparent;
    color : ${({theme})=>theme.text}
`
const Button = styled.button`
    border-radius: 3px;
    border:none;
    padding: 10px 20px;
    cursor: pointer;
    background-color:${({theme})=>theme.soft};
    color: ${({theme})=>theme.textSoft};
`
const More = styled.div`
    display: flex;
    font-size:12px;
    color: ${({theme})=>theme.textSoft};
    margin-top: 10px;
`
const Links = styled.div`
    margin-left: 50px;
`
const Link = styled.span`
    margin-left: 25px;
`
const SignIn = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        dispatch(loginStart());
        try{
            const res = await axios.post("http://localhost:8800/api/auth/signin",{name,password});
            console.log(res.data);
            dispatch(loginSuccess(res.data));
        }catch(err){
            dispatch(loginFailure())
        }
    };

    const signInWithGoogle = async()=>{
        dispatch(loginStart());
        signInWithPopup(auth , provider)
        .then((result)=>{
            console.log(result);
            axios.post("http://localhost:8800/api/auth/oAuth",{
                name : result.user.displayName,
                email : result.user.email,
                password : result.user.accessToken,
                img : result.user.photoURL
            }).then((res)=>{
                console.log(res.data);
                dispatch(loginSuccess(res.data));
                navigate("/");
            })
    
        })
        .catch((err)=>{
            dispatch.loginFailure();
        })
    }
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to TubeNet</SubTitle>
            <Input placeholder='username' onChange={e=>setName(e.target.value)}></Input>
            <Input placeholder='password' type='password' onChange={e=>setPassword(e.target.value)}></Input>
            <Button onClick={handleLogin} >Sign in</Button>
            <Title>Or</Title>
            <Button onClick={signInWithGoogle}>SignIn with Google</Button>
            <Title>Or</Title>
            <SubTitle>to continue to TubeNet</SubTitle>
            <Input placeholder='username' onChange={e=>setName(e.target.value)}></Input>
            <Input placeholder='email' onChange={e=>setEmail(e.target.value)}></Input>
            <Input placeholder='password' type='password' onChange={e=>setPassword(e.target.value)}></Input>
            <Button >Sign up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
                <Link>Help</Link>
                <Link>Privacy</Link>
                <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}


export default SignIn
