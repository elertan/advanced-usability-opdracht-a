import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #2a2a2a;
  color: whitesmoke;
`;

export const NavbarTitle = styled.h3`
  padding: 5px;
`;

export const NavItemsContainer = styled.div`
  margin: 0 20px;
`;

export const NavItem = styled(NavLink)`
  color: whitesmoke;
  text-decoration: none;
`;