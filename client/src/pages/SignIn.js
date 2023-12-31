import React from 'react'
import styled from "styled-components"

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
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <SubTitle>to continue to TubeNet</SubTitle>
            <Input placeholder='username'></Input>
            <Input placeholder='password' type='password'></Input>
            <Button>Sign in</Button>
            <Title>Or</Title>
            <SubTitle>to continue to TubeNet</SubTitle>
            <Input placeholder='username'></Input>
            <Input placeholder='email'></Input>
            <Input placeholder='password' type='password'></Input>
            <Button>Sign up</Button>
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
