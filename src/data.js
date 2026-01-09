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
    tech: ["Unity", "C#", "Mobile", "Git"],
    short:
      "Party game estilo ‘hot potato’ com deteção de movimento e minijogos.",
    thumb: "media/toss-the-minder.jpg",

    whatIs:
      "Toss The Minder é um jogo party onde os jogadores passam o peluche/telemóvel entre si enquanto a música toca. Quando a música pára, quem estiver com o peluche é eliminado.",

    workedOn: [
      "Deteção de movimento (aceleração/giroscópio) e proteção contra falsos positivos",
      "Loop de ronda, timers e condições de vitória/derrota",
      "UI/feedback (cores, SFX, eventos de fim de jogo)",
    ],

    links: {
      github: "", // ainda não tens repo
      itch: "",
      video: "",
    },

    media: [],
  },

  {
    id: "aliveworld",
    title: "AliveWorld",
    platform: "PC",
    tech: ["Unity", "C#", "Git"],
    short:
      "Projeto em Unity focado em simulação com agentes, jobs e comportamentos de AI.",
    thumb: "media/aliveworld.png",

    whatIs:
      "AliveWorld é um projeto em Unity focado em simulação: agentes com tarefas, prioridades e comportamento emergente (estilo colony sim).",

    workedOn: [
      "Sistema de jobs/tickets e execução de tarefas por agentes",
      "Estrutura modular para AI / tomada de decisão",
    ],

    links: {
      github: "https://github.com/MarcoRodrigues2003/AliveWorld",
      itch: "",
      video: "",
    },

    media: [],
  },
];
