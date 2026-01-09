export const profile = {
  name: "Marco Rodrigues",
  title: "Digital Game Development Student | Game Developer",
  tagline:
    "Digital Game Development student based in Portugal. Working mainly in Unity (C#) on gameplay systems, AI behaviors, and simulation-style prototypes.",
  github: "https://github.com/MarcoRodrigues2003",
  email: "rodriguesmarco031@gmail.com",
};

export const projects = [
  {
    id: "toss-the-minder",
    title: "Toss The Minder",
    platform: "Mobile",
    tech: ["Unity", "C#", "Mobile"],
    short: "Hot-potato style party game with motion detection and minigames.",
    thumb: "media/toss-the-minder.jpg",

    whatIs:
      "Toss The Minder is a party game with multiple minigames where players pass the plush around while music plays.",

    workedOn: [
      "Motion detection (accelerometer/gyroscope) with safeguards against false positives",
      "Round loop, timers, and win/lose conditions",
      "UI/feedback (colors, SFX, end-of-game events)",
    ],

    links: {
      github: "", // no repo yet
      itch: "",
      video: "",
    },

    media: [],
  },

  {
    id: "aliveworld",
    title: "AliveWorld",
    platform: "PC",
    tech: ["Unity", "C#"],
    short: "Unity simulation project with agents, a task/job system, and AI behaviors.",
    thumb: "media/AliveWorldIcon.png",

    whatIs:
      "AliveWorld is a Unity simulation project focused on agents with tasks, priorities, and emergent behavior (colony-sim style).",

    workedOn: [
      "Task/job system (tickets/requests) and agent execution flow",
      "Modular AI / decision-making structure",
    ],

    links: {
      github: "https://github.com/MarcoRodrigues2003/AliveWorld",
      itch: "",
      video: "",
    },

    media: [],
  },

  {
    id: "arcityplayground",
    title: "ARCityPlayground",
    platform: "Mobile (AR)",
    tech: ["Unity", "C#", "AR", "MediaPipe", "Computer Vision", "Hand Tracking"],
    short:
      "Unity project focused on computer vision prototypes and interactive AR gameplay.",
    thumb: "media/arcityplayground.png",

    whatIs:
      "ARCityPlayground is a Unity project where the player uses their hand to destroy a city in augmented reality.",

    workedOn: [
      "Procedural generation system to create a randomized city (layout rules, distribution, spawning)",
    ],

    links: {
      github: "https://github.com/MarcoRodrigues2003/ARCityPlayground",
      itch: "",
      video: "",
    },

    media: [],
  },
];
