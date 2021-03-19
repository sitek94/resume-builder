import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,

  // Interests
  FaChessKnight,
  FaReact,
  FaRegCalendarCheck,
  FaBook,
  FaRunning,
} from 'react-icons/fa';

const content = {
  /**
   * Full name
   */
  fullName: 'Maciek Sitkowski',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Podsumowanie',
    text: `
      Frontend Developer z rocznym, praktycznym doświadczeniem w budowaniu 
      aplikacji oraz oraz stron internetowych. Poszerza swoją wiedzę poprzez 
      aktywne kontrybutowanie do projektów Open Source.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Kontakt',
    list: [
      {
        text: 'macieksitkowski.com',
        link: 'https://macieksitkowski.com',
        icon: <FaGlobe />,
      },
      {
        text: 'github.com/sitek94',
        link: 'https://github.com/sitek94',
        icon: <FaGithub />,
      },
      {
        text: 'msitkowski94@gmail.com',
        icon: <FaEnvelope />,
      },
      {
        text: '+00 123 456 789',
        icon: <FaPhoneAlt />,
      },
      {
        text: 'Warszawa, Polska',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Główne umiejętności',
    list: [
      { text: 'React, Redux, JSX' },
      { text: 'JavaScript, D3.js' },
      { text: 'Responsive Web Design' },
      { text: 'HTML5, CSS3' },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Dodatkowe umiejętności',
    list: [
      { text: 'Node.js, Webpack' },
      { text: 'OAuth, Firebase' },
      { text: 'GitHub, Git' },
      { text: 'REST, GraphQL' },
      { text: 'Sass, CSS-in-JS' },
    ],
  },

  /**
   * Languages I speak
   */
  languages: {
    title: 'Języki',
    list: [
      { text: 'Polski - Ojczysty' },
      { text: 'Angielski - Płynny' },
      { text: 'Hiszpański - Komunikatywny' },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Zainteresowania',
    list: [
      { text: 'Gra w szachy', icon: <FaChessKnight /> },
      { text: 'Nauka nowych rzeczy', icon: <FaReact /> },
      { text: 'Budowanie nawyków', icon: <FaRegCalendarCheck /> },
      { text: 'Czytanie', icon: <FaBook /> },
      { text: 'Sport', icon: <FaRunning /> },
    ],
  },

  projects: {
    title: 'Projekty',
    list: [
      {
        name: 'Habit Tracker App',
        techList: [
          'React',
          'React Query',
          'React Router',
          'Firebase',
          'Material-UI',
        ],
        description: `
          Habit Tracker is my final project for Harvard's CS50 course. It's 
          built as MVP (minimal viable product) and its core functionality is to 
          track user's habits.`,
        url: 'https://habit-tracker-293718.web.app/',
      },
      {
        name: 'Pocket Globe App',
        techList: ['React', 'D3.js', 'TopoJSON', 'Material-UI'],
        description: `
          The app uses D3.js and React to create a highly interactive and responsive 
          globe. It connects to various APIs to get data about selected country.`,
        url: 'https://sitek94.github.io/pocket-globe-app',
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: 'Doświadczenie',
    list: [
      {
        company: 'Dolphin Bar & Restaurant',
        location: 'Mallorca, Spain',
        date: {
          start: '2018-05',
          end: '2019-10',
        },
        jobTitle: 'Barman/Kelner',
        description: `
          Pracując w jednej z najbardziej ruchliwych restauracji na wyspie 
          nauczyłem się lepiej pracować w zespole. Dodatkowo była to świetna 
          okazja do nauki hiszpańskiego.`,
      },
      {
        company: 'Clothes2Order',
        location: 'Manchester, United Kingdom',
        date: {
          start: '2017-03',
          end: '2018-05',
        },
        jobTitle: 'Obsługa Klienta',
        description: `
        Rozmawiając przez telefon i mailowo z klientami z całego świata, 
        rozwiązując ich problemy i pomagając w składaniu zamówień poprawiłem 
        moje zdolności komunikacyjne.`,
      },
      {
        company: 'Marks & Spencer',
        location: 'Castle Donington, United Kingdom',
        date: {
          start: '2015-12',
          end: '2017-01',
        },
        jobTitle: 'Pracownik Magazynu',
        description: `
          Podjęcie pierwszej pracy za granicą w znacznym stopniu podniosła moje
          zdolności do szybkiej i łatwej adaptacji w nowych środowiskach.`,
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certyfikaty',
    list: [
      {
        name: 'CS50x: Introduction to Computer Science',
        provider: 'Harvard University',
      },
      {
        name: 'Responsive Web Design Certification',
        provider: ' freeCodeCamp',
      },
      {
        name: 'Algorithms and Data Structures Certification',
        provider: ' freeCodeCamp',
      },
      {
        name: 'Data Visualization Certification',
        provider: ' freeCodeCamp',
      },
      {
        name: 'Front End Libraries Certification',
        provider: ' freeCodeCamp',
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Edukacja',
    list: [
      {
        institution: 'Politechnika Warszawska',
        description: 'Architektura i Urbanistyka',
        date: {
          start: '2014-09',
          end: '2015-09',
        },
      },
    ],
  },
};

export default content;
