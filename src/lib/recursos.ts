export type ResourceLevel = "Principiante" | "Intermedio";

export type ResourceIcon =
  | "book"
  | "graduation"
  | "file-code"
  | "layers"
  | "code"
  | "blocks";

export interface Resource {
  title: string;
  description: string;
  href: string;
  level: ResourceLevel;
  icon: ResourceIcon;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: ResourceIcon;
  resources: Resource[];
  /** Optional side panel when the category has a single resource */
  sidePanel?: {
    image: string;
    imageAlt: string;
    tip: string;
  };
}

export const learningSteps = [
  {
    step: "01",
    title: "Entiende Ethereum",
    description:
      "Antes de escribir contratos, conoce qué es una blockchain, cómo funciona una wallet y por qué existen los smart contracts.",
  },
  {
    step: "02",
    title: "Elige un lenguaje",
    description:
      "Solidity es el más usado en Ethereum. Vyper es una alternativa con sintaxis cercana a Python, enfocada en claridad y seguridad.",
  },
  {
    step: "03",
    title: "Practica y profundiza",
    description:
      "Sigue cursos guiados, lee documentación oficial y revisa protocolos reales para ver cómo se construye en producción.",
  },
] as const;

export const beginnerTips = [
  {
    title: "Empieza pequeño",
    description:
      "No intentes aprender todo de una vez. Un contrato simple (por ejemplo, un contador o un token básico) ya es un gran primer paso.",
  },
  {
    title: "Lee y escribe código",
    description:
      "Alterna entre tutoriales y práctica. Copiar un ejemplo y modificarlo te enseña más rápido que solo leer teoría.",
  },
  {
    title: "Pregunta en comunidad",
    description:
      "Únete a las sesiones de Road To Buildathon y a nuestros canales. Aprender en grupo acelera tu progreso.",
  },
  {
    title: "La seguridad importa",
    description:
      "Desde el inicio, acostúmbrate a pensar en errores comunes: reentrancy, overflow y permisos mal configurados.",
  },
] as const;

export const resourceCategories: ResourceCategory[] = [
  {
    id: "como-empezar",
    title: "Cómo empezar",
    description:
      "Fundamentos de Ethereum y rutas guiadas para quienes recién llegan al desarrollo blockchain.",
    icon: "graduation",
    resources: [
      {
        title: "Ethereum.org Learn",
        description:
          "Introducción clara a Ethereum, wallets, tokens y cómo funciona la red. Ideal si aún no has escrito un smart contract.",
        href: "https://ethereum.org/es/learn/",
        level: "Principiante",
        icon: "book",
      },
      {
        title: "Cyfrin Updraft",
        description:
          "Cursos gratuitos y prácticos de Solidity, seguridad y desarrollo Web3. Una de las mejores rutas para empezar a codear.",
        href: "https://updraft.cyfrin.io/",
        level: "Principiante",
        icon: "graduation",
      },
    ],
  },
  {
    id: "solidity",
    title: "Solidity",
    description:
      "El lenguaje más usado para smart contracts en Ethereum. Empieza por la documentación oficial y profundiza con RareSkills.",
    icon: "file-code",
    resources: [
      {
        title: "Documentación de Solidity",
        description:
          "La referencia oficial del lenguaje: tipos, contratos, herencia y buenas prácticas. Consúltala mientras practicas.",
        href: "https://docs.soliditylang.org/",
        level: "Principiante",
        icon: "file-code",
      },
      {
        title: "RareSkills",
        description:
          "Artículos y guías técnicas que explican Solidity a fondo, con ejemplos claros. Muy útil cuando ya dominas lo básico.",
        href: "https://rareskills.io/learn-solidity",
        level: "Intermedio",
        icon: "layers",
      },
    ],
  },
  {
    id: "vyper",
    title: "Vyper",
    description:
      "Un lenguaje de contratos con sintaxis similar a Python, pensado para ser simple y seguro.",
    icon: "code",
    resources: [
      {
        title: "Documentación de Vyper",
        description:
          "Guía oficial para instalar Vyper, escribir contratos y entender su diseño enfocado en seguridad y legibilidad.",
        href: "https://docs.vyperlang.org/",
        level: "Principiante",
        icon: "code",
      },
      {
        title: "Curve Finance × Vyper",
        description:
          "Cómo Curve usa Vyper en producción: un caso real de smart contracts en DeFi. Ideal para ver el lenguaje aplicado a escala.",
        href: "https://news.curve.finance/state-of-vyper-curve-smart-contracts/",
        level: "Intermedio",
        icon: "blocks",
      },
    ],
  },
  {
    id: "ecosistema",
    title: "Ecosistema",
    description:
      "Herramientas y documentación de protocolos reales para construir y desplegar smart contracts.",
    icon: "blocks",
    resources: [
      {
        title: "Uniswap Docs",
        description:
          "Documentación del protocolo de intercambio más conocido. Sirve para entender contratos, pools y cómo integrar DeFi.",
        href: "https://developers.uniswap.org/docs",
        level: "Intermedio",
        icon: "blocks",
      },
      {
        title: "Remix IDE",
        description:
          "Entorno en el navegador para escribir, compilar y desplegar smart contracts. Ideal para practicar Solidity sin instalar nada.",
        href: "https://ethereum.org/developers/tools/remix-project/",
        level: "Principiante",
        icon: "code",
      },
    ],
  },
];
