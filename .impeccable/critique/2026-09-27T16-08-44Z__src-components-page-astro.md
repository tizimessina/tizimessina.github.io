---
target: homepage
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
target_fingerprint: "sha256:2aa971e81d75963ac703f7fb4c7842a2f5ad2bc4aec6cf7fdfa6fe2d50c0b5d3"
target_path: "C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
timestamp: 2026-09-27T16-08-44Z
slug: src-components-page-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active tab/language/service states clear; pulsing LED implies "live" but nothing is live |
| 2 | Match System / Real World | 3 | Plain first-person copy; jargon leaks (systemd host, DSW 2025, internal CA, Unbound) |
| 3 | User Control and Freedom | 3 | Anchor nav + language switch; mobile hides section links with no menu |
| 4 | Consistency and Standards | 2 | "7 services running" vs 6 monitors / 6 stacks; icons look like links but aren't; each project introduced twice |
| 5 | Error Prevention | 3 | Email visible as text, not only mailto |
| 6 | Recognition Rather Than Recall | 3 | Skills show where they're used; Homelab tab easy to miss |
| 7 | Flexibility and Efficiency | n/a | Single-page Persuade surface |
| 8 | Aesthetic and Minimalist Design | 2 | Homelab article repeats the same tools 3–4 times; stage band duplicates Projects |
| 9 | Error Recovery | 3 | Little can fail; mailto has a visible fallback |
| 10 | Help and Documentation | n/a | Personal calling card |
| **Total** | | **22/32** | **Good (69%, low end)** |

## Design Specificity Verdict
Content is specific (sprout + rack icons, real screens, running/next/planned services, skill→project rows, honest no-experience note, Sol de Mayo gold, rioplatense copy); the frame is generic (sticky translucent pill nav, headline beside rounded photo, black tabbed product band, mirrored rows, giant "Let's talk." band). Strip icons and gold and it is a Vercel/Linear launch template, still near the "Apple-like" look the owner rejected.
Deterministic scan: CLI 0 findings (Page.astro, Base.astro). Browser detect.js on / and /es/: 1 finding, side-tab on .tab::after — false positive (full-width bottom underline); config ignore is file-scoped and does not apply to the browser overlay.

## Priority Issues
1. [P1] Homelab evidence contradicts itself: "7 services running" (counts "systemd host") vs 6 monitors/6 stacks; Uptime Kuma shot shows AgroApp 11.01% and Samba 24.74% with no framing. Fix: count 6, drop/relabel host; recrop to Quick Stats or caption the outages as documented fixes. → /impeccable clarify
2. [P1] Spanish mobile nav overflows at 375px (Contacto ends at x=379; EN margin shrinks to 5px) — regression from the 44px target change. Fix: collapse name or language switch on narrow widths, re-verify scrollWidth in both languages. → /impeccable adapt
3. [P2] Stage band duplicates Projects and hides Homelab behind an idle grey tab; stage shot ~175px tall on mobile. Fix: one composed launch shot with both projects, or drop the band; crop to legible detail on mobile. → /impeccable layout
4. [P2] Identity hierarchy for screeners: name/role/status sit in a grey sub-line under a slogan; no availability stated. Fix: name + role + status in ink near the headline; honest availability line only if true. → /impeccable typeset
5. [P3] Homelab article overloaded (tools repeated), 13 flat skill rows, page ends on "No professional experience yet" right before contact. Fix: cut repeated tags/points, group skills, move the note after projects. → /impeccable distill

## Persona Red Flags
- Jordan: headline icons look clickable but aren't; "Homelab", "DSW 2025" unexplained; idle grey tab doesn't read as clickable.
- Riley: conflicting service counts; AgroApp 11.01% visible; ES mobile horizontal scroll; stack tags look like chips; language switch loses scroll position.
- Casey: no project visible until ~830px (photo is ~515px tall on mobile); no section menu; stage shot unreadable; Contacto button is the overflowing element.
- Technical recruiter (30 portfolios): wants name, degree, graduation, availability, stack, repo in 5s; gets slogan + vacation photo; LinkedIn/GitHub only at the very bottom.

## Minor Observations
- Stack tags ~12.5px mono slate: hard to read, low value.
- ES sub-line "21 años, estudiante de 4.º año": two "año" close together.
- Contact lead is passive; "Let's talk." is stock copy.
- Two gold Contact CTAs visible at once on mobile.
- Decorative pulsing LED is a mild white lie on an honesty-first page.
- "Hosted on GitHub Pages" invites "why not self-hosted?" from peers.

## Questions to Consider
- Why is the most honest artifact (documented incidents / homelab status) a screenshot to apologize for instead of the hero?
- What does the tabbed launch-page convention earn here besides looking like Apple/Vercel?
- What if the page ended on what Tiziano is looking for next instead of "no experience yet"?
