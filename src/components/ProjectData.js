import bg_1 from "../images/bg_1.jpg";
import bg_2 from "../images/bg_2.png";
import pk_1 from "../images/pk_1.jpg";
import bg_4 from "../images/bg_4.jpeg";
import bg_5 from "../images/bg_5.jpg";

const projectData = [
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
      "The Mvp_FinPro Project was the final project before graduating the Web and App Development Training at WBS Coding School. It is really amazing to see what you can achieve within the space of 3 weeks.",
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
      "This Project was created by Ifeanyi Kingsley Nwabor, Thilo Hemme and Tomas Rihak as a prerequisite for the completion of the Full-stack Web and App Development Training at the WBS Coding school. Pokémon (an abbreviation for Pocket Monsters in Japan) is a Japanese media franchise managed by The Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures. Pokémon was invented by a Japanese man named Satoshi Tajiri and his friend Ken Sugimori, who is an illustrator. ",
    url: {
      frontend: "https://main.d2p8bulvzbuljs.amplifyapp.com/",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: {
      frontend: "https://main.dbbzht5lc5esn.amplifyapp.com/",
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

  // {
  //   id: 5,
  //   name: "ToDo List",
  //   image: bg_5,
  //   contributors: ["Ifeanyi Kingsley Nwabor"],
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   url: {
  //     frontend: "https://mvpfinpro.netlify.app/",
  //     backend: "null"
  //   },
  //   repo: {
  //     frontend: "https://github.com/kelvcod/final-project-frontend.git",
  //     backend: "https://github.com/Ifeanyi-Kingsley-Nwabor/mvp_finpro.git"
  //   }
  // }
];

export default projectData;
