---
target: homepage
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 0
target_identity: "file:C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
target_fingerprint: "sha256:1bdbb64a619c80570a7e38806c9354834652e13974b933850ccd2bf43a407033"
target_path: "C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
timestamp: 2026-09-28T16-05-22Z
slug: src-components-page-astro
---
Method: dual-agent (A: design review · B: detector + browser). Owner asked for no fix suggestions; problems only.

Score 24/32 (7 and 10 n/a, like previous runs; reviewer also scored H7 at 3 = 27/36). H1 3, H2 3, H3 3, H4 3, H5 3, H6 3, H8 3, H9 3.

Specificity: content authored (headline icons, honest frame tags, running/next/planned list, outage card, "Hiring a junior?"); composition close to a Vercel-style launch template, gold is the main formal differentiator.
Detector: source 0. dist 43 (40 cramped-padding false positives, 2 overused-font Geist intentional, 1 #0003 lab-icon shadow advisory). Browser detect.js: none on EN/ES desktop+mobile. No overflow, alts ok, headings ok, anchors ok, no console errors, details toggles, OG/twitter meta present, og PNGs 200. Desktop lang pills 44x32 (hit area extended by ::after).

Weakest points:
- [P2] AgroApp showcase frame's Spanish marketing headline competes with the H1 on first scroll of the EN page.
- [P2] Projects introduced twice (showcase then Projects section).
- [P2] Portrait soft (460px source upscaled) and casual next to crisp screenshots; OG card has no project proof.
- [P2] Homelab visually weaker than its content on desktop: plate ends halfway, text column reads as appendix, no primary action.
- [P3] Individual contribution to AgroApp unknowable to a screener.

Minor: outage toggle label doesn't change when open; EN/ES Homelab links in opposite order; "DSW 2025" and "B2" unexplained; mobile Uptime Kuma crop cut mid-column and small; dangling "·" at skill line ends on mobile; mobile nav glyph alone; surface brief still says blue accent while DESIGN.md/CSS use gold.
