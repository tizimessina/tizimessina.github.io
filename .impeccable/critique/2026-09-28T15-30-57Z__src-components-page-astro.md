---
target: homepage
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
target_fingerprint: "sha256:4f89c7ae3a22e9840f11a67538cb7f663078dddbb4f09550e14dbb149d6dad02"
target_path: "C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
timestamp: 2026-09-28T15-30-57Z
slug: src-components-page-astro
---
Method: dual-agent (A: design review · B: detector + browser)

Score 24/32 (7 and 10 n/a). H1 3, H2 3, H3 3, H4 3, H5 3, H6 4, H8 2, H9 3.

Specificity: authored copy/content (headline icons, outage card, "Hiring a junior?"), generic launch-page shell (pills, gold nav pill, dark stage frames).
Detector: source clean (0). dist: 40 cramped-padding (false positives, static scan without layout), 2 overused-font (Geist, intentional), 1 #0003 shadow alpha (trivial). Browser detect.js: no anti-patterns on EN/ES desktop+mobile. No overflow, alts ok, heading outline ok, no console errors. Tap targets: mobile nav mark 24x44, lang link 44x34; desktop nav links 38px tall, lang pills 44x32.

Priority issues:
- [P1] Homelab article is a wall (summary + 3 points + 9-item services card + 4-step outage + 2 CTAs, ~1300px beside a sticky plate). distill, layout.
- [P1] Hero photo reads as landscape, face ~40px, 460px source upscaled. adapt/polish (crop tighter, no swap).
- [P2] Gold spent on 4 filled buttons; EN Homelab primary is "Read the full write-up (in Spanish)". ES outage uses English "Fix". quieter, clarify.
- [P2] og:image is a WebP of AgroApp's Spanish hero, no width/height/alt/twitter:card; LinkedIn previews fragile. harden.
- [P3] Mobile showcase leads with red "Down" rows next to Agroapp with no context; small tap targets in mobile nav. clarify, adapt.

Minor: services Next/Planned labels misaligned in 2-col grid; nav label "Skills & education" long; hero facts line quietest text; UTN proof line repeats hero facts; hard-coded "6 services"/"6 up" strings not derived; copy fallback silently opens mailto; footer year build-time.
