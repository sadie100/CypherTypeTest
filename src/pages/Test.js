import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "components/base/Header";
import Page1 from "pages/test/Page1";

const Test = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/test/1" component={Page1} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Test;
