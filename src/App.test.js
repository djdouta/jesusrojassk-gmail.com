import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import Test1 from "./screens/Test1";
import Test2 from "./screens/Test2";
import { Provider } from "react-redux";
import reduxStore from "./store/index";

it("Should render", () => {
  const wrapper = shallow(
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test1" component={Test1} />
          <Route exact path="/test2" component={Test2} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
});
