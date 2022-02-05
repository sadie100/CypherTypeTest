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
                <Redirect path="/test" to="/test/1" />
              </Container>
            </ThemeProvider>
          </Switch>
        </Router>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
