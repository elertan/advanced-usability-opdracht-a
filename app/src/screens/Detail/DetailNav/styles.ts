import styled from "styled-components";
import backButtonImageSrc from "../../../assets/images/arrow-back.png";

export const Root = styled.div`
  height: 50px;
  display: flex;
  justify-items: center;
  padding: 15px;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s ease-out;
  
  &:hover {
    opacity: 1;
  }
  
  p {
    margin-left: 10px;
  }
`;

export const BackButton = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${backButtonImageSrc});
  background-size: contain;
  width: 50px;
  height: 25px;
`;
