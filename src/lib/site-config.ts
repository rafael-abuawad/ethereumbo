export const registrationLinks = {
  participant: "https://forms.gle/BpDXEe4ssVrGob5RA",
  speaker: "https://forms.gle/KKAvUDen2kFKTrLn6",
  volunteer: "https://forms.gle/HaCE3WQw3oBuochP9",
} as const;

export type RegistrationTrackId = keyof typeof registrationLinks;

export const isRegistrationOpen = Object.values(registrationLinks).every(
  (url) => url.length > 0,
);

export const registrationTracks = [
  {
    id: "participant" as const,
    title: "Hackers / Participantes",
    description:
      "Construye en el Buildathon. Inscríbete para hackear, aprender y llevar tu producto más cerca de producción.",
    href: registrationLinks.participant,
    cta: "Inscribirme",
  },
  {
    id: "speaker" as const,
    title: "Speakers",
    description:
      "Comparte tu conocimiento en charlas y talleres. Propón una sesión y suma a la comunidad.",
    href: registrationLinks.speaker,
    cta: "Inscribirme",
  },
  {
    id: "volunteer" as const,
    title: "Voluntarios",
    description:
      "Únete al equipo y ayuda a hacer posible el evento. Hay roles para todos los perfiles.",
    href: registrationLinks.volunteer,
    cta: "Inscribirme",
  },
] as const;
