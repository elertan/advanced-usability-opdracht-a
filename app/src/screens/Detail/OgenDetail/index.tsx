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

import meme from "../../../assets/images/n420.jpg";


interface IProps extends RouteComponentProps<{}> {}

const OgenDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>OGEN</h1>

        <h2>Introductie</h2>
        <p>
          Eye tracking wordt gebruikt als een methode om de visuele aandacht van individuen te bestuderen. 
          Eye tracking verwijst naar het proces van het meten van oog activiteiten. 
          Waar kijken we naar? Wat negeren we? Wanneer knipperen we? 
          Deze metingen worden uitgevoerd door een eye-tracker, die de positie van de ogen en de bewegingen die ze maken registreert. 
          Deze data kan bijvoorbeeld gebruikt worden om interfaces met de ogen te besturen.
        </p>
        
        <h2>Hoe werkt de achterliggende techniek?</h2>
        <p>
          Eye tracking data wordt verzameld door het gebruik van een scherm gebaseerde eye tracker of een draagbare eye tracker zoals een bril. 
          In de eye trackers zitten een aantal onderdelen die erg belangrijk zijn voor de techniek om goed te kunnen werken. 
          De eye trackers bevatten over het algemeen twee veel voorkomende onderdelen: een lichtbron en een camera. 
          Maar hoe kan een stukje hardware nou zien waar je op een scherm naar kijkt? 
          De meest gebruikte techniek hiervoor is de pupil centrum corneale reflectie (PCCR) [34].
        </p>
        <p>
          De lichtbron van de eyetracker zorgt ervoor dat ervoor dat er een infrarood lichtje in de ogen van de gebruiker wordt geschenen. 
          Infrarood kan niet door mensen met het blote oog gezien worden en het is ook niet schadelijk voor de ogen [35]. 
          De gebruiker heeft dus niet door dat er een infrarood lichtje in zijn ogen aan het schijnen is.        
        </p>
        <img style={{width:300, height:250}} src={plaatje1}/>
        <p>
          Camera’s kunnen wel infrarood licht zien. Als er een foto wordt gemaakt wanneer het infrarood licht in de ogen schijnt kun je zien dat er een reflectie plaatsvindt. 
          Deze reflecties zijn erg belangrijk omdat deze het beginpunt zijn voor de eye tracker. 
          In deze fotos kun je namelijk de refelcties van het infrarood licht terug zien zoals is de afbeelding. 
          Het door de camera opgenomen beeld wordt vervolgens gebruikt om de reflectie van de lichtbron op het hoornvlies en in de pupil te identificeren.
        </p>
        <img style={{width:300, height:250}} src={plaatje2}/>
        <p>
          Deze gegevens worden gebruikt om de rotatie van het oog en uiteindelijk de richting van de blik te achterhalen. 
          Een complex software algoritme zal met behulp van moeilijke wiskundige formules de afstand tussen het pupil en de reflectie berekenen.
        </p>
        <img src={plaatje3}/>


        <h2>Voor welke toepassingen wordt het gebruikt?</h2>
        <p style={{fontWeight:"bold"}}>
          Usability/UX onderzoek (voor websites)  
        </p>
        <img src={plaatje7}/>
        <p>
          Dankzij eye-tracking is het mogelijk om een inzicht te krijgen in het gedrag van de gebruikers. 
          Zodra een gebruiker een webpagina bezoekt, kun je zien waar de gebruiker naar kijkt op de website. 
          Het eye tracking device concentreert zich op de pupil van het oog van de gebruiker en scant de richtingen en concentratie van zijn blik. 
          De software genereert de gegevens over deze acties in de vorm van heatmaps.
        </p>
        <p>
          Heatmaps geven aan waar de gebruiker zijn blik op focust en hoe lang hij naar een bepaald punt staart. 
          Over het algemeen geeft een kleurenschaal die van blauw naar rood beweegt de duur van de focus aan. 
          Een rode vlek op een gedeelte van uw pagina kan dus aangeven dat een deelnemer of een groep deelnemers zich voor een langere periode op dit deel van een pagina heeft gericht.
        </p>
        <p>
          Met deze informatie kun je achterhalen welke onderdelen van een website veel aandacht trekken en welke juist niet. 
          Hierdoor kunnen er vervolgens aanpassingen gemaakt worden om de website te verbeteren.
        </p>
        <br/>
        <p style={{fontWeight:"bold"}}>
          Gehandicapte mensen / communicatie
        </p>
        <p>
          Mensen die niet kunnen praten, of hun armen, handen of zelfs hoofd niet kunnen bewegen, maken computer-verbonden eye-tracking systemen communicatie via oogbewegingen mogelijk. 
          Door middel van de het systeem is het mogelijk om meer zelfstandiger te worden.
        </p>
        <p>
          Blik Interactie is een computer toegangsmethode waarmee mensen met een handicap met hun ogen kunnen navigeren en hun computer kunnen besturen, net zoals een gewone computergebruiker een muis gebruikt (bijvoorbeeld activeren, selecteren, zoomen, scrollen, enz.) om hun computer te besturen. 
          Blik Interactie vereist alleen de beweging van het oog zelf, de beweging van andere spieren zijn niet vereist, waardoor het een perfecte oplossing is voor mensen met revalidatie problemen (verlamming, ruggenmergletsel, RSI) en motorische beperkingen (ALS, hersenverlamming, autisme, etc.).
        </p>
        <img style={{width:300, height:250}} src={plaatje4}/>

        <p>
          Een persoon met een handicap kan veel taken uitvoeren via een computer die hen helpt om effectiever te communiceren en een voller en onafhankelijker leven te leiden. 
          Taken die deze technologie mogelijk maakt, omvatten de mogelijkheid om te communiceren via dicteersoftware, op internet te surfen, te telefoneren, e-mails en sms-berichten te verzenden, illustraties te maken, computerspelletjes te spelen en contact te houden met vrienden en familie via Skype of Facebook.
        </p>
        <img style={{width:300, height:250}} src={plaatje5}/>


        <h2>Hoe gebruiksvriendelijk is deze NUI?</h2>

        <p>
          De gebruikers kregen de opdracht om op google een willekeurige website naar eigen keuze op te zoeken. 
          Vervolgens moesten zij vijftien minuten lang op deze website spenderen. Deze taak moesten worden uitgevoerd op twee verschillende systemen. 
          Een normale computer met toetsenbord en muis en op een speciaal systeem. Dit systeem maakte gebruik van eye tracking technologie. 
          De gebruikers konden bij het speciale systeem dus niet met een muis of toetsenbord werken.
        </p>

        <p>
          Na het onderzoek moesten alle deelnemers een system usability scale (SUS) vragenlijst invullen [36]. 
          Het bestaat uit een vragenlijst met 10 items met vijf responsopties voor respondenten; van Sterk mee eens tot zeker niet mee eens. 
          De gemiddelde SUS score van het onderzoek was 73.75. Dit staat ook wel gelijk aan goed of geweldig[37].
        </p>

        <p>
          Uit het onderzoek is gebleken dat de meerderheid van de deelnemers erg tevreden waren over het speciale systeem. 
          De gebruikers gaven aan dat zij meer voorkeur hadden voor het eye tracking systeem. 
          Het systeem was effectiever en makkelijk te gebruiken [38].
        </p>

        <h2>Hoe kunnen bestaande technologieën hiermee toegankelijker worden?</h2>

        <p>
          Eye tracking zal het leven van mensen die verlamt zijn of spierziektes hebben nog meer verbeteren. 
          Deze mensen kunnen door hun ziekte de controle over hun spieren verliezen maar ook hun volledige communicatie vaardigheden. 
          Hierdoor zijn zij zeer afhankelijk van zorg van anderen. Met de eye tracking systemen is het mogelijk om deze mensen weer een beter kwaliteit van leven te bieden [39]. Door deze systemen kunnen zij weer zelfstandig communiceren . Helaas zijn de kosten voor deze system nog er hoog. 
          In de toekomst zal deze apparatuur toegankelijker zijn voor deze doelgroep als de prijzen gaan dalen. 
       </p>


        <h2>Bronnen</h2>
        <p>
          <ul className="bron">
            <li>
              [34] 
              Ikuhisa Mitsugami, Norimichi Ukita (2005). Robot Navigation by Eye Pointing
              Geraadpleegd op: 20-05-2019, van:
              https://www.researchgate.net/publication/311962363_Robot_Navigation_by_Eye_Pointing
            </li>
            <li>
              [35] 
              Nikolaos Kourkoumelis, Margaret Tzaphlidou (2011). Eye Safety Related to Near Infrared Radiation Exposure to Biometric Devices
              Geraadpleegd op: 20-05-2019, van:
              https://www.researchgate.net/publication/50291066_Eye_Safety_Related_to_Near_Infrared_Radiation_Exposure_to_Biometric_Devices
            </li>
            <li>
              [36] 
              Usability (2016). System Usability Scale
              Geraadpleegd op: 20-05-2019, van:
              https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html
            </li>
            <li>
              [37]
              Marijke van Moll (2010). Gebruiksvriendelijkheid meten met een vragenlijst
              Geraadpleegd op: 20-05-2019, van:
              https://www.frankwatching.com/archive/2010/05/04/gebruiksvriendelijkheid-meten-met-een-vragenlijst/
            </li>
            <li>
              [38]
              Xuebai Zhang, Xiaolong Liu, Shyan-Ming Yuan, Shu-Fan Lin (2017). Eye Tracking Based Control System for Natural Human-Computer Interaction
              Geraadpleegd op: 20-05-2019, van:
              https://www.researchgate.net/publication/321910031_Eye_Tracking_Based_Control_System_for_Natural_Human-Computer_Interaction/fulltext/5a398a8baca2728e698789a6/321910031_Eye_Tracking_Based_Control_System_for_Natural_Human-Computer_Interaction.pdf?origin=publication_detail
            </li>
            <li>
              [39]
              Andrea Calvo, Adriano Chi`o, Emiliano Castellina (2008). Eye Tracking Impact on Quality-of-Life of ALS Patients
              Geraadpleegd op: 20-05-2019, van:
              https://www.researchgate.net/profile/Fulvio_Corno/publication/221009742_Eye_Tracking_Impact_on_Quality-of-Life_of_ALS_Patients/links/56d01c6008ae059e375b7d4c/Eye-Tracking-Impact-on-Quality-of-Life-of-ALS-Patients.pdf
            </li>
          </ul>
        </p>

      </Content>
    </Root>
  )
};

export default OgenDetail;