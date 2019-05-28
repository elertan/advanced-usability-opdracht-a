import styled, { css } from "styled-components";

export const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
`;

const BaseItem = styled.div<{ backgroundImageSrc: string }>`
  flex: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${props => css`
    linear-gradient( rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) ), url(${props.backgroundImageSrc});
  `}
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.2);
    ${props => css`
      linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.backgroundImageSrc});
    `}
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

export const TouchItem = styled(BaseItem)`
  background-color: yellow;
`;


export const MotionItem = styled(BaseItem)`
  background-color: purple;
`;
