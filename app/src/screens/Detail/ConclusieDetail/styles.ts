import styled from "styled-components";
import backgroundImageSrc from "../../../assets/images/nui.jpg";

export const Root = styled.div`
  background-image: linear-gradient( rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95) ), url(${backgroundImageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.div`
  margin: 100px 15%;
  
  
  h1 {
    font-family: 'Playfair Display', serif;
    text-align: center;
    font-size: 72px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-family: 'Playfair Display', serif;
    //font-size: 26px;
    font-weight: 500;
    margin: 25px 0;
  }

  h3 {
    font-family: 'Playfair Display', serif;
    //font-size: 20px;
    font-weight: bold;
    margin: 25px 0;
  }
  
  p {
    margin: 10px 0;
  }
  
  ul {
    margin: 15px 30px;
    
    li {
      margin: 5px 0;
    }
  }
  
  img {
    margin: 10px;
  }
`;
