import * as React from "react";
import DetailNav from "../DetailNav";
import {RouteComponentProps} from "react-router";
import {Content, Root} from "./styles";

import bcaVoorbeeld from "../../../assets/images/bca-besturing.gif";
import bcaChatVerlamming from "../../../assets/images/bca-chat-verlamming.jpg";
import bcaProthese1 from "../../../assets/images/bca-prothese1.gif";
import bcaProthese2 from "../../../assets/images/bca-prothese2.gif";
import bcaSchaakspel from "../../../assets/images/bca-schaakspel.png";
import bcaCursorBesturing from "../../../assets/images/bca-cursorbesturing.png";
import bcaVrouw from "../../../assets/images/bca-xwave-vrouw.png";
import bcaAppScherm from "../../../assets/images/bca-xwave-scherm.png";
import bcaDiagram from "../../../assets/images/bca-diagram.png";
import bcaRolstoel from "../../../assets/images/bca-rolstoel.png";

interface IProps extends RouteComponentProps<{}> {}

const HersenenDetail: React.FC<IProps> = (props) => {
  return (
    <Root>
      <DetailNav {...props} />
      <Content>
        <h1>Besturing met het brein</h1>

        <p>
          Tegenwoordig is het zelfs mogelijk om zonder lichamelijk contact een elektrisch apparaat, rolstoel of prothese te bedienen.
          Met alleen een functionerend brein tot uw beschikking, kunt u bijvoorbeeld een computer een programma laten opstarten en tekst op het beeld krijgen.
          Of wat dacht u van het bedienen van uw rolstoel of prothese, door alleen maar goed na te denken over welke richting u op wilt?
        </p>

        <h2>Waarom?</h2>

        <p>
          Stelt u zich eens voor dat u bij de computer zit. In plaats van dat u met uw handen het toetsenbord en de muis bedient, zet u een petje op en kijkt u naar het beeldscherm.
          Nu denkt u “ik wil dit programma starten zodat ik een berichtje kan sturen naar mijn kleinkind”. 
          En zie daar: het programma start voor uw eigen ogen op en wordt weergegeven op het beeldscherm. 
          U denkt nu aan de woorden die u wilt schrijven en aan de volgorde van de letters waaruit die woorden bestaan.
          De letters verschijnen een voor een op het beeld totdat u hele zinnen heeft opgeschreven. Vervolgens denkt u aan het knopje “bericht verzenden” en weg is het bericht.
          Gefeliciteerd! U heeft zojuist een bericht verstuurd zonder dat u de computer ook maar hebt aangeraakt. En dit allemaal dankzij de samenwerking tussen het petje, uw brein en de computer.
        </p>

        <p>
         Deze technologie is nog erg jong en bevindt zich in de experimentfase [4].
         De vele onderzoeken die op dit gebied worden gedaan zijn meer bedoeld om theorieën en concepten te bewijzen.
         De technologie is daarmee dus nog lang niet klaar voor het brede publiek [3].
        </p>

        <h2>Hoe werkt de achterliggende techniek?	</h2>

        <p>
          Alles wat zojuist genoemd is, wordt mogelijk gemaakt door een zogenaamd brein-computer aansluitingspunt (BCA).
          Nee, dat betekent niet dat er een gaatje in uw hoofd moet worden geboord waar daarna een kabel in gaat dat naar een apparaat leidt.
          Wat wordt er dan mee bedoeld?
        </p>

        <p>
          Een BCA betekent het bestaan van een samenwerking tussen iemands brein en een elektrisch apparaat [3].
          Door deze samenwerking kan het apparaat signalen ontvangen die afkomstig zijn vanuit het brein.
          Deze signalen kunnen worden omgezet naar instructies voor het apparaat.
          Hierdoor is het bijvoorbeeld mogelijk om tekst te schrijven op een beeldscherm, of om een prothetisch ledemaat te bewegen door er alleen maar bewust over na te denken.
          Door het omzetten van de signalen uit het brein naar elektrische golven, kan het apparaat de wensen van de gebruiker interpreteren en de juiste actie uitvoeren.
        </p>

        <p>	
          Maar goed, hoe krijgen we precies zo’n verbinding tussen brein en apparaat tot stand? 
          Daar zijn over het algemeen twee manieren voor [6, p.52]: tijdelijk een uitwendige kap/pet op het hoofd gebruiken tijdens de interactie met het apparaat (zie rechts), 
          of vrijwel permanent een inwendig stukje computerapparatuur in het hoofd brengen dat direct de hersenactiviteit kan meten. 
        </p>

        <img src={bcaVoorbeeld} />
        <p><i>Een proefpersoon met uitwendige kap beweegt een prothese met zijn gedachten.</i></p>
        
        <p>
          Ja, dat laatste leest u goed. Het is mogelijk een computerchip in het brein te plaatsen om zo een (draadloze) verbinding te maken met een elektrisch apparaat, en deze te bedienen met de kracht van uw hersenen. [31]
        </p>

        <p>
          U kunt u afvragen wat nog <i>science fiction</i> is en wat de werkelijkheid...
        </p>

        <h2>Voor welke toepassingen wordt het gebruikt?</h2>

        <p>
          We hebben het al vlug over een aantal toepassingen gehad. De mogelijkheden van BCAs kunnen op verschillende manieren een groot effect hebben op de levenskwaliteit van mensen [8][9].
          Stel dat iemand door een ongeluk of ziekte zijn of haar spreekvaardigheid of mobiliteit verliest. 
          Sommige mensen zijn compleet verlamd en kunnen niet eens meer hun ogen bewegen, laat staan hun armen, benen of handen.
        </p>

        <h3>Communicatie</h3>

        <p>
          Brein-computer aansluitpunten kunnen gehandicapte personen helpen om hier minder hinder van te ervaren [9].
          De technologie kan een verlamd persoon in staat stellen om te communiceren met de buitenwereld, en zelfs weer hierin fysiek te laten bewegen.
          In juni 2006 demonstreerde de Amerikaanse wetenschapper Peter Brunner de mogelijkheden van de technologie, door voor het aanwezige publiek een boodschap op het scherm te weergeven,
          waarin hij mededeelde dat hij niet zou kunnen werken zonder deze technologie [3]. Peter Brunner heeft ALS [5] en is compleet verlamd. De letters en resulterende woorden kwamen uit zijn gedachten
          en werden door de computer opgevangen. Deze computer "typte" de woorden daarna op het beeldscherm. 
        </p>

        <img src={bcaChatVerlamming} />
        <p><i>Twee verlamde mensen gebruiken hun gedachten om met elkaar te communiceren. Zij bedenken en sturen berichtjes naar elkaar via een computerprogramma.</i></p>
        
        <h3>Mobiliteit</h3>

        <p>
          Zoals gezegd kan de technologie ook wonderen verrichten op het gebied van mobiliteitsproblemen [3][4][6][8][9]. Een compleet verlamd persoon kan niet lopen, en een rolstoel is ook geen optie.
          Zelfs een scootmobiel is geen alternatief aangezien deze op zijn minst bestuurd en aangedreven moet worden met de hand. 
          Brein-computer aansluitpunten hebben de potentie om deze problemen op te lossen door het hulpstuk, in dit geval de scootmobiel of een prothese, te integreren met de persoon [9].
          Of deze integratie nu via de inwendige of de uitwendige methode gebeurt, maakt voor het effect niet uit. 
          De integratie zou ervoor kunnen zorgen dat de persoon de scootmobiel met zijn of haar gedachten voorts kan sturen en draaien.
          Nog beter: in theorie is het mogelijk dat prothesen, zoals benen, armen, handen en voeten, net als echte ledematen kunnen functioneren.
          Hiervoor wordt een verbinding gelegd tussen de hersenen en de prothesen. In dit geval zou een scootmobiel helemaal niet meer nodig zijn.
        </p>

        <img src={bcaProthese1} />
        <img src={bcaProthese2} />
        <p><i>Een proefpersoon beweegt zijn prothese met gedachten.</i></p>

        <p>
          Bij een verlamming kan het brein de spieren geen instructies meer geven om het lichaam te laten bewegen. 
          Een brein-computer aansluitpunt kan dit wel doordat signalen direct aan de prothesen wordt doorgegeven via een elektrische ontvanger aan de prothese [9][32]. 
          Simpel gezegd springen de wensen van de gebruiker direct vanuit het brein naar deze ontvanger. 
          Op zijn beurt krijgt de prothese de juiste instructies van de ontvanger. Hierdoor zal de prothese de gewenste beweging maken.
        </p>

        <h3>Waarnemen van de werkelijke emotionele status</h3>

        <p>Een BCA kan gebruikt worden om de mentale status van een individu te meten [9]. Denk hierbij aan het waarnemen van de huidige emotionele, cognitieve of beperkte status (drank/drugs).
          Hierdoor kan bijvoorbeeld onderzoek worden gedaan naar het effect van allerlei toepassingen op ons welzijn en mentale status.
          Denk hierbij aan onderwijsmethodes, psychologisch onderzoek, diagnostiek en medische behandeling of het verbeteren van werkomgevingen.
          Of we kunnen controleren wanneer iemand aan het liegen is, bijvoorbeeld tijdens een misdaadonderzoek.
          Laatstgenoemde kan worden gezien als een moderne versie van de leugendetector.
        </p>

        <h2>Hoe gebruiksvriendelijk is deze NUI?</h2>

        <p>
          Brein-computer aansluitingspunten behoren tot de wetenschap van de zogenaamde psychotechnologie [6].
          Deze wetenschap en de technologie staat nog in de kinderschoenen en is daarmee niet toegankelijk tot het grote publiek.
          In het verlengde daarvan ontbreekt het ook nog aan realistische dagelijkse toepassingen. Vrijwel alle apparatuur is nog een prototype en is daardoor erg duur.
        </p>

        <p>
          Dat gezegd hebbende, zijn er wel studies gedaan naar de gebruikerservaring van verschillende brein-computer aansluitingspunten [6][9].
          In een van deze studies is gekeken naar de volgende drie kenmerken van een BCA. Deze kenmerken behoren tot een standaarddefinitie (genaamd ISO) op het gebied van kwaliteit [7].
          Hier werd op gelet: prestatie, mentale belasting en voldoening, van de niet-gehandicapte testpersonen bij gebruik van de BCA.
          Tijdens de meting werden vragen gesteld als: hoe snel leert een persoon de technologie te gebruiken?
          Hoe snel kan een gebruiker met het apparaat zijn doel bereiken? En hoe voelt de gebruiker zich daarbij?
        </p>

        <p>
          Helaas stellen de resultaten vooralsnog teleur [4][6]. Natuurlijk kan dat nog wel verwacht worden van een technologie die vooralsnog erg geavanceerd en innovatief is.
          De nadruk ligt vanzelfsprekend in eerste instantie op het laten werken van de technologie. Hierna komt pas de verfijning ervan. Gebruikscomfort behoort tot het laatste.
        </p>

        <p>
          Een waarschuwing dient zich wel aan: uit studies is gebleken dat mensen met een beperking ook bereid zijn om hulpmiddelen niet te gebruiken, of te stoppen met het gebruiken ervan,
          wanneer deze niet voldoet aan hun kwaliteitsbehoeften [8]. Het is niet zo dat gehandicapten per definitie iets zullen gebruiken omdat zij geen keuze hebben.
          Als een hulpmiddel geen voldoening geeft (ook al vervult het een functie), is er een grote kans dat deze niet meer in gebruik zal worden genomen [6].
          Dit is zorgelijk, want het is enorm zonde als niet iedereen mee kan doen in de samenleving.
          Het is daarom van belang dat alle hulpmiddelen voldoende getest zijn, niet alleen op functionaliteit maar ook op gebruiksvriendelijkheid.
        </p>

        <h2>Hoe kunnen bestaande technologieën hiermee toegankelijker worden?</h2>
        
        <p>
          Vanwege de nog experimentele status van de beschreven technologie, zijn er weinig concrete toepassingen of integratie met apparaten die bij u thuis staan.
          U kunt niet zomaar een hoofdkapje kopen en deze aansluiten op uw computer of tablet, en deze fijn zonder handen besturen.
          Er wordt wel veel onderzoek gedaan naar (het ontwikkelen van) commerciële toepassingen voor hedendaagse apparaten [9][11], en het is interessant om naar deze te kijken en te speculeren over de toekomst.
        </p>

        <h3>Computer, telefoon -of tabletbesturing</h3>

        <p>
          We hebben het er al eerder over gehad, maar we zouden geen muis en toetsenbord meer nodig moeten hebben met een BCA.
          Met onze gedachten kunnen we immers de computer besturen door het pijltje te bewegen naar de juiste icoontjes, of naar de letters om een bericht te schrijven.
          Momenteel is het grootste nadeel, naast de experimentele status van BCAs, dat er amper computerprogramma’s zijn buiten onderzoeksomgevingen die gemaakt zijn voor deze besturingswijze;
          er valt op dit gebied nog veel terrein te winnen. [4]. 
        </p>

        <img src={bcaSchaakspel} />
        <img src={bcaCursorBesturing} />
        
        <p><i><b>Boven:</b> een man speelt een schaakspel op de computer met zijn gedachten. <b>Onder:</b> uitleg hoe een BCA te gebruiken om de pijl (cursor) over het computerbeeld naar het doelwit te bewegen.</i></p>

        <p>
          Aangezien telefoons en tablets ook kunnen worden gezien als computers, kunnen deze op dezelfde manier worden bestuurd.
          De XWave (zie foto’s hieronder) is een BCA die het mogelijk maakt uw iPhone of iPad te bedienen met het brein [10].
          De signalen komen vanuit het brein via de XWave de iPhone binnen. Een speciale app kan deze signalen omzetten naar instructies die de telefoon kan begrijpen.
          Op deze wijze kunt u er hands-free spelletjes mee spelen, meditatie apps gebruiken, of in de toekomst apps gebruiken die nu nog niet zijn uitgevonden! Er is nog zoveel te ontdekken.
        </p>

        <img src={bcaVrouw} />
        <img src={bcaAppScherm} />
        
        <p><i><b>Links:</b> een vrouw demonstreert de XWave (op het hoofd) en de app op de iPhone. <b>Rechts:</b> de app toont de huidige hersenactiviteit met meetwaarden.</i></p>
        
        <h3>Meer en snellere adoptie van technologische hulpmiddelen</h3>

        <p>
          Op het gebied van mobiliteitshulpmiddelen zoals prothesen en rolstoelen kunnen BCA’s een grote rol spelen [9][11]. 
          Niet alleen maakt het deze hulpmiddelen volledig bruikbaar voor mensen met een verlamming, maar het kan ook de gebruiksvriendelijkheid voor elk soort gebruiker verhogen.
          We kunnen bijvoorbeeld onze handen vrij houden en ons bovenlichaam minder belasten tijdens het besturen van een rolstoel.
        </p>

        <p>
          Op het gebied van prothesen zou de adoptiesnelheid vergroot en het leerproces versneld kunnen worden.
          Doordat BCAs van nature intuitief aanvoelen, zal het gebruik van een arm -of beenprothese sneller natuurlijk aanvoelen en aangeleerd worden [9][33].
          Dit verlaagt de drempel tot het accepteren van een prothese als hulpstuk en maakt het gebruik ervan natuurlijker [6].
        </p>

        <img src={bcaDiagram} />
        <img src={bcaRolstoel} />

        <p><i><b>Links:</b> signalen worden gestuurd vanuit het brein en worden onderweg omgevormd tot een (digitale) vorm die te interpreteren is voor (medische) hulpmiddelen. <b>Rechts:</b> een rolstoelgebruiker met een XWave, waarmee hersensignalen via de iPhone naar de rolstoel kunnen.</i></p>

      </Content>
    </Root>
  )
};

export default HersenenDetail;