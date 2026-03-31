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
      title: "Taller de desarrollo blockchain – UMSS SCESI",
      description:
        "¿Te interesa aprender cómo pasar de la lógica tradicional a los Smart Contracts? Este taller práctico está diseñado para que entiendas: fundamentos de Ethereum y Web3, uso de la suite de desarrollo Foundry, y casos reales de aplicación en blockchain. Ideal para desarrolladores, estudiantes de tecnología y emprendedores interesados en Web3. Los cupos son limitados.",
      type: ["in-person"],
      location: "UMSS – Facultad de Ciencias y Tecnología, Cochabamba",
      lumaUrl: "https://luma.com/8c1scg69",
      mapsUrl: "https://maps.app.goo.gl/GJ5KnPrTv9QbvEHb9",
    },
    {
      date: "12 Marzo",
      dateShort: "12 Marzo",
      time: "19:00 - 21:00 BOT",
      title: "Taller de desarrollo blockchain – S.I.B",
      description:
        "¿Te interesa aprender cómo pasar de la lógica tradicional a los Smart Contracts? Este taller práctico está diseñado para que entiendas: fundamentos de Ethereum y Web3, uso de la suite de desarrollo Foundry, y casos reales de aplicación en blockchain. Ideal para desarrolladores, estudiantes de tecnología y emprendedores interesados en Web3. Los cupos son limitados.",
      type: ["in-person"],
      location: "S.I.B – Facultad de Ciencias y Tecnología, Cochabamba",
      lumaUrl: "https://luma.com/mry2idbc",
      mapsUrl: "https://maps.app.goo.gl/egXgXYZEvriJo8L18",
    },
    {
      date: "20 Marzo",
      dateShort: "20 Marzo",
      time: "16:00 BOT",
      title: "Aleph Hackathon - Chapter Cochabamba 2026",
      description:
        "Cochabamba se une a la red de ciudades satélite del Aleph Hackathon, el evento insignia de Crecimiento. Durante este fin de semana, nos reuniremos para construir soluciones innovadoras sobre Web3, IA y tecnologías emergentes que aborden desafíos reales en Argentina, Bolivia y todo Latinoamérica.",
      type: ["in-person", "online"],
      location: "UMSS – Facultad de Ciencias y Tecnología, Cochabamba",
      lumaUrl: "https://luma.com/3ebgfywj",
      mapsUrl: "https://maps.app.goo.gl/GJ5KnPrTv9QbvEHb9",
    },
  ],
  "santa-cruz": [],
  "la-paz": [],
};
