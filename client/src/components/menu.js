import React from 'react'
import styled from 'styled-components';
import Tube from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Container = styled.div`
    flex: 1.2;
    background-color: ${({theme})=>theme.bgLighter};
    color: ${({theme})=>theme.text};
    height: 100vh;
    overflow: hidden;
    position: sticky;
    top:0;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
    overflow-y: auto;
    max-height: calc(100vh - 36px);
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom:25px;
`;
const Img = styled.img`
    height: 25px;
`;
const Title = styled.h2`
  font-size:14px;
  font-weight: 500;
  color:#aaaaaa;
  margin-bottom:20px;
`;
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`
const Item = styled.div`
    display: flex;
    align-items:center;
    cursor: pointer;
    gap:20px;
    padding:7.5px 0px;
`;
const Login = styled.div`

`;
const Button = styled.button`
    display: flex;
    align-items:center;
    padding:5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius:3px;
    font-weight:500;
    margin-top:10px;
    cursor: pointer;
    gap: 10px;
`;

const menu = (props) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
            <Img src={Tube}/>
            TubeNet
        </Logo>
        <Item>
        <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr/>
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr/>
        <Login>
            Sign in to like videos ,comment and subscribe.
            <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
        </Login>
        <Hr/>
        <Title>BEST OF TUBENET</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr/>
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={()=>props.setDarkMode(!props.darkMode)}>
            <SettingsBrightnessOutlinedIcon/>
            Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default menu;
