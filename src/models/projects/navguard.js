import persona from '../../assets/projects/navguard/persona.png'
import figmaFlows from '../../assets/projects/navguard/figma-flows.png'
import earlyMap from '../../assets/projects/navguard/early-map.png'
import routeSummary from '../../assets/projects/navguard/route-summary.png'
import icebergWarning from '../../assets/projects/navguard/iceberg-warning.png'
import safetyFilters from '../../assets/projects/navguard/safety-filters.png'
import profile from '../../assets/projects/navguard/profile.png'
import NavGuard from '../../assets/projects/navguard/navguard.jpg'
/** @type {import('./types.js').Project} */
export const navguard = {
  id: '2',
  slug: 'navguard',
  title: 'NavGuard',
  summary: {
    en: 'An Android app that helps ship navigators plan safe routes through Arctic waters, where drifting icebergs are a real hazard. Built with a team of six.',
    no: 'En Android-app som hjelper navigatører med å planlegge trygge ruter i arktiske farvann, der drivende isfjell utgjør en reell fare. Laget sammen med et team på seks.',
  },
  year: 2026,
  cover: NavGuard,
  sections: [
    {
      layout: 'side',
      text: {
        en: 'NavGuard came out of a university project where six of us built an Android app for a case set by the Norwegian Meteorological Institute. The brief was navigation in Arctic waters: as the sea warms there are more drifting icebergs, and the tools navigators already have tend to bury them in alerts that have nothing to do with the voyage they are actually on.',
        no: 'NavGuard kom ut av et universitetsprosjekt der seks av oss bygget en Android-app til en case fra Meteorologisk institutt. Oppgaven handlet om navigasjon i arktiske farvann: når havet blir varmere blir det flere drivende isfjell, og verktøyene navigatører allerede har pleier å drukne dem i varsler som ikke angår reisen de faktisk er på.',
      },
      images: [
        {
          src: earlyMap,
          caption: {
            en: 'A low-fidelity prototype made to get feedback on the layout and the filtering feature, before any code was written.',
            no: 'En tidlig prototype laget for å få tilbakemeldinger om layout og filtreringsfunksjonen, før noe kode ble skrevet.',
          },
        },
      ],
    },
    {
      layout: 'side',
      text: {
        en: 'None of us knew anything about maritime navigation, so we started by talking to someone who did, a first officer on an LNG carrier. We transcribed the interview and ran a thematic analysis on it, then turned the findings into a persona and a scenario the whole team could design against. The clearest finding was how much visual noise the existing systems produce, which is why filtering became a core feature rather than a setting buried in a menu.',
        no: 'Ingen av oss kunne noe om maritim navigasjon, så vi startet med å snakke med en som kunne det, en styrmann på et LNG-skip. Vi transkriberte intervjuet og gjennomførte en tematisk analyse av det, og gjorde funnene om til en persona og et scenario hele teamet kunne designe mot. Det tydeligste funnet var hvor mye visuell støy de eksisterende systemene lager, og derfor ble filtrering en kjernefunksjon framfor en innstilling gjemt i en meny.',
      },
      images: [
        {
          src: persona,
          caption: {
            en: 'The persona built from the interview, used as a shared reference for design decisions.',
            no: 'Personaen bygget på intervjuet, brukt som felles referanse for designbeslutninger.',
          },
        },
      ],
    },
    {
      text: {
        en: 'To turn that insight into actual decisions we ran a design workshop: presenting the findings, brainstorming on post-its, and grouping them into an affinity diagram. Part of the point was to get the whole team, including the members without a design background, looking at the same picture of what we were building.',
        no: 'For å gjøre innsikten om til konkrete beslutninger holdt vi en design-workshop: presentasjon av funnene, idémyldring med post-it-lapper og kategorisering i et affinity diagram. En del av poenget var å få hele teamet, også de uten designbakgrunn, til å se det samme bildet av hva vi bygget.',
      },
    },
    {
      layout: 'full',
      text: {
        en: 'Prototyping ran through the entire project. Early low-fidelity sketches in Figma answered what role the app should play in a navigator’s day, before we spent any time on code. Later we built high-fidelity flows for the whole app, covering profile, route planning, iceberg avoidance and saved voyages, and the developers worked directly from those.',
        no: 'Prototyping gikk gjennom hele prosjektet. Tidlige lavoppløselige skisser i Figma svarte på hvilken rolle appen skulle spille i navigatørens arbeidsdag, før vi brukte tid på kode. Senere bygget vi høyoppløselige flyter for hele appen, med profil, ruteplanlegging, isfjell-unngåelse og lagrede ruter, og utviklerne jobbet direkte ut fra dem.',
      },
      images: [
        {
          src: figmaFlows,
          caption: {
            en: 'High-fidelity Figma flows for the whole app, worked through screen by screen.',
            no: 'Høyoppløselige Figma-flyter for hele appen, gjennomarbeidet skjerm for skjerm.',
          },
        },
      ],
    },
    {
      layout: 'side',
      text: {
        en: 'Four principles guided the interface: visibility, feedback, consistency and affordance. In practice that meant hazards and icebergs stay visible on the map at all times, alert boxes say plainly whether a route is safe, colours and icons mean the same thing on every screen, and anything tappable looks tappable.',
        no: 'Fire prinsipper styrte grensesnittet: visibility, feedback, consistency og affordance. I praksis betyr det at farer og isfjell alltid er synlige i kartet, at varselbokser sier tydelig om en rute er trygg, at farger og ikoner betyr det samme på hver skjerm, og at alt som kan trykkes på ser ut som det.',
      },
      images: [
        {
          src: icebergWarning,
          caption: {
            en: 'The core moment: an iceberg is predicted to drift across the planned route, and the warning says so directly.',
            no: 'Kjerneøyeblikket: et isfjell er beregnet å drive over den planlagte ruten, og varselet sier det rett ut.',
          },
        },
      ],
    },
    {
      layout: 'side',
      text: {
        en: 'Our first user test showed the layout was less intuitive than we thought, and the fix was mostly consistency: reusing the same colours and icons everywhere, and always pairing an icon with a text label. A later guerrilla test with someone who had never seen the app confirmed the flow had become much easier to follow.',
        no: 'Den første brukertesten viste at layouten var mindre intuitiv enn vi trodde, og løsningen var stort sett konsistens: gjenbruk av de samme fargene og ikonene overalt, og alltid ikon sammen med tekstetikett. En senere geriljatest med en som aldri hadde sett appen bekreftet at flyten var blitt mye lettere å følge.',
      },
      images: [
        {
          src: safetyFilters,
          caption: {
            en: 'Safety filters, the direct answer to the interview finding about irrelevant alerts.',
            no: 'Sikkerhetsfiltre, det direkte svaret på funnet om irrelevante varsler.',
          },
        },
      ],
    },
    {
      layout: 'full',
      text: {
        en: 'The finished app pulls it together: plan a voyage with waypoints and a speed, keep your own fleet and unit preferences on the profile, and get told plainly when something is in the way.',
        no: 'Den ferdige appen samler det: planlegg en reise med veipunkter og fart, ha din egen flåte og dine enhetsvalg på profilen, og få tydelig beskjed når noe er i veien.',
      },
      images: [
        {
          src: routeSummary,
          caption: {
            en: 'Route summary: distance, arrival time and waypoints before the voyage starts.',
            no: 'Rutesammendrag: distanse, ankomsttid og veipunkter før reisen starter.',
          },
        },
        {
          src: profile,
          caption: {
            en: 'Profile: the navigator’s fleet, filters and unit preferences in one place.',
            no: 'Profil: navigatørens flåte, filtre og enhetsvalg samlet på ett sted.',
          },
        },
      ],
    },
  ],
}
