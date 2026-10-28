export const projects = [
  {
    id: "froggy-daycare",
    title: "Froggy Daycare",
    type: "Team project",
    year: "TBD",
    short: "A physics-based sandbox management game.",
    description:
      "A first-person physics-based game where you're tasked " + 
      "with taking care of an ever-increasing number of frogs. " + 
      "Feed them, dress them up and play with them while interacting with the environment. " +
      "We made the original prototype at Pelifarmi, Oulu and continued development later on. ",
    tags: ["Unity", "C#", "Gameplay"],
    thumbnail: "froggy-thumb.avif",
    contributions: [
      "Designed and implemented the physics interaction system.",
      "Implemented the UI.",
      "Frog AI protyping.",
      "Built a performant buoyancy system."
    ],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/4521720/Froggy_Daycare/" },
      { label: "Early prototype source", url: "https://github.com/Hietakissa/Froggo-Daycare" }
    ]
  }
];