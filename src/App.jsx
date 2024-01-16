import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import Calculator from "./components/Calculator";


const App = () => {

  const theme = {
    font: "'Poppins', sans-serif",
    text: "#F2E7E7",
    background: "#111010",
    primary: "#0E315B",
    secondary: "#4EA9FC",
    accent: "#B4A8A8",
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Calculator />
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
    font-size: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;