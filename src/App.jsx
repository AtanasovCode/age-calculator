import { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Calculator from "./components/Calculator";

import DayIcon from './assets/day.svg';
import NightIcon from './assets/night.svg';


const App = () => {

  const darkTheme = {
    font: "'Poppins', sans-serif",
    text: "#F2E7E7",
    accentText: "#B4A8A8",
    background: "#111010",
    primary: "#0E315B",
    secondary: "#4EA9FC",
    accent: "#B4A8A8",
  }

  const lightTheme = {
    font: "'Poppins', sans-serif",
    text: "#151515",
    accentText: "#716F6F",
    background: "#F0F0F0",
    primary: "#FFFFFF",
    secondary: "#854DFF",
    accent: "#B4A8A8",
  }

  const [theme, setTheme] = useState("night");

  const toggleTheme = (value) => {
    setTheme(value);
  }

  return (
    <ThemeProvider theme={theme === "night" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Calculator theme={theme} />

        <ThemeIcon src={DayIcon} value="day" theme={theme} onClick={() => toggleTheme("day")} />
        <ThemeIcon src={NightIcon} value="night" theme={theme} onClick={() => toggleTheme("night")} />
      </Container>
    </ThemeProvider>
  );
}

export default App;


/* Defining Global Styles */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.background};
    font-size: 14px;
    transition: all .3s ease;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ThemeIcon = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  position: absolute;
  bottom: ${props => props.value == "day" ? "8%" : "16%"};
  left: 2%;
  opacity: ${props => props.theme === props.value ? "1" : ".3"};
  filter: ${props => props.theme === "day" ? "invert(100%)" : "invert(0);"};
`;