import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container = styled.div`

`;
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
`;
const Avatar = styled.img`
    height:45px;
    width:45px;
    border-radius:50%;
    cursor: pointer;
`;
const Input = styled.input`
    background-color: transparent;
    border:none;
    padding: 5px;
    border-bottom: 1px solid  ${({theme})=>theme.soft};
    width: 100%;
    outline: none;
    color:${({theme})=>theme.text};
    font-sze: 14px;
`;
const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src = "https://mir-s3-cdn-cf.behance.net/projects/404/a2c2a9181643811.Y3JvcCwyMzAxLDE4MDAsMjUwLDA.jpg"/>
        <Input placeholder='Add a Comment...'/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments
