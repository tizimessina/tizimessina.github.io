// All page copy, written by hand in both languages. Keep the two trees in lockstep.

export type Lang = 'en' | 'es';

export const BIRTH_DATE = '2005-05-02';

export const links = {
  email: 'tizilmessina@icloud.com',
  linkedin: 'https://www.linkedin.com/in/tizianomessina/',
  github: 'https://github.com/tizimessina',
  agroappRepo: 'https://github.com/JereC4/TP-DSW-2025-3k03-Messina-Costantini-Enrico',
  agroappLive: 'https://agroapp.dev',
  agroappApi: 'https://api.agroapp.dev/docs',
  homelabRepo: 'https://github.com/tizimessina/homelab',
  homelabWriteup: 'https://github.com/tizimessina/homelab/blob/HEAD/pihole/README.md#gotchas--troubleshooting-setup-inicial-2026-09-04',
};

export function ageOn(date: Date): number {
  const [y, m, d] = BIRTH_DATE.split('-').map(Number);
  let age = date.getFullYear() - y;
  if (date.getMonth() + 1 < m || (date.getMonth() + 1 === m && date.getDate() < d)) age -= 1;
  return age;
}

type Service = { name: string; state: 'running' | 'next' | 'planned' };

const img = {
  agroapp: { src: '/img/agroapp-stage.webp', w: 660, h: 412 },
  agroappMobile: { src: '/img/agroapp-mobile.webp', w: 640, h: 520 },
  agroappApi: { src: '/img/agroapp-api.webp', w: 1200, h: 702 },
  agroappApiMobile: { src: '/img/agroapp-api-mobile.webp', w: 760, h: 540 },
  status: { src: '/img/homelab-status.webp', w: 726, h: 432 },
  statusMobile: { src: '/img/homelab-status-mobile.webp', w: 440, h: 390 },
  pihole: { src: '/img/pihole.webp', w: 1249, h: 718 },
  piholeMobile: { src: '/img/pihole-mobile.webp', w: 745, h: 125 },
  portainer: { src: '/img/portainer.webp', w: 1800, h: 720 },
};

// Six services run today; the count everywhere derives from this list.
const services: Service[] = [
  { name: 'Pi-hole + Unbound', state: 'running' },
  { name: 'Caddy', state: 'running' },
  { name: 'Uptime Kuma', state: 'running' },
  { name: 'Portainer', state: 'running' },
  { name: 'Samba', state: 'running' },
  { name: 'AgroApp', state: 'running' },
  { name: 'Backups', state: 'next' },
  { name: 'Gitea', state: 'planned' },
  { name: 'WireGuard', state: 'planned' },
];

const en = {
  htmlLang: 'en',
  locale: 'en_US',
  title: 'Tiziano Messina · Software & infrastructure',
  description:
    'Tiziano Messina, 4th-year Information Systems Engineering student at UTN Rosario, Argentina, open to a first junior role. I build software and run it on my own servers.',
  skip: 'Skip to content',
  nav: { projects: 'Projects', skills: 'Skills & education', contact: 'Contact', menu: 'Sections', lang: 'Language' },
  hero: {
    headline: ['I build', 'software and run it on my own', 'servers.'],
    name: 'Tiziano Messina',
    ageUnit: 'years old',
    role: 'Information Systems Engineering student, 4th year at UTN Rosario, Argentina',
    status: 'Open to my first junior role',
    facts: 'Graduating 2027 · Remote, hybrid or on-site in Rosario · English B2',
    primary: 'See projects',
    copy: 'Copy email',
    copied: 'Copied',
    photoAlt: 'Photo of Tiziano Messina',
  },
  showcase: {
    label: 'The two projects',
    items: [
      {
        id: 'agroapp',
        name: 'AgroApp',
        caption: 'Full-stack web app, live at agroapp.dev',
        frame: 'agroapp.dev',
        tag: 'live',
        shot: img.agroapp,
        mobile: img.agroappMobile,
        alt: 'AgroApp home page: “El contratista que tu campo necesita, a un click”, with featured rural services priced per hectare.',
      },
      {
        id: 'homelab',
        name: 'Homelab',
        caption: '6 services running on a 2014 PC, outages included',
        frame: 'uptime-kuma',
        tag: '6 up · 0 down',
        shot: img.status,
        mobile: img.statusMobile,
        alt: 'Uptime Kuma: 6 monitors up, 0 down, above a log of real outages and recoveries.',
      },
    ],
  },
  projects: {
    heading: 'Projects',
    intro: 'Two things I built and still run.',
    agroapp: {
      name: 'AgroApp',
      summary: 'Connects agricultural producers with rural contractors, with services priced per hectare.',
      points: [
        'Contractors publish services; producers find nearby ones, request work and rate the job.',
        'A monorepo with a typed REST API, a web front end and one shared database schema.',
        'Unit, integration and Playwright end-to-end tests. The whole stack starts with one docker compose command.',
      ],
      credit: 'Team project for the DSW 2025 course at UTN Rosario, built with Jeremías Costantini.',
      links: [
        { label: 'Open agroapp.dev', href: links.agroappLive, primary: true },
        { label: 'API docs', href: links.agroappApi },
        { label: 'Source code', href: links.agroappRepo },
      ],
      visual: { ...img.agroappApi, mobile: img.agroappApiMobile, label: 'api.agroapp.dev/docs', alt: 'AgroApp API documentation in Swagger: version 2.0.0, JWT authentication, and auth endpoints such as POST /auth/login and GET /auth/me.' },
    },
    homelab: {
      name: 'Homelab',
      summary: 'My own infrastructure, on a recycled 2014 all-in-one with a Celeron J1800 and 4 GB of RAM.',
      points: [
        'Private DNS for the whole house, blocking 240,687 ad and tracking domains.',
        'HTTPS for every service through its own certificate authority. AgroApp runs behind it with no ports exposed.',
        'Alerts on my phone when something breaks, and every real outage is diagnosed and written up in the repo.',
      ],
      credit: 'Personal project, still growing.',
      outage: {
        heading: 'One outage, start to finish',
        steps: [
          ['Symptom', 'Every device on the home network timed out on DNS.'],
          ['Ruled out', 'A manual DNS setting on the client, the router’s client isolation (tcpdump showed the packets arriving) and Docker’s NAT rules.'],
          ['Cause', 'Pi-hole starts with listeningMode LOCAL, which silently drops queries it doesn’t see as local, including normal LAN traffic NAT-ed through Docker. The FTL log said so: “ignoring query from non-local network”.'],
          ['Fix', 'Switched to listeningMode ALL, then pinned it in the compose file so it survives recreating the container.'],
        ] as [string, string][],
      },
      servicesLabel: 'Services',
      states: { running: 'Running', next: 'Next', planned: 'Planned' },
      services,
      links: [
        { label: 'Read the full write-up (in Spanish)', href: links.homelabWriteup, primary: true },
        { label: 'Source code', href: links.homelabRepo },
      ],
      visuals: [
        { ...img.pihole, mobile: img.piholeMobile, label: 'pihole', tag: '240,687 blocked', alt: 'Pi-hole dashboard: 46,019 queries, 5,948 blocked, 240,687 domains on lists.' },
        { ...img.portainer, mobile: undefined, label: 'portainer', tag: '6 stacks', alt: 'Portainer stacks list: agroapp, caddy, pihole, portainer, samba and uptime-kuma.' },
      ],
    },
  },
  skills: {
    heading: 'Skills & education',
    intro: 'Grouped by where you can see them working.',
    groups: [
      { name: 'AgroApp', proof: 'Built a full-stack app with', items: ['TypeScript', 'React', 'Node.js + Express', 'Prisma + MySQL', 'Vite + Tailwind CSS', 'Playwright', 'Git'] },
      { name: 'Homelab', proof: 'Run my own servers with', items: ['Linux (Ubuntu Server)', 'Docker + Compose', 'DNS: Pi-hole, Unbound', 'Caddy', 'Uptime Kuma', 'Shell'] },
      { name: 'UTN Rosario', proof: 'Information Systems Engineering · 4th year · graduating 2027', items: ['Databases', 'Operating systems', 'Networks', 'Systems analysis & design', 'Object-oriented programming'] },
    ],
  },
  contact: {
    heading: 'Hiring a junior?',
    lead: 'I’m looking for my first role in software or infrastructure. Write me about a position, an interview or anything on this page.',
  },
  footer: { place: 'Rosario, Argentina', built: 'Built with Astro.' },
};

type Content = typeof en;

const es: Content = {
  htmlLang: 'es-AR',
  locale: 'es_AR',
  title: 'Tiziano Messina · Software e infraestructura',
  description:
    'Tiziano Messina, estudiante de 4.º año de Ingeniería en Sistemas de Información en la UTN Rosario, Argentina, buscando su primer trabajo junior. Desarrollo software y lo corro en mis propios servidores.',
  skip: 'Ir al contenido',
  nav: { projects: 'Proyectos', skills: 'Habilidades y formación', contact: 'Contacto', menu: 'Secciones', lang: 'Idioma' },
  hero: {
    headline: ['Desarrollo', 'software y lo corro en mis propios', 'servidores.'],
    name: 'Tiziano Messina',
    ageUnit: 'años',
    role: 'Estudiante de Ingeniería en Sistemas de Información, cursando 4.º año en la UTN Rosario, Argentina',
    status: 'Buscando mi primer trabajo junior',
    facts: 'Me recibo en 2027 · Remoto, híbrido o presencial en Rosario · Inglés B2',
    primary: 'Ver proyectos',
    copy: 'Copiar email',
    copied: 'Copiado',
    photoAlt: 'Foto de Tiziano Messina',
  },
  showcase: {
    label: 'Los dos proyectos',
    items: [
      {
        id: 'agroapp',
        name: 'AgroApp',
        caption: 'App web full-stack, en línea en agroapp.dev',
        frame: 'agroapp.dev',
        tag: 'en línea',
        shot: img.agroapp,
        mobile: img.agroappMobile,
        alt: 'Inicio de AgroApp: “El contratista que tu campo necesita, a un click”, con servicios rurales destacados y su precio por hectárea.',
      },
      {
        id: 'homelab',
        name: 'Homelab',
        caption: '6 servicios andando en una PC de 2014, caídas incluidas',
        frame: 'uptime-kuma',
        tag: '6 arriba · 0 caídos',
        shot: img.status,
        mobile: img.statusMobile,
        alt: 'Uptime Kuma: 6 monitores arriba, 0 caídos, sobre un log de caídas y recuperaciones reales.',
      },
    ],
  },
  projects: {
    heading: 'Proyectos',
    intro: 'Dos cosas que construí y siguen andando.',
    agroapp: {
      name: 'AgroApp',
      summary: 'Conecta productores agropecuarios con contratistas rurales, con servicios a precio por hectárea.',
      points: [
        'Los contratistas publican servicios; los productores buscan los cercanos, solicitan trabajos y los valoran.',
        'Un monorepo con una API REST tipada, un front end web y un único esquema de base de datos compartido.',
        'Tests unitarios, de integración y end-to-end con Playwright. Todo el stack levanta con un solo docker compose.',
      ],
      credit: 'Proyecto en equipo para la materia DSW 2025 en la UTN Rosario, junto a Jeremías Costantini.',
      links: [
        { label: 'Abrir agroapp.dev', href: links.agroappLive, primary: true },
        { label: 'Docs de la API', href: links.agroappApi },
        { label: 'Código fuente', href: links.agroappRepo },
      ],
      visual: { ...img.agroappApi, mobile: img.agroappApiMobile, label: 'api.agroapp.dev/docs', alt: 'Documentación de la API de AgroApp en Swagger: versión 2.0.0, autenticación con JWT y endpoints como POST /auth/login y GET /auth/me.' },
    },
    homelab: {
      name: 'Homelab',
      summary: 'Mi propia infraestructura, en una all-in-one reciclada de 2014 con un Celeron J1800 y 4 GB de RAM.',
      points: [
        'DNS privado para toda la casa, bloqueando 240.687 dominios de publicidad y rastreo.',
        'HTTPS para cada servicio con una autoridad certificante propia. AgroApp corre detrás, sin puertos expuestos.',
        'Alertas en el celular cuando algo se rompe, y cada caída real queda diagnosticada y documentada en el repo.',
      ],
      credit: 'Proyecto personal, en construcción.',
      outage: {
        heading: 'Una caída, de principio a fin',
        steps: [
          ['Síntoma', 'Todos los dispositivos de la red de casa daban timeout en el DNS.'],
          ['Descartado', 'Un DNS manual en el cliente, el aislamiento de clientes del router (tcpdump mostraba que los paquetes llegaban) y las reglas NAT de Docker.'],
          ['Causa', 'Pi-hole arranca con listeningMode LOCAL, que descarta en silencio las consultas que no considera locales, incluido el tráfico normal de la LAN que pasa por el NAT de Docker. El log de FTL lo decía: “ignoring query from non-local network”.'],
          ['Fix', 'Pasé a listeningMode ALL y lo dejé fijado en el compose para que sobreviva a recrear el container.'],
        ] as [string, string][],
      },
      servicesLabel: 'Servicios',
      states: { running: 'Andando', next: 'Próximo', planned: 'Planeado' },
      services,
      links: [
        { label: 'Leer el caso completo', href: links.homelabWriteup, primary: true },
        { label: 'Código fuente', href: links.homelabRepo },
      ],
      visuals: [
        { ...img.pihole, mobile: img.piholeMobile, label: 'pihole', tag: '240.687 bloqueados', alt: 'Panel de Pi-hole: 46.019 consultas, 5.948 bloqueadas, 240.687 dominios en listas.' },
        { ...img.portainer, mobile: undefined, label: 'portainer', tag: '6 stacks', alt: 'Lista de stacks en Portainer: agroapp, caddy, pihole, portainer, samba y uptime-kuma.' },
      ],
    },
  },
  skills: {
    heading: 'Habilidades y formación',
    intro: 'Agrupadas según dónde las podés ver funcionando.',
    groups: [
      { name: 'AgroApp', proof: 'Hice una app full-stack con', items: ['TypeScript', 'React', 'Node.js + Express', 'Prisma + MySQL', 'Vite + Tailwind CSS', 'Playwright', 'Git'] },
      { name: 'Homelab', proof: 'Corro mis propios servidores con', items: ['Linux (Ubuntu Server)', 'Docker + Compose', 'DNS: Pi-hole, Unbound', 'Caddy', 'Uptime Kuma', 'Shell'] },
      { name: 'UTN Rosario', proof: 'Ingeniería en Sistemas de Información · 4.º año · me recibo en 2027', items: ['Bases de datos', 'Sistemas operativos', 'Redes', 'Análisis y diseño de sistemas', 'Programación orientada a objetos'] },
    ],
  },
  contact: {
    heading: '¿Buscás un perfil junior?',
    lead: 'Busco mi primer trabajo en software o infraestructura. Escribime por un puesto, una entrevista o cualquier cosa de esta página.',
  },
  footer: { place: 'Rosario, Argentina', built: 'Hecho con Astro.' },
};

export const content: Record<Lang, Content> = { en, es };
