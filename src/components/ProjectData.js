import bg_1 from "../images/bg_1.jpg";
import bg_2 from "../images/bg_2.png";
import pk_1 from "../images/pk_1.jpg";
import bg_4 from "../images/bg_4.jpeg";
import bg_5 from "../images/zombeatz.png";
import spider from "../images/spider.jpeg";

const projectData = [
  {
    id: 6,
    name: "Spider CSS",
    image: spider,
    contributors: ["Ifeanyi Kingsley Nwabor"],
    description:
      "Here is a single page React Application which I built as a process of improving my CSS skills. This application provides (potential) developers with resources for learning and improving UI & UX Designs.  No CSS framework was used while creating this web application.",
    url: {
      frontend: "https://spider-css.netlify.app/",
      backend: "null"
    },
    repo: {
      frontend: "https://github.com/Ifeanyi-Kingsley-Nwabor/Spider-CSS.git",
      backend: "null"
    },
    tech: ["React, Vanila CSS"],
    techstack: "React"
  },
  {
    id: 5,
    name: "Amplify App - Zombeatz",
    image: bg_5,
    contributors: ["Ifeanyi Kingsley Nwabor"],
    description:
      "Here is a simple (Todo) Full-Stack React Application using AWS Amplify. This was achieved by following step by step hands-on tutorial (https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/) on Amazon. The project includes making use of the aws amplify CLI, adding authentication flow to manage users. The project also entails a GraphQL API, a DynamoDB database and Simple Storage Service (Amazon S3) to store images. Further work is done to make it better.",
    url: {
      frontend: "https://main.dc6kxfl05ko9k.amplifyapp.com/",
      backend: "null"
    },
    repo: {
      frontend: "https://github.com/Ifeanyi-Kingsley-Nwabor/Amplify_App.git",
      backend: "null"
    },
    tech: [
      "React, Materialize CSS, AWS, AWS Amplify, Amazon S3, DynamoDB,  Amazon Authentication flow"
    ],
    techstack: "Amazon Amplify"
  },

  {
    id: 1,
    name: "MVP_FinPro",
    image: bg_1,
    contributors: [
      "Bogdan Cocis",
      " Ifeanyi Kingsley Nwabor",
      "Kelvin Asomugha"
    ],
    description:
      "The Mvp_FinPro Project was the final project before graduating the Web and App Development Training at WBS Coding School. It is really amazing to see what you can achieve within the space of 3 weeks. This application is not completed yet as some features still needs to be implemented. Register or Login with (Test-User: Toby Jacobs, Email address: toby@gmail.com, Password: Toby) to view profile page. The checkout process was implemented using Stripe. For test purpose use 4242424242424242 as your card number, any three-digit CVC code, and an expiration date in the future to simulate a successful payment.",
    url: {
      frontend: "https://mvpfinpro.netlify.app/",
      backend: "null"
    },
    repo: {
      frontend: "https://github.com/kelvcod/final-project-frontend.git",
      backend: "https://github.com/Ifeanyi-Kingsley-Nwabor/mvp_finpro.git"
    },
    tech: [
      "React, Node JS, PostgreSQL, Express, Stripe, Jira, Materialize CSS"
    ],
    techstack: "PERN"
  },

  {
    id: 2,
    name: "Pokefight",
    image: pk_1,
    contributors: ["Ifeanyi Kingsley Nwabor", "Thilo Hemme", "Tomas Rihak"],
    description:
      "This Project was created by Ifeanyi Kingsley Nwabor, Thilo Hemme and Tomas Rihak as a prerequisite for the completion of the Full-stack Web and App Development Training at the WBS Coding school. Pokémon (an abbreviation for Pocket Monsters in Japan) is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures. Pokémon was invented by a Japanese man named Satoshi Tajiri and his friend Ken Sugimori, who is an illustrator. It was really interesting working on this project and I believe it can be done better so I intend to continue working on it with time.",
    url: {
      frontend: "https://poke-fight.netlify.app/",
      backend: "null"
    },
    repo: {
      frontend: "https://github.com/Ifeanyi-Kingsley-Nwabor/pokefight_fe.git",
      backend:
        "https://github.com/Ifeanyi-Kingsley-Nwabor/pokefight_project.git"
    },
    tech: ["React, Node JS, MongoDB, Express, Jira,  Materialize CSS"],
    techstack: "MERN"
  },

  {
    id: 3,
    name: "Hacker-News clone",
    image: bg_2,
    contributors: [
      "Bogdan Cocis",
      "Ifeanyi Kingsley Nwabor",
      "Kelvin Asomugha"
    ],
    description:
      "This Project was created by Ifeanyi Kingsley Nwabor, Bogdan Cocis and Kelvin Asomugha during the early states of the Full-stack Web and App Development Training at the WBS Coding school. After the first few weeks, we were able to build a clone application of Hacker News. No GitHub repository was neccessary for this project since we had to fetch the data using the Hacker News API. In addition, we used code sandbox for developing the project hence would only open up on the browser as a code sandbox project. Subsequent updates would reflect as soon as it is refactored in an IDE (VS Code).",
    url: {
      frontend:
        "https://codesandbox.io/s/magical-heyrovsky-witm1?file=/src/my_components/NavBar.js",
      backend: "null"
    },
    repo: {
      // frontend: "null",
      // backend: "null"
    },
    tech: ["React, Hacker News API, Semantic-UI (React)"]
    // techstack: "null"
  },

  {
    id: 4,
    name: "Lifestyle",
    image: bg_4,
    contributors: [
      "Bogdan Cocis",
      "Ifeanyi Kingsley Nwabor",
      "Kelvin Asomugha"
    ],
    description:
      "This is a blog about lifestyle in general. The Lifestyle blog features tips regarding various niches such as, Health and Fitness tips,  Health and wellness tips, Travel tips with information about some of the best places to visit for instance in Berlin Germany and also somewhere in Cape Town South Africa. The development of the Lifestyle blog is still very much in progress and subsequent updates would be made.",
    url: {
      frontend: "https://lifestyle-kulture.netlify.app/",
      backend: "null"
    },
    repo: {
      frontend:
        "https://github.com/Ifeanyi-Kingsley-Nwabor/Life-style-blog.git",
      backend: "https://github.com/Ifeanyi-Kingsley-Nwabor/lifestyle-api.git"
    },
    tech: ["React, Node JS, PostgreSQL, Express, Trello Board,  Bootstrap"],
    techstack: "PERN"
  }
];

export default projectData;
