import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Test from "pages/Test";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyle from "styles/GlobalStyles";
import "assets/font/font.css";
import { StylesProvider } from "@mui/styles";
import Container from "components/base/Container";
import { store } from "store";
import { Provider } from "react-redux";
import Result from "pages/Result";
import Loading from "pages/Loading";

if (!window.Kakao.isInitialized()) {
  // JavaScript key를 인자로 주고 SDK 초기화
  window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  if (!window.Kakao.isInitialized()) {
    console.error("Kakao SDK 초기화 실패");
  }
}
ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={store}>
        <Router>
          <Switch>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CssBaseline />
              <Container>
                <Route exact path="/" component={Main} />
                <Route path="/test/:qs" component={Test} />
                <Route path="/loading" component={Loading} />
                <Route path="/result" component={Result} />
              </Container>
            </ThemeProvider>
          </Switch>
        </Router>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
