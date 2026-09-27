# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (user's choice), deployed to GitHub Pages (confirmed). The build must stay fully static: no server-side rendering or server endpoints.

## Owner

Tiziano Messina, born 2 May 2005 (21 as of September 2026). Studying Systems Engineering (Ingeniería en Sistemas de Información) at UTN Rosario (Universidad Tecnológica Nacional, Facultad Regional Rosario), finishing 4th year as of September 2026: an advanced student close to graduation. Based in Rosario, Santa Fe, Argentina.

## Users

A mixed audience arriving from a link, a CV, or a search: people who want to know who Tiziano is and how to reach Tiziano. They typically include recruiters and employers looking at a Systems Engineering student / early-career candidate, plus peers and contacts. Their job: quickly understand who Tiziano is, what Tiziano has built and can do, and get in touch.

## Product Purpose

Tiziano's personal website, working as a calling card. It presents who Tiziano is, the projects, CV, and skills in one place, and makes contact easy. Success means a visitor leaves knowing who Tiziano is and what Tiziano can do, and can make contact without friction.

## Positioning

It is a first-hand, owned presence that Tiziano controls, rather than a profile on someone else's platform. Tiziano presents as a Systems Engineering student working across both software and infrastructure, and does not narrow to one track. What sets Tiziano apart: things get built, run on hardware Tiziano owns, and documented honestly. AgroApp (full-stack, team-built) is deployed on Tiziano's own homelab, a recycled 2014 PC, and the troubleshooting behind it is written up rather than hidden. The homelab README names Infrastructure / Sysadmin / Cloud Engineering (with AIOps as an extra interest) as a direction; the site may mention it but must not make it the headline.

## Operating Context

- Visitors usually arrive from outside: a shared link, a job application, a LinkedIn or GitHub profile.
- Contact happens off-site through email (tizilmessina@icloud.com), LinkedIn (https://www.linkedin.com/in/tizianomessina/), and GitHub (https://github.com/tizimessina). There is no contact form.
- The content is bilingual: English and Spanish (Argentina), with a way to switch language.

## Capabilities and Constraints

- Sections backed by real content: projects, CV / experience, skills, contact links.
- Main projects, both public on GitHub:
  - **AgroApp** (https://github.com/JereC4/TP-DSW-2025-3k03-Messina-Costantini-Enrico): a platform that connects agricultural producers with rural contractors. A 2-person university team project (DSW 2025, 3k03) with Jeremías Costantini. Credit it as a team project without splitting who did what. Stack: pnpm + Turborepo monorepo, Node, Express 5, TypeScript, Prisma, MySQL, React 18, Vite, Tailwind, Framer Motion; Docker, Playwright tests. Live at https://agroapp.dev, API docs at https://api.agroapp.dev/docs.
  - **Homelab** (https://github.com/tizimessina/homelab): self-hosted infrastructure on a recycled 2014 Lenovo all-in-one (Celeron J1800, 4 GB RAM) running Ubuntu Server and Docker Compose. It runs Pi-hole + Unbound DNS, a Caddy reverse proxy with an internal CA, Uptime Kuma monitoring with Telegram alerts, Samba, and Portainer, and hosts AgroApp behind the proxy. Everything is defined as code, and the real troubleshooting is documented. Work in progress; backups, Gitea, and WireGuard are planned.
- No blog or writing section for now.
- No photo or media gallery for now.
- Every piece of content must exist in both English and Spanish (Argentina, i.e. rioplatense usage such as voseo). Language is a user choice, not a separate site.
- Age is a fact that goes stale. If it appears on the site, compute it from the birth date (2005-05-02) at build time or in the browser, never hard-code "21".
- No work experience yet and no CV document. The site must not invent roles or imply employment; education (in progress) is the only history section.
- Skills, confirmed by Tiziano and backed by the repos: Docker / Docker Compose, Linux (Ubuntu Server), React, TypeScript, MySQL, OOP. Also evidenced in the repos: Node.js, Express, Prisma, Vite, Tailwind, Playwright, Git, shell, DNS (Pi-hole/Unbound), Caddy, monitoring (Uptime Kuma). The full list lives on LinkedIn.
- Availability (confirmed 2026-09-27): open to a first junior role. The site may say so plainly (EN "Open to my first junior role" / ES equivalent).
- Screening facts (confirmed 2026-09-27): expected graduation 2027; open to remote, on-site in Rosario, or hybrid work (not relocation); English level B2 (upper-intermediate).
- UTN subjects taken (confirmed 2026-09-27): Databases, Operating systems, Networks, Systems analysis & design, plus object-oriented programming.
- Featured outage write-up (confirmed 2026-09-27): the Pi-hole DNS troubleshooting in the homelab repo (pihole/README.md, "Gotchas / troubleshooting").
- Confirmed 2026-09-27: every real homelab outage is diagnosed and written up in the repo (the "every" claim is literally true and may stay).
- Open: any future experience or CV.

## Evidence on Hand

- Confirmed: name, degree program, university, and location (see Owner).
- Two projects and a skills list are on hand; there is no CV. None are in the repository yet; full project details are still to come from Tiziano. The two main projects are Agroapp and a self-hosted homelab, both published on GitHub.
- Real screenshots in the homelab repo (`docs/img/`: uptime-kuma, pihole, portainer, agroapp) are approved for reuse.
- GitHub profile name: "Tiziano Leonel Messina".
- Not on hand, and not to be fabricated: testimonials, employer or client logos, metrics, awards, press, blog posts, photos.

## Product Principles

1. **Who and how to reach, first.** A visitor should know who Tiziano is and how to make contact before they have to scroll or dig.
2. **Real over impressive.** Show only the projects and experience that actually exist. An early career told honestly beats padded claims.
3. **Two languages, both first-class.** Spanish (Argentina) is not a machine-translated afterthought; both versions carry the same content and care.
4. **Small and easy to maintain.** Projects and CV should be simple to update as a student's career changes.

## Accessibility & Inclusion

No product-specific requirement stated. Language switching must be accessible and correctly marked (`lang` attributes, `hreflang`).
