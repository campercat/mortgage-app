import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import "foundation-sites";
import $ from "jquery";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/applications" />
          </Route>
          <Route exact path="/applications" component={ApplicationsIndex}/>
        </Switch>

      </BrowserRouter>
  )
};

export default hot(App);
