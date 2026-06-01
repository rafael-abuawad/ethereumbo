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

export const eventsByCity: Record<CitySlug, TimelineEvent[]> = {
  cochabamba: [
    {
      date: "28 Feb",
      dateShort: "28 Feb",
      time: "18:00 - 20:00 BOT",
      title: "Desarrollo blockchain a fondo",
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
      title: "Crea tu primer smart contract",
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
      type: ["in-person"],
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
      title: "Bienvenida de voluntarios",
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
  ],
  "santa-cruz": [],
  "la-paz": [
    {
      date: "20 Marzo",
      dateShort: "20 Marzo",
      time: "16:00 BOT",
      title: "Aleph Hackathon Chapter Cochabamba",
      description:
        "La Paz se une a la red de ciudades satélite del Aleph Hackathon, el evento insignia de Crecimiento. Durante este fin de semana, nos reuniremos en la UMSA para construir soluciones innovadoras sobre Web3, IA y tecnologías emergentes que aborden desafíos reales en Argentina, Bolivia y todo Latinoamérica.",
      type: ["in-person"],
      location: "Computer Career - UMSA",
      mapsUrl: "https://maps.app.goo.gl/R5Remg6Eau1LqfAq8",
    },
  ],
};
