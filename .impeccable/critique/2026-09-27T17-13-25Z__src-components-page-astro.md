---
target: homepage
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
target_fingerprint: "sha256:f895213b9c3a605eb0256311da1c6dfa5b596ac45f570f6da96012f0e9ce77b6"
target_path: "C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
timestamp: 2026-09-27T17-13-25Z
slug: src-components-page-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | live/up tags good; no current-section state in nav |
| 2 | Match System / Real World | 3 | Unbound, certificate authority, "stacks" opaque to recruiters |
| 3 | User Control and Freedom | 3 | Language switch resets scroll to top |
| 4 | Consistency and Standards | 3 | "Source code" is a text link on AgroApp but a gold button on Homelab; showcase screenshots at different scales |
| 5 | Error Prevention | 3 | mailto-only email |
| 6 | Recognition Rather Than Recall | 4 | — |
| 7 | Flexibility and Efficiency | n/a | Persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | Stack repeated in project points and skills pills; thin UTN row |
| 9 | Error Recovery | 3 | Visible email is the fallback |
| 10 | Help and Documentation | n/a | Personal calling card |
| **Total** | | **25/32** | **Good (78%)** |

## Design Specificity Verdict
Content only this owner could write (Celeron J1800, 240,687 blocked, outages included, named teammate, Hiring a junior?); form is the familiar Geist/stage-band/pill launch idiom, owned by the sun-gold accent and the headline app icons. Detector: CLI 0 findings; browser overlay clean on / and /es/.
Previous fixes verified: contact on phones, projects intro, recruiter facts line, Mac dots removed — fixed; homelab proof mostly fixed (Portainer layer decorative; phone showcase crop lacks the outage log); back half partly fixed (UTN row thin, stack still repeated).

## Priority Issues
1. [P1] Main differentiator claimed but not linked: "every real outage is written up in the repo" has no direct link; phone showcase crop shows no outage rows. Fix: link one real incident write-up next to the homelab repo; include Down/Up rows in the phone crop. → /impeccable clarify + /impeccable layout
2. [P2] Showcase frames at mismatched scales (AgroApp ~33%, Uptime ~76%). Fix: recrop AgroApp showcase to ~1000px wide so densities match. → /impeccable layout
3. [P2] Back half repeats itself; UTN row has one pill. Fix: drop stack names from AgroApp point 2 (pills hold them) and only confirmed coursework in UTN row, or fold education into hero facts. → /impeccable distill
4. [P2] Link hierarchy inconsistent; AgroApp "Source code" wraps at 1280. Fix: one rule (primary = live thing, source = text link); keep AgroApp links on one row. → /impeccable polish
5. [P3] Language switch loses place. Fix: carry the current section hash to the other language. → /impeccable harden

## Persona Red Flags
- Jordan: Unbound / certificate authority / stacks unexplained; education easy to miss inside "Skills & education".
- Riley: scroll reset on language switch; mailto only; decorative Portainer layer; sticky homelab plate leaves empty column beside long card; footer rule wider than content column.
- Casey: homelab visual after the button on phones; "outages included" unproven on phone; AgroApp detail text ~7px on phones.
- Technical recruiter: no one-click outage write-up; individual AgroApp contribution unclear (team-credit constraint); thin academics row.

## Minor Observations
- .skills__row dt stretches, proof line drifts from the name (align-content: start).
- ES "Skills y formación" acceptable anglicism; "Habilidades y formación" more consistent.
- The number 6 carries most of the homelab proof.

## Questions to Consider
- What if one real incident (symptom → diagnosis → fix) had its own short section?
- Would Projects → Contact, with education in the hero facts, be stronger?
- Could AgroApp link to the owner's own commits/PRs to show contribution without splitting credit?
