import { useState } from "react";
import data from "./data/data";
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css,
} from "styled-components";
import Hamburger from "hamburger-react";
import bg from "../public/assets/background-stars.svg";
import { Link, Outlet } from "react-router-dom";
const theme = {
  fullbgc: "#070724",
  textColor: "#FFF",
  footercolor: "violet",
};

const GlobalStyle = createGlobalStyle<{ theme: props }>`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }


  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');


  body{
    width: 100vw;
    height: 100vh;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: ${(props) => props.theme.fullbgc};
    font-family: 'Inter', sans-serif;

   ;
  }

`;



interface props {

  fullbgc: string;
  textColor: string;
  footercolor: string;

}



interface prop{
  state:number
  setState: any;
}

interface styleprops{
  zina:number;
}

export default function Root(props: prop) {
  const [isOpen, setOpen] = useState(false);

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
      {isOpen ? (
        <Menu>
          {data.map((item) => {
            return (
              <Category key={item.name}>
                {" "}
                <Link
                  style={linkStyle}
                  onClick={() => setOpen(!isOpen)}
                  to={item.name}
                >
                  {item.name.toUpperCase()}
                </Link>
              </Category>
            );
          })}
        </Menu>
      ) : null}

      <Planetmenu>
        <Overview zina={props.state} onClick={() => props.setState(0)}>
          {" "}
          OVERVIEW{" "}
        </Overview>
        <Str zina={props.state} onClick={() => props.setState(1)}>
          {" "}
          STRUCTURE{" "}
        </Str>
        <Surface zina={props.state} onClick={() => props.setState(2)}>
          {" "}
          SURFACE{" "}
        </Surface>
      </Planetmenu>
      <div>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

const Menu = styled.ul`
  transition-duration: 0.7s;
  text-decoration: none;
`;

const Category = styled.li`
  list-style: none;
  text-decoration: none;
  margin-left: 24px;
  margin-right: 24px;
  border-bottom: 1px solid  rgba(255, 255, 255, 0.1);
  height: 46px;
  display: flex;
  background-color: #070724;
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
`;

const Overview = styled.span<styleprops>`
  ${(props) => css`
    border-bottom: ${props.zina === 0 && "5px solid #ffffff"};
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`;

const Str = styled.span<styleprops>`
  ${(props) => css`
    border-bottom: ${props.zina === 1 &&
    `5px solid ${props.theme.footercolor}`};
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`;

const Surface = styled.span<styleprops>`
  ${(props) => css`
    border-bottom: ${props.zina === 2 &&
    `5px solid ${props.theme.footercolor}`};
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};
