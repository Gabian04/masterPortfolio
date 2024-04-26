/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Santiago Gabian Perez Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Santiago Gabian Perez Portfolio",
    type: "website",
    url: "http://SantiagoGabian.com/",
  },
};

//Home Page
const greeting = {
  title: "Santiago Gabian Perez",
  logo_name: "Santiago Gabian Perez",
 
  subTitle:
    "Welcome to my portfolio! I am a software engineer and video game programmer specializing in gameplay development, web-app development and full stack development. With experience in Unreal Engine, C++, Java, Python, SQL and other technologies.Explore my projects to see how I blend technical excellence with creativity to bring games and software projects to life.",
  resumeLink:
    "https://drive.google.com/file/d/1Sl_hrEsaeoui4HZTG9VPI8CRNOSjifya/view?usp=sharing",
  portfolio_repository: " https://github.com/Gabian04/masterPortfolio",
  githubProfile: "https://github.com/Gabian04",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: " https://github.com/Gabian04",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"
 
  {
    name: "Github",
    link: " https://github.com/Gabian04",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https:www.linkedin.com/in/santiago-gabian-perez",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Mail",
    link: "mailto:santigabian@hotmail.com",
    fontAwesomeIcon:"fa-at", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Video Game Programming",
      fileName: "DataScienceImg",
      skills: [
        "🎮Experienced in developing interactive and immersive gameplay experiences.",
        "🎮Proficient in programming languages commonly used in game development, such as C++.",
        "🎮Skilled in utilizing game engines like Unreal Engine to create dynamic and engaging games.",
      ],
      softwareSkills: [
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            backgroundColor: "transparent",
            color:"black"
          },
        },
        {
          skillName: "Unreal Engine",
          fontAwesomeClassname: "logos:unrealengine",
          style: {
            backgroundColor: "transparent",
            color: "black",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color:"black"
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Developing program and algorithms using c++ and python",
        "⚡ Creating application backend in Java Spring boot",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Spring boot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: {
            color: "#56d27b",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "☁️ Experience working with cloud platforms like Aws",
        "☁️ Creating relational databases with SQL and non-relational databases with DynamoDB",
        "☁️ Experience using containers with Docker",
        "☁️ Hosting webpages with Heroku",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "devicon:dynamodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "devicon:heroku-wordmark",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
 
  ],
};

const degrees = {
  degrees: [
    {
      title: "Instituto Tecnologico de Monterrey Campo Ciudad de Mexico",
      subtitle: "Bachelors in Software Engineering",
      logo_path: "escudo-itesm-blue.png",
      alt_name: "TEC",
      duration: "2019 - 2023",
      descriptions: [
        " I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        " Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        " I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://tec.mx/es",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to C# Programming and Unity",
      subtitle: "- Dr. Tim",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/2fe70f60a925d5abefba107872d606ee",
      alt_name: "deeplearning.ai",
      color_code: "#2A73CC",
    },
    {
      title: "More C# Programming and Unity",
      subtitle: "- Dr. Tim",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/df00901d6ef5f8ff2fdcb9c82a475735",
      alt_name: "Colorado University",
      color_code: "#2A73CC",
    },

    {
      title: "Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1msme2RhAQr-a9CnOa3D_TYtALMpuLA0c/view?usp=sharing",
      alt_name: "Google",
      color_code: "Orange",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "During my degree, I collaborated on numerous projects with various companies, including established industry leaders. These experiences have been pivotal in developing my skills and expertise in software engineering. They have provided me with a deep understanding of software development principles and honed my ability to adapt to different environments and collaborate effectively with diverse teams. My portfolio reflects the valuable lessons and experiences gained from these projects, which continue to inspire and inform my current work.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Projects",
      work: true,
      experiences: [
        {
          title: "GameJam Circus Game",
          company: "",
          logo_path: "controllogo.png",
          duration: "Jan 2024",
          location: "Mexico City, Mexico",
          description:
            "Made a game with some colleagues for a GameJam.The game was made in Unity and the timelimit was 2 days. The game consist in a clown that can play different minigames and when he wins them all the game is over. The minigames range from keeping the audience happy to juggling.",
          color: "#0879bf",
        },
        {
          title: "Komorebi Connect",
          company: "Amazon",
          company_url: "https://www.amazon.com.mx/",
          logo_path: "amazon.png",
          duration: "February 2022-June 2022",
          location: "Mexico City, Mexico",
          description:
            "This project was about making a webapp to screen recordord calls made through Amazon Connect. Afterwards, you could view the video with the audio of the call captured by Amazon Connect, as well as the screen video and audio from After Call Work.",
          color: "#000000",
        },
        {
          title: "Cetac APP",
          company: "Cetac",
          company_url: "https://www.cetac.mx/inicio",
          logo_path: "cetac.jpg",
          duration: "Aug 2021 - Dec 2021",
          location: "Mexico City, Mexico",
          description:
            "This is the iOS App for CETAC. Built on Xcode using Swift. It was designed to help thanatologists and administrators from CETAC. The app included different areas including one with analytics and statistics to help the administrators.",
          color: "#fc1f20",
        },
        {
          title: "Videogame STEM",
          company: "Movimiento STEM",
          company_url: "https://movimientostem.org/",
          logo_path: "MovimientoStem_Logo.png",
          duration: "Jan 2021 - Apr 2021",
          location: "Mexico City, Mexico",
          description:
            "Designed an programmed simple plataformer using Unity so that kids would get into more interested in STEM. The game connected to a website that kept track of the scores by using django with python.",
          color: "#9b1578",
        },
     
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer intern",
          company: "Development Monitors LLC",
          logo_path: "controllogo.png",
          duration: "Aug 2022 - Dec 2022",
          location: "Washington DC, USA",
          description:
            "Modeled 2D building into 3D to help Create risk maps in Yemen. Sat in on design team and planning meetings and partnered with team members to learn best practices in software design.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Help old people find work",
          company: "Mente en forma",
          company_url: "https://www.menteenforma.org/",
          logo_path: "mente.PNG",
          duration: "June 2019 - April 2020",
          location: "Mexico city, Mexico",
          description:
            "Helped with multiple task like helping find similar companies and creating a database of them. Plus helping with social media.",
          color: "#4285F4",
        },
        {
          title: "Help with videogame",
          company: "Deer planet",
          company_url: "https://github.com/DeerPlanetDev/DeerPlanet",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Mexico city, Mexico",
          description:
            "Helped with enemy AI for the game.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  description: "Some of my published Projects, code and games in Github.",
  avatar_image_path: "projects_image.svg",
  
};


const publications = {
  data: [
    {
    
      id: "Komorebi-Connect-Backend",
      name: "Komorebi",
      createdAt: "2022-05-19",
      description: "Repository with the backend of the webapp I worked on for Amazon connect.",
      url: "https://gitfront.io/r/Gabian04/p3XT6FwSuAcc/komorebi-backend-code/",
    
    },
    
    {
      id: "Cetac",
      name: "Cetac-Mobile-App",
      createdAt: "2021-11-15",
      description: "Repository for a mobile app made with Swift in Xcode",
      url: "https://github.com/CETAC-NetworkDefenders",
      fontAwesomeClassname: "simple-icons:unity",
    },
    {
      id: "Reto-Steam",
      name: "Reto-Steam",
      createdAt: "2021-05-10",
      description: "Project repository with a game in unity for company Movimiento Steam to make more people study STEM.",
      url: "https://github.com/Gabian04/retoSteam",
    },
    {
      id: "UnrealProjects",
      name: "Unreal-Projects",
      createdAt: "2024-04-12",
      description: "This repository has a link to the games I made in UnrealEngine. Plus a little explanation for each one.",
      url: "https://github.com/Gabian04/UnrealProjects",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "PI3.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with videogame or software Development. You can also email me at santigabian@hotmail.com",
  },
  blogSection: {
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
