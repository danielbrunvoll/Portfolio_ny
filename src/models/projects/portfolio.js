import wireframe from '../../assets/projects/portfolio/wireframe.png'
import visualDirection from '../../assets/projects/portfolio/visual-direction.png'
import layout from '../../assets/projects/portfolio/layout.png'

/** @type {import('./types.js').Project} */
export const portfolio = {
  id: '1',
  slug: 'portfolio',
  title: { en: 'Portfolio', no: 'Portefølje' },
  summary: {
    en: 'Designing and building my own portfolio site from the first sketch through to a finished React app.',
    no: 'Design og utvikling av min egen porteføljeside fra første skisse til ferdig React-app.',
  },
  year: 2026,
  cover: visualDirection,
  sections: [
    {
      layout: 'side',
      text: {
        en: 'This site is the project. I began with rough sketches to work out what the page actually needed to say, before deciding how any of it should look.',
        no: 'Denne siden er prosjektet. Jeg startet med grove skisser for å finne ut hva siden faktisk måtte si, før jeg bestemte hvordan noe av det skulle se ut.',
      },
      images: [
        {
          src: wireframe,
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
          src: visualDirection,
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
          src: layout,
          caption: {
            en: 'Full layout with portrait and project carousel.',
            no: 'Ferdig layout med portrett og prosjektkarusell.',
          },
        },
      ],
    },
  ],
}
