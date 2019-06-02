import * as React from "react";
import DetailNav from "../DetailNav";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

import plaatje1 from "../../../assets/images/n1.jpg";
import plaatje2 from "../../../assets/images/n2.jpg";
import plaatje3 from "../../../assets/images/n3.jpg";
import plaatje4 from "../../../assets/images/n4.jpg";
import plaatje5 from "../../../assets/images/n5.jpg";
import plaatje7 from "../../../assets/images/n7.gif";

//import meme from "../../../assets/images/n420.jpg";


interface IProps extends RouteComponentProps<{}> {}

const OgenDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>OGEN</h1>

        <h2>Introductie</h2>
        <p>
          <i>Eye tracking</i> wordt gebruikt als een methode om de visuele aandacht van individuen te bestuderen
          en verwijst naar het proces van het meten van de oogactiviteit. 
          Waar kijken we naar? Wat negeren we? Wanneer knipperen we? 
          Deze metingen worden uitgevoerd door een <i>eye tracker</i> (oogmeter). Dit meetinstrument registreert de positie van de ogen en de bewegingen die ze maken tijdens een bepaalde handeling.
          Zo'n handeling kan bijvoorbeeld het bezoeken van een website of het gebruiken van een bepaald apparaat zijn. 
          De resulterende data kan bijvoorbeeld gebruikt worden om websites of apparaten te verbeteren op het gebied van gebruiksvriendelijkheid.
          De meetinstrumenten maken het ook technisch mogelijk om computerprogramma's of apparaten <i>met de ogen</i> handelingen uit te laten voeren.
        </p>
        
        <h2>Hoe werkt de achterliggende techniek?</h2>
        <p>
          Oogmetingdata wordt verzameld door het gebruik van zo'n oogmeter. Dit meetinstrument kan op/in/achter het computerschermscherm zitten, en kan ook bestaan uit een draagbare bril. 
          In de oogmeter zitten een aantal onderdelen die erg belangrijk zijn voor de techniek om goed te kunnen werken. 
          Een oogmeter bevat over het algemeen twee veel voorkomende onderdelen: een <i>lichtbron</i> en een <i>camera</i>. 
          Maar hoe kan dit apparaat nou zien waar je op een scherm naar kijkt? 
          De meest gebruikte techniek hiervoor is de zogenaamde <i>pupil centrum corneale reflectie</i> (PCCR) [34].
        </p>
        <p>
          De lichtbron van de oogmeter zorgt ervoor dat er voortdurend een infrarood lichtje in de ogen van de gebruiker wordt geschenen. 
          Infrarood kan niet door mensen met het blote oog gezien worden en is ook niet schadelijk voor de ogen [35]. 
          De gebruiker heeft dus niet door dat er infrarood licht in zijn of haar ogen aan het schijnen is.        
        </p>
        <img style={{width:300, height:250}} src={plaatje1}/>
        <p><i>De oogmeter schijnt infrarood licht in de ogen van de computergebruiker en meet de hoeken van de reflecties van dit licht.</i></p>
        <p>
          Camera’s kunnen <i>wel</i> infrarood licht zien. Als er een foto wordt gemaakt wanneer het infrarood licht in de ogen schijnt, kunnen wij een reflectie zien van dit infrarode licht. 
          Deze reflecties zijn erg belangrijk omdat deze de nodige informatie verschaffen en een beginpunt vormen voor de oogmeter. 
          In deze foto's kunnen namelijk de hoeken van de reflecties van het infrarode licht waar worden genomen (zie afbeelding hieronder). 
          Het door de camera opgenomen beeld wordt vervolgens gebruikt om de reflectie van de lichtbron op het hoornvlies en in de pupil te identificeren.
        </p>
        <img style={{width:300, height:250}} src={plaatje2}/>
        <p><i>Een foto van het oog gemaakt in infrarood licht.</i></p>
        <p>
          Deze gewonnen gegevens worden gebruikt om de rotatie van het oog, en uiteindelijk de richting van het kijkveld, te achterhalen. 
          De gegevens worden ingevoerd in een complexe berekening die door een computer wordt uitgevoerd, en uit het antwoord kan de afstand tussen de pupil en de reflectie worden herleid.
          Uiteindelijk kan een overzicht worden gemaakt van alle kijkrichtingen van het oog gedurende het meetproces en de handeling. 
        </p>
        <img src={plaatje3}/>
        <p><i>Mogelijke standen van het oog die de oogmeter kan identificeren.</i></p>


        <h2>Voor welke toepassingen wordt het gebruikt?</h2>
        <p style={{fontWeight:"bold"}}>
          Usability/UX onderzoek (voor websites)  
        </p>
        <img src={plaatje7}/>
        <p>
          Dankzij <i>eye tracking</i> is het mogelijk om een inzicht te krijgen in het gedrag van de gebruikers. 
          Zodra een gebruiker een webpagina bezoekt, kun worden gemeten waar de gebruiker naar kijkt op deze website. 
          De oogmeter concentreert zich op de pupil van de gebruiker en meet de richtingen en de concentratie van zijn of haar blikveld. 
          Een computerprogramma genereert de gewonnen gegevens uit deze acties in de vorm van zogenaamde <i>heatmaps</i>, ofwel warmtevelden.
        </p>
        <p>
          Warmtevelden geven aan waar de gebruiker zijn blik op focust en hoelang hij of zij naar een bepaald punt staart. 
          Over het algemeen geeft een kleurenschaal, die van blauw naar rood beweegt, de duur van deze focus aan. 
          Een rode vlek op een gedeelte van de website geeft dus aan dat een deelnemer (of een groep deelnemers) zich voor een langere periode op dit deel van de webpagina heeft gericht.
        </p>
        <p>
          Met deze informatie kunnen we achterhalen welke onderdelen van een website de aandacht trekken en welke juist niet. 
          Hierdoor kunnen er vervolgens aanpassingen worden gemaakt om de website te verbeteren qua gebruiksvriendelijkheid.
        </p>
        <br/>
        <p style={{fontWeight:"bold"}}>
          Gehandicapte mensen en communicatie
        </p>
        <p>
          Mensen die niet kunnen praten of hun armen, handen en zelfs hoofd niet kunnen bewegen, kunnen baat hebben bij computerverbonden oogmeters.
          Als zo'n oogmeter en computer verbonden is aan een groter systeem, kunnen vanuit de oogbewegingen instructies worden geinterpreteerd en worden doorgegeven aan dit systeem.
          Hierdoor is communicatie via de ogen met het systeem mogelijk en leidt dit tot meer zelfstandigheid en zelfredzaamheid van mensen met beperkingen.
        </p>
        <p>
          <i>Blik interactie</i> is een oplossing waarmee mensen met een handicap hun ogen kunnen gebruiken om op een computer te navigeren en deze te besturen.
          Het eindresultaat is net als een gewone computergebruiker die een muis en toetsenbord gebruikt om een computer instructies te geven. 
          Blik interactie vereist alleen de beweging van het oog zelf.
          De beweging van andere spieren zijn niet vereist, waardoor het een goede oplossing is voor mensen met revalidatieproblemen (verlamming, ruggenmergletsel, RSI) en motorische beperkingen (ALS, hersenverlamming, e.d.).
        </p>
        <img style={{width:300, height:250}} src={plaatje4}/>
        <p><i>Voorbeeld van een apparaat speciaal gemaakt voor oogbesturing. Let op de grote knoppen, waardoor interactie optimaal is.</i></p>

        <p>
          Een persoon met een handicap kan veel taken uitvoeren via een computer die hem of haar helpt om effectiever te communiceren en een voller en onafhankelijker leven te leiden. 
          Taken die deze technologie mogelijk maakt, omvatten de mogelijkheid om te communiceren via dicteersoftware, op internet te surfen, te telefoneren, e-mails en sms-berichten te verzenden, illustraties te maken, computerspelletjes te spelen en contact te houden met vrienden en familie via Skype of Facebook.
        </p>
        <img style={{width:300, height:250}} src={plaatje5}/>
        <p><i>Een gebruiker kiest met zijn ogen de letters om zo woorden te vormen.</i></p>


        <h2>Hoe gebruiksvriendelijk is deze NUI?</h2>

        <p>
          Om de gebruiksvriendelijkheid van <i>eye trackers</i> te meten, kregen gebruikers de opdracht om naar eigen keuze via Google een website op te zoeken. 
          Vervolgens moesten zij vijftien minuten lang op deze website spenderen. Deze taak moest worden uitgevoerd op twee verschillende systemen:
          een normale computer met toetsenbord en muis en op een systeem dat gebruik maakte van oogmetingtechnologie. 
          De gebruikers konden bij het speciale systeem dus <i>niet</i> met een muis of toetsenbord werken.
        </p>

        <p>
          Na het onderzoek moesten alle deelnemers een vragenlijst invullen: de <i>system usability scale</i> (SUS) [36]. 
          Het bestaat uit een vragenlijst met tien onderdelen, met elk vijf verschillende antwoorden: variërend van "sterk mee eens" tot "zeker niet mee eens". 
          De gemiddelde SUS score van het onderzoek was 73.75. Deze score staat gelijk aan goed tot geweldig [37].
        </p>

        <p>
          Uit het onderzoek is gebleken dat de meerderheid van de deelnemers erg tevreden was over het speciale systeem. 
          De gebruikers gaven aan dat zij de voorkeur hadden voor het systeem met oogbesturing boven het traditionele systeem van muis en toetsenbord. 
          Voornaamste reden: het systeem was effectiever en makkelijk te gebruiken [38].
        </p>

        <h2>Hoe kunnen bestaande technologieën hiermee toegankelijker worden?</h2>

        <p>
          <i>Eye tracking</i> zal het leven van mensen die verlamt zijn of spierziektes hebben verbeteren. 
          Deze mensen kunnen door hun ziekte de controle over hun spieren verliezen en daarmee ook hun volledige communicatiemogelijkheden. 
          Hierdoor is deze doelgroep zeer afhankelijk van de zorg van anderen. Met oogbesturing is het mogelijk om deze mensen een betere kwaliteit van leven te bieden [39].
          Door deze systemen kunnen zij weer zelfstandig communiceren. Helaas zijn de kosten voor deze system nog er hoog. 
          In de toekomst zal deze apparatuur toegankelijker zijn voor deze doelgroep, wanneer de prijzen gaan dalen. 
       </p>


        <h2>Bronnen</h2>
        <p>
          <ul className="bron">
            <li>
              [34] 
              Ikuhisa Mitsugami, Norimichi Ukita (2005). <i>Robot Navigation by Eye Pointing</i>
              <br />Geraadpleegd op: 20-05-2019, van:
              https://www.researchgate.net/publication/311962363_Robot_Navigation_by_Eye_Pointing
            </li>
            <li>
              [35] 
              Nikolaos Kourkoumelis, Margaret Tzaphlidou (2011). <i>Eye Safety Related to Near Infrared Radiation Exposure to Biometric Devices</i>
              <br />Geraadpleegd op: 20-05-2019, van:
              https://www.researchgate.net/publication/50291066_Eye_Safety_Related_to_Near_Infrared_Radiation_Exposure_to_Biometric_Devices
            </li>
            <li>
              [36] 
              Usability (2016). <i>System Usability Scale</i>
              <br />Geraadpleegd op: 20-05-2019, van:
              https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html
            </li>
            <li>
              [37]
              Marijke van Moll (2010). <i>Gebruiksvriendelijkheid meten met een vragenlijst</i>
              <br />Geraadpleegd op: 20-05-2019, van:
              https://www.frankwatching.com/archive/2010/05/04/gebruiksvriendelijkheid-meten-met-een-vragenlijst/
            </li>
            <li>
              [38]
              Xuebai Zhang, Xiaolong Liu, Shyan-Ming Yuan, Shu-Fan Lin (2017). <i>Eye Tracking Based Control System for Natural Human-Computer Interaction</i>
              <br/>Geraadpleegd op: 20-05-2019, van:
              <br/>https://www.researchgate.net/publication/321910031_Eye_Tracking_Based_Control_System_for_Natural_Human-Computer_Interaction/fulltext/5a398a8baca2728e698789a6/321910031_Eye_Tracking_Based_Control_System_for_Natural_Human-Computer_Interaction.pdf?origin=publication_detail
            </li>
            <li>
              [39]
          Andrea Calvo, Adriano Chi`o, Emiliano Castellina (2008). <i>Eye Tracking Impact on Quality-of-Life of ALS Patients</i>
              <br/>Geraadpleegd op: 20-05-2019, van:
              <br/>https://www.researchgate.net/profile/Fulvio_Corno/publication/221009742_Eye_Tracking_Impact_on_Quality-of-Life_of_ALS_Patients/links/56d01c6008ae059e375b7d4c/Eye-Tracking-Impact-on-Quality-of-Life-of-ALS-Patients.pdf
            </li>
          </ul>
        </p>

      </Content>
    </Root>
  )
};

export default OgenDetail;