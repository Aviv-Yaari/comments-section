import GlobalStyle from "./assets/styles/GlobalStyle";
import * as Style from "./App.styled";
import CommentList from "./components/CommentList/CommentList";
import { ThemeProvider } from "styled-components";
import lightTheme from "./assets/styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Style.MainContainer>
          <CommentList />
        </Style.MainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
