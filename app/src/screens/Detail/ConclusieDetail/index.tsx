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
          Om het gebruiksgemak van apparaten bij digibeten te bevorderen en dus toegankelijker te maken, is het belangrijk dat ze zich zo 
          min mogelijk hoeven aan te passen aan de gebruikte technologie. Om dit doel te bereiken zouden er meer machines ontwikkeld moeten 
          worden die reageren op bijvoorbeeld natuurlijke spraak en beweging en dus weinig tot geen interactie met schermen vereisen van de 
          gebruiker. Dit wordt ook wel Zero UI (geen interface, geen knoppen) genoemd. Zo zijn er apparaten die met behulp van 
          spraakherkenning en computer-intelligentie de natuurlijke taal van de mens gebruikt als input voor het uitvoeren van opdrachten bij 
          een apparaat. Een digibeet hoeft zich dan niet aan te passen en kan zijn eigen taal gebruiken om interacties uit te voeren. 
        </p>
        <p>
          Besturing van apparaten door middel van beweging kan bevorderd door de menselijke behoefte om te bewegen te integreren met apparaten 
          in plaats van het gebruik van een muis of toetsenbord, zodat mensen met minder verstand van technologie het ook makkelijk kunnen gebruiken. 
          Bij aanraking als input is het belangrijk dat deze aanraking met apparaten zo natuurlijk mogelijk aanvoelt, 
          zodat de gebruiker bijna niet het gevoel krijgt dat hij/zij bezig is apparaten en zo is het gebruik ervan ook minder intimiderend voor 
          digibeten. Natuurlijk is aanraking als input pas succesvol als de reactie op de aanraking ook een duidelijke visuele feedback doorgeeft 
          aan de gebruiker. 
          </p>
          <p>
          De bovengenoemde natuurlijke gebruikersinterfaces zijn ook toegankelijk in de zijn van betaalbaarheid, 
          omdat ze al vaak in alledaagse apparaten zoals televisies, mobieltjes en computers worden toegepast en dus voor de eindgebruiker al 
          redelijk gebruiksvriendelijk zijn gemaakt. Natuurlijke gebruikersinterfaces zoals besturing met hersenen of ogen zijn daarentegen 
          veel minder toegankelijker. Niet alleen vanwege de hoge kosten, maar ook qua toepassing is er nog weinig tot geen integratie mogelijk 
          met alledaagse apparaten, vanwege een gebrek aan gebruiksvriendelijkheid voor de normale eindgebruiker. Vooral besturing met hersenen 
          zit nog in zijn kinderschoenen en daar wordt nog veel mee geëxperimenteerd en onderzoek naar gedaan. Het zal nog een lange tijd duren 
          voordat deze technologie bij de eindgebruiker terecht kan komen voor een redelijke marktprijs. Hetzelfde geldt voor oogbesturing. 
          Ook hier zijn hoge kosten aan verbonden. Oogbesturing en besturing met hersenen zitten qua ontwikkeling in hetzelfde stadium. 
          Momenteel wordt deze twee technologieën alleen getest op gehandicapten die bijvoorbeeld hun ledematen niet kunnen gebruiken maar 
          wel hun ogen of hersenen en zo dus opdrachten kunnen geven aan een apparaa  door hun ogen of hersenen te gebruiken. 
          </p>
          <p>
          Besturing met de hersenen en ogen zijn ten opzichte van de andere natuurlijke gebruikersinterfaces het meest complex en duur, 
          omdat de hersenen op zichzelf een complex mechanisme is en het kunnen omzetten van oogbewegingen omzetten naar een signaal voor 
          een apparaat is ook een hele kunst. Maar wanneer deze technologieën eenmaal geïntegreerd kunnen worden in de apparaten die wij 
          dagelijks gebruiken (wat een hele lange tijd gaat duren naar onze mening), dan kunnen we de muis en het toetsenbord gedag zeggen. 
          Maar voordat dit echt realiteit kan worden, zouden er nog meer ontwikkelingen moeten plaatsvinden.
        </p>
        
      </Content>
    </Root>
  )
};

export default ConclusieDetail;