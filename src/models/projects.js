import portfolioWireframe from '../assets/projects/portfolio-wireframe.png'
import portfolioVisualDirection from '../assets/projects/portfolio-visual-direction.png'
import portfolioLayout from '../assets/projects/portfolio-layout.png'
import navguardPersona from '../assets/projects/navguard-persona.png'
import navguardFigmaFlows from '../assets/projects/navguard-figma-flows.png'
import navguardEarlyMap from '../assets/projects/navguard-early-map.png'
import navguardRouteSummary from '../assets/projects/navguard-route-summary.png'
import navguardIcebergWarning from '../assets/projects/navguard-iceberg-warning.png'
import navguardSafetyFilters from '../assets/projects/navguard-safety-filters.png'
import navguardProfile from '../assets/projects/navguard-profile.png'

/**
 * Text that differs per language. A plain string is used as-is in both
 * languages, which suits names that should not be translated.
 * @typedef {string | { en: string, no: string }} LocalizedText
 *
 * @typedef {Object} SectionImage
 * @property {string} src
 * @property {LocalizedText} caption
 *
 * A case study is told as a run of sections so the pictures sit next to the
 * text they illustrate, rather than all of the text followed by all of the
 * images. `layout: 'side'` places the images beside the text on wide screens,
 * `layout: 'full'` places them underneath at full width.
 * @typedef {Object} ProjectSection
 * @property {LocalizedText} [text]
 * @property {SectionImage[]} [images]
 * @property {'side' | 'full'} [layout]
 *
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} slug
 * @property {LocalizedText} title
 * @property {LocalizedText} summary
 * @property {number} year
 * @property {string} [cover]
 * @property {ProjectSection[]} [sections]
 * @property {{ label: string, href: string }[]} [links]
 */

/** @type {Project[]} */
const projects = [
  {
    id: '1',
    slug: 'portfolio',
    title: { en: 'Portfolio', no: 'Portefølje' },
    summary: {
      en: 'Designing and building my own portfolio site from the first sketch through to a finished React app.',
      no: 'Design og utvikling av min egen porteføljeside fra første skisse til ferdig React-app.',
    },
    year: 2026,
    cover: portfolioVisualDirection,
    sections: [
      {
        layout: 'side',
        text: {
          en: 'This site is the project. I began with rough sketches to work out what the page actually needed to say, before deciding how any of it should look.',
          no: 'Denne siden er prosjektet. Jeg startet med grove skisser for å finne ut hva siden faktisk måtte si, før jeg bestemte hvordan noe av det skulle se ut.',
        },
        images: [
          {
            src: portfolioWireframe,
            caption: {
              en: 'First sketch, very nice.',
              no: 'Første skisse veldig flott',
            },
          },
        ],
      },
      {
        layout: 'side',
        text: {
          en: 'From there I settled on a warm off-white palette and Montserrat, so the focus stays on the work rather than on the decoration.',
          no: 'Derfra landet jeg på en varm off-white palett og Montserrat, slik at fokuset ligger på arbeidet framfor dekorasjonen.',
        },
        images: [
          {
            src: portfolioVisualDirection,
            caption: {
              en: 'Settling the palette and the typography.',
              no: 'Fastsetting av palett og typografi.',
            },
          },
        ],
      },
      {
        layout: 'side',
        text: {
          en: 'The finished layout pairs a short introduction with a portrait, and puts the projects in a carousel underneath. It is built in React, and the whole site is available in both English and Norwegian.',
          no: 'Den ferdige layouten setter en kort introduksjon ved siden av et portrett, og legger prosjektene i en karusell under. Den er bygget i React, og hele siden finnes på både engelsk og norsk.',
        },
        images: [
          {
            src: portfolioLayout,
            caption: {
              en: 'Full layout with portrait and project carousel.',
              no: 'Ferdig layout med portrett og prosjektkarusell.',
            },
          },
        ],
      },
    ],
  },

  {
    id: '2',
    slug: 'navguard',
    title: 'NavGuard',
    summary: {
      en: 'An Android app that helps ship navigators plan safe routes through Arctic waters, where drifting icebergs are a real hazard. Built with a team of six.',
      no: 'En Android-app som hjelper navigatører med å planlegge trygge ruter i arktiske farvann, der drivende isfjell utgjør en reell fare. Laget sammen med et team på seks.',
    },
    year: 2026,
    cover: navguardFigmaFlows,
    sections: [
      {
        layout: 'side',
        text: {
          en: 'NavGuard came out of a university project where six of us built an Android app for a case set by the Norwegian Meteorological Institute. The brief was navigation in Arctic waters: as the sea warms there are more drifting icebergs, and the tools navigators already have tend to bury them in alerts that have nothing to do with the voyage they are actually on.',
          no: 'NavGuard kom ut av et universitetsprosjekt der seks av oss bygget en Android-app til en case fra Meteorologisk institutt. Oppgaven handlet om navigasjon i arktiske farvann: når havet blir varmere blir det flere drivende isfjell, og verktøyene navigatører allerede har pleier å drukne dem i varsler som ikke angår reisen de faktisk er på.',
        },
        images: [
          {
            src: navguardEarlyMap,
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
            src: navguardPersona,
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
            src: navguardFigmaFlows,
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
            src: navguardIcebergWarning,
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
            src: navguardSafetyFilters,
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
            src: navguardRouteSummary,
            caption: {
              en: 'Route summary: distance, arrival time and waypoints before the voyage starts.',
              no: 'Rutesammendrag: distanse, ankomsttid og veipunkter før reisen starter.',
            },
          },
          {
            src: navguardProfile,
            caption: {
              en: 'Profile: the navigator’s fleet, filters and unit preferences in one place.',
              no: 'Profil: navigatørens flåte, filtre og enhetsvalg samlet på ett sted.',
            },
          },
        ],
      },
    ],
  },

  // PLACEHOLDER DATA, replace these with your real projects.
  {
    id: '3',
    slug: 'project-three',
    title: 'Project three',
    summary: 'Short description of what this project was about.',
    year: 2024,
  },
  {
    id: '4',
    slug: 'project-four',
    title: 'Project four',
    summary: 'Short description of what this project was about.',
    year: 2023,
  },
  {
    id: '5',
    slug: 'project-five',
    title: 'Project five',
    summary: 'Short description of what this project was about.',
    year: 2022,
  },
]

/**
 * @param {LocalizedText | undefined} value
 * @param {'en' | 'no'} language
 */
export function localizeText(value, language) {
  if (!value) return ''
  return typeof value === 'object' ? (value[language] ?? value.en ?? '') : value
}

/**
 * Resolves every translatable field on a project for one language, so views
 * only ever deal with plain strings.
 * @param {Project} project
 * @param {'en' | 'no'} language
 */
export function localizeProject(project, language) {
  return {
    ...project,
    title: localizeText(project.title, language),
    summary: localizeText(project.summary, language),
    sections: (project.sections ?? []).map((section) => ({
      layout: section.layout ?? 'side',
      text: localizeText(section.text, language),
      images: (section.images ?? []).map((image) => ({
        ...image,
        caption: localizeText(image.caption, language),
      })),
    })),
  }
}

export function getAllProjects() {
  return projects
}

/** @param {string} slug */
export function findProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null
}

export function sortProjectsByYearDesc(list) {
  return [...list].sort((a, b) => b.year - a.year)
}
