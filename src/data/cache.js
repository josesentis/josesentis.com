const data = {
  job: `creative developer`,
  name: `jose sentis`,
  description: `Hi – I’m Jose, a Creative Developer based in Barcelona. I’m open for new creative opportunities. Don’t be shy, say hi!`,
  ogImage: `images/og-image.jpg`,
  siteUrl: `https://www.josesentis.com`,
  social: {
    __typename: 'Social',
    github: `https://github.com/josesentis`,
    linkedin: `https://www.linkedin.com/in/jose-sentis`,
    instagram: `https://www.instagram.com/josesentis.dev/`,
    twitter: `https://twitter.com/josesentis_`,
    email: 'sayhi@josesentis.com',
  },
  sections: {
    __typename: 'Sections',
    playground: 'play<hr />ground',
    projects: 'projects',
    about: 'about',
  },
  pages: {
    __typename: 'Pages',
    about: {
      __typename: 'About page',
      content: `<p>I’m Jose Sentis, Creative Developer based in Barcelona.</p>
      <p>I consider coding a form of creation and I love to work with crazy designers that push me to think outside the box, so we can bring to life tons of amazing projects.</p>
      <p>Besides my passion for coding (as you can see) you could easily find me on a Saturday night singing in a karaoke (not the best performer but the one who puts the best show on stage for sure).</p>`,
      image: '/images/profile.jpg',
      sayhi: `<p>I’m open for creative opportunities or for a fun karaoke night. </p><p>Don’t be shy, <a href="mailto:%link" rel="noopener noreferrer">say hi!</a></p>`
    },
    playground: {
      __typename: 'Playground page',
      cta: 'Back to jose sentis folio',
      abstract: `<p>This is the space where I create, where I try new technologies to develop myself in skills that are often difficult to learn working in corporate projects.<br><br>It's the space where I show who I am further than normal agency projects.<br><br>It's my personal kaizen.</p><p>To see other projects, follow the link:</p>`
    },
    projects: {
      __typename: 'Project page',
      projectList: [
        {
          __typename: 'Project',
          title: 'Stooa',
          stack: 'Next.js, Typescript, Jitsii, Symfony',
          external: true,
          externalLink: 'http://stooa.com/',
          image: '/images/covers/stooa.jpg',
          order: '1',
          slug: '',
          year: '2021'
        },
        {
          __typename: 'Project',
          title: 'Slovinsky',
          stack: 'GatsbyJS, Contentful, Netlify',
          external: true,
          externalLink: 'https://www.slovinsky.es/',
          image: '/images/covers/slovinsky.jpg',
          order: '2',
          slug: '',
          year: '2020'
        },
        {
          __typename: 'Project',
          title: 'Runroom',
          stack: 'Symfony, Twig, GSAP',
          external: true,
          externalLink: 'https://www.runroom.com/',
          image: '/images/covers/runroom.jpg',
          order: '3',
          slug: '',
          year: '2019'
        },
        {
          __typename: 'Project',
          title: 'Cris García',
          stack: 'Twigjs, GSAP',
          external: true,
          externalLink: 'http://cris-garcia.com/',
          image: '/images/covers/cris-garcia.jpg',
          order: '4',
          slug: '',
          year: '2019'
        },
        {
          __typename: 'Project',
          title: 'Club Familias',
          stack: 'Drupal, Twig',
          external: true,
          externalLink: 'https://www.clubfamilias.com/',
          image: '/images/covers/club-familias.jpg',
          order: '5',
          slug: '',
          year: '2019'
        },
        {
          __typename: 'Project',
          title: 'VC Community',
          stack: 'ReactJS, Typescript, GraphQL, Apollo',
          external: false,
          externalLink: '',
          slug: 'vc-community',
          image: '/images/covers/vc-community.jpg',
          order: '6',
          year: '2019'
        },
        {
          __typename: 'Project',
          title: 'Esade Exed',
          stack: 'Drupal, Twig',
          external: false,
          externalLink: '',
          slug: 'esade-exed',
          image: '/images/covers/esade-exed.jpg',
          order: '7',
          year: '2018'
        },
        {
          __typename: 'Project',
          title: 'Estudio Alberto Dominguez',
          stack: 'Symfony, GSAP, jQUery',
          external: true,
          externalLink: 'https://www.estudioalbertodominguez.com/',
          image: '/images/covers/estudio-alberto-dominguez.jpg',
          order: '8',
          slug: '',
          year: '2018'
        },
        {
          __typename: 'Project',
          title: 'Finca Mas Solers',
          stack: 'Symfony, Twig',
          external: true,
          externalLink: 'https://www.fincamassolers.com',
          image: '/images/covers/finca-mas-solers.jpg',
          order: '9',
          slug: '',
          year: '2017'
        }
      ]
    }
  }
};

export default data;
