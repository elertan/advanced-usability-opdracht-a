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


        <h3>Antwoord op de hoofdvraag</h3>
        <p>
          Om het gebruiksgemak van apparaten bij digibeten te bevorderen, en dus toegankelijker te maken, is het belangrijk dat zij zich zo 
          min mogelijk hoeven aan te passen aan de gebruikte technologie. Om dit doel te bereiken zouden er meer machines ontwikkeld moeten 
          worden die reageren op bijvoorbeeld natuurlijke spraak en beweging, en dus weinig tot geen interactie met toetsenborden of schermen moeten vereisen van de 
          gebruiker. Dit wordt ook wel <i>Zero UI</i> (lees: geen interface, geen knoppen) genoemd. Zo zijn er apparaten die met behulp van 
          spraakherkenning en computer-intelligentie de natuurlijke taal van de mens gebruiken als input voor het uitvoeren van opdrachten bij 
          een apparaat. Een digibeet hoeft zich dan niet aan te passen en kan zijn eigen taal gebruiken om interacties uit te voeren. 
        </p>
        <p>
          Besturing van apparaten door middel van beweging kan worden bevorderd door de menselijke behoefte om te bewegen te integreren met apparaten, 
          in plaats van het gebruik van een muis of toetsenbord, zodat mensen met minder verstand van technologie het ook makkelijk(er) kunnen gebruiken. 
          Bij aanraking als input is het belangrijk dat deze aanraking met apparaten zo natuurlijk mogelijk aanvoelt, 
          zodat de gebruiker bijna niet het gevoel krijgt dat hij of zij bezig is met apparaten; zo is het gebruik ervan ook minder intimiderend voor 
          digibeten. Natuurlijk is aanraking als input pas succesvol als de reactie op de aanraking ook een duidelijke visuele feedback doorgeeft 
          aan de gebruiker. 
          </p>
          <p>
          De bovengenoemde natuurlijke gebruikersinterfaces zijn ook toegankelijk door de betaalbaarheid, 
          omdat deze al vaak in alledaagse apparaten zoals televisies, mobieltjes en computers worden toegepast, en deze dus voor de eindgebruiker al 
          redelijk gebruiksvriendelijk zijn gemaakt. Natuurlijke gebruikersinterfaces, zoals besturing met de hersenen of ogen, zijn daarentegen 
          veel minder toegankelijker. Niet alleen vanwege de hoge kosten, maar ook qua toepassing is er nog weinig tot geen integratie mogelijk 
          met alledaagse apparaten, vanwege een gebrek aan gebruiksvriendelijkheid voor de normale eindgebruiker. Vooral besturing met de hersenen 
          zit nog in zijn kinderschoenen en daar wordt nog veel mee geëxperimenteerd en onderzoek naar gedaan. Het zal nog een lange tijd duren 
          voordat deze technologie bij de eindgebruiker terecht kan komen voor een redelijke marktprijs. Hetzelfde geldt voor oogbesturing. 
          Ook hier zijn hoge kosten aan verbonden. Oogbesturing en besturing met de hersenen zitten qua ontwikkeling in hetzelfde stadium. 
          Momenteel worden deze twee technologieën alleen getest op gehandicapten, die bijvoorbeeld hun ledematen niet kunnen gebruiken maar 
          wel hun ogen of hersenen, en zo dus met ogen en hersenen opdrachten kunnen geven aan een apparaat. 
          </p>
          <p>
          Besturing met de hersenen en ogen zijn ten opzichte van de andere natuurlijke gebruikersinterfaces het meest complex en duur, 
          omdat de hersenen op zichzelf een complex mechanisme is, en het kunnen omzetten van oogbewegingen omzetten naar een signaal voor 
          een apparaat is ook al een hele kunst. Maar wanneer deze technologieën eenmaal geïntegreerd kunnen worden in de apparaten die wij 
          dagelijks gebruiken (wat een hele lange tijd gaat duren naar onze mening), dan kunnen we de muis en het toetsenbord gedag zeggen. 
          Maar voordat dit echt realiteit kan worden, zouden er nog meer ontwikkelingen moeten plaatsvinden: meer toepassingen verzinnen, geschikte software
          ervoor schrijven, en de gebruiksvriendelijkheid van de hardware te verhogen en de financiële kosten te verlagen. 
        </p>
        
      </Content>
    </Root>
  )
};

export default ConclusieDetail;