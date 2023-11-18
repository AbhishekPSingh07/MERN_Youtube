import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon/>
        </Search>
        <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar

