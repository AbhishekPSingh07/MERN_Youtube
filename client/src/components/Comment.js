import React from 'react'
import styled from 'styled-components'
import { useState,useEffect,useRef } from 'react';

const Container = styled.div`
    margin: 25px 0px;
    display: flex;
    gap:10px;
`
const CommmentWrapper = styled.div`
`
const UserImg = styled.img`
    height:45px;
    width:45px;
    border-radius:50%;
    cursor: pointer;
`
const UserDetail = styled.div`
    display : flex;
    gap: 10px;
`
const User = styled.div`
    font-size:16px;
    font-weight:500;
    color: ${({theme})=>theme.text};
`
const TimeSpan = styled.span`
  font-size:14px;
  font-weight:400;
  color: ${({theme})=>theme.textSoft};
`
const Description = styled.p`
  margin-top: 5px;
  color: ${({theme})=>theme.text};
  font-size: 15px;
  line-height: 1.15;
  text-align: justify;
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Add ellipsis for truncated text */
  max-height: ${(props) => (props.expanded ? 'none' : '50px')}; /* Set max-height for collapsed text */
`;
const ToggleButton = styled.button`
  display: ${(props) => (props.showButton ? 'inline-block' : 'none')};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.text};
`;

const CommentDesc = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const descriptionRef = useRef(null);
  
    useEffect(() => {
      const element = descriptionRef.current;
  
      if (element) {
        setShowButton(element.scrollHeight > element.clientHeight || expanded);
      }
    }, [children, expanded]);
  
    return (
      <>
        <Description expanded={expanded} ref={descriptionRef}>
          {children}
        </Description>
        <ToggleButton showButton={showButton} onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Read Less' : 'Read More'}
        </ToggleButton>
      </>
    );
  };

const Comment = () => {
  return (
    <Container>
      <UserImg src ="https://mir-s3-cdn-cf.behance.net/projects/404/a2c2a9181643811.Y3JvcCwyMzAxLDE4MDAsMjUwLDA.jpg"/>
      <CommmentWrapper>
        <UserDetail>
            <User>SIDEMEN</User>
            <TimeSpan>4 days ago</TimeSpan>
        </UserDetail>
        <CommentDesc> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore consectetur adipiscing elit. Sed do eiusmod</CommentDesc>
      </CommmentWrapper>
    </Container>
  )
}

export default Comment
