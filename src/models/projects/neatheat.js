import logo from '../../assets/projects/neatheat/logo.png'
import conceptWatering from '../../assets/projects/neatheat/concept-watering.jpg'
import conceptFlameDetector from '../../assets/projects/neatheat/concept-flame-detector.jpg'
import earlySketch from '../../assets/projects/neatheat/early-sketch.jpg'
import model3d from '../../assets/projects/neatheat/3d-model.png'
import finalPrototype from '../../assets/projects/neatheat/final-prototype.jpeg'
import videoA from '../../assets/projects/neatheat/video-a.mp4'
import videoB from '../../assets/projects/neatheat/video-b.mp4'

/** @type {import('./types.js').Project} */
export const neatheat = {
  id: '3',
  slug: 'neatheat',
  title: 'NeatHeat',
  summary: {
    en: 'A candle safety alarm for elderly people living at home, designed together with two real users across several rounds of research, prototyping and testing.',
    no: 'En stearinlysalarm for eldre hjemmeboende, designet sammen med to reelle brukere gjennom flere runder med research, prototyping og testing.',
  },
  year: 2025,
  cover: logo,
  coverFit: 'contain',
  sections: [
    {
      layout: 'side',
      text: {
        en: 'Norway is getting older, and that puts pressure on care services. Welfare technology is one way to answer it: if the right things are made, people can stay safely in their own homes for longer. That was the starting point for our group project at university. One of us had grandparents living at home just outside the city who were willing to take part, so instead of designing for an imagined user we designed with two real ones, throughout.',
        no: 'Norge blir eldre, og det legger press på omsorgstjenestene. Velferdsteknologi er én måte å svare på det: lager man de riktige tingene, kan folk bo trygt hjemme lenger. Det var utgangspunktet for gruppeprosjektet vårt på universitetet. En av oss hadde besteforeldre som bodde hjemme like utenfor byen og som gjerne ville være med, så i stedet for å designe for en tenkt bruker designet vi med to virkelige, hele veien.',
      },
      images: [
        {
          src: logo,
          caption: {
            en: 'NeatHeat, the group and the product name.',
            no: 'NeatHeat, navnet på gruppa og på produktet.',
          },
        },
      ],
    },
    {
      text: {
        en: 'We started with a diary study rather than jumping straight to interviews, asking the users to record their everyday routines over time. The diaries then shaped the interview guide, and the interviews were transcribed and coded. Three themes came out of that analysis: automatic watering of plants, safety around lit candles, and reminders to take medicine.',
        no: 'Vi startet med en dagbokstudie framfor å hoppe rett på intervju, og ba brukerne skrive ned hverdagsrutinene sine over tid. Dagbøkene formet så intervjuguiden, og intervjuene ble transkribert og kodet. Tre temaer kom ut av analysen: automatisk vanning av planter, sikkerhet rundt tente stearinlys, og påminnelser om å ta medisin.',
      },
    },
    {
      layout: 'full',
      text: {
        en: 'We built one rough concept per theme and took them back to the users, so the findings became something they could look at, understand and react to. They chose the candle safety concept and we dropped the other two. Looking back, this is the part of the process I would change: we made the concepts on our own and let the users pick from them, when we could have sketched all three together and given them far more influence over each one.',
        no: 'Vi laget ett grovt konsept per tema og tok dem med tilbake til brukerne, slik at funnene ble noe de kunne se, forstå og reagere på. De valgte konseptet om stearinlyssikkerhet, og vi forkastet de to andre. I ettertid er det denne delen av prosessen jeg ville endret: vi laget konseptene på egen hånd og lot brukerne velge mellom dem, når vi kunne skissert alle tre sammen med dem og gitt dem langt mer påvirkning på hvert enkelt.',
      },
      images: [
        {
          src: conceptWatering,
          caption: {
            en: 'The automatic watering concept, one of the two the users turned down.',
            no: 'Konseptet for automatisk vanning, ett av de to brukerne takket nei til.',
          },
        },
        {
          src: conceptFlameDetector,
          caption: {
            en: 'The candle safety concept, the one they picked: detect the flame, warn before you leave.',
            no: 'Konseptet for stearinlyssikkerhet, det de valgte: oppdag flammen, varsle før du går.',
          },
        },
      ],
    },
    {
      layout: 'side',
      text: {
        en: 'From there we sat down with pen and paper together with the users. Sketching is quick and easy to throw away, which is exactly what you want while the idea is still open. They asked for something easy to move, so it could be used wherever there were candles. Plenty of ideas were discarded along the way, including the grandfather’s suggestion of a sprinkler that would douse the candle if it got too hot, which the grandmother vetoed at the thought of water all over the table.',
        no: 'Derfra satte vi oss ned med penn og papir sammen med brukerne. Skisser går fort og er lette å kaste, som er akkurat det man vil ha mens ideen fortsatt er åpen. De ba om noe som var lett å flytte, slik at det kunne brukes der det var stearinlys. Mange ideer ble forkastet underveis, blant annet bestefarens forslag om en vannspreder som skulle slukke lyset hvis det ble for varmt, som bestemoren avviste ved tanken på vannsøl utover hele bordet.',
      },
      images: [
        {
          src: earlySketch,
          caption: {
            en: 'An early technical sketch: infrared sensor, speaker and Arduino, watching a candle.',
            no: 'En tidlig teknisk skisse: infrarød sensor, høyttaler og Arduino, som følger med på et stearinlys.',
          },
        },
      ],
    },
    {
      text: {
        en: 'Instead of the interview we had planned for the next round, we ran a workshop and let the users shape the form themselves in cardboard, with tape and glue. Simple tools meant they could design without any design training. They wanted it discreet, with no visible wires, and suggested hanging it on a vase with a hook, since there was always a vase on the table. That made it battery powered. The reference they reached for was a motion activated bathroom lamp. The workshop also went the other way: we explained that the infrared sensor struggles in sunlight, and they told us they rarely light candles while it is light outside, which told us something useful about when the thing would actually be used.',
        no: 'I stedet for intervjuet vi hadde planlagt til neste runde, holdt vi en workshop og lot brukerne forme produktet selv i papp, med teip og lim. Enkle verktøy gjorde at de kunne designe uten noen designkompetanse. De ville ha noe diskret, uten synlige ledninger, og foreslo å henge det på en vase med en krok, siden det alltid stod en vase på bordet. Det gjorde den batteridrevet. Referansen de hentet fram var en bevegelsesaktivert badlampe. Workshopen gikk også andre veien: vi forklarte at den infrarøde sensoren sliter i sollys, og de fortalte oss at de sjelden tenner stearinlys mens det er lyst ute, noe som sa oss noe nyttig om når produktet faktisk ville bli brukt.',
      },
    },
    {
      layout: 'full',
      text: {
        en: 'With the cardboard prototype as the template we moved to 3D modelling, working from two of Dieter Rams’ principles: good design is as little design as possible, and good design is unobtrusive. The result was two oval capsules printed in white, one holding the flame sensor and one the alarm and motion sensor, talking to each other wirelessly. The backs come off so the battery can be changed and the wiring adjusted.',
        no: 'Med papp-prototypen som mal gikk vi over til 3D-modellering, med utgangspunkt i to av Dieter Rams sine prinsipper: god design er så lite design som mulig, og god design er ikke påtrengende. Resultatet ble to ovale kapsler printet i hvitt, én med flammesensoren og én med alarmen og bevegelsessensoren, som snakker trådløst sammen. Baksidene kan tas av slik at batteriet kan byttes og kablingen justeres.',
      },
      images: [
        {
          src: model3d,
          caption: {
            en: 'Cross section from the 3D model, working out how the components fit inside the shell.',
            no: 'Tverrsnitt fra 3D-modellen, der vi fant ut hvordan komponentene fikk plass inni skallet.',
          },
        },
      ],
    },
    {
      layout: 'side',
      text: {
        en: 'We tested three situations with the users: change the battery, set the two units up in the flat, and leave with a candle still lit. Setting them up went well, and they asked whether we had bought the casings in a shop. The other two did not go well. Changing the battery meant joining tiny jumper cables, which one user, who has arthritis, could not manage at all. Then the walk out of the flat failed outright on a power problem. It is an uncomfortable result to write up, but a clear one: we had pushed the minimalism far enough that it cost us usability, and only testing with the actual users would have shown us that.',
        no: 'Vi testet tre situasjoner med brukerne: bytte batteri, sette opp de to enhetene i leiligheten, og gå ut med et stearinlys fortsatt tent. Oppsettet gikk bra, og de spurte om vi hadde kjøpt kapslene i en butikk. De to andre gikk ikke bra. Batteribytte betydde å koble sammen bittesmå jumperkabler, som den ene brukeren, som har leddgikt, ikke klarte i det hele tatt. Deretter feilet turen ut av leiligheten helt, på grunn av et strømproblem. Det er et ubehagelig resultat å skrive ned, men et tydelig et: vi hadde dratt minimalismen langt nok til at det gikk på bekostning av brukervennligheten, og bare testing med de faktiske brukerne ville vist oss det.',
      },
      images: [
        {
          src: finalPrototype,
          caption: {
            en: 'The two finished capsules: flame sensor on the left, alarm and motion sensor on the right.',
            no: 'De to ferdige kapslene: flammesensor til venstre, alarm og bevegelsessensor til høyre.',
          },
        },
      ],
    },
    {
      layout: 'full',
      text: {
        en: 'With the deadline close we had to fix the power problem rather than redesign anything, since the printed capsules were built around the size of a 9V battery. Those of us with the most coding experience spent several days reworking the code until the prototypes ran properly on that battery, while the rest of the group finished the presentation and the report. We never got the extra round of testing we wanted, but the technical solution held up as a starting point.',
        no: 'Med kort tid igjen måtte vi løse strømproblemet framfor å redesigne noe, siden de printede kapslene var bygget rundt størrelsen på et 9V-batteri. De av oss med mest kodeerfaring brukte flere dager på å skrive om koden til prototypene fungerte ordentlig på det batteriet, mens resten av gruppa gjorde ferdig presentasjonen og rapporten. Vi fikk aldri den ekstra testrunden vi ønsket oss, men den tekniske løsningen holdt som utgangspunkt.',
      },
      images: [
        {
          src: videoA,
          type: 'video',
          caption: {
            en: 'Practical demonstration',
            no: 'Praktisk demonstrasjon.',
          },
        },
        {
          src: videoB,
          type: 'video',
          caption: {
            en: 'The prototype in use, second clip.',
            no: 'Prototypen i bruk, andre klipp.',
          },
        },
      ],
    },
  ],
}
