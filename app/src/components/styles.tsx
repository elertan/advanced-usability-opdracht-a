import * as React from "react";
import styled from "styled-components";
const { AnimatedSwitch } = require('react-router-transition');

export const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CustomSwitchComp: React.FC = (props) => {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}

      {...props}
    />
  );
}

export const CustomSwitch = styled(CustomSwitchComp)`
  position: relative;
  flex: 1;
  display: flex;
  
  > div {
    position: absolute;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;
