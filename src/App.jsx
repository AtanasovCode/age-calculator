import styled, { createGlobalStyle, ThemeProvider } from "styled-components";


const App = () => {

  const theme = {
    background: "#222",
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container></Container>
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
    min-height: 100vh;
    background-color: ${props => props.theme.background};
  }
`;

const Container = styled.div``;