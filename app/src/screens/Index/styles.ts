import styled, { css } from "styled-components";

export const Root = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #cbcbcb;
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
  border-style: solid;
  border-color: black;
  border-width: 1px;
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
    font-family: 'Playfair Display', serif;
    font-size: 72px;
    text-transform: capitalize;
  }
`;

export const Item = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const Nav = styled.div`
  background-color: #EEEEEE;
  display: flex;
  width: 100%
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 13%
  font-size: 20px;
  background-color: #fff;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  border-radius: 25px;
  &:hover {
    transform: scale(1.05);
    opacity: 1;
    background-color: #E1E1E1;
  }
  &:focus {
    outline:none;
  }
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
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

export const NavBar = styled(Nav)`
`;

export const BeautifulButton = styled(Button)`
`;

