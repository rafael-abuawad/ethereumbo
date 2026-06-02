import { registrationFormUrl } from "@/lib/site-config";

export type EventType = "online" | "stream" | "in-person" | "main";

export interface TimelineEvent {
  date: string;
  dateShort: string;
  time: string;
  title: string;
  description: string;
  type: EventType[];
  location: string;
  /** Optional Luma registration URL for this event */
  lumaUrl?: string;
  /** Optional registration form URL for this event */
  formUrl?: string;
  /** Optional Google Maps URL for venue */
  mapsUrl?: string;
}

export type CitySlug = "cochabamba" | "santa-cruz" | "la-paz";

export const cityConfig = {
  cochabamba: {
    slug: "cochabamba" as const,
    name: "Cochabamba",
    path: "/road-to-buildathon/",
  },
  "santa-cruz": {
    slug: "santa-cruz" as const,
    name: "Santa Cruz",
    path: "/road-to-buildathon/santa-cruz",
  },
  "la-paz": {
    slug: "la-paz" as const,
    name: "La Paz",
    path: "/road-to-buildathon/la-paz",
  },
} as const;

const roadToBuildathonKickoff: TimelineEvent = {
  date: "05 Jun",
  dateShort: "05 Jun",
  time: "Por confirmar BOT",
  title: "Sesión Informativa Road to Buildathon 2026",
  description:
    "Comienza el Road to Buildathon 2026: un programa que llevará a equipos de toda Bolivia desde una idea hasta un MVP funcional. En esta primera sesión virtual explicaremos la ruta de 12 semanas de formación, mentorías, workshops, networking y construcción que culminará en el Buildathon ETH Bolivia 2026. Abierto para desarrolladores, diseñadores, emprendedores, estudiantes y cualquier persona interesada en construir el futuro de Internet.",
  type: ["online"],
  location: "Online",
  lumaUrl: "https://luma.com/2nmx1j8n",
  formUrl: registrationFormUrl,
};

export const eventsByCity: Record<CitySlug, TimelineEvent[]> = {
  cochabamba: [
    {
      date: "28 Feb",
      dateShort: "28 Feb",
      time: "18:00 - 20:00 BOT",
      title: "Desarrollo Blockchain a Fondo",
      description:
        "¿Te interesa aprender cómo pasar de la lógica tradicional a los Smart Contracts? Este taller práctico está diseñado para que entiendas: fundamentos de Ethereum y Web3, uso de la suite de desarrollo Foundry, y casos reales de aplicación en blockchain. Ideal para desarrolladores, estudiantes de tecnología y emprendedores interesados en Web3. Los cupos son limitados.",
      type: ["in-person"],
      location: "SCESI - UMSS",
      lumaUrl: "https://luma.com/8c1scg69",
      mapsUrl:
        "https://www.google.com/maps/place/SCESI+-+UMSS/data=!4m2!3m1!19sChIJywiB9P5z45MRw5EXIRiTZiU",
    },
    {
      date: "12 Marzo",
      dateShort: "12 Marzo",
      time: "19:00 - 21:00 BOT",
      title: "Crea tu primer Smart Contract",
      description:
        "¿Quieres dar tus primeros pasos en Web3? En este taller introductorio aprenderás a crear tu primer smart contract desde cero: conceptos básicos de Ethereum, herramientas de desarrollo y un proyecto práctico que podrás desplegar. Ideal para quienes recién comienzan en blockchain y quieren experimentar con código real.",
      type: ["in-person"],
      location: "Sociedad de Ingenieros de Bolivia Departamental Cochabamba",
      lumaUrl: "https://luma.com/mry2idbc",
      mapsUrl:
        "https://www.google.com/maps/place/Society+of+Engineers+of+Bolivia+Cochabamba+Department/data=!4m2!3m1!19sChIJ4YKWMmt045MR27-QpxaI79Q",
    },
    {
      date: "20 Marzo",
      dateShort: "20 Marzo",
      time: "16:00 BOT",
      title: "Aleph Hackathon Chapter Cochabamba",
      description:
        "Cochabamba se une a la red de ciudades satélite del Aleph Hackathon, el evento insignia de Crecimiento. Durante este fin de semana, nos reuniremos para construir soluciones innovadoras sobre Web3, IA y tecnologías emergentes que aborden desafíos reales en Argentina, Bolivia y todo Latinoamérica.",
      type: ["in-person", "online"],
      location: "Departamento de Informática y Sistemas",
      lumaUrl: "https://luma.com/3ebgfywj",
      mapsUrl:
        "https://www.google.com/maps/place/Departamento+de+Inform%C3%A1tica+y+Sistemas/data=!4m2!3m1!19sChIJm5-c0f5z45MRoXQLJkTts14",
    },
    {
      date: "31 Marzo",
      dateShort: "31 Marzo",
      time: "18:00 BOT",
      title: "Yapita Cripto",
      description:
        "Conoce cómo la fintech Yapita está acercando las criptomonedas a Bolivia. Una charla y demostración en vivo sobre pagos, remesas y adopción de activos digitales en el día a día.",
      type: ["in-person"],
      location: "AUDITORIO FCE UMSS",
      mapsUrl:
        "https://www.google.com/maps/place/AUDITORIO+FCE+UMSS/data=!4m2!3m1!19sChIJyUfhW_lz45MRtakqbAV5muI",
    },
    {
      date: "16 Abril",
      dateShort: "16 Abril",
      time: "18:00 BOT",
      title: "Bienvenida de Voluntarios",
      description:
        "Encuentro de bienvenida para quienes se suman como voluntarios al Road to Buildathon. Conocerás al equipo, los roles disponibles y cómo contribuir a construir la comunidad Web3 en Cochabamba.",
      type: ["in-person"],
      location: "HalfTime Sports Bar",
      mapsUrl:
        "https://www.google.com/maps/place/HalfTime+Sports+Bar/data=!4m2!3m1!19sChIJ7_lxb41145MRpXuqGB8bLtw",
    },
    {
      date: "22 Mayo",
      dateShort: "22 Mayo",
      time: "18:00 BOT",
      title: "Global Pizza Party Cochabamba",
      description:
        "Únete a la Global Pizza Party, un meetup comunitario para conocer a otros builders, compartir proyectos y conectar con la escena Web3 local. Pizza, conversación y buena energía.",
      type: ["in-person"],
      location: "Sociedad de Ingenieros de Bolivia Departamental Cochabamba",
      mapsUrl:
        "https://www.google.com/maps/place/Sociedad+de+Ingenieros+de+Bolivia+Departamental+Cochabamba/data=!4m2!3m1!19sChIJ4YKWMmt045MR27-QpxaI79Q",
    },
    roadToBuildathonKickoff,
  ],
  "santa-cruz": [roadToBuildathonKickoff],
  "la-paz": [
    {
      date: "20 Marzo",
      dateShort: "20 Marzo",
      time: "16:00 BOT",
      title: "Aleph Hackathon Chapter Cochabamba",
      description:
        "La Paz se une a la red de ciudades satélite del Aleph Hackathon, el evento insignia de Crecimiento. Durante este fin de semana, nos reuniremos en la UMSA para construir soluciones innovadoras sobre Web3, IA y tecnologías emergentes que aborden desafíos reales en Argentina, Bolivia y todo Latinoamérica.",
      type: ["in-person", "online"],
      location: "Computer Career - UMSA",
      mapsUrl: "https://maps.app.goo.gl/R5Remg6Eau1LqfAq8",
    },
    roadToBuildathonKickoff,
  ],
};
