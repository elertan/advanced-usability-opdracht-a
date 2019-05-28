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

interface IBaseItemProps {
  backgroundImageSrc: string;
}

const BaseItem = styled.div<IBaseItemProps>`
  flex: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${props => css`
    background-image: url(${props.backgroundImageSrc});
  `}
  opacity: 0.4;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
  
  p {
    font-size: 72px;
    text-transform: capitalize;
  }
`;

export const Item = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const EyeItem = styled(BaseItem)`
`;

export const BrainItem = styled(BaseItem)`
`;

export const VoiceItem = styled(BaseItem)`
`;

export const TouchItem = styled(BaseItem)`
`;

export const MotionItem = styled(BaseItem)`
`;
