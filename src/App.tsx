import Hamburger from "hamburger-react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from 'styled-components'
import { createBrowserRouter } from "react-router-dom";

import styled from 'styled-components';
const theme= {
  headercolor: '#c25e5e',
  textColor: 'white',
  footercolor: 'violet'
}
const GlobalStyle= createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  body{
    font-family: 'Inter', sans-serif;

  }

`

function App() {
  const [isOpen, setOpen] = useState(false)

  console.log(isOpen)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header>
      <Title> 
        THE PLANETS
      </Title>
      <Hamburger toggled={isOpen} toggle={setOpen} color='#85eee6' easing="ease-in" hideOutline={false}/>
      </Header>
    
   </ThemeProvider>

  )
}

const Title = styled.h1 `
  color: ${({theme})=> theme.bodycolor};

`

const Header = styled.header`
  font-weight: 500;
  background-color: ${({theme})=>theme.headercolor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default App
