import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import {Link}from 'react-router-dom'
import {useSelector} from 'react-redux'

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme})=>theme.bgLighter};
  color: ${({theme})=>theme.text};
  height: 56px;
`;
const Wrapper = styled.div`
  height:100%;
  padding: 2px 20px;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  left: 0px;
  right: 0px;
  margin: auto;
  width: 40%;
  position: absolute;
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${({theme})=>theme.soft};
  border-radius: 10px;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color:${({theme})=>theme.text};
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
    cursor: pointer;
    gap: 10px;
`;
const Avatar = styled.img`
  width : 32px;
  height : 32px;
  border-radius: 50%;
  background-color: #999;
`
const User = styled.div`
    display : flex;
    align-items: center;
    gap : 10px;
    font-weight: 500;
    color : ${({theme})=>theme.text}
`
const Navbar = () => {

  const {currentUser} = useSelector(state=>state.user);
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon/>
        </Search>
        {currentUser ? (
          <User>
            <VideoCallOutlinedIcon/>
            <Avatar src={currentUser.img}/>
            {currentUser.name}
          </User>
        ):
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon/>SIGN IN
            </Button>
          </Link>}
      </Wrapper>
    </Container>
  )
}

export default Navbar

