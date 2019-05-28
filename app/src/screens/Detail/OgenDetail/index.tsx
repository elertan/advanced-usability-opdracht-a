import * as React from "react";
import DetailNav from "../DetailNav";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

interface IProps extends RouteComponentProps<{}> {}

const OgenDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>OGEN</h1>

        <h2>Introductie</h2>
        <p>
          Eye tracking wordt gebruikt als een methode om de visuele aandacht van individuen te bestuderen. Eye tracking verwijst naar het proces van het meten van oog activiteiten. Waar kijken we naar? Wat negeren we? Wanneer knipperen we? Deze metingen worden uitgevoerd door een eye-tracker, die de positie van de ogen en de bewegingen die ze maken registreert. Deze data kan bijvoorbeeld gebruikt worden om interfaces met de ogen te besturen.
        </p>
        
        <h2>Hoe werkt de achterliggende techniek?</h2>
        <p>
          Eye tracking data wordt verzameld door het gebruik van een scherm gebaseerde eye tracker of een draagbare eye tracker. In de eye tracker zitten een aantal componenten die erg belangrijk zijn voor de techniek om goed te kunnen werken. De eye trackers bevatten over het algemeen twee veel voorkomende componenten: een lichtbron en een camera.        
        </p>
        <p>
          De lichtbron (infrarood) is gericht op het oog. Dit zorgt ervoor dat er een reflectie ontstaat in de pupil en het hoornvlies. De camera volgt de reflectie van de lichtbron samen met zichtbare kenmerken van het oog zoals de pupil. Deze gegevens worden gebruikt om de rotatie van het oog en uiteindelijk de richting van de blik te achterhalen. Aanvullende informatie zoals knipperfrequentie en veranderingen in pupildiameter worden ook gedetecteerd door de eye-tracker.
        </p>

        <h2>Voor welke toepassingen wordt het gebruikt?</h2>
        <p style={{fontWeight:"bold"}}>
          Usability/UX onderzoek (voor websites)  
        </p>
        <p>
          Dankzij eye-tracking is het mogelijk om een inzicht te krijgen in het gedrag van de gebruikers. Zodra een gebruiker een webpagina bezoekt, kun je zien waar de gebruiker naar kijkt op de website. Het eye tracking device concentreert zich op de pupil van het oog van de gebruiker en scant de richtingen en concentratie van zijn blik. De software genereert de gegevens over deze acties in de vorm van heatmaps.
        </p>
        <p>
          Heatmaps geven aan waar de gebruiker zijn blik op focust en hoe lang hij naar een bepaald punt staart. Over het algemeen geeft een kleurenschaal die van blauw naar rood beweegt de duur van de focus aan. Een rode vlek op een gedeelte van uw pagina kan dus aangeven dat een deelnemer of een groep deelnemers zich voor een langere periode op dit deel van een pagina heeft gericht.
        </p>
        <p>
          Met deze informatie kun je achterhalen welke onderdelen van een website veel aandacht trekken en welke juist niet. Hierdoor kunnen er vervolgens aanpassingen gemaakt worden om de website te verbeteren.
        </p>
      </Content>
    </Root>
  )
};

export default OgenDetail;