import React from 'react'
import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import SendIcon from '@mui/icons-material/Send';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { useState,useEffect,useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Comments from '../components/Comments';
import Card from '../components/Card';
const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
  
`;
const Recommendation = styled.div`
  flex: 2;
`;

const VideoWrapper = styled.div`
  
`;
const ChannelImage = styled.img`
    height:45px;
    width:45px;
    border-radius:50%;
    cursor: pointer;
`;
const Channel = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const ChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme})=>theme.text};
`;
const Details = styled.div`
  display: block;
  margin-top: 15px;
  background-color: ${({theme})=> theme.bgDetails};
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  margion-right: 10px;
`;


const Info = styled.span`
    font-size:14px;
    font-weight:400;
    color: ${({theme})=>theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 15px;
  color: ${({theme})=>theme.text}
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Texts = styled.div`

`;
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
const TruncatedDescription = ({ children }) => {
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

const ChannelName = styled.h2`
    font-size:16px;
    font-weight:500;
    color: ${({theme})=>theme.text};
`;
const Subscribe =styled.div`
  background-color: red;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500px;
  color: white;
`;
const Video = () => {

  const { currentUser } = useSelector((state)=> state.user);
  const dispatch = useDispatch();
  
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720px"
            src="https://www.youtube.com/watch?v=HeZO_LcQALI"
            title="youtube Video player"
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen/>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Hr/>
        <ChannelContainer>
          <Channel>
            <ChannelImage src ="https://mir-s3-cdn-cf.behance.net/projects/404/a2c2a9181643811.Y3JvcCwyMzAxLDE4MDAsMjUwLDA.jpg"/>
            <Texts>
              <ChannelName>SIDEMEN</ChannelName>
              <Info>12.5M subscribers</Info>
            </Texts>
          </Channel>
          <Buttons>
            <Button><ThumbUpOffAltIcon/> 243</Button>
            <Button><ThumbDownOffAltIcon/></Button>
            <Button><SendIcon/> Share</Button>
            <Button><TurnedInNotIcon/> Save</Button>
            <Subscribe>Subscribe</Subscribe>
          </Buttons>
        </ChannelContainer>
        <Details>
          <Info>87K views  1 year ago</Info>
          <TruncatedDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TruncatedDescription>
        </Details>
        <Hr/>
        <Comments>

        </Comments>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
    )
}

export default Video
