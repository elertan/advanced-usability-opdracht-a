import * as React from "react";
import DetailNav from "../DetailNav";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

import pic1 from "../../../assets/images/bmpic1.jpg";
import pic2 from "../../../assets/images/bmpic2.jpg";
import pic3 from "../../../assets/images/bmpic3.jpg";
import pic4 from "../../../assets/images/bmpic4.jpg";
import pic5 from "../../../assets/images/bmpic5.jpg";
import pic6 from "../../../assets/images/bmpic6.jpg";
import pic7 from "../../../assets/images/bmpic7.jpg";
import pic8 from "../../../assets/images/bmpic8.jpg";

interface IProps extends RouteComponentProps<{}> {}

const BewegingDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>BEWEGING</h1>

        <h2>Introductie</h2>
        <p>
        Mensen zijn actieve wezens. Ze lopen, rennen, zwaaien, gebaren maken enzovoort. Met andere worden, mensen houden van bewegen, ze hebben hun eigen lot in handen. Als je echter tv kijk dan heb je best wel weinig variatie in beweging. Het enige wat je doet is op je afstandsbediening een knopje indrukken. Best wel saai. Wat nou als we beweging in je tv ervaring integreren? Misschien maakt het wat interessanter? En waarom stoppen bij jou thuis? Kunnen we beweging gebruiken voor andere dingen. Gek genoeg, we zijn nu bezig om beweging en technologie samen te voegen.
        </p>
        <h2>Hoe werkt het?</h2>
        <p>
        De achterliggende gedachten van bewegingswaarneming is het observeren van beweging. Het waarnemen van beweging wordt door sensoren gedaan. Elke soort sensor geeft een bepaalde frequentie af die uiteindelijk in contact komen met voorwerpen en/of mensen. Hiermee kan de sensor beweging detecteren.
        </p>

        <li>Infrarood</li>
        <p>De hoofd gedachte achter infrarood detectie is de waarnemen van lichaamstemperatuur van warmbloedige, waaronder mensen. Het is de meest makkelijk en goedkope manier voor het waarnemen van beweging, maar omdat het hitte detecteert kan het makkelijk in de war raken bij hoge temperatuur. Het is één van de meest gebruikt vorm van bewegingswaarneming. </p>
        <img style={{width:300, height:150}} src={pic1} />
        <li>Microgolf en ultrasonisch</li>
        <p>Deze twee sensoren werken ongeveer hetzelfde. Allebei geven golf pulsen af die reflecteren op voorwerpen. Bewegende objecten zorgen ervoor dat frequentie van de gereflecteerde golven verandert, een fenomeen genaamd de Doppler effect. De sensor meet het frequentie verschil tussen de uitgezonden golven en de gereflecteerde golven. Als dat verschil een drempel bereikt, dan geeft de sensor in signaal. De actie daarna hangt af van het programma. Het enige verschil tussen de microgolf en ultrasonisch is de frequentie van de golven.</p>
        <li>Tomografisch</li>
        <p>Bij de tomografie wordt er gebruik gemaakt van radiogolven. Sinds radiogolven door massa heen kan gaan hebben tomografische sensoren het vermogen om beweging door muren waar te nemen. Het is wel erg duur, dus het wordt schaars gebruikt.</p>
        <li>Combinatie</li>
        <p>Het is mogelijk om sensoren met elkaar te combineren. Een bekende combinatie is de microgolf sensor met een infrarood sensor. Dit is handig om fouten te vermijden, sinds beide sensoren iets anders opvangen.[1][2][3]</p>

        <h2>Waarbij wordt het gebruikt?</h2>
        <p>Tegenwoordig wordt beweging detectie vaak gebruikt, waaronder beveiliging en media. </p>
        <img style={{width:300, height:150}} src={pic2} />
        <h3>Kinect</h3>
        <p>Een bekende computerspel is de xbox Kinect. Hoewel het financieel faalde, de Kinect’s technologie met bewegingsdetectie is erg geavanceerd. De Kinect maak gebruik van infrarood sensoren die in de camera zit. De software van het apparaat is het belangrijkste gedeelte. Hierin is er allemaal data verzameld van allerlei bewegende object. Deze data wordt gebruikt als vergelijking voor de Kinect als het de gebruiker waarneemt. De Kinect scant zogezegd de gebruiker, vergelijkt het met de data die opgeslagen, en geeft afhankelijk daarvan een 3d model van speler weer. Dit gebeurt 30 keer per seconde, dit zorgt ervoor dat alles vloeiend lijkt.[4]</p>
        <img style={{width:200, height:150}} src={pic3} />
        <h3>Wii</h3>
        <p>Nintendo’s Wii is een pioneer voor de integratie van beweging in video games. De integratie van bewegingsdetectie op de Wii hangt van twee dingen, de Wii-controller en de sensor bar. Net als de Kinect maakt de Wii gebruik van infrarode golven voor het waarnemen. De sensor geeft op twee punten infrarood licht af, dit zijn de grenzen voor de Wii controller. In de Wii controller zit een infrarood camera die het licht van de sensorbar kan lezen. De connectie tussen de Wii controller en de sensor zorgt voor de bewegingsinteractie met het scherm van de Wii.[5]</p>
        <img style={{width:150, height:150}} src={pic4} /> <img style={{width:300, height:150}} src={pic5} />
        <h3>Motion capture</h3>
        <p>In de entertainment industrie wordt er gebruikt gemaakt van een bewegingsdetectie techniek genaamd motion capture. Als je motion capture hoort, dan denk je vast aan mensen in gekke pakken met witte balletjes op hun gezicht. Deze dingen zijn nodig voor motion capture. Bij motion capture volgt het systeem de beweging van de acteur, zowel lichaam als gezicht, en zet het digitaal om in de computer in de vorm van een digitaal skelet. Dit skelet wordt dan gebruikt voor de animatie voor een film of videogame. De resultaten kunnen altijd verschillen van succes, maar het is effectieve methoden om materiaal te verkrijgen.[6]</p>
        <img style={{width:150, height:150}} src={pic6} /> <img style={{width:250, height:150}} src={pic7} />

        <h2>Hoe gebruiksvriendelijk is het?</h2>
        <p>Zoals er eerder is gezegd wordt bewegingswaarneming vaak gebruikt in entertainment. Van computerspellen tot tv’s, gebruikers kunnen via beweging interacteren met hun digitale apparaten. </p>
        <p>Even terug naar de Wii. Het gebruik van de Wii is erg simpel. De sensor moet onder of boven de tv scherm zijn. Met wat kalibratie kan de gebruiker de Wii controller op het tv scherm richten zodat er een cursor verschijnt en zo kan interacteren met het scherm. De Wii controller werkt zo als een afstandsbediening, iets waarmee de meeste mensen bekend mee zijn. Ook kunnen gebruikers met de controller zwaaien voor interactie bij de meeste computerspellen.</p>
        <p>De Samsung Smart tv is een apparaat die ook goed gebruik maak van de bewegingsinteractie op een gebruiksvriendelijke manier. Op de tv zelf zit een camera die de hand van de gebruiker herkent. Een open hand is nodig voor het navigeren op het scherm terwijl een gesloten nodig is voor selecteren, twee gebaren die ieder mens kan maken, tenzij ze alle tien de vingers missen, dan wordt het wat lastiger.[7]</p>
        <img style={{width:300, height:200}} src={pic8} />

        <h2>Hoe kan je het minder confronterend maken voor digibeten?</h2>
        <p>Mensen bewegen, dat is normaal. Mensen moeten hun energie kwijt, of maken gebaren voor communicatie. Beweging is heel normaal. Door het te integreren met apparatuur zoals tv’s zorgt ervoor dat mensen die minder verstand ervan hebben toch makkelijk gebruik van maken.</p>
        <p>Zoals bijvoorbeeld de Samsung Smart tv. De smart tv geeft men de mogelijkheid om te navigeren zonder gebruik van de afstandsbediening, en dus veel makkelijker en simpeler ermee gaan. Nu hoeven mensen niet meer druk te maken over vele knopjes.</p>
        <p>Uiteindelijk kunnen we deze technologie uitbreiden. Voor je het weet kunnen meerdere mensen een UI gebruiken zonder een keyboard en/of muis te delen. Ook kunnen we voor meer interactie met onze entertainment zorgen.</p>

        <h2>Bronnen</h2>
        <p>
          <li>
            [1] ecosirius (2013). Technology compraison of motion sensors
            Geraadpleegd op 29-5-2019, van :
            http://www.ecosirius.com/technology.html
          </li>

          <li>
            [2] safewire (2014). The beginner’s guide to motion sensors
            Geraadpleegd op 30-5-2019, van :
            https://www.safewise.com/resources/motion-sensor-guide/
          </li>

          <li>
            [3] elporicus (2015). What are motion sensors and how do they work
            Geraadpleegd op 30-5-2019, van :
            https://www.elprocus.com/working-of-different-types-of-motion-sensors/
          </li>

          <li>
            [4] Cong, R. (2016), How does the Xbox Kinect work
            Geraadpleegd op 30-5-2019, van :
            https://www.jameco.com/jameco/workshop/howitworks/xboxkinect.html
          </li>

          <li>
            [5] Casamassina, M. (2006), Making sense of the sensor bar
            Geraadpleegd op 30-5-2019, van :
            https://www.ign.com/articles/2006/11/29/making-sense-of-the-sensor-bar
          </li>

          <li>
            [6] Dent. S (2014), What you need to know about 3D motion capture
            Geraadpleegd op 31-5-2019, van :
            https://www.engadget.com/2014/07/14/motion-capture-explainer/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLm5sLw&guce_referrer_sig=AQAAAHLyxMPo5YJNh4D0y_YmjxWgSYTwT4B0waEvxMqHLeFTyn4VsDf6pY7I46DRjX4J_U4M_56HIlv_QEDUMgeUekjBWPTuZjDOVk9Cvnpop4ZjFcsjja4Fe0pkAjgyzawNe3TCtSWnW364lrUPWdzPNqNqKL_KgC4TSjN33c4BY-5T  
          </li>

          <li>
            [7] Samsung (2018), 2012 smart tv: smart interaction: using motion control
            Geraadpleegd op 31-5-2019
            https://www.samsung.com/ca/support/tv-audio-video/using-motion-control/
          </li>

        </p>

      </Content>
    </Root>
  )
};

export default BewegingDetail;