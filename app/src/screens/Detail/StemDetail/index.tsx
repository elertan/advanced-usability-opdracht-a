import * as React from "react";
import DetailNav from "../DetailNav";
import plaatje1 from "../../../assets/images/google_home.jpg";
import plaatje2 from "../../../assets/images/google_stap1.png";
import plaatje3 from "../../../assets/images/google_stap2.png";
import plaatje4 from "../../../assets/images/google_stap3.png";
import plaatje5 from "../../../assets/images/google_stap4.png";
import plaatje7 from "../../../assets/images/speech-system.jpg";
import plaatje8 from "../../../assets/images/echo_dot.jpg";
import plaatje6 from "../../../assets/images/voice-recognition.png";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

interface IProps extends RouteComponentProps<{}> {}

const StemDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>STEM</h1>
        
        <h2>Introductie</h2>
        <p>
         Door middel van een spraakbesturingssysteem, kan een gebruiker door iets te zeggen in een microfoon opdrachten 
         sturen naar een apparaat. Zo’n apparaat wordt ook wel een spraakbesturing apparaat genoemd. Het apparaat bevat 
         een systeem dat uw spraak herkent wanneer u er tegen praat. Deze spraaksignalen kunnen worden omgezet naar tekst op 
         uw beeldscherm (spraak-naar-tekst). Een andere mogelijkheid is dat deze tekst wordt gekoppeld aan opdrachten die uw 
         computer dan gaat uitvoeren. Voorbeelden zijn het opstarten van een computerprogramma zoals Microsoft Word of uw spraak 
         gebruiken voor het invullen van een zoekterm in Google. De microfoon ontvangt de signalen van de gebruiker en zet deze 
         via het spraakbesturingssysteem om [16].
        </p>
        <img src={plaatje1}/>
        <h2>Hoe werkt de achterliggende techniek?</h2>
        <p>
        Er zijn twee soorten spraakherkenningsprogramma’s.    
        </p>
        <p>
        Kleine vocabulaire voor veel gebruikers:<br/>
        Denk aan een geautomatiseerd telefoonsysteem met een automatische 
        stem die instructies doorgeeft aan de gebruiker en met behulp van spraak moet reageren. 
        Dit systeem heeft meestal dan een kleine beperkte vocabulaire die het kan interpreteren. Voorbeeld: 
        </p>
        <p>
        Als de automatische stem zegt: “spreek de stad uit waar u woont”. 
        En je zegt geen stad maar een land, kan het systeem het niet begrijpen, 
        omdat er al een vast aantal antwoorden in het systeem zitten die wel begrepen kunnen worden 
        door het spraakherkenningssysteem. Met andere woorden, dit systeem leert niet meer verder.  
        </p>
        <p>
        Grote vocabulaire voor weinig gebruikers:<br/>
        Dit soort spraakherkenningsprogramma's worden meestal gebruikt in de zakelijke sfeer waarbij 
        maar een beperkt aantal mensen met het programma zullen gaan werken. Deze systemen hebben een 
        hogere nauwkeurigheid en kennen veel vocabulaires én kunnen zelfs verder getraind worden door te blijven 
        luisteren naar de spraakpatronen van de gebruikers en die te onthouden in het systeem. Dit maakt het systeem 
        natuurlijk erg complex, maar hierdoor wordt het wel nauwkeuriger en kan spraak steeds beter geïnterpreteerd 
        worden [2].
        </p>
        <img style={{width:500, height:200}}src={plaatje6}/>
        <p>
        De spraakherkenningssystemen van tegenwoordig maken gebruik van complexe systemen. 
        Deze gebruiken wiskundige functies om dingen te berekenen. John Garofolo, een deskundige, 
        zegt dat er 2 modellen zijn die voornamelijk gebruikt worden. 
        </p>
        <p>
        Het model wat het meest voorkomt is het Hidden Markov-model [12]. Het model maakt gebruikt van een fonemen. 
        Dat zijn “verzamelingen klanken die allemaal dezelfde betekenisonderscheidende functie hebben. /b/ en /d/ zijn fonemen 
        in het Nederlands omdat de woorden "bak" en "dak" een verschillende betekenis hebben[13]”. Dus in dit model is elk foneem een 
        schakel in een keten en is het voltooide reeks een woord. Het programma probeert dan het digitale geluid te matchen met een 
        foneem dat hoogstwaarschijnlijk zal opvolgen. Dit programma geeft elke foneem een score van waarschijnlijkheid. Deze scores 
        worden in een soort ‘woordenboek’ bijgehouden, waardoor de gebruiker traint. 
        </p>
        <p>
        Het wordt pas lastig als je met zinnen te maken krijgt die heel veel op elkaar lijken als je ze uitspreekt, want dat moet er ook 
        uitgevonden waar precies elke zin start en stopt. Het is zo ingewikkeld omdat het programma naar oneindig veel combinaties moet kijken 
        bij een woordenschat van zo een 50.000 woorden wanneer een reeks van 4 woorden al wordt uitgesproken! Dat kan een programma dus echt 
        niet zonder hulp. Daarom zijn dit soort spraakherkenningsprogramma’s afhankelijk van heel veel trainingsgegevens om optimaal te presteren. 
        Deze trainingsgegevens worden verkregen door zelfs meer dan duizend uur door de mens ingesproken spraak en tekst te observeren. 
        Met al deze verkregen spraak worden woordenlijsten en modellen bijgehouden [14].
        </p>
        <h2>Welke toepassingen gebruiken een spraakherkenningssysteem?</h2>
        <p style={{marginBottom:0}}>
          <img id="google" src={plaatje2}/>
          <img id="google" src={plaatje3}/>
          <img id="google" src={plaatje4}/>
          <img id="google" src={plaatje5}/>
        </p>
        <span id="stap">stap 1</span>
        <span id="stap">stap 2</span>
        <span id="stap">stap 3</span>
        <span id="stap">stap 4</span>

        <p style={{marginTop:50}}>
        Er zijn tal van toepassingen te benoemen die gebruikmaken van spraak. Denk bijvoorbeeld aan autonavigatie, waarbij 
        je de bestemming kan inspreken zonder dat de gebruiker iets hoeft in te typen. Meestal wordt spraak ook ingezet op 
        plekken waar geen beeld aanwezig is of waar dat onhandig kan zijn of inefficiënt voor de functionaliteit van het apparaat, 
        omdat je juist zo min mogelijk je handen wilt gebruiken (hands-free).
        </p>
        <p>
        Google’s spraakherkenningssysteem heeft als functie spraakgestuurd zoeken. Wanneer je aan het googlen bent, 
        zie je meestal aan de zijkant van de zoekbalk een icoon van een radio-microfoon. Als je deze klikt, krijg je de mogelijkheid 
        iets in te spreken als gebruiker. Hierna zie je welke woorden Google heeft kunnen terughalen uit jouw spraak [16].
        </p>
        <p>
        Andere plekken waar spraakherkenning is terug te vinden:
          <ul>
            <li>Smart homes (apparaten in huis die met spraak kunnen worden geactiveerd/gedeactiveerd)</li>
            <li>Hulp voor invaliden of mensen met een beperking</li>
            <li>Virtuele assistent (Alexa)</li>
            <li>Keuzes maken op basis van spraak aan de telefoon (Als je bijvoorbeeld een auto voor bezoeker wilt registreren bij de gemeente)</li>
            <li>Autonavigatie</li>
          </ul>
        </p>
        <h2>Hoe gebruiksvriendelijk is het?</h2>
        
        <p>
        We zijn langzaam op weg naar een wereld van Zero UI [17][29][30]. Dat houdt in dat we dan niet langer interacties uitvoeren 
        met schermen. Amazon Echo is een apparaat dat alleen is gebaseerd op spraakinteractie en geen schermen. Je hebt ook Smart 
        Home-apparaten die zo min mogelijk interactie met schermen vereisen en meer met spraakherkenning en computer intelligentie werken. 
        Het idee erachter is dat mensen zich niet meer hoeven aan te passen aan computer, maar met behulp van de taal die ze spreken en dus 
        herkennen kunnen gebruiken om interactie uit te voeren met apparaten[30]. Bij Zero UI gaat het dus voornamelijk om machines die 
        reageren op natuurlijke spraak en beweging [17].
        </p>
        <img style={{width:400, height:300}} src={plaatje7}/>
        <p>
        Volgens de Vice-President van Alexa, Al Lindsay (Alexa is een op kunstmatige intelligentie gebaseerde robot die opdrachten 
        kan uitvoeren op basis van spraakherkenning en terug antwoord op een gebruikersvriendelijke manier) zal spraak nooit volledig 
        schermen gaan vervangen [18]. Bij sommige acties waarbij je meerdere dingen met elkaar moet vergelijken is het soms juist handiger 
        een scherm te gebruiken in plaats van een beschrijving aan te horen. Bijvoorbeeld wanneer je Alexa vraagt een bepaalde nummer op 
        te zoeken, waarvan er misschien 5 verschillende artiesten zijn die het zingen. In dat geval is het sneller om gewoon een scherm 
        te hebben waar mensen in een keer een keuze kunnen maken. Om volledig voor spraak te gaan en een volledig verbale beschrijving 
        aan de gebruiker te laten horen, zou minder gebruiksvriendelijk overkomen en ook te lang duren. Daarom is sommige gevallen spraak 
        niet zo gebruiksvriendelijk als wanneer je een scherm zou gebruiken en in andere gevallen wel.
        </p>
        <h2>Hoe kun je het minder confronterend maken voor digibeten?</h2>
        <p>
        Uit een onderzoek is gebleken dat mensen meer dan tachtig procent communicatie via zicht ervaren. 
        Elf procent via horen en de rest via geur, smaak etc [19]. Het is dus logisch dat schermen onmisbaar zijn in de meeste gevallen. 
        Zelfs de Alexa robot komt vaak ook met een scherm die de user kan gebruiken. Zelfs bij een verbaal gesprek, wordt het meeste ervan 
        geabsorbeerd door zicht en daarna gehoor. Je zou het dus kunnen opsplitsen. Wanneer je te maken krijgt met complexe informatie die 
        moeiteloos opgenomen moet kunnen worden, kun je dat in combinatie doen met beeld en spraak.
        </p>
        <p>
        Maar de ontwikkeling van de spraakherkenning én de verwerking ervan in producten zoals de Amazon Echo heeft wel aanzienlijk 
        veel verbeteringen opgeleverd voor klanten met visuele, cognitieve of mobiliteit beperkingen, maar ook ouderen anders soort 
        invaliden. De integratie van spraak in apparaten heeft de toegankelijkheid ervan voor die doelgroepen wel aardig verbeterd. 
        Simpele taken zoals het versturen van berichten en instellen van alarmsignalen met behulp van spraak zonder te veel aandacht 
        te eisen van wat ze doen, dat gaat in combinatie met spraakverwerking veel makkelijker [20]. 
        </p>
        <img style={{width:300, height:250}} src={plaatje8}/>
        <p>
        Spraakherkenning zal tekst-gebaseerde apps toegankelijker maken voor mensen met dyslexie en andere leesbeperkingen [20][21]. 
        Ontwerpers moeten doorgaan met het combineren van zowel spraak als grafische gebruikersinterface voor een meeslepende ervaring. 
        Voeg er spraakherkenningstechnologie aan toe en gebruik visuele feedback om elke stap van de interactie te verbeteren. 
        Het goede nieuws is dat dit geen spraakherkenningstechnologie versus grafische gebruikersinterface hoeft te zijn. 
        Deze twee gecombineerd kan leiden tot een optimale gebruikerservaring. Wanneer experts deze elementen ontwerpen met de gebruiker 
        in gedachten, wordt het iets veel meer dan een mens die zijn apparaat gebruikt. Het wordt een ervaring, een gesprek, 
        een diep persoonlijke interactie die het gebruik definiëert.
        </p>

        <h2>Gebruikte bronnen</h2>
        <p>
          <ul className="bron">
            <li>[2] 
            Mitra, V. et al. (2018). Articulatory information and multiview features for large vocabulary
            continuous speech recognition
            Geraadpleegd op: 17-05-2019, van:
            https://ieeexplore-ieee-org.ezproxy.hro.nl/stamp/stamp.jsp?tp=&arnumber=8462028
            </li>
            <li>
            [12] Lv Cuiling (2016) English speech recognition method based on Hidden Markov model Geraadpleegd op 22-05-2019, van:
            https://ieeexplore-ieee-org.ezproxy.hro.nl/stamp/stamp.jsp?tp=&arnumber=7733806
            </li>
            <li>
            [13] Encyclo (woordenboek)
            Geraadpleegd op 22-05-2019, van:
            https://www.encyclo.nl/begrip/foneem
            </li>
            <li>
            [14] Prashanth Kannadaguli, Ananthakrishna Thalengala (2015) Phoneme Modeling for Speech Recognition in Kannada Using Hidden Markov Model
            Geraadpleegd op 22-05-2019, van:
            https://ieeexplore-ieee-org.ezproxy.hro.nl/stamp/stamp.jsp?tp=&arnumber=7091382
            </li>
            <li>
            [15] LumenVox (2018) Types of Speech Recognition
            Geraadpleegd op 21-05-2019, van:
            https://www.lumenvox.com/resources/tips/types-of-speech-recognition.aspx
            </li>
            <li>
            [16] Google AI Blog (2019) An All-Neural On-Device Speech Recognizer
            Geraadpleegd op 21-05-2019, van:
            https://ai.googleblog.com/2019/03/an-all-neural-on-device-speech.html
            </li>
            <li>
            [17] Ariana Ocampo (2018) Zero UI, User Experience Design, and How Context Matters
            Geraadpleegd op 21-05-2019, van:
            https://medium.com/this-is-design/the-user-experience-of-zero-user-interface-within-products-24fcf38aa7e3
            </li>
            <li>
            [18] Stephen Moyers (2017) Voice Recognition Technology vs. Graphic User Interface: Who Winx
            Geraadpleegd op 21-05-2019, van:
            https://www.motocms.com/blog/en/voice-recognition-technology
            </li>
            <li>
            [19] Jeff Hurt (2012) Your Senses Are Your Raw Information Learning Portals
            Geraadpleegd op 21-05-2019, van:
            https://velvetchainsaw.com/2012/05/23/your-senses-your-raw-information-learning-portals/
            </li>
            <li>
            [20] BBC (2018) Amazon Echo trial to help elderly and disabled people
            Geraadpleegd op 21-05-2019, van:
            https://www.bbc.com/news/av/uk-politics-43869120/amazon-echo-trial-to-help-elderly-and-disabled-people
            </li>
            <li>
            [21] Caute A, Woolf C	(2016) Using voice recognition software to improve communicative writing and social participation in an individual with severe acquired dysgraphia: an experimental single-case therapy study
            Geraadpleegd op 31-05-2019, van: Aphasiology 2016 30(2-3): 245-268
            </li>
            <li>
            [29] Purvish Shah (2017) The Zero UI Debate
            Geraadpleegd op 28-05-2019, van:
            https://medium.com/swlh/the-zero-ui-debate-e4b8bee4b742
            </li>
            <li>
            [30] Samuel K Itotia (2019) What is the Meaning of Zero UI and How Does it Affect Design?
            Geraadpleegd op 28-05-2019, van:
            https://techweez.com/2019/05/28/zero-ui-design/
            </li>

          </ul>
        </p>
      </Content>
    </Root>
  )
};

export default StemDetail;