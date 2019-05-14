import * as React from "react";
import styled from "styled-components";

export const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
`;

const BaseItem = styled.div`
  flex: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.2);
  }
`;

export const Item = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const EyeItem = styled(BaseItem)`
  //background-color: red;
`;

export const BrainItem = styled(BaseItem)`
  //background-color: green;
  background-color: white;
`;

export const VoiceItem = styled(BaseItem)`
  background-color: blue;
`;

export const GestureItem = styled(BaseItem)`
  background-color: yellow;
`;


export const MotionItem = styled(BaseItem)`
  background-color: purple;
`;
