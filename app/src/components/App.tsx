import React from 'react';
import {Navbar, NavbarTitle, NavItem, NavItemsContainer, Root} from "./styles";
import {Route, Router} from "react-router";
import {createBrowserHistory} from 'history'
import IndexScreen from "../screens/Index";
import eyeImgSrc from "../assets/images/eye.png";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Root>
        {/*<Navbar>*/}
        {/*  <NavbarTitle>Advanced Usability: Opdracht A</NavbarTitle>*/}
        {/*  <NavItemsContainer>*/}
        {/*    <NavItem to="/">Home</NavItem>*/}
        {/*  </NavItemsContainer>*/}
        {/*</Navbar>*/}
        <Route exact path="/" component={IndexScreen}/>
      </Root>
    </Router>
  );
};

export default App;
