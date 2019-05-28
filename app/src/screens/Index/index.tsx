import * as React from "react";
import {BrainItem, EyeItem, TouchItem, Item, MotionItem, Root, Row, VoiceItem} from "./styles";

import eyeImageSrc from "../../assets/images/eye.png";
import motionImageSrc from "../../assets/images/motion.jpg";
import brainImageSrc from "../../assets/images/brain.jpg";
import touchImageSrc from "../../assets/images/touch.jpeg";
import voiceImageSrc from "../../assets/images/voice.jpg";
import {useCallback} from "react";
import {RouteComponentProps} from "react-router";

interface IProps extends RouteComponentProps<{}> {}

const IndexScreen: React.FC<IProps> = (props) => {
  const handleEyeItemClick = useCallback(() => {
    props.history.push("/ogen");
  }, [props.history]);

  const handleBrainItemClick = useCallback(() => {
    props.history.push("/hersenen");
  }, [props.history]);

  const handleVoiceItemClick = useCallback(() => {
    props.history.push("/stem");
  }, [props.history]);

  const handleTouchItemClick = useCallback(() => {
    props.history.push("/touch");
  }, [props.history]);

  const handleMotionItemClick = useCallback(() => {
    props.history.push("/beweging");
  }, [props.history]);


  return (
    <Root>
      <Row>
        <Item>
          <EyeItem backgroundImageSrc={eyeImageSrc} onClick={handleEyeItemClick}>
            <p>OGEN</p>
          </EyeItem>
        </Item>
        <Item>
          <BrainItem backgroundImageSrc={brainImageSrc}>
            <p>HERSENEN</p>
          </BrainItem>
        </Item>
      </Row>
      <Row>
        <Item>
          <VoiceItem backgroundImageSrc={voiceImageSrc}>
            <p>STEM</p>
          </VoiceItem>
        </Item>
        <Item>
          <TouchItem backgroundImageSrc={touchImageSrc}>
            <p>AANRAKING</p>
          </TouchItem>
        </Item>
        <Item>
          <MotionItem backgroundImageSrc={motionImageSrc}>
            <p>BEWEGING</p>
          </MotionItem>
        </Item>
      </Row>
    </Root>
  )
};

export default IndexScreen;