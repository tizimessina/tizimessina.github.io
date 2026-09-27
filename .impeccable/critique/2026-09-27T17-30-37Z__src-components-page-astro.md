---
target: homepage
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
target_fingerprint: "sha256:a5bbb588a08a49aff232851c021f9cf8f93f533844fa0b340233dfe654c599e3"
target_path: "C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
timestamp: 2026-09-27T17-30-37Z
slug: src-components-page-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Deep-link arrival gives no feedback |
| 2 | Match System / Real World | 4 | — |
| 3 | User Control and Freedom | 3 | — |
| 4 | Consistency and Standards | 3 | Contact twice with two treatments; AgroApp/Homelab link rows wrap differently |
| 5 | Error Prevention | 3 | mailto only, no copy |
| 6 | Recognition Rather Than Recall | 4 | — |
| 7 | Flexibility and Efficiency | n/a | Persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | AgroApp shown twice; raw showcase crops |
| 9 | Error Recovery | 3 | — |
| 10 | Help and Documentation | n/a | Personal calling card |
| **Total** | | **26/32** | **Good (81%)** |

## Design Specificity Verdict
Content specific (real Kuma Down events, 240,687, Next/Planned services, headline icons, gold, rioplatense ES); container is the familiar developer launch template. Clears the generic-portfolio bar on content. Detector: CLI 0; browser overlay clean on / and /es/.
Verified: phone outage proof, write-up link resolves, matched showcase scale, no repeated stack, UTN row, link hierarchy (AgroApp links wrap under button at 1280), skills alignment, footer, compact lang switch. Language-switch hash works but global smooth scroll + reveal make arrival unreliable.

## Priority Issues
1. [P1] Differentiator is off-page and in Spanish; "every real outage" is stronger than the linked setup-troubleshooting section supports. Fix: short on-page "One outage" block (symptom/cause/how found/fix from README facts), "(in Spanish)" on EN button, soften "every". → /impeccable clarify
2. [P1] Showcase crops cut through content (AgroApp right panel mid-word; Kuma title touches edge, Message column cut, ~8px log). Fix: self-contained 16:10 crops with padding. → /impeccable layout
3. [P2] AgroApp shown twice (detail plate repeats showcase). Fix: replace detail plate with API docs screenshot. → /impeccable distill
4. [P2] Email behind two hops. Fix: email as a hero text link replacing the ghost Contact, plus a copy button. → /impeccable clarify
5. [P3] Deep-link arrival: drop global smooth scroll; skip reveals when location.hash is set. → /impeccable harden

## Persona Red Flags
- Jordan: Unbound/Caddy/certificate authority unexplained; Spanish UI in AgroApp shots on EN page; dot vs dashed ring unexplained.
- Riley: mailto only; ES mobile frame label truncated; deep link starts with hidden articles; compact lang switch has no full-name label.
- Casey: ~7 screens long; LinkedIn/GitHub wrap to own row.
- Technical recruiter: great 10-second pass; AgroApp repo name reads as coursework; infra proof requires Spanish; same AgroApp screen twice; dev vs infra routing left open.

## Minor Observations
- text-wrap: pretty causes odd early breaks.
- Only ~80–120px of the showcase shows above the fold at 1280x800.
- Mobile avatar zoom could be tuned.
- "Built with Astro." could link to the site repo.
- EN "docs are in Spanish" note is far from the button it affects.

## Questions to Consider
- Why does the page make a recruiter leave, and switch language, to see the outage debugging?
- Should the dark showcase simply be the Projects section?
- Why is "a 2014 Celeron with 4 GB serving a live app" buried in a summary line?
