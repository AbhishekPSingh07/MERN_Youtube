import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
    width: 342px;
    margin-bottom: 25px;
    cursor: pointer;

`;
const Image = styled.img`
    width: 100%;
    height: 192px;  
    cursor: pointer;
    border-radius:10px;
`;
const Texts = styled.div`

`;
const ChannelName = styled.h2`
    font-size:14px;
    font-weight:400;
    color: ${({theme})=>theme.textSoft};
    margin: 8px 0px;
`;
const Title = styled.h1`
    font-size:16px;
    font-weight:500;
    color: ${({theme})=>theme.text};
`;
const Info = styled.h2`
    font-size:14px;
    font-weight:400;
    color: ${({theme})=>theme.textSoft};
`;
const Details = styled.div`
    display:flex;
    margin-top:8px;
    gap:12px;
`;
const ChannelImage = styled.img`
    height:36px;
    width:36px;
    border-radius:50%;
    cursor: pointer;
`;
const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
      <Container>
        <Image src="https://i.ytimg.com/vi/HeZO_LcQALI/maxresdefault.jpg"/>
        <Details>
          <ChannelImage src="https://mir-s3-cdn-cf.behance.net/projects/404/a2c2a9181643811.Y3JvcCwyMzAxLDE4MDAsMjUwLDA.jpg"/>
          <Texts>
              <Title>Title</Title>
              <ChannelName>Channel name</ChannelName>
              <Info>Info</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card
