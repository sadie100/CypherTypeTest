import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./containers/Main";
import FirstPage from "./FirstPage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "styles/theme";
import CssBaseline from "@mui/material/CssBaseline";
import "assets/font/font.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Route path="/main">
            <Main />
          </Route> */}
          <Route path="/">
            <Main />
          </Route>
        </ThemeProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
