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
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['pytorch/pytorch', 'peng-zhihui/Dummy-Robot'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/solar_car_prototyping.png',
          link: 'https://www.solarcarchallenge.org/challenge/',
        },
        {
          title: 'Kent AI LAB (K.A.I.L)',
          description:
            "As co-leader of our school's AI club I organized interactive events for our 56 members, held presentations at other schools, and took part in public discussions with experts, so e.g. with Krystyn Gutu.",
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/KAIL_presentation.png',
          link: '',
        },
        {
          title: 'Robotic Arm',
          description:
            'At around age 13 I got interested in robotics. This 3D printed robotic arm was my first take on the topic and served as the test ground for multiple subsequent projects.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/robotic_arm.jpeg',
          link: '',
        },
        {
          title: 'MagicMirror2',
          description:
            'To stay organized, my 12 year old me decided to build the MagicMirror2 open source project, further modifying the code to create productive digital art.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/MagicMirror2.png',
          link: 'https://magicmirror.builders/',
        },
        {
          title: 'Kent: Digital Electronics',
          description:
            'In my year abroad at Kent School I was faced with the opportunity to take engineering classes. In my two semesters of "Digital Electronics", and one semester "Aerospace Engineering" I build an extensive portfolio.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/digital_electronics_1.png',
          link: 'https://sites.google.com/view/philipp-engineering/start',
        },
        {
          title: 'Pwnagotchi',
          description:
            'The Pwnagotchi open source project introduced me to the world of cybersecurity. After assembling and setting up the device, I was faced with multiple software and hardware issues, which I managed to overcome after many hours of debugging.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/pwnagotchi_final.png',
          link: 'https://pwnagotchi.ai/',
        },
        {
          title: 'CAD Project: Buzzer',
          description:
            'As a result of my interest in product design, I developed the "Sound Buzzer". This project tried to combine the intended function with aesthetic design.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/CAD_buzzer.png',
          link: '',
        },
        {
          title: 'Gameboy Emulator + Display Driver',
          description:
            'Initially intended as a birthday gift for my little brother, my Gameboy Emulator Project cost me well over 50 hours of debugging. I ended up creating my own driver.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/gameboy_prototyping.jpeg',
          link: '',
        },
        {
          title: '3D Simulations & Animations',
          description:
            'Due to my interest in Digital Effects I explored learned to create 3D environments in Blender and particularly enjoyed playing with the physics engine.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/fluid_simulation.png',
          link: 'https://www.youtube.com/@dreamerunderpinksky2691',
        },
        {
          title: '3D Projection',
          description:
            'Fascinated by the mathematics of 3D projection I decided to build a render engine that displays 3D model files (.obj, .stl) as wireframes. I later taught the mathematical concepts of ortographic and perspective projection to my peers.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/render_wireframe.png',
          link: '',
        },
        {
          title: 'Generative Art & Perlin Noise',
          description:
            'Inspired by aesthetic NFT art I created various generative art, often making use of fractal-like structures, beautiful colors, and perlin-noise. I was particularly interested in flow maps.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/mandelbulb.png',
          link: 'hhttps://github.com/IcedCoffeeDrinker/da_good_stuff',
        },
        {
          title: 'Local Diffusion Models',
          description:
            'To harness the full power of image generation models I decided to run various diffusion models locally. This allowed me to modify the algorithms and make use of experimental state-of-the-art modifications',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/astronaut_digital_art.png',
          link: '',
        },
        {
          title: 'AI Article Bot (SEO)',
          description:
            'Meant to earn me some extra pocket money, this project creates a conversation between up to ten AI agents debating about topic, content, and images. Hundreds of articles can be generated in an hour.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/article_bot_logfile.png',
          link: 'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/astronaut_digital_art.png',
        },
        {
          title: 'Personalized Local AI Assistant',
          description:
            'High subscription fees for major AI agents led me to build a free local system, tuned to my preferences. My assistant has multiple personalities to choose from and chat-independent memory.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/AI_assistant.png',
          link: '',
        },
        {
          title: 'First AI Project: Guessing Sequences',
          description:
            'When I was 10 years old I learned how to code a sequence guessing AI through an Indian tech-tutorial. This taught me the basics of neurons and statistical predictions.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/first_AI_project.png',
          link: '',
        },
        {
          title: 'Ways to Calculate PI',
          description:
            'Fascinated by the random occurrences of pi in the mathematical world I build various programs to estimate pi in interesting ways.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/guessing_pi.png',
          link: '',
        },
        {
          title: 'Classmate Name Trainer',
          description:
            "To get down all the names of my peers during my year abroad I built a program that would quiz me on a person's name based on a picture that it scraped from the school's website.",
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/name_guesser.png',
          link: '',
        },
        {
          title: 'Scratch 3D Map',
          description:
            'Feeling limited by the 2D canvas of scratch, I decided to build a 3D maze game as a school project. My IT teacher was a little surprised.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/scratch_raycasting.png',
          link: 'https://scratch.mit.edu/projects/568312991/',
        },
        {
          title: 'Coding a Restaurant Homepage',
          description:
            'My first ever IT class project was to build a website for a local business. I settled for my favorite asian restaurant, motivated to spice their website up as much as possible.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/vo_logo.png',
          link: '',
        },
        {
          title: 'Minecraft Binary Logic',
          description:
            'At around age 9 I developed a fascination for binary logic. I replicated full- and half adders, encoders, decoders, memory units, and displays in Minecraft.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/minecraft_memory_cell.png',
          link: '',
        },
        {
          title: 'Mining Crypto on Raspberry Pi',
          description:
            'As a joke I mined Monero on my Raspberry Pi in 7th grade. My parents said they would pay the electricity bill for three months, allowing me to dive deeper into the topic.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/monero_mining.png',
          link: '',
        },
        {
          title: 'Linux & MacOS Modifications',
          description:
            'As a huge fan of aesthetic design and productivity modifications, I heavily modded my Mac and Linux devices. All my devices are now very fancy looking, though their productivity is questionable.',
          imageUrl:
            'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/images/mac_ricing.png',
          link: '',
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
    email: 'philipp.haus@icoud.com',
  },
  resume: {
    fileUrl:
      'https://raw.githubusercontent.com/IcedCoffeeDrinker/IcedCoffeeDrinker.github.io/main/CV_Philipp_Haus.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
      company: 'Industrial 3D Design, Stress Simulations, Coding (mainly Python), Electrics, Digital Electronics, Electrical/Digital Debugging',
      position: 'Prototyping',
      from: '',
      to: '',
      companyLink: '',
    },
    {
      company: 'Data Processing & Visualization (Python + Matplotlib), basic PyTorch, basic ROS (Robot Operating System), Computer Vision',
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
  footer: `Thank you for visiting my profile!`,

  enablePWA: true,
};

export default CONFIG;
