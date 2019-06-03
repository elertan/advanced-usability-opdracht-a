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
        <p>
        De eerste twee deelvragen beschrijven de <i>actuele technologie</i> en de laatste twee deelvragen de <i>usability en 
        gebruikerservaring van NUI.</i>
        </p>

        <h3>Stem</h3>
        <p>
          Met gebruik van spraakherkenningssystemen kunnen we onze stem gebruiken om instructies te geven aan apparaten. 
          Dit bespaart ons de moeite om met niet-intuïtieve  knoppen te werken of zelfs naar het apparaat toe te lopen om deze te bedienen. 
          Doordat het gebruik van gesproken instructies voor ons intuïtief aanvoelt, vergroot dit in het algemeen de gebruiksvriendelijkheid van apparaten. De technologie stelt het ook minder-validen, zoals ouderen en gehandicapten, in staat om apparaten te bedienen die anders buiten hun grenzen liggen. 
          Dit ligt niet alleen aan een verhoogde gebruiksvriendelijkheid voor digibeten, maar ook door een hogere toegankelijkheid doordat mensen met mobiliteitsproblemen alsnog interactie kunnen hebben met bijvoorbeeld televisies of delen van het huis (in het geval van <i>smart homes</i>).
          Spraakherkenningssystemen bestaan uit twee soorten spraakherkenningsprogramma’s: beperkte systemen met een kleine vocabulaire bestemd voor een grote groep gebruikers, en meer geavanceerde systemen met een grote woordenschat en zelflerend vermogen bestemd voor de zakelijke sfeer. 
          Laatstgenoemde systeemvorm wordt vooral gebruikt in de populaire producten op dit gebied voor de thuisomgeving, afkomstig van Amazon en Google, respectievelijk de Echo Dot en Alexa. Het Hidden Markov-model vormt het onderliggende model voor deze geavanceerde spraakherkenningssystemen. 
        </p>
        <p>
          Spraakherkenningssystemen bestaan uit twee soorten spraakherkenningsprogramma’s: beperkte systemen met een kleine vocabulaire bestemd voor een grote groep gebruikers, en meer geavanceerde systemen met een grote woordenschat en zelflerend vermogen bestemd voor de zakelijke sfeer. 
          Laatstgenoemde systeemvorm wordt vooral gebruikt in de populaire producten op dit gebied voor de thuisomgeving, afkomstig van Amazon en Google, respectievelijk de Echo Dot en Alexa. 
          Het <i>Hidden Markov-model</i> vormt het onderliggende model voor deze geavanceerde spraakherkenningssystemen.
        </p>
        <h3>Hersenen</h3>
        <p>
          Brein-computer aansluitpunten (BCAs) zijn vooralsnog enorm innovatief en bevinden zich in de experimentele fase. 
          Er zijn praktisch nog geen toepassingen voor de gemiddelde burger om aan te schaffen. De <i>XWave</i> komt wel het meest dichtbij: een commercieel product in de vorm van een koptelefoon die gekoppeld kan worden aan de iPhone. 
          De koptelefoon meet de hersenactiviteit en voert deze gegevens door naar de verbonden telefoon, waarna deze weer kunnen worden doorgevoerd naar speciaal gemaakte apps voor verschillende doeleinden (bijvoorbeeld meditatietraining).
        </p>
        <p>
          De werking van BCAs zijn gebaseerd op het meten van de hersenactiviteit van de gebruiker. 
          Deze hersensignalen worden omgevormd naar een digitale vorm die te interpreteren is voor verbonden elektrische apparaten, en waaruit instructies kunnen worden gehaald voor deze apparaten. 
          Deze werkwijze stelt ons in staat om apparaten te bedienen door middel van onze gedachten; dat wil zeggen dat we alleen maar aan een specifieke actie hoeven te denken waarna het verbonden apparaat deze actie als een instructie uitvoert.
        </p>
        <p>
          Doordat we met onze gedachten apparaten kunnen besturen, vergroot dit in theorie de toegankelijkheid en gebruiksvriendelijkheid van veel apparaten. 
          Niks voelt meer intuïtief dan alleen maar denken aan de actie die moet worden uitgevoerd. 
          De praktijk wijst echter uit dat er nog veel moet worden gedaan om zowel de functionaliteit als het gebruikscomfort naar een acceptabel niveau te brengen, wilt de technologie algemene acceptatie krijgen. 
          BCAs beloven echter vooral veel op het gebied van (medische) hulpmiddelen voor verlamde mensen. 
          Zo kan een volledig verlamd persoon weer communiceren via een computer en bewegen via een mentaal gestuurde rolstoel of prothesen.
        </p>
        <p>
          Aansluitingsvormen van BCAs zijn er in twee varianten: inwendig en uitwendig. 
          Een inwendige aansluiting houdt in dat er computerchips <i>in</i> het brein worden geplant. 
          De uitwendige vorm is minder extreem en betreft een pet of kap die opgezet kan worden tijdens de interactie met een apparaat. 
          Het hoofddeksel kan dan de hersensignalen uitlezen.
        </p>
        <h3>Beweging</h3>
        <p>
          Bewegingsbesturing maakt het mogelijk om apparaten te besturen door bepaalde bewegingen of veranderingen in bewegingspatronen te veroorzaken. 
          Deze beweging wordt gemeten via verschillende sensoren: infrarood, microgolf en ultrasonisch of tomografische sensoren. 
          Een combinatie is ook mogelijk, en noodzakelijk want alle technieken hebben voor -en nadelen.
        </p>
        <p>
          Bewegingssensoren worden al gebruikt in de beveiligingsbranche en multimediasystemen. Vooral de <i>entertainment</i> industrie maakt gebruik van deze techniek: spelcomputers als de Nintendo Wii en de Xbox Kinect maar ook de filmsector maken gebruik van <i>motion sensing</i> voor verschillende doeleinden. 
          Spelcomputers maken zo een extra vorm van interactie mogelijk met hun systemen en de spellen. 
          De filmindustrie gebruikt het om kant-en-klare animaties te winnen voor gebruik in (animatie)films door het gebruik van acteurs met <i>motion capture</i> uniformen.
        </p>
        <p>
          Doordat beweging voor een mens heel intuïtief is, draagt deze techniek ook bij aan de gebruiksvriendelijkheid en toegankelijkheid van apparaten die ervan gebruikmaken. 
          De Nintendo Wii was een pionier op dit gebied en was simpel in gebruik. Samsung heeft met zijn Smart TV een product op de markt gebracht en bewezen dat het mogelijk is om door menu’s te navigeren met alleen een paar handbewegingen
        </p>
        <h3>Ogen</h3>
        <p>
          Oogmeters kunnen worden gebruikt om informatie uit de oogbewegingen van een gebruiker te halen. 
          Deze informatie kan worden gebruikt om bijvoorbeeld websites te verbeteren qua gebruiksvriendelijkheid, maar ook om hieruit instructies te interpreteren voor apparaten.
        </p>
        <p>
          Oogmeters winnen informatie door gebruik te maken van de reflectie hoeken van het infrarode licht dat zij voortdurend uitzenden in de ogen van de gebruiker. 
          Hiervoor bestaan oogmeters altijd uit een lichtbron en een camera. 
          Uiteindelijk kunnen alle richtingen van het kijkveld van de gebruiker binnen een bepaalde periode in kaart worden gebracht. 
          Simpel gezegd: we weten dan waar de gebruiker naar kijkt of heeft gekeken binnen een bepaalde periode.
        </p>
        <p>
          Deze informatie kan dus ook gebruikt worden voor het besturen van apparaten. 
          We kunnen door onze blik te richten op een bepaald deel van een computerscherm, de computer duidelijk maken dat we willen interacteren met iets op dat deel van het scherm. 
          Op deze manier kunnen we opties kiezen, beslissingen maken of programma’s starten.
        </p>
        <p>
          De techniek maakt het mogelijk voor mensen met een motorische beperking, of een volledige verlamming, om alsnog te interacteren met een apparaat. 
          De techniek is momenteel prijzig maar dat neemt niet weg dat het de zelfredzaamheid van deze mensen zal vergroten. 
          Ook de minder technisch vaardigden onder ons kunnen er baat bij hebben: uit een onderzoek is gebleken dat de proefpersonen sterk de voorkeur hadden voor het computersysteem zonder muis en toetsenbord, maar een met oogbesturing.
        </p>
        <h3>Aanraking</h3>
        <p>
          Aanraaktechnologie bestaat vooral uit het aanraken met de vingers of het maken van vingerpatronen op een beeldscherm, om zo een instructie te geven aan het apparaat. 
          Het wordt vooral veel gebruikt bij <i>smartphones</i>, tablets en pin -en betalingsautomaten.
        </p>
        <p>
          Aanraakbeeldschermen bestaan in drie varianten: weerhoudende, capacitieve en lichtintensiteit metende beeldschermen.
        </p>
        <p>
          Weerhoudende schermen werken op basis van druk en vervorming: een lokale aanraking zorgt voor een lokale verzakking van het beeldscherm waardoor een bepaalde instructie wordt doorgegeven. 
          Deze instructie is dus afhankelijk van de aangeraakte plek. Capacitieve schermen werken op basis van verstoring van het elektrische veld dat voortdurend over het scherm loopt. 
          Bij aanraking treedt een lokale verstoring op en dat staat gelijk aan een bepaalde instructie voor het apparaat. Licht-intensieve schermen werken ook op basis van verstoring maar dan op het gebied van verschil in lichtval op het scherm. 
          Door een aanraking is er lokaal minder lichtval op het scherm, en ook hier staat dit gelijk aan een bepaalde instructie naar het apparaat.
        </p>
        <p>
          Aanraakschermen hebben vooral bij telefoons voor een grote opschudding gezorgd. Doordat het zo natuurlijk aanvoelt, zijn veel apparaten hierdoor gebruiksvriendelijker. 
          Dit blijkt uit de massale adoptie van smartphones onder alle leeftijdsgroepen.
        </p>

        <h2>Antwoord op de hoofdvraag</h2>
        <p>
          Het probleem van digibeten is vaak dat zij geïntimideerd raken door de nieuwste technologieën. 
          Echter kan dit ook komen door een gebrek aan interesse of aan de hoge leer drempel om met deze technologie aan de slag te gaan. Nuis kunnen hier te hulp schieten zodat digibeten deze angsten kunnen overwinnen. 
          Het doel van een natuurlijke gebruikersinterface is om een intuïtieve en organische interactie te hebben tussen gebruiker en technologie, met de nadruk op eenvoud. 
          Gebruikers hoeven dus geen computerexpert te zijn om met een nui aan de slag te gaan, het is speciaal gedesigned voor "natuurlijke” interacties. 
          Door deze technologische evolutie zou de drempel lager moeten zijn voor digibeten om met nieuwe technologie aan de slag te gaan. 
          In plaats van met een muis, keyboard, controller of touchscreen kunnen digibeten systemen besturen met menselijke interacties.
        </p>
        
      </Content>
    </Root>
  )
};

export default ConclusieDetail;