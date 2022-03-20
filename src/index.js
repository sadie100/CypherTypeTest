import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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

// const k_key = "aa16d24db6390013864861c4ec278c95";
// if (!window.Kakao.isInitialized()) {
//   // JavaScript key를 인자로 주고 SDK 초기화
//   window.Kakao.init(k_key);
//   // SDK 초기화 여부를 확인하자.
//   console.log(window.Kakao.isInitialized());
// }
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
                {/* <Redirect path="/test" to="/test/1" /> */}
              </Container>
            </ThemeProvider>
          </Switch>
        </Router>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
