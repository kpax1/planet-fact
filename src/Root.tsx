import { useState } from "react";
import data from "./data/data";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Hamburger from "hamburger-react";
import bg from './assets/background-stars.svg'
import { Link, Outlet } from "react-router-dom";
const theme = {
  fullbgc: '#070724',
  textColor: "#FFF",
  footercolor: "violet",
};

interface props {
  
    fullbgc: string;
    textColor: string;
    footercolor: string;

}



 const GlobalStyle = createGlobalStyle<{theme: props}>`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }



  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  body{
    width: 100vw;
    height: 100vh;
    font-family: 'Inter', sans-serif;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: ${(props)=>props.theme.fullbgc};
   ;
  }

`;

export default function Root() {
  const [isOpen, setOpen] = useState(false);

  console.log(data);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>
        <Title>THE PLANETS</Title>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#ffffff"
          easing="ease-in"
          hideOutline={false}
        />
      </Header>
      {isOpen ?  <Menu>
        {data.map((item) => {
          return <Category key={item.name}> <Link to={item.name}>{item.name}</Link></Category>;
        })}
      </Menu> : null}

      <Planetmenu>
      <span> OVERVIEW </span>
      <span> STRUCTURE </span>
      <span> SURFACE </span>
      </Planetmenu>
      <div>
        
        <Outlet/>
      </div>
    </ThemeProvider>
  );
}

const Menu = styled.ul`
  background-color: red;
  transition-duration: 0.7s;
  z-index: 100;

`;

const Category = styled.li`
  color: #000000;
  list-style: none;
  transition-duration: 0.7s;

`;

const Header = styled.header`
  font-weight: 500;
  background-color: ${({ theme }) => theme.fullbgc};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 24px;
  padding-right: 24px;
  height: 68px;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
  font-weight: 400;
  font-size: 28px;
  letter-spacing: -1.05px;
`;

const Planetmenu = styled.div`
  height: 68px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;


`



