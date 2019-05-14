import * as React from "react";
import {BrainItem, EyeItem, GestureItem, Item, MotionItem, Root, Row, VoiceItem} from "./styles";

import eyeImageSrc from "../../assets/images/eye.png";

const IndexScreen: React.FC = () => {
  return (
    <Root>
      <Row>
        <Item>
          <EyeItem style={{ backgroundImage: `url(${eyeImageSrc})` }}></EyeItem>
        </Item>
        <Item>
          <BrainItem></BrainItem>
        </Item>
      </Row>
      <Row>
        <Item>
          <VoiceItem></VoiceItem>
        </Item>
        <Item>
          <GestureItem></GestureItem>
        </Item>
        <Item>
          <MotionItem></MotionItem>
        </Item>
      </Row>
    </Root>
  )
};

export default IndexScreen;