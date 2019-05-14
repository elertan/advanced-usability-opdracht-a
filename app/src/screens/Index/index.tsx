import * as React from "react";
import {BrainItem, EyeItem, GestureItem, Item, MotionItem, Root, Row, VoiceItem} from "./styles";

import eyeImageSrc from "../../assets/images/eye.png";
import motionImageSrc from "../../assets/images/motion.jpg";
import brainImageSrc from "../../assets/images/brain.jpg";
import gestureImageSrc from "../../assets/images/gesture.jpg";
import voiceImageSrc from "../../assets/images/voice.jpg";

const IndexScreen: React.FC = () => {
  return (
    <Root>
      <Row>
        <Item>
          <EyeItem style={{ backgroundImage: `url(${eyeImageSrc})` }}></EyeItem>
        </Item>
        <Item>
          <BrainItem style={{ backgroundImage: `url(${brainImageSrc})` }}></BrainItem>
        </Item>
      </Row>
      <Row>
        <Item>
          <VoiceItem style={{ backgroundImage: `url(${voiceImageSrc})` }}></VoiceItem>
        </Item>
        <Item>
          <GestureItem style={{ backgroundImage: `url(${gestureImageSrc})` }}></GestureItem>
        </Item>
        <Item>
          <MotionItem style={{ backgroundImage: `url(${motionImageSrc})` }}></MotionItem>
        </Item>
      </Row>
    </Root>
  )
};

export default IndexScreen;