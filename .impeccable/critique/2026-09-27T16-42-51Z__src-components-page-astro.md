---
target: homepage
total_score: 23
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
target_fingerprint: "sha256:4c933637cd3ef1d4f179c9cf40e3df72dd0ce5b33bb537c8e305e961f6cf3d11"
target_path: "C:\\Users\\Tiziano Messina\\Desktop\\projects\\tiziano\\personal-website\\src\\components\\Page.astro"
timestamp: 2026-09-27T16-42-51Z
slug: src-components-page-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Clear language + availability; no active-section state in nav |
| 2 | Match System / Real World | 3 | homelab, Unbound, Caddy, certificate authority, DSW 2025 unexplained |
| 3 | User Control and Freedom | 3 | EN/ES switch resets scroll to top |
| 4 | Consistency and Standards | 3 | "Contact" vs "Contact me"; caveat inside a primary button label |
| 5 | Error Prevention | 3 | Email is mailto-only, no copy |
| 6 | Recognition Rather Than Recall | 2 | Under 480px the sticky nav has no Contact and no section links |
| 7 | Flexibility and Efficiency | n/a | Persuade surface |
| 8 | Aesthetic and Minimalist Design | 3 | Projects met three times; skills repeat stack tags; thin Education band |
| 9 | Error Recovery | 3 | Mailto dead end only |
| 10 | Help and Documentation | n/a | Personal calling card |
| **Total** | | **23/32** | **Good (72%)** |

## Design Specificity Verdict
Content authored for the owner (headline icons, 2014 Celeron specs, "outages included" over a real log, 240,687 domains, rioplatense ES); visual system still category-generic (Geist, pill buttons, macOS traffic-light frames, dark stage bands; gold reads as generic amber). ~6/10. Detector: CLI 0 findings; browser overlay "No anti-patterns found" on / and /es/.
Previous fixes verified: counts consistent (6), ES overflow gone down to 320px, single showcase, identity block present (name still small vs slogan), homelab trimmed, page ends on "Hiring a junior?".

## Priority Issues
1. [P1] Contact not reachable on phones: below 30rem the sticky nav hides Contact (and section links), email ~5,000px down. Fix: keep a compact Contact/mail button in the nav at all widths. → /impeccable adapt
2. [P1] Projects section opens on a deficit ("No professional experience yet, so these are my experience" — also ungrammatical). Fix: lead with the claim; move or drop the note. → /impeccable clarify
3. [P2] Strongest proof least legible: Uptime Kuma frame bottom-aligned, short, unreadable log, black void above it; homelab Pi-hole/Portainer stack decorative on phones. Fix: legible homelab crop matched to AgroApp frame height/top; one legible crop on mobile. → /impeccable layout
4. [P2] Back half thin and repetitive: skills re-list stack tags, UTN row has 2 items, Education is a full band for hero info. Fix: merge Education into a compact row/strip, drop it from nav; reconsider Skills. → /impeccable distill
5. [P3] Missing screening facts: graduation date, work mode, English level (only with confirmed facts). → /impeccable clarify

## Persona Red Flags
- Jordan: jargon unglossed; Spanish marketing headline inside the AgroApp shot is the loudest text on mobile EN.
- Riley: language switch resets scroll; mailto only; stranded rack icon at narrow widths in ES; "Código fuente · docs en español" redundant on ES.
- Casey: no Contact/menu in sticky nav; unreadable homelab screenshots; 9-row services card; homelab below the fold.
- Technical recruiter: no stack keywords in first viewport; evidence section opens with "no experience"; vague graduation date; no "full profile on LinkedIn" cue.

## Minor Observations
- Full-body vacation photo makes the face small on desktop (framing, not resolution).
- macOS traffic-light dots are a generic trope.
- Showcase link accessible name concatenates long alt + name + caption.
- "Next" state label crowds the right column dot in the services card.

## Questions to Consider
- Why is the outage log, the most distinctive asset, the least legible screen?
- Do two projects need five sections and a nav?
- What would this look like without borrowing Vercel's clothes?
