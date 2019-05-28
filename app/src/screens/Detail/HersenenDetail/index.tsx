import * as React from "react";
import DetailNav from "../DetailNav";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

interface IProps extends RouteComponentProps<{}> {}

const HersenenDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>HERSENEN</h1>

        <p>
          Hier staat een stukje introductie
        </p>

        <h2>Wat maakt hersenen speciaal?</h2>
        <p>
          Blablabla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam assumenda aut ducimus et exercitationem impedit iste nemo, optio perspiciatis placeat quod rem totam veniam, voluptate voluptates voluptatibus. Alias, id.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nihil quae tempore. Amet atque delectus deleniti eum explicabo impedit incidunt, inventore maiores, nemo quos rem sed tenetur totam, veritatis vitae!
        </p>
      </Content>
    </Root>
  )
};

export default HersenenDetail;