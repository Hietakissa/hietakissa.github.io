export const projects = [
  {
    id: "echoes",
    title: "Echoes of the Deep",
    type: "Personal project",
    year: "2026",
    short: "An atmospheric exploration game built around sound.",
    description:
      "A first-person exploration prototype where players navigate " +
      "an abandoned underwater facility using sound and environmental clues.\n\n" +
      "I focused on gameplay systems, player interaction, and " +
      "creating a readable exploration loop.",
    tags: ["Unity", "C#", "Gameplay"],
    color: "blue",
    thumbnail: "banskukisu.avif",
    contributions: [
      "Designed and implemented the interaction system.",
      "Built reusable gameplay components.",
      "Prototyped environmental audio mechanics."
    ],
    links: [
      { label: "Source code", url: "https://github.com/" },
      { label: "Gameplay video", url: "https://youtube.com/" }
    ]
  },
  {
    id: "orbit",
    title: "Orbit Runner",
    type: "Game jam",
    year: "2025",
    short: "A fast-paced platformer with gravity-switching mechanics.",
    description:
      "A short arcade platformer created for a game jam. Players " +
      "switch the direction of gravity to navigate increasingly " +
      "challenging levels.\n\n" +
      "The project was developed in a small team over a limited time.",
    tags: ["Godot", "GDScript", "Game Jam"],
    color: "purple",
    symbol: "◎",
    contributions: [
      "Implemented the player controller.",
      "Created the gravity switching mechanic.",
      "Collaborated on level design and difficulty tuning."
    ],
    links: [
      { label: "Play the game", url: "https://itch.io/" }
    ]
  },
  {
    id: "tiny-kingdom",
    title: "Tiny Kingdom",
    type: "University project",
    year: "2025",
    short: "A small strategy game about managing a growing settlement.",
    description:
      "A resource management game in which players balance " +
      "production, expansion, and the needs of a small settlement.",
    tags: ["Unity", "C#", "AI"],
    color: "green",
    symbol: "♜",
    contributions: [
      "Implemented the resource management system.",
      "Created basic NPC decision-making logic.",
      "Built UI components for resource tracking."
    ],
    links: []
  },
  {
    id: "shader-lab",
    title: "Shader Experiments",
    type: "Technical experiment",
    year: "2024",
    short: "A collection of custom shaders and rendering experiments.",
    description:
      "A technical playground exploring stylized rendering, " +
      "procedural effects, and material customization.",
    tags: ["Shaders", "HLSL", "Rendering"],
    color: "pink",
    symbol: "✳",
    contributions: [
      "Created procedural surface effects.",
      "Experimented with lighting and post-processing.",
      "Documented performance trade-offs."
    ],
    links: [
      { label: "Source code", url: "https://github.com/" }
    ]
  },
  {
    id: "dungeon-tools",
    title: "Dungeon Generator",
    type: "Tools project",
    year: "2024",
    short: "Procedural dungeon generation with configurable rules.",
    description:
      "A reusable tool for generating dungeon layouts with " +
      "configurable room sizes, connections, and placement rules.",
    tags: ["C#", "Algorithms", "Tools"],
    color: "yellow",
    symbol: "⌘",
    contributions: [
      "Implemented the generation algorithm.",
      "Added configurable generation parameters.",
      "Built visual debugging tools."
    ],
    links: []
  },
  {
    id: "coop-prototype",
    title: "Co-op Prototype",
    type: "Team project",
    year: "2023",
    short: "An experimental cooperative game with shared objectives.",
    description:
      "A prototype exploring cooperative player mechanics, " +
      "shared objectives, and communication through gameplay.",
    tags: ["Unreal Engine", "C++", "Multiplayer"],
    color: "blue",
    symbol: "⌁",
    contributions: [
      "Implemented cooperative gameplay mechanics.",
      "Prototyped player interaction.",
      "Helped test and refine the game loop."
    ],
    links: []
  }
];