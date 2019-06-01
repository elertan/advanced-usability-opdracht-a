import * as React from "react";
import DetailNav from "../DetailNav";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

interface IProps extends RouteComponentProps<{}> {}

const ConclusieDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>Conclusie</h1>

        <h2>Resultaten</h2>
        <h3>Onderzoeksvraag</h3>
        <p>
        Hoofdvraag: Hoe kunnen NUI’s bijdragen aan meer toegankelijkheid voor digibeten?
        </p>
        <p>
        De eerste twee deelvragen beschrijven de <i>actuele technologie</i> en de laatste twee deelvragen de <i>usability en 
        gebruikerservaring van NUI.</i>
        </p>

        <h3>Stem</h3>
        <p>
        Hieronder is bullshit text natuurlijk :P maar er moest even wat staan :) Succes ermee :D
        Dit onderzoek is vooral gericht op het vergaren van kennis over verschillende 
        zogenaamde Natural User Interfaces (NUIs) zodat technologie meer toegankelijk 
        kan worden gemaakt voor digibeten in onze samenleving. 
        Denk hierbij vooral aan senioren (65+) en de brede leeftijdsgroep daaronder (40-65), 
        waarin momenteel veel van onze ouders vallen. Volgens het Centraal Bureau voor de Statistiek (CBS) 
        heeft 6% van de Nederlands samenleving nog nooit internet gebruikt [1]. 
        Verreweg het grootste deel van dit percentage bestaat uit burgers ouder dan 45 jaar. 
        Uiteraard kan dit komen door simpelweg een gebrek aan interesse in moderne technologieën, 
        maar wij vermoeden ook dat het komt door een (waargenomen) hoge drempel 
        om met vreemde apparaten en technologieën te beginnen. Deze kunnen variëren van desktop/laptop computers tot aan deurbel intercoms. 
        </p>
        <h3>Hersenen</h3>
        <h3>Beweging</h3>
        <h3>Ogen</h3>
        <h3>Aanraking</h3>

        <h2>Antwoord op de hoofdvraag</h2>
        <p>Apparaten moeten de taal, gebaren, geluiden, bewegingen van de mens beter leren begrijpen, meer onderzoeken, 
          meer experimentern blabla,,...
        </p>
        
      </Content>
    </Root>
  )
};

export default ConclusieDetail;