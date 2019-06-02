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
        Mensen zijn actieve wezens. Ze lopen, rennen, zwaaien, maken gebaren, enzovoort. Met andere woorden: mensen houden van bewegen en 
        hebben hierin hun eigen keuzevrijheid. Als u echter tv kijkt dan heeft u best wel weinig variatie in beweging. Het enige wat u doet 
        is op uw afstandsbediening een knopje indrukken. Best wel saai. Wat als we nou het bewegen in de tv-ervaring integreren? Misschien 
        maakt dat het wat interessanter. En waarom stoppen bij u thuis? Kunnen we <i>bewegingbesturing</i> niet gebruiken voor andere dingen? 
        Gek genoeg is men nu bezig om <i>beweging en technologie</i> samen te voegen, onder de noemer <i>bewegingswaarneming</i>.
        </p>
        <h2>Hoe werkt de achterliggende techniek?</h2>
        <p>
        De achterliggende gedachte van bewegingswaarneming is het observeren van beweging. Het waarnemen van beweging wordt door sensoren (meetinstrumentjes)
        gedaan. Elk soort sensor geeft een radiogolf met een bepaalde frequentie af. Deze golf komt in contact met voorwerpen en/of mensen. 
        Door de vervorming van de radiogolf kan de sensor beweging detecteren.
        </p>

        <li><b>Infrarood</b></li>
        <p>De hoofdgedachte achter infrarood detectie is het waarnemen van lichaamstemperatuur van warmbloedige wezens, waaronder mensen. Het is een erg
          makkelijke en goedkope manier voor het waarnemen van beweging. Maar omdat het hitte detecteert, kan het makkelijk in de 
          war raken bij hogere temperaturen. Toch is het één van de meest gebruikte vormen van bewegingswaarneming. </p>
        <img style={{width:300, height:150}} src={pic1} />
        <li><b>Microgolf en ultrasonisch</b></li>
        <p>Microgolf en ultrasonische sensoren werken ongeveer hetzelfde. Allebei geven golf pulsen af die reflecteren op voorwerpen. Bewegende objecten 
          zorgen ervoor dat de frequentie van de gereflecteerde golven verandert, een fenomeen genaamd het <i>Doppler effect</i>. De sensor meet het 
          frequentieverschil tussen de uitgezonden golven en de gereflecteerde golven. Als dat verschil een drempel bereikt, dan geeft 
          de sensor een signaal. Uit het frequentieverschil kan dus een instructie voor het apparaat worden geinterpreteerd.
          Het enige verschil tussen de microgolf en ultrasonisch is de frequentie van de golven.</p>
        <li><b>Tomografisch</b></li>
        <p>Bij de tomografie wordt er gebruik gemaakt van radiogolven. Sinds radiogolven door massa heen kunnen gaan, hebben tomografische 
          sensoren het vermogen om beweging door muren waar te nemen. Het is wel erg duur, dus het wordt schaars gebruikt.</p>
        <li><b>Combinatie</b></li>
        <p>Het is mogelijk om sensoren met elkaar te combineren. Een bekende combinatie is de microgolf sensor met een infrarood sensor. 
          Dit is handig om fouten te vermijden, sinds beide sensoren iets anders golven opvangen [1][2][3].</p>

        <h2>Voor welke toepassingen wordt het gebruikt?</h2>
        <p>Tegenwoordig wordt beweging detectie vaak gebruikt in de beveiligingsbranche en voor verschillende mediasystemen. </p>
        <img style={{width:300, height:150}} src={pic2} />
        <h3>Kinect</h3>
        <p>Een bekend mediasysteem is de spelcomputer genaamd de Xbox Kinect. Hoewel het financieel faalde, was de Kinects technologie met bewegingsdetectie 
          zijn tijd ver vooruit. De Kinect maakt gebruik van infrarood sensoren die in de camera van de spelcomputer zelf zit. 
          Het computerprogramma van het apparaat is het belangrijkste gedeelte.
          Hierin bevindt zich alle verzamelde data afkomstig van allerlei bewegende objecten. Deze data wordt gebruikt als 
          vergelijkingsmateriaal voor de Kinect wanneer het de gebruiker opnieuw waarneemt. De Kinect scant zogezegd de gebruiker, vergelijkt het met de
           data die opgeslagen is, en geeft op basis hiervan een drie dimensionaal model van de gebruiker weer. Dit gebeurt 30 keer per seconde,
           en deze snelheid zorgt ervoor dat alles vloeiend lijkt [4].</p>
        <img style={{width:200, height:150}} src={pic3} />
        <p><i>De camera van de Xbox Kinect</i></p>
        <h3>Wii</h3>
        <p>Nintendo’s Wii spelcomputer was een pioneer voor de integratie van beweging in computerspellen. De integratie van bewegingsdetectie op de 
          Wii hangt van twee dingen af: de Wii-controller en de sensorenbalk. Net als de Kinect maakt de Wii gebruik van infrarode golven 
          voor het waarnemen. De sensor geeft op twee punten infrarood licht af, dit zijn de grenzen voor de Wii-controller. In de Wii-
          controller zit een infrarood camera, die het licht van de sensorbalk af kan lezen. De connectie tussen de Wii-controller en de 
          sensor zorgt voor de bewegingsinteractie met het scherm van de Wii [5].</p>
        <img style={{width:150, height:150}} src={pic4} /> <img style={{width:300, height:150}} src={pic5} />
        <p><i><b>Links:</b> De Wi-controller. <b>Rechts:</b> De Wii-sensorbalk.</i></p>
        
        <h3>Motion capture</h3>
        
        <p>In de <i>entertainment</i> industrie wordt er vaak gebruik gemaakt van een techniek voor bewegingsdetectie genaamd <i>motion capture</i>. 
          Als u van motion capture hoort, dan moet u denken aan mensen in gekke pakken met witte balletjes op hun gezicht. 
          Deze materialen zijn nodig voor de motion capture. Bij motion capture volgt het systeem de beweging van de acteur, 
          zowel het lichaam als het gezicht, en zet deze bewegingen digitaal om in de computer, in de vorm van een digitaal skelet. 
          Dit skelet wordt dan gebruikt voor de animatie voor een personage in een film of computerspel.
          De resultaten kunnen altijd verschillen in kwaliteit, maar het is een op zich effectieve methode om kant-en-klare animaties te verkrijgen [6].</p>
        <img style={{width:150, height:150}} src={pic6} /> <img style={{width:250, height:150}} src={pic7} />
        <p><i><b>Links:</b> Een geanimeerde draak in de film The Hobbit. <b>Rechts:</b> Een acteur in een pak voor motion capture.</i></p>

        <h2>Hoe gebruiksvriendelijk is het?</h2>
        <p>Zoals eerder gezegd, wordt bewegingswaarneming vaak gebruikt in de entertainment industrie. Van computerspellen tot tv’s, 
          gebruikers kunnen via beweging interacteren met hun digitale apparaten. </p>
        <p>Even terug naar de Wii. Het gebruik van de Wii is erg simpel. De sensor moet onder of boven het tv-scherm zijn. 
          Met wat kalibratie/configuratie kan de gebruiker de Wii-controller op het tv-scherm richten zodat er een pijltje verschijnt. Met dit pijltje kan door
          bewegingen interactie plaatsvinden met het scherm en het apparaat. 
          De Wii-controller werkt zo als een afstandsbediening, iets waarmee de meeste mensen bekend mee zijn.
          Ook kunnen gebruikers met de controller zwaaien en speciale bewegingen maken voor interactie bij de meeste computerspellen.
          De soort bewegingen hangt natuurlijk af van het computerspel.</p>
        <p>Nog een voorbeeld van een apparaat met deze technologie: de Samsung Smart TV is een apparaat dat ook goed gebruik maakt van de bewegingsinteractie op een gebruiksvriendelijke manier. 
          Op de tv zelf zit een camera die de hand van de gebruiker herkent. Een <i>open</i> hand is nodig voor het navigeren op het scherm,
          terwijl een <i>gesloten</i> hand nodig is voor het selecteren. Twee gebaren die ieder mens kan maken, tenzij ze alle tien de vingers missen, 
          dan wordt het wat lastiger [7].</p>
        <img style={{width:300, height:200}} src={pic8} />
        <p><i>De Samsung Smart TV, waarbij de gebruiker met een open hand door het menu navigeert.</i></p>

        <h2>Hoe kan je het minder confronterend maken voor digibeten?</h2>
        <p>Mensen bewegen, dat is normaal. Mensen moeten hun energie kwijt, of maken gebaren voor communicatie. 
          Door deze behoefte te integreren met apparatuur, zoals tv’s, zorgt dit ervoor dat mensen die er minder verstand van hebben toch makkelijk gebruik kunnen
          maken van het apparaat in kwestie.</p>
        <p>Zoals bijvoorbeeld de Samsung Smart TV. Deze slimme tv geeft men de mogelijkheid om te navigeren zonder gebruik van een 
          afstandsbediening, en in plaats daarvan heeft het een intuitieve besturing. Dit maakt het (in theorie) veel makkelijker en simpeler in de omgang.
          Nu hoeven mensen zich niet meer druk te maken over de vele knopjes.</p>
        <p>Met deze technologie kunnen we zorgen voor meer interactie met onze apparaten voor entertainment.
          Maar uiteindelijk kunnen we deze technologie ook uitbreiden naar andere sectoren dan entertainment. Zo kunnen bijvoorbeeld
          meerdere mensen een computer gebruiken zonder daarvoor een toetsenbord of muis te delen.</p>

        <h2>Bronnen</h2>
        <p>
        <ul className="bron">
          <li>
            [1] ecosirius (2013). <i>Technology compraison of motion sensors</i>
            <br/>Geraadpleegd op 29-5-2019, van :
            http://www.ecosirius.com/technology.html
          </li>

          <li>
              [2] safewire (2014). <i>The beginner’s guide to motion sensors</i>
            <br/>Geraadpleegd op 30-5-2019, van :
            https://www.safewise.com/resources/motion-sensor-guide/
          </li>

          <li>
              [3] elporicus (2015). <i>What are motion sensors and how do they work</i>
            <br />Geraadpleegd op 30-5-2019, van :
            https://www.elprocus.com/working-of-different-types-of-motion-sensors/
          </li>

          <li>
              [4] Cong, R. (2016). <i>How does the Xbox Kinect work</i>
            <br />Geraadpleegd op 30-5-2019, van :
            https://www.jameco.com/jameco/workshop/howitworks/xboxkinect.html
          </li>

          <li>
              [5] Casamassina, M. (2006), <i>Making sense of the sensor bar</i>
            <br />Geraadpleegd op 30-5-2019, van :
            https://www.ign.com/articles/2006/11/29/making-sense-of-the-sensor-bar
          </li>

          <li>
              [6] Dent. S (2014). <i>What you need to know about 3D motion capture</i>
            <br />Geraadpleegd op 31-5-2019, van :
            <br/>https://www.engadget.com/2014/07/14/motion-capture-explainer/
            ?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLm5sLw
            &guce_referrer_sig=AQAAAHLyxMPo5YJNh4D0y_YmjxWgSYTwT4B0waEvxMqHLeFTyn4VsDf6pY7I46DRjX4J_U4M_56HIlv_
            QEDUMgeUekjBWPTuZjDOVk9Cvnpop4ZjFcsjja4Fe0pkAjgyzawNe3TCtSWnW364lrUPWdzPNqNqKL_KgC4TSjN33c4BY-5T  
          </li>

          <li>
              [7] Samsung (2018). <i>2012 smart tv: smart interaction: using motion control</i>
            <br />Geraadpleegd op 31-5-2019
            https://www.samsung.com/ca/support/tv-audio-video/using-motion-control/
          </li>
          </ul>
        </p>

      </Content>
    </Root>
  )
};

export default BewegingDetail;