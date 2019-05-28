import * as React from "react";
import {BrainItem, EyeItem, TouchItem, Item, MotionItem, Root, Row, VoiceItem} from "./styles";

import eyeImageSrc from "../../assets/images/eye.png";
import motionImageSrc from "../../assets/images/motion.jpg";
import brainImageSrc from "../../assets/images/brain.jpg";
import touchImageSrc from "../../assets/images/touch.jpeg";
import voiceImageSrc from "../../assets/images/voice.jpg";

const IndexScreen: React.FC = () => {
  return (
    <Root>
      <Row>
        <Item>
          <EyeItem backgroundImageSrc={eyeImageSrc} />
        </Item>
        <Item>
          <BrainItem backgroundImageSrc={brainImageSrc} />
        </Item>
      </Row>
      <Row>
        <Item>
          <VoiceItem backgroundImageSrc={voiceImageSrc} />
        </Item>
        <Item>
          <TouchItem backgroundImageSrc={touchImageSrc} />
        </Item>
        <Item>
          <MotionItem backgroundImageSrc={motionImageSrc} />
        </Item>
      </Row>
    </Root>
  )
};

export default IndexScreen;