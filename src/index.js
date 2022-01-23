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

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <CssBaseline />
            <Container>
              <Route exact path="/" component={Main} />
              <Route path="/test" component={Test} />
            </Container>
          </ThemeProvider>
        </Switch>
      </Router>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
