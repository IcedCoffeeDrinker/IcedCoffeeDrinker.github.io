// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'IcedCoffeeDrinker', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Solar Car Challenge',
          description:
            'After three semesters of daily work in the workshop, me and my team went to race our selfbuild solar car at the Texas Motor Speedway against teams from all over the US.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Kent AI LAB (K.A.I.L)',
          description:
            "As co-leader of our school's AI club I organized interactive events for our 56 members, held presentations at other schools, and took part in public discussions with experts, so eg. Krystyn Gutu.",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Robotic Arm',
          description:
            'At around age 13 I got interested in robotics. This 3D printed robotic arm was my first take on the topic and served as the test ground for a multiple of subsequent projects.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'MagicMirror2',
          description:
            'To stay organized, my 12 year old me decided to build the MagicMirror2 open source project, further modifying the code to create productive digital art.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Kent: Digital Electronics',
          description:
            'In my year abroad at Kent School I was faced with the opportunity to take engineering classes. In my two semesters of "Digital Electronics", and one semester "Aerospace Engineering" I build an extensive portfolio.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Pwnagotchi',
          description:
            'The Pwnagotchi open source project introduced me to the world of cybersecurity. After assembling and setting up the device, I was faced with a multiple of software and hardware issues, which I managed to overcome afte many hours of debugging.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'CAD Project: Buzzer',
          description:
            'As a result of my interest in product design, I develoed the "Sound Buzzer". This poject tried to combine the intended function with aesthetic design.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Gameboy Emulator + Display Driver',
          description:
            'Initially intended as a birthday gift for my little brother, my Gameboy Emulator Project cost me well over 50 hours of debugging. I ended up creating my own driver.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: '3D Simulations & Animations',
          description:
            'Due to my interest in Digital Effects I explored learned to create 3D environments in Blender and particularly enjoyed playing with the physics engine.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: '3D Projection',
          description:
            'Fascinated by the mathematics of 3D projection I decided to build a render engine that displays 3D model files (.obj, .stl) as wireframes. I later taught the mathematical concepts of ortographic and perspective projection to my peers.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Generative Art & Perlin Noise',
          description:
            'Inspired by aesthetic NFT art I created various generative art, often making use of fractal-like structures, beautiful colors, and perlin-noise. I was particularly interested in flow maps.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Local Diffusion Models',
          description:
            'To harness the full power of image generation models I decided to run various diffusion models locally. This allowed me to modify the algorythms and make use of experimental state-of-the-art modifications',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'AI Article Bot (SEO)',
          description:
            'Meant to earn me some extra pocket money, this project creates a conversation between up to ten AI agents debating about topic, content, and images. Hundreds of artilces can be generated in an hour.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Personalized Local AI Assistant',
          description:
            'High subsription fees for major AI agents led me to build a free local system, tuned to my preferences. My assistant has multiple personalities to choose from and chat-independent memory.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'First AI Project: Guessing Sequences',
          description:
            'When I was 10 years old I learned how to code a sequence guessing AI through an Indian tech-tutorial. This taught me the basics of neurons and statistical predictions.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Ways to Calculate PI',
          description:
            'Fascinated by the random occurences of pi in the mathematical world I build various programs to estimate pi in interesting ways.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Classmate Name Trainer',
          description:
            "To get down all the names of my peers during my year abroad I built a programm that would quiz me on a person's name based on a picture that it scraped from the school's website.",
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Scratch 3D Map',
          description:
            'Feeling limited by the 2D canvas of scratch, I decided to build a 3D maze game as a school project. My IT teacher was a little supriesed.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Coding a Restaurant Homepage',
          description:
            'My first ever IT class project was to build a website for a local business. I setelt for my favorite asian restaurant, motivated to spice their website up as much as possilbe.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Minecraft Binary Logic',
          description:
            'At around age 9 I developed a fascination for binary logic. I replicated full- and half adders, encoders, decoders, memory units, and displays in Minecraft.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Mining Crypto on Raspberry Pi',
          description:
            'As a joke I mined Monero on my Raspberry Pi in 7th grade. My parents said they would pay the electricity bill for three months, allowing me to dive deeper into the topic.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Linux & MacOS Modifications',
          description:
            'As a huge fan of aesthetic design and productivity modifications, I heavily modded my Mac and Linux devices. All my devices are now very fancy looking, though their productivity is questionable.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Philipp J. Haus',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'Whatever_lndustries',
    reddit: '',
    threads: '',
    youtube: 'DreamerUnderPinkSky2691', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '17789855/Philipp-H.', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'philipp.haus@ilcoud.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Matplotlib',
    'PyTorch',
    'ROS',
    'Fusion 360',
    'Blender',
    'HTML',
    'CSS',
  ],
  experiences: [
    {
      company: 'Industrial 3D Design, Stress Simulations, Coding (mainly python), Elctrics, Digital Electronics, Electrical/Digital Debuggin',
      position: 'Prototyping',
      from: '',
      to: '',
      companyLink: '',
    },
    {
      company: 'Data Processing & Visualzation (Python + Matplotlib), basic PyTorch, basic ROS (Robot Operating System), Computer Vision',
      position: 'Digital / Data Science',
      from: '',
      to: '',
      companyLink: '',
    },
    {
      company: 'Basic Pentesting: WiFi & Websites',
      position: 'Web Security',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
    },
  ],
  educations: [
    {
      institution: 'Gymnasium Eppendorf (Hamburg, Germany)',
      degree: '5th to 9th grade',
      from: '2018',
      to: '2023',
    },
    {
      institution: 'Kent School (CT, US)',
      degree: 'Sophomore',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'Helene Lange (Hamburg, Germany)',
      degree: 'IB + Abitur',
      from: '2024',
      to: '2026',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'corporate',
      'business',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
