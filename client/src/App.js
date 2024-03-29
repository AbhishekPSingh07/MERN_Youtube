import styled, { ThemeProvider } from "styled-components"
import Menu from './components/Menu.js'
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Video from "./pages/Video.js";
import SignIn from "./pages/SignIn.js";

const Container = styled.div`
  display: flex;
  background-size : cover;
  

`;
const Main = styled.div`
  flex: 7;
  background-color: ${({theme})=>theme.bg};
  color: ${({theme})=>theme.text};
  

`;
const Wrapper = styled.div`
  padding: 17px 30px;
`;


function App() {
  const [darkMode,setDarkMode] = useState(true);
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main>
            <Navbar/>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random"/>}/>
                  <Route path="trends" index element={<Home type="trend"/>}/>
                  <Route path ="subscriptions" index element={<Home type="sub"/>}/>
                  <Route path="signin" element={<SignIn/>}/>
                  <Route path="video">
                    <Route path = ":id" element={<Video/>}/>
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;