import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import css from "styled-jsx/css";

export const DATA = {
  name: "Arfaz Hussain",
  nameVar: ["Arfaz", "আরফাজ", "عرفاز"],
  initials: "Arfaz",
  url: "https://arfazhxss.ca",
  location: "Victoria, British Columbia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a full-stack developer with 3+ years of experience, primarily focused on developing cloud and backend processes 🔧⚙️",
  summary:
    "I have a passion for developing systems and automating processes. I have extensive experience with Java, Python, SQL, and TypeScript, which has provided me with a solid understanding of various frameworks and databases. I am proficient in working with tools such as Node.js, React, and PostgreSQL, and excel at integrating them to develop robust, efficient systems. I also have a keen interest in low-level, embedded and firmware engineering!",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Swift",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Java",
    "Embedded C",
    "C++",
    "Adobe",
    "Figma"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arfazhussain@uvic.ca",
    tel: "+1 (250) 8808402",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/arfazhxss",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/arfazhussain",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "VikeLabs",
      href: "https://vikelabs.ca",
      badges: [],
      location: "Victoria, BC",
      title: "Software Developer and Lead",
      logoUrl: "/vikelabs.png",
      start: "Feb 2024",
      end: "Present",
      description:
        "Worked with 5+ team leads to organize workshops for 100+ CS and software engineering students, and partnered with executives from 3+ student clubs to co-host tech events, increasing attendance by 25% and strengthening collaborations with other student organizations.",
    },
    {
      company: "Burgir Studios",
      badges: [],
      href: "https://burgirstudio.com",
      location: "Remote",
      title: "iOS Developer",
      logoUrl: "/shopify.svg",
      start: "Jan 2022",
      end: "Aug 2022",
      description:
        "Developed and mantained iOS apps using React Native, Swift, and Xcode. This was my first exposure to a startup engineering team.",
    },
    {
      company: "MTPL Ltd.",
      badges: [],
      href: "https://www.facebook.com/momenttouchpropertiesltd",
      location: "Remote",
      title: "Data Analyst Intern",
      logoUrl: "/mtpl.png",
      start: "Jan 2021",
      end: "Apr 2021",
      description:
        "Improved property valuation accuracy by 7% through Excel analysis, automated data scraping with Python, and streamlined reporting using bash scripts and Excel macros.",
    },
  ],
  education: [
    {
      school: "University of Victoria",
      href: "https://uvic.ca",
      degree: "Bachelor of Software Engineering (BSE)",
      logoUrl: "/uvic.png",
      start: "2021",
      end: "2026",
    },
    {
      school: "Dhaka Residential Model College",
      href: "http://www.drmc.edu.bd",
      degree: "Elementary, Middle and High School",
      logoUrl: "/drmc.png",
      start: "2010",
      end: "2020",
    }
  ],
  projects: [
    {
      title: "SmartMed: Medical Information & Resource System",
      href: "https://github.com/arfazhxss/smart-med",
      dates: "Sep 2024 - Present",
      active: true,
      description:
        "Currently designing a medical information system using a microservices architecture and UML diagrams through constructing a prototype using the Flask framework in Python and REST APIs.",
      technologies: ["Python", "Flask", "REST APIs", "Microservices", "UML", "Design Patterns"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/mister-ed",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Automated Application System",
      href: "https://github.com/arfazhxss/app-sys",
      dates: "Dec 2023 - Present",
      active: true,
      description:
        "Automated the job application process using Bash and Python. Utilized multithreading to optimize data extraction and processing, reducing runtime by 60%. Created command-line tools to improve workflow efficiency.",
      technologies: ["Bash", "Python", "LaTeX"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/app-sys",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "CoopMe",
      href: "https://github.com/vikelabs/coopme",
      dates: "Feb 2024 - Present",
      active: true,
      description:
        "Developing a coop planning tool using Next.js to help students plan courses and track degree cooperative work terms. Integrated PostgreSQL for database management and implemented drag-and-drop functionality with React. Designed the User Experience using TailwindCSS.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/course-planner",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Jabref (Open Source Contributions)",
      href: "https://github.com/arfazhxss/jabref",
      dates: "Dec 2023 - May 2024",
      active: true,
      description:
        "Developed and optimized unit, caching, and integration tests for JabRef. Improved the performance and memory management of the software through 100+ unit tests and 30+ integration tests.",
      technologies: ["Java", "JUnit"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/jabref",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Ground Support System",
      href: "https://github.com/UVicRocketry/Ground-Support",
      dates: "Jul 2023 - Jan 2024",
      active: true,
      description:
        "Collaborated with a team to build telemetry software for analyzing rocket performance. Developed front-end components in TypeScript and integrated live telemetry data from MongoDB into MaterialUI tables for data visualization and post-flight analysis.",
      technologies: ["React", "TypeScript", "MongoDB", "Figma"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/UVicRocketry/Ground-Support",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Rubik's Cube (3D Simulation)",
      href: "https://github.com/arfazhxss/rubiks-cube-cpp",
      dates: "Feb 2023 - Jun 2023",
      active: false,
      description:
        "Built a 3D Rubik's Cube simulation using C++ and OpenGL. Integrated keyboard controls and dynamic zoom features for enhanced user interaction.",
      technologies: ["C++", "OpenGL", "GLSL"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/rubiks-cube-cpp",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Lexigraphy Context Mapper",
      href: "https://github.com/yourusername/concordance-tool",
      dates: "Sep 2022 - Nov 2022",
      active: false,
      description:
        "Developed a command-line Python and C-based tool for generating keyword-in-context concordances from text files, indexing words and provides contextual analysis for advanced text exploration. The tool uses regular expressions for pattern matching and leverages Valgrind for optimal memory handling.",
      technologies: ["Python", "C", "RegEx", "Valgrind", "Version Control"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/lexigraph",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Tic-Tac-Toe Game",
      href: "https://github.com/arfazhxss/tic-tac-toe-cpp",
      dates: "Apr 2022 - Aug 2022",
      active: true,
      description:
        "Developed a command-line Tic-Tac-Toe game in C++. The game features player turns, board updates, winner detection, and a tie state. The game flow includes checking for filled positions and ensuring a smooth turn-based system.",
      technologies: ["C++", "Object-Oriented Design", "I/O Operations"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/tic-tac-toe-cpp",
          icon: <Icons.github className='size-3' />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "VEX Robotics Project",
      href: "https://github.com/arfazhxss/vex-robotics-project",
      dates: "Jan 2022 - Apr 2022",
      active: false,
      description:
        "Developed and programmed a VEX Robot for ENGR120 Design II. Implemented mechanical and sensor-based functionalities, including movement, object placement, IR and sonar sensors for object detection, and obstacle avoidance.",
      technologies: ["RobotC", "VEX EDR Kit", "IR Sensors", "Sonar Sensors", "Limit Switches"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/vex-robotics-project",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "T-Rex Game (Java-based)",
      href: "https://github.com/arfazhxss/T-Rex",
      dates: "Aug 2021 - Dec 2021",
      active: false,
      description:
        "Recreated Google's offline T-Rex game using object-oriented design in Java. Implemented game mechanics like jumping, obstacle collision detection, and scoring, along with smooth game rendering using Java Swing.",
      technologies: ["Java", "Object-Oriented Design", "Swing"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arfazhxss/T-Rex",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "",
      video: ""
    }

  ],
  hackathons: [
    {
      title: "Vikelabs 2024 Hackathon",
      dates: "May 25, 2024",
      location: "Victoria, British Columbia",
      description:
        "Developed Course Planner, a web application for University of Victoria students, utilizing NextJS, React, TailwindCSS, and Shadcn UI to simplify degree planning with a streamlined interface and progress tracking",
      image:
        "/vikelabs.png",
      mlh: "",
      links: [],
    },
    //     {
    //       title: "Hack The North",
    //       dates: "September 14th - 16th, 2018",
    //       location: "Waterloo, Ontario",
    //       description:
    //         "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //       links: [],
    //     },
    //     {
    //       title: "FirstNet Public Safety Hackathon",
    //       dates: "March 23rd - 24th, 2018",
    //       location: "San Francisco, California",
    //       description:
    //         "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //       icon: "public",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //       links: [],
    //     },
    //     {
    //       title: "DeveloperWeek Hackathon",
    //       dates: "February 3rd - 4th, 2018",
    //       location: "San Francisco, California",
    //       description:
    //         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //       links: [
    //         {
    //           title: "Github",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/cryptotrends/cryptotrends",
    //         },
    //       ],
    //     },
    //     {
    //       title: "HackDavis",
    //       dates: "January 20th - 21st, 2018",
    //       location: "Davis, California",
    //       description:
    //         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //       win: "Best Data Hack",
    //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //       links: [
    //         {
    //           title: "Devpost",
    //           icon: <Icons.globe className="h-4 w-4" />,
    //           href: "https://devpost.com/software/my6footprint",
    //         },
    //         {
    //           title: "ML",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //         },
    //         {
    //           title: "iOS",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/Wallet6/CarbonWallet",
    //         },
    //         {
    //           title: "Server",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/Wallet6/wallet6-server",
    //         },
    //       ],
    //     },
    //     {
    //       title: "ETH Waterloo",
    //       dates: "October 13th - 15th, 2017",
    //       location: "Waterloo, Ontario",
    //       description:
    //         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //       links: [
    //         {
    //           title: "Organization",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/ethdocnet",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Hack The North",
    //       dates: "September 15th - 17th, 2017",
    //       location: "Waterloo, Ontario",
    //       description:
    //         "Developed a virtual reality application allowing users to see themselves in third person.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //       links: [
    //         {
    //           title: "Streamer Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/justinmichaud/htn2017",
    //         },
    //         {
    //           title: "Client Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/dillionverma/RTSPClient",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Hack The 6ix",
    //       dates: "August 26th - 27th, 2017",
    //       location: "Toronto, Ontario",
    //       description:
    //         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //       links: [
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/ShareShip/ShareShip",
    //         },
    //         {
    //           title: "Site",
    //           icon: <Icons.globe className="h-4 w-4" />,
    //           href: "https://share-ship.herokuapp.com/",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Stupid Hack Toronto",
    //       dates: "July 23rd, 2017",
    //       location: "Toronto, Ontario",
    //       description:
    //         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //       links: [
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Global AI Hackathon - Toronto",
    //       dates: "June 23rd - 25th, 2017",
    //       location: "Toronto, Ontario",
    //       description:
    //         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //       win: "1st Place Winner",
    //       links: [
    //         {
    //           title: "Article",
    //           icon: <Icons.globe className="h-4 w-4" />,
    //           href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //         },
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/TinySamosas/",
    //         },
    //       ],
    //     },
    //     {
    //       title: "McGill AI for Social Innovation Hackathon",
    //       dates: "June 17th - 18th, 2017",
    //       location: "Montreal, Quebec",
    //       description:
    //         "Developed realtime facial microexpression analyzer using AI",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //       links: [],
    //     },
    //     {
    //       title: "Open Source Circular Economy Days Hackathon",
    //       dates: "June 10th, 2017",
    //       location: "Toronto, Ontario",
    //       description:
    //         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //       win: "1st Place Winner",
    //       links: [
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/dillionverma/genecis",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Make School's Student App Competition 2017",
    //       dates: "May 19th - 21st, 2017",
    //       location: "International",
    //       description: "Improved PocketDoc and submitted to online competition",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //       win: "Top 10 Finalist | Honourable Mention",
    //       links: [
    //         {
    //           title: "Medium Article",
    //           icon: <Icons.globe className="h-4 w-4" />,
    //           href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //         },
    //         {
    //           title: "Devpost",
    //           icon: <Icons.globe className="h-4 w-4" />,
    //           href: "https://devpost.com/software/pocketdoc-react-native",
    //         },
    //         {
    //           title: "YouTube",
    //           icon: <Icons.youtube className="h-4 w-4" />,
    //           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //         },
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/dillionverma/pocketdoc-react-native",
    //         },
    //       ],
    //     },
    //     {
    //       title: "HackMining",
    //       dates: "May 12th - 14th, 2017",
    //       location: "Toronto, Ontario",
    //       description: "Developed neural network to optimize a mining process",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //       links: [],
    //     },
    //     {
    //       title: "Waterloo Equithon",
    //       dates: "May 5th - 7th, 2017",
    //       location: "Waterloo, Ontario",
    //       description:
    //         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //       links: [
    //         {
    //           title: "Devpost",
    //           icon: <Icons.globe className="h-4 w-4" />,
    //           href: "https://devpost.com/software/pocketdoc-react-native",
    //         },
    //         {
    //           title: "YouTube",
    //           icon: <Icons.youtube className="h-4 w-4" />,
    //           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //         },
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/dillionverma/pocketdoc-react-native",
    //         },
    //       ],
    //     },
    //     {
    //       title: "SpaceApps Waterloo",
    //       dates: "April 28th - 30th, 2017",
    //       location: "Waterloo, Ontario",
    //       description:
    //         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //       links: [
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/dillionverma/earthwatch",
    //         },
    //       ],
    //     },
    //     {
    //       title: "MHacks 9",
    //       dates: "March 24th - 26th, 2017",
    //       location: "Ann Arbor, Michigan",
    //       description:
    //         "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //       links: [
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/dillionverma/threejs-planes",
    //         },
    //       ],
    //     },
    //     {
    //       title: "StartHacks I",
    //       dates: "March 4th - 5th, 2017",
    //       location: "Waterloo, Ontario",
    //       description:
    //         "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //       win: "1st Place Winner",
    //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //       links: [
    //         {
    //           title: "Source (Mobile)",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/mattBlackDesign/recipic-ionic",
    //         },
    //         {
    //           title: "Source (Server)",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/mattBlackDesign/recipic-rails",
    //         },
    //       ],
    //     },
    //     {
    //       title: "QHacks II",
    //       dates: "February 3rd - 5th, 2017",
    //       location: "Kingston, Ontario",
    //       description:
    //         "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //       links: [
    //         {
    //           title: "Source (Mobile)",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/dillionverma/human-huntr-react-native",
    //         },
    //         {
    //           title: "Source (API)",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Terrible Hacks V",
    //       dates: "November 26th, 2016",
    //       location: "Waterloo, Ontario",
    //       description:
    //         "Developed a mock of Windows 11 with interesting notifications and functionality",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //       links: [
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Portal Hackathon",
    //       dates: "October 29, 2016",
    //       location: "Kingston, Ontario",
    //       description:
    //         "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //       image:
    //         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //       links: [
    //         {
    //           title: "Source",
    //           icon: <Icons.github className="h-4 w-4" />,
    //           href: "https://github.com/UWPortalSDK/crowmark",
    //         },
    //       ],
    //     },
  ],
} as const;
