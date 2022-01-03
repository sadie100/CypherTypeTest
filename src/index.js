import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './containers/Main';
import FirstPage from './FirstPage';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    spindle : '#B6D0ED',
    mantis : '#80C573',
  }
});


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route path="/main">
            <Main />
          </Route>
          {/* <Route path="/FirstPage/:clickstate">
            <FirstPage />
          </Route> */}
        </ThemeProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

