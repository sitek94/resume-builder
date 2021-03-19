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

const data = {
  /**
   * Full name
   */
  fullName: 'Maciek Sitkowski',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Summary',
    text: `
      Front-end developer that has 1 year of experience developing web 
      applications and building websites. Broadens his knowledge by actively 
      contributing to Open Source projects.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [
      {
        text: 'macieksitkowski.com',
        url: 'https://macieksitkowski.com',
        icon: <FaGlobe />,
      },
      {
        text: 'github.com/sitek94',
        url: 'https://github.com/sitek94',
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
        text: 'Warsaw, Poland',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Key skills',
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
    title: 'Additional skills',
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
    title: 'Languages',
    list: [
      { text: 'Polish - Native' },
      { text: 'English - Fluent' },
      { text: 'Spanish - Communicative' },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'Playing chess', icon: <FaChessKnight /> },
      { text: 'Learning new things', icon: <FaReact /> },
      { text: 'Building habits', icon: <FaRegCalendarCheck /> },
      { text: 'Reading', icon: <FaBook /> },
      { text: 'Being active', icon: <FaRunning /> },
    ],
  },

  projects: {
    title: 'Projects',
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
        url: 'https://habit-tracker.macieksitkowski.com/',
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
    title: 'Work experience',
    list: [
      {
        company: 'Dolphin Bar & Restaurant',
        location: 'Mallorca, Spain',
        date: {
          start: '2018-05',
          end: '2019-10',
        },
        jobTitle: 'Bartender/Waiter',
        description: `
          Working in one of the busiest restaurants on the island I became 
          a better team player. Additionally it was a great opportunity to learn 
          Spanish and further improve my English.`,
      },
      {
        company: 'Clothes2Order',
        location: 'Manchester, United Kingdom',
        date: {
          start: '2017-03',
          end: '2018-05',
        },
        jobTitle: 'Customer Service Assistant',
        description: `
          Being a part of Customer Service team and talking over the phone 
          with clients from all around the world helped me improve both my 
          communication and collaboration skills.`,
      },
      {
        company: 'Marks & Spencer',
        location: 'Castle Donington, United Kingdom',
        date: {
          start: '2015-12',
          end: '2017-01',
        },
        jobTitle: 'Production Operative',
        description: `
          Working for the first time abroad and overcoming the challenges along 
          the road taught me how to quickly adapt to new environments.`,
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certificates',
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
    title: 'Education',
    list: [
      {
        institution: 'Warsaw University of Technology',
        description: 'Architecture and Urban Planning',
        date: {
          start: '2014-09',
          end: '2015-09',
        },
      },
    ],
  },
};

export default data;
