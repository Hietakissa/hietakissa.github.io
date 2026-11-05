export const projects = [
  {
    id: "froggy-daycare",
    title: "Froggy Daycare",
    type: "Team Project",
    year: "2023–TBD",
    short: "A physics-based sandbox management game.",
    description:
      "A first-person physics-based game where you're tasked " + 
      "with taking care of an ever-increasing number of frogs. " + 
      "Feed them, dress them up and play with them while interacting with the environment.<br>" +
      "We made the original prototype at Pelifarmi, Oulu and continued development later on. ",
    tags: ["Unity", "C#", "Gameplay"],
    thumbnail: "froggy-thumb.avif",
    contributions: [
      "Designed and implemented the physics interaction system",
      "Implemented the UI",
      "Frog AI protyping",
      "Built a performant buoyancy system"
    ],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/4521720/Froggy_Daycare/" },
      { label: "Early prototype source", url: "https://github.com/Hietakissa/Froggo-Daycare" }
    ]
  },
  {
    id: "hk-utils",
    title: "HietakissaUtils",
    type: "Solo Project",
    year: "Ongoing",
    short: "A Unity tooling and development utils package.",
    description:
      `A FOSS collection of tools, systems and other utilities for development in Unity 
      I've made for my own use over the years. Including, but not limited to: 
      <br><ul class="contribution">
       <li>Debug console/command system using reflection</li>
       <li>Simple framework/UI Elements wrapper to build custom editor tools</li>
       <li>Bunch of QOL functions and extension methods</li>
      </ul>`,
    tags: ["Unity", "C#", "Tools"],
    thumbnail: "unity-logo-crop.avif",
    links: [
      { label: "GitHub", url: "https://github.com/Hietakissa/HietakissaUtils" },
    ]
  },
  {
    id: "ludus-sanguinis",
    title: "Ludus Sanguinis",
    type: "Team Project",
    year: "2024",
    short: "A 3D card game inspired by Buckshot Roulette and Inscryption.",
    description:
      `1st person 3D custom-made card game where you take a (literal) gamble to
      pay off your mountain of debt. I was the game designer and sole programmer on this project.
       <br>We made Ludus Sanguinis at Pelifarmi, Oulu`,
    tags: ["Unity", "C#", "Gameplay"],
    thumbnail: "ludusheader.avif",
    contributions: [
      "Dialogue system",
      "Card/item logic",
      "Dealer AI"
    ],
    links: [
      { label: "Itch.io", url: "https://lenni-matero.itch.io/ludus-sanguinis" },
      { label: "GitHub", url: "https://github.com/Hietakissa/Ludus-Sanguinis-Pelifarmi" }
    ]
  },
  {
    id: "discord-bot",
    title: "Discord Chatbot",
    type: "Solo Project",
    year: "N/A",
    short: "An LLM-powered, locally run Discord chatbot.",
    description:
      `Discord chatbot powered by a locally run LLM via llama.cpp. 
      I used the Microsoft Semantic Kernel and Discord.net packages 
      to interface with the Discord API and the LLM. Initially I tried to use LlamaSharp 
      to run the LLM in the same process, but abandoned that approach in favor of the performance of raw llama.cpp.
      The bot would decide itself whether it should respond to a message based on the context.
      <br><br>
      I developed it primarily as a learning project and also got started on a memory system, 
      but haven't have time to finish it in favor of other projects.`,
    tags: [".NET", "C#", "Ai"],
    thumbnail: "discord-logo.avif",
    links: []
  }
];