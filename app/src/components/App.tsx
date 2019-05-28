import React from 'react';
import {Route, Router} from "react-router";
import {createBrowserHistory} from 'history'
import IndexScreen from "../screens/Index";
import OgenDetail from "../screens/Detail/OgenDetail";
import {CustomSwitch, Root} from "./styles";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Root>
        <CustomSwitch>
          <Route exact path="/" component={IndexScreen}/>
          <Route exact path="/ogen" component={OgenDetail}/>
          <Route exact path="/hersenen" component={IndexScreen}/>
          <Route exact path="/stem" component={IndexScreen}/>
          <Route exact path="/aanraking" component={IndexScreen}/>
          <Route exact path="/beweging" component={IndexScreen}/>
        </CustomSwitch>
      </Root>
    </Router>
  );
};

export default App;
