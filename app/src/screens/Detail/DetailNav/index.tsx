import * as React from "react";
import {RouteComponentProps} from "react-router";
import {useCallback} from "react";
import {Root, BackButton, BackButtonContainer} from "./styles";

interface IProps extends RouteComponentProps<{}> {}

const DetailNav: React.FC<IProps> = (props) => {
  const handleBackClick = useCallback(() => {
    props.history.goBack();
  }, [props.history]);

  return (
    <Root>
      <BackButtonContainer onClick={handleBackClick}>
        <BackButton />
        <p>Ga Terug</p>
      </BackButtonContainer>
    </Root>
  )
};

export default DetailNav;