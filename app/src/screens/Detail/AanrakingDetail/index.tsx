import * as React from "react";
import DetailNav from "../DetailNav";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

import weerhoudendSchermImageSrc from "../../../assets/images/weerhoudend-scherm.jpg";
import capacitiefSchermImageSrc from "../../../assets/images/capacitief-scherm.gif";
import lichtIntensiteitSchermImageSrc from "../../../assets/images/licht-intensiteit-scherm.gif";

interface IProps extends RouteComponentProps<{}> {}

const AanrakingDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>AANRAKING</h1>

        <h2>Introductie</h2>
        <p>
          Een op moment veel gebruikte techniek om interactie met de applicatie te creëren wordt onder andere gedaan door het gebruik van Touch technologie.
          Onder Touch verstaan we het aanraken van elementen op het beeld en/of het gebruik van bepaalde bewegingen met betrekking tot het beeld.
          Waarom wordt touch zo veel gebruikt voor hedendaagse interactie met mobiele apparaten?
          Hoe werkt deze techniek?
          Meer hierover is te lezen op deze pagina.
        </p>

        <h2>Hoe werkt Touch?</h2>
        <p>
          Er zijn meerdere vormen van touch schermen, die ieder hun eigen manier van het herkennen van vingers op het scherm gebruiken.
          Zo zijn er bijvoorbeeld 3 bekende vormen van touch schermen.
        </p>
        <ul>
          <li>Weerhoudend</li>
          <li>Capacitief</li>
          <li>Licht-intensiteit metend</li>
        </ul>
        <h4>Weerhoudende schermen</h4>
        <p>
          Een weerhoudend scherm is gevoelig voor een bepaalde kracht bij het drukken op het scherm, wat er voor zorgt dat de buitenste laag van het scherm de onderliggende laag aanraakt.
          Deze techniek wordt vooral veel gebruikt bij pinautomaten en oude systemen bij supermarkten.
        </p>
        <img src={weerhoudendSchermImageSrc} />
        <h4>Capacitieve schermen</h4>
        <p>
          Een capacitief scherm heeft een heel licht
        </p>
        <img src={capacitiefSchermImageSrc} />


        <h4>Licht-intensieve schermen</h4>
        <p>
          Een capacitief scherm heeft een heel licht
        </p>
        <img src={lichtIntensiteitSchermImageSrc} />

        <h2>Waarom wordt touch zo veel gebruikt voor hegendaagse interactie met mobiele apparaten?</h2>
      </Content>
    </Root>
  )
};

export default AanrakingDetail;
