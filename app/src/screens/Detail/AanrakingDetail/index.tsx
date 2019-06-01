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
          Aanraakschermen zijn op het moment een veel gebruikte techniek om interactie tussen gebruiker en apparaat te bewerkstelligen.
          Aanraakschermen vallen onder de noemer van <i>touch</i> technologie, ofwel aanraaktechnologie.
          Onder deze technologie verstaan we het <i>aanraken</i> van elementen op het beeldscherm en/of het gebruik van bepaalde vingerbewegingen met betrekking tot het beeldscherm.
          Waarom wordt <i>touch</i> zo veel gebruikt voor hedendaagse interactie met mobiele (<i>smartphone</i>, tablet) en vaste apparaten (pinautomaten, betalingsautomaten)?
          En hoe werkt deze techniek?
        </p>

        <h2>Hoe werkt de achterliggende techniek?</h2>
        <p>
          Er zijn meerdere vormen van aanraakschermen, met ieder hun eigen manier van het herkennen van de vingeraanrakingen en vingerbewegingspatronen die op het scherm gebruikt worden [1].
          Een aantal voorbeelden van de drie meest bekende werkingsvormen van aanraakschermen zijn:
        </p>
        <ul>
          <li>Weerhoudend</li>
          <li>Capacitief</li>
          <li>Licht-intensiteit metend</li>
        </ul>
        <h4>Weerhoudende schermen</h4>
        <p>
          Een weerhoudend scherm (zie foto hieronder) is gevoelig voor een bepaalde kracht bij het drukken op het scherm. Dit zorgt ervoor dat de buitenste laag van het scherm de onderliggende laag aanraakt.
          Deze techniek wordt vooral veel gebruikt bij pinautomaten en (oude) systemen bij supermarkten, zoals flessenmachines.
        </p>
        <img src={weerhoudendSchermImageSrc} />
        <p><i>Werking van een weerhoudend scherm. Het indrukken van het scherm (7) op een bepaalde plek geeft een bepaalde instructie door aan het apparaat (8). </i></p>
        
        <h4>Capacitieve schermen</h4>

        <p>
          Een capacitief scherm (zie foto hieronder) heeft voortdurend een hele kleine hoeveelheid elektrische stroom over het beeld lopen.
          Zodra u met uw vinger het beeld aanraakt, herkent het beeld de veranderingen in de elektrische stroom en resulteert dit in een bepaalde instructie naar het apparaat.
          Voorbeelden van instructies: het openen van een programma, een bepaalde optie in een menu kiezen en/of een keuze bevestigen of annuleren.
        </p>
        <img src={capacitiefSchermImageSrc} />
        <p><i>Werking van een capacitief scherm. 
        Het aanraken van het scherm zorgt voor een tijdelijke plaatselijke verstoring in het elektrische veld en hieruit wordt een instructie voor het apparaat geinterpreteerd.</i></p>

        <h4>Licht-intensieve schermen</h4>
        <p>
          Een licht-intensief beeld herkent de veranderingen in de licht-intensiteit op het beeld,
          waarbij het plaatsen van een vinger op het beeld zorgt lokaal minder lichtval. Uit deze lokale vermindering van de lichtval kan een instructie voor het apparaat worden geinterpreteerd.
        </p>
        <img src={lichtIntensiteitSchermImageSrc} />
        <p><i>Werking van een licht-intensief scherm. Veranderingen in de lichtval op het scherm door aanrakingen zorgen voor instructies naar het apparaat.</i></p>

        <p>
          Elk van deze vormen van <i>touch</i> technologie wordt uiteindelijk op dezelfde manier toegepast. 
          Ze zijn allemaal gebaseerd op het gebruik van de vingers om interactie te kunnen bieden aan de gebruiker.
        </p>

        <h2>Waarom wordt aanraking zoveel gebruikt voor hedendaagse interactie met apparaten?</h2>
        <p>
          Interactie met de vingers op de mobiele telefoon of tablet voelt intuitief aan, en dat is waar een Natural User Interface (NUI) ook precies voor staat [2]. 
          Dit kan ook worden gezien aan de massale adoptie van smartphones en hun aanraakschermen. Telefoons met toetsenbord zijn snel uit de gratie geraakt.  
        </p>
        <p>
          Sinds dat de mobiele telefoon met aanraakscherm op de markt is gebracht, is het gebruik van aanraking als NUI flink gestegen.
          Bijna iedereen bezit sindsdien wel minimaal één apparaat dat met alleen vingeraanrakingen kan worden bestuurd.
        </p>

        <h2>Bronnen</h2>
        <ul className="bron">
          <li>
            [1] McCan, A. T. (2012). <i>Okay, but how do touch screens actually work?</i> 
            <br/>Geraadpleegd op 31 Mei 2019, van: https://scienceline.org/2012/01/okay-but-how-do-touch-screens-actually-work/
          </li>
          <li>
            [2] Froehlich, J., Wobbrock J. O., Kane S. K. et al. (2012). <i>Barrier Pointing: Using Physical Edges to Assist Target Acquisition on Mobile Device Touch Screens </i>
              <br/>Geraadpleegd 1 Juni 2019, 
            van: https://makeabilitylab.cs.washington.edu/media/publications/Barrier_pointing_using_physical_edges_to_assist_target_acquisition_on_mobile_device_touch_screens_kPwjyzS.pdf
          </li>
        </ul>
      </Content>
    </Root>
  )
};

export default AanrakingDetail;
