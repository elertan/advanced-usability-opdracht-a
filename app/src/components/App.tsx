import React from 'react';
import {Root} from "./styles";
import {Route, Router} from "react-router";
import { createBrowserHistory } from 'history'
import IndexScreen from "../screens/Index";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Root>
      <Router history={history}>
        <Route exact path="/" component={IndexScreen} />
      </Router>
    </Root>
  );
};

export default App;
