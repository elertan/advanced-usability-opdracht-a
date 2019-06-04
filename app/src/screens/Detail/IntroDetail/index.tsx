import * as React from "react";
import DetailNav from "../DetailNav";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

interface IProps extends RouteComponentProps<{}> {}

const IntroDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>Introductie</h1>
        <h2>Deelnemers <b>Team Rocket</b></h2>
        <p>
          <ul>
            <li>Niels van Sint Annaland (0949369)</li>
            <li>Dennis Kievits (0946572)</li>
            <li>Chia-Nien van de Ruit (0896950)</li>
            <li>Nofit Kartoredjo (0942332)</li>
            <li>Robrecht Cornelis (0863028)</li>
          </ul>
        </p>
        <h2>Inleiding</h2>
        <p>
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
        <h2>Doelstelling</h2>
        <p>
        Wij willen met onze onderzoeksvragen per NUI de technologie kunnen uitleggen en verklaren voor mensen met zeer weinig interesse, 
        ervaring en/of kennis van moderne (computer)technologie. Het einddoel is om digibeten in te lichten over de interactiemogelijkheden 
        van NUIs, om zo de drempel tot moderne technologie te verlagen en eventueel de interesse te vergroten.   
        </p>
        <h2>Probleemstelling</h2>
        <p>
        De leeftijdsgroepen 40-65 en 65+ bevatten verreweg de meeste digibeten in de Nederlandse samenleving [1]. 
        Wij vermoeden dat dit komt door een waargenomen hoge drempel om met moderne technologieën te beginnen. 
        Hoe kan deze drempel worden verlaagd met gebruik van NUIs als brein -en oogactiviteitbesturingen, handgebaren, 
        motion tracking en spraakherkenning? 
        </p>
        <h2>Doelgroep</h2>
        <p>
         Dit onderzoeksrapport is geschreven over én voor de leeftijdsgroepen 40-65 en 65+. 
         Vanwege de materie willen wij het taalgebruik relatief simpel houden en dagelijkse 
         voorbeelden gebruiken om onderwerpen toe te lichten. Zo gebruiken we vanaf nu zo min mogelijk 
         Engelse termen en benamingen, en leggen wij technologische termen uit met veelvuldig dagelijks taalgebruik.
        </p>
        <h2>Onderzoeksmethode</h2>
        <p>
         Voor het vinden van informatie over de verschillende NUIs en hun toepassingen, 
         wordt er tijdens dit onderzoek overwegend literatuuronderzoek toegepast. 
         De gebruikte bronnen hiervoor zijn onder andere afkomstig van wetenschappelijke websites als IEEExplore, 
         Google Scholar, arXiv (spreek uit: Archive), maar dus ook het CBS. Zie de bronnenlijst voor een overzicht van alle bronnen.
        </p>
        <h2>Onderzoeksvraag en deelvragen</h2>
        <p>
        Hoofdvraag: Hoe kunnen NUI’s bijdragen aan meer toegankelijkheid voor digibeten?
        </p>
        <p>
        Deelvragen: <br/>
            <ul>
              <li>Hoe werkt de achterliggende techniek?</li>
              <li>Voor welke toepassingen wordt het gebruikt?</li>
              <li>Hoe gebruiksvriendelijk zijn Nui’s?</li>
              <li>Hoe kunnen bestaande technologieën hiermee toegankelijker worden?</li>  
          </ul>
         
        </p>
        <p>
        De eerste twee deelvragen beschrijven de <i>actuele technologie</i> en de laatste twee deelvragen de <i>usability en 
        gebruikerservaring van NUI.</i>
        </p>
        <p>
        Bij de laatste deelvraag worden aanbevelingen gedaan om de betreffende technologie toegankelijker te maken voor digibeten.
        </p>
        <h2>Bronnen (Inleiding)</h2>
        <ul className="bron">
            <li>
            [1] CBS (2019). <i>Zes procent nooit op internet</i>
            <br/>
            Geraadpleegd op: 13-05-2019, van:
            https://www.cbs.nl/nl-nl/nieuws/2019/01/zes-procent-nooit-op-internet
            </li>
        </ul>
       
        
      </Content>
    </Root>
  )
};

export default IntroDetail;