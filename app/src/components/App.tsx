import React from 'react';
import {Route} from "react-router";
import {createBrowserHistory} from 'history'
import IndexScreen from "../screens/Index";
import OgenDetail from "../screens/Detail/OgenDetail";
import {CustomSwitch, Root} from "./styles";
import HersenenDetail from "../screens/Detail/HersenenDetail";
import StemDetail from "../screens/Detail/StemDetail";
import AanrakingDetail from "../screens/Detail/AanrakingDetail";
import BewegingDetail from "../screens/Detail/BewegingDetail";
import IntroDetail from "../screens/Detail/IntroDetail";
import ConclusieDetail from "../screens/Detail/ConclusieDetail";
import {HashRouter} from "react-router-dom";

// const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <HashRouter>
      <Root>
        <CustomSwitch>
          <Route exact path="/" component={IndexScreen}/>
          <Route exact path="/intro" component={IntroDetail}/>
          <Route exact path="/conclusie" component={ConclusieDetail}/>
          <Route exact path="/ogen" component={OgenDetail}/>
          <Route exact path="/hersenen" component={HersenenDetail}/>
          <Route exact path="/stem" component={StemDetail}/>
          <Route exact path="/aanraking" component={AanrakingDetail}/>
          <Route exact path="/beweging" component={BewegingDetail}/>
        </CustomSwitch>
      </Root>
    </HashRouter>
  );
};

export default App;
