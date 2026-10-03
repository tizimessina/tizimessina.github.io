---
name: Tiziano Messina
description: A personal site that reads like a well-made product launch, with real screens shown on dark stages.
colors:
  accent: "#f5b000"
  accent-hover: "#ffc629"
  bg: "#f5f5f4"
  surface: "#ffffff"
  tint: "#ebebe9"
  ink: "#0a0a0b"
  ink-2: "#52525b"
  line: "#deded9"
  rule-tint: "#d4d4d0"
  stage: "#0a0a0b"
  stage-2: "#18181b"
  stage-line: "rgb(255 255 255 / 0.12)"
  on-stage: "#f4f4f5"
  on-stage-2: "#a1a1aa"
  frame-bar: "#111113"
  agro-green: "#2f6b46"
typography:
  display:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 0.9rem + 4.2vw, 4.75rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  display-contact:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1rem + 7vw, 6.5rem)"
    fontWeight: 650
    lineHeight: 0.95
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.2rem + 2.8vw, 3.5rem)"
    fontWeight: 640
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.2vw, 3rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  showcase-name:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1rem + 1.2vw, 2rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 640
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'ss01'"
  ui:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 560
  button:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 560
  caption:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
  card-title:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 640
    letterSpacing: "-0.01em"
  status:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
  item:
    fontFamily: "'Geist Variable', 'Geist', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    letterSpacing: "-0.01em"
  label-mono:
    fontFamily: "'Geist Mono Variable', 'Geist Mono', ui-monospace, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
rounded:
  bullet: "2px"
  mark: "7px"
  frame: "14px"
  plate: "22px"
  icon: "0.2em"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
  nav-h: "4rem"
  wrap: "76rem"
  hit: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.35rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-light:
    backgroundColor: "{colors.on-stage}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.35rem"
    height: "3rem"
  button-outline-light:
    textColor: "{colors.on-stage}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 1.35rem"
    height: "3rem"
  button-sm:
    typography: "{typography.ui}"
    rounded: "{rounded.pill}"
    padding: "0 1.05rem"
    height: "{spacing.hit}"
  email-copy:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "{spacing.hit}"
  email-copy-dark:
    textColor: "{colors.on-stage}"
    rounded: "{rounded.pill}"
    size: "{spacing.hit}"
  headline-icon-agro:
    backgroundColor: "{colors.agro-green}"
    textColor: "{colors.surface}"
    rounded: "{rounded.icon}"
    size: "0.8em"
  headline-icon-lab:
    backgroundColor: "{colors.stage-2}"
    textColor: "{colors.on-stage}"
    rounded: "{rounded.icon}"
    size: "0.8em"
  hero-photo:
    rounded: "{rounded.plate}"
    width: "22rem"
  hero-avatar:
    rounded: "{rounded.pill}"
    size: "5.5rem"
  hero-name:
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
  hero-facts:
    textColor: "{colors.ink}"
  hero-status:
    textColor: "{colors.ink}"
    typography: "{typography.status}"
  status-dot:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    size: "0.55rem"
  lang-switch:
    backgroundColor: "{colors.tint}"
    rounded: "{rounded.pill}"
    padding: "3px"
  lang-switch-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  lang-switch-compact:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    width: "{spacing.hit}"
    height: "{spacing.hit}"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0 0.8rem"
    height: "{spacing.hit}"
  showcase-name:
    textColor: "{colors.on-stage}"
    typography: "{typography.showcase-name}"
  showcase-caption:
    textColor: "{colors.on-stage-2}"
    typography: "{typography.ui}"
  frame:
    backgroundColor: "{colors.stage-2}"
    rounded: "{rounded.frame}"
  frame-bar:
    backgroundColor: "{colors.frame-bar}"
    height: "1.9rem"
    padding: "0 0.8rem"
  frame-label:
    textColor: "{colors.on-stage-2}"
    typography: "{typography.label-mono}"
  frame-tag:
    textColor: "{colors.on-stage}"
    typography: "{typography.label-mono}"
  frame-tag-dot:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    size: "0.4rem"
  plate:
    backgroundColor: "{colors.stage}"
    rounded: "{rounded.plate}"
    padding: "clamp(1rem, 3vw, 2.25rem)"
  services:
    textColor: "{colors.ink-2}"
    padding: "1.1rem 0 0"
  outage-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.frame}"
    padding: "1rem 1.1rem"
  outage-title:
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
  outage-line:
    textColor: "{colors.ink-2}"
  outage-toggle:
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
  outage-step-term:
    textColor: "{colors.ink}"
  outage-step-detail:
    textColor: "{colors.ink-2}"
  skill-item:
    textColor: "{colors.ink}"
    typography: "{typography.item}"
  nav:
    backgroundColor: "rgb(245 245 244 / 0.82)"
    height: "{spacing.nav-h}"
---

# Design System: Tiziano Messina

## Overview

**Creative North Star: "The Launch Page"**

The site is a product launch where the product is Tiziano's work. A light, cool near-white page carries near-black ink and a large, tight first-person display, set beside a real photo of Tiziano and followed by a short identity block: Tiziano's name and age, the role, an availability line and one line of practical facts (graduation year, work mode, English level). Wherever a real screenshot appears, the page drops into a near-black stage band or plate so the screen glows like a product shot. One warm sun-gold (the Sol de Mayo) does all the acting: it marks what can be pressed, what is selected and what is live, and nothing else. Gold with ink text, rather than a cool electric blue, keeps the page from reading like a generic tech-company launch.

Density is launch-page density: big headings, short scannable rows, generous section padding, and real screens and a real photo as the imagery. Structure comes from bands (light page, grey tint band, dark stage and contact bands) rather than from boxes. The dark stage under the hero shows both projects at once as a showcase, each screen a door into its project article. Motion is sparse and deliberate: a small lift on the showcase frames on hover, a single reveal on each of the two project articles (skipped when the page opens on a hash), smooth scrolling only when an in-page anchor is clicked, and a short cross-page view transition on the language switch. Shared as a link, the page previews as a card built from the same type, palette and photo.

The world refuses the manual or gimmick concept, long text blocks, grids of identical cards, and neon hacker styling.

**Key Characteristics:**
- Light cool page, near-black ink, dark stages only where screens are shown.
- One sun-gold accent with ink text, restricted to actions, selection, link underlines, the showcase arrows, live-status marks and the copied state of the email copy button.
- Geist Variable for everything, with a large, tight, negative-tracked display; Geist Mono only for small technical metadata in the browser-frame bar (frame labels and frame tags).
- Real screenshots in a softly rounded browser frame with a deep, soft drop shadow; a real 4:5 portrait beside the hero headline that becomes a small circular avatar on phones.
- Two tilted, decorative app-icon marks set inline in the headline.
- Pill-shaped controls; plain text for status and keyword lists; rounded rectangles for frames, plates, the outage card and the portrait.
- Luminance-only glows on dark bands, never tinted.

## Colors

A near-neutral cool palette with a single warm sun-gold accent.

### Primary
- **Sol de Mayo Gold** (`accent`): the three primary buttons (nav "Contact", hero "See projects", AgroApp "Open agroapp.dev") with ink text, text selection (ink text), the 3px hover underline on text links and on the outage toggle, the contact email underline, the arrow after each showcase project name, the hero availability dot (with a soft 3px gold ring at 22% alpha), the dot in the nav mark, the two status LEDs in the Homelab icon, the 0.4rem dot leading each browser-frame tag and the border of an email copy button in its copied state. Hover on filled gold lightens to **Bright Gold** (`accent-hover`). Gold is never used for words.

### Tertiary
- **AgroApp Green** (`agro-green`): the background of the AgroApp app-icon mark in the hero headline only. It is AgroApp's own brand color, carried by its mark, not a site accent.

### Neutral
- **Cool Paper** (`bg`): the page background, the translucent nav (at 82% opacity) and the scrollbar track.
- **White Surface** (`surface`): the hero email copy button, the outage card, the active language segment and the sprout glyph on the AgroApp icon.
- **Tint Grey** (`tint`): the skills band, the language-switch track and nav link hover fill.
- **Near-Black Ink** (`ink`): headings, body text, the hero role, availability and facts lines, skill items, text on gold, the focus ring on light surfaces, bullets and running-service dots.
- **Slate Secondary** (`ink-2`): intros, the hero age, skill proof lines and the middle dots between skill items, point text, secondary metadata, idle nav and language links, service names and the Next and Planned labels, the outage summary line and step details, and dashed planned-service dots.
- **Hairline** (`line`): 1px borders on light surfaces, the nav bottom rule, the email copy button and outage card borders, the top rule over the services list, the rules between outage steps, the compact language pill border and the resting underline of links, the email and the outage toggle.
- **Tint Rule** (`rule-tint`): the 1px rules between skill rows, a darker grey that holds up on Tint Grey.
- **Stage Black** (`stage`): the hero stage band, the project plates, the contact band and the footer.
- **Stage Raised** (`stage-2`): the frame body on dark and the Homelab icon's ground.
- **Stage Hairline** (`stage-line`): 1px borders on dark (frame edge, frame bar rule, footer rule).
- **On-Stage Light** (`on-stage`) and **On-Stage Muted** (`on-stage-2`): primary and secondary text on dark bands (showcase names and captions, contact lead, footer); On-Stage Light is also the rack glyph on the Homelab icon and the browser-frame tag text, and On-Stage Muted the browser-frame label.
- **Frame Bar** (`frame-bar`): the browser-frame title bar.

### Named Rules
**The One Gold Rule.** Gold appears only on primary buttons, text selection, the hover underline of text links and the outage toggle, the contact email underline, the showcase arrows, the hero availability dot and its soft ring, the nav mark dot, the Homelab status LEDs, the dot leading each browser-frame tag and the border of an email copy button that has just copied. It is a fill, an underline or a small mark, never the color of words, and anything set on a gold fill is ink. Bullets, service dots, pills and glows are ink or neutral. Filled gold is kept to three buttons on the whole page: the nav Contact, the hero "See projects" and AgroApp's "Open agroapp.dev".

**The Brand Mark Exception Rule.** The only other hue on the page is AgroApp's green, and only inside AgroApp's own icon mark.

**The Stage Rule.** Screenshots never sit on the light page. Every real screen is shown inside a dark stage band or a dark plate.

**The Luminance Glow Rule.** Dark bands may carry one soft white radial glow (white at 7 to 8% alpha, fading to transparent at 70%). Glows are never gold or any other hue.

## Typography

**Display Font:** Geist Variable (with Geist, ui-sans-serif, system-ui)
**Body Font:** Geist Variable
**Label/Mono Font:** Geist Mono Variable (with Geist Mono, ui-monospace)

**Character:** One confident grotesk carries everything, tightened hard at display sizes; the mono appears only as small technical metadata, the way a spec sheet lists parts.

### Hierarchy
- **Display** (650, fluid up to 4.75rem, 0.98): the first-person hero headline beside the portrait, max 16ch, balanced wrap, with the two app-icon marks set inline at 0.8em.
- **Display Contact** (650, fluid up to 6.5rem, 0.95, -0.045em): the contact band heading, the largest type on the page.
- **Headline** (640, fluid up to 3.5rem, 1.02): section titles.
- **Title** (650, fluid up to 3rem, 1.02): project article names.
- **Showcase Name** (650, fluid 1.375rem to 2rem, 1.1, -0.03em): project names under the showcase screens, followed by a stroked gold arrow icon (0.8em, 2px stroke) that nudges right on hover.
- **Title Small** (640, 1.375rem, 1.2, -0.02em): the hero name (the age after it in Slate Secondary at 500, tabular numerals) and the skill row names (AgroApp, Homelab, UTN Rosario).
- **Card Title** (640, 1.0625rem, -0.01em): the outage card title.
- **Status** (600, 1.0625rem): the hero availability line, led by the gold dot.
- **Item** (500, 1.1875rem, -0.01em): skill items, set as plain text separated by Slate Secondary middle dots.
- **Lead** (400, 1.1875rem, 1.45): section intros, project summaries, contact lead.
- **Body** (400, 1.0625rem, 1.6, stylistic set ss01): running text; the hero role line at 1.45 and max 52ch.
- **UI** (560, 0.9375rem to 1rem): buttons, credits (540), services (running label 600, Next and Planned labels 500, names 400), showcase captions, skill proof lines, the hero facts line (500, ink), the outage summary line (400, 1.5, Slate Secondary), the outage toggle (560), outage step terms (600, ink) and details (400, 1.5, Slate Secondary), and the copy confirmation label (0.875rem, 560).
- **Label Mono** (400, 0.78rem): the browser-frame bar only, in its frame labels and frame tags.

### Named Rules
**The Tight Display Rule.** Anything at 1.375rem and above that names something is weight 640 to 650 with negative tracking (-0.02em at Title Small, -0.03em to -0.045em from Showcase Name up) and line-height at or under 1.2 (1.02 or under from headline size up).

**The Mono Is Metadata Rule.** Geist Mono lives only in the browser-frame bar: the address or service name in a frame label and the short true status in a frame tag. It is never used for headings, body, buttons or skill lists.

## Layout

A single centered column capped at 76rem (`wrap`) with fluid gutters (`gutter`). The page is a vertical sequence of full-bleed bands: light hero, dark stage, light projects, tint skills and education, dark contact, dark footer. Sections pad by `section`; the contact band is taller at the top (up to 9rem). Every small control holds at least a 2.75rem (`hit`) target: the small button, the nav links, the nav mark (also 2.75rem wide once the name hides), the language segments and the compact language pill.

- **Nav:** sticky, `nav-h` tall, translucent Cool Paper with backdrop blur; anchors sit 1rem below it on scroll.
- **Hero:** two columns, text 1.5fr and portrait 1fr, vertically centered, with a fluid gap up to 3.5rem; the portrait is 4:5, at most 22rem wide, set to the column's right edge. The text column stacks the headline, the identity block (name, role, availability line, facts line; 0.35rem gap) and a wrapping CTA row (0.75rem by 1.1rem gap) of three units: the primary button, the email group (the address as an underlined text link beside its round copy button, 0.25rem gap) and the profiles group (LinkedIn and GitHub text links, which wrap together). The full-bleed stage follows directly so the screens rise into the first viewport.
- **Showcase:** inside the stage, two projects side by side in two equal columns, top-aligned, with a fluid gap up to 2.5rem. Each item stacks its frame over a name-and-caption block (0.9rem gap). Each screenshot renders at its natural aspect as a self-contained crop (AgroApp's hero column at 660 by 412; Uptime Kuma's counters above its log at 726 by 432); nothing is forced to a ratio or cropped by CSS. On phones each shows its mobile crop, also at natural aspect.
- **Projects:** two-column 5fr / 7fr text-and-visual split, mirrored (7fr / 5fr) on the second project, with a fluid gap up to 5rem. The visual column is sticky under the nav. Projects are separated by up to 8rem. The link row is a column: where a project has a primary button it comes first, then the text links on their own row below (0.5rem gap), grouped so they wrap as a unit (0 by 1.1rem gap). Homelab has no primary button, so its row is the text links alone.
- **Skills and education:** a single ruled list; each row is 16rem for the name and proof, then the items as dot-separated text (gap up to 3rem), padded 1.4rem vertically. Education is a row in this list, not a band of its own.
- **Breakpoints:** below 55.99rem projects collapse to one column, the visual no longer sticky and moved first, so each project's picture leads its text. Below 47.99rem the hero stacks to one column with the portrait turned into a 5.5rem circular avatar above the headline, zoomed on the face, and the email group moves to the end of the CTA row; the showcase stacks and each screen swaps to a legible mobile crop; the AgroApp API docs plate serves a phone crop; the Homelab stacked plate shows only its first (Pi-hole) frame at full width, serving a phone crop of its stat tiles, and hides the second (Portainer) frame; the nav links hide; skill rows collapse to one column. Below 29.99rem the nav name hides, leaving the mark, and the language switch shows only the other language; the nav Contact button stays, so Contact is reachable from the nav at every width. Below 26rem the outage steps stack, term over detail; below 22rem each services row stacks its label over its names.

## Elevation & Depth

Depth comes mostly from bands: dark stages against a light page. Soft drop shadows are reserved for real imagery and the marks that stand for it: screenshot frames on dark ground, the hero portrait and avatar, and the two small app-icon marks in the headline. Other light surfaces are flat, bordered by hairlines. Three small material details remain: the active language segment carries a tiny two-layer lift, the gold primary button carries a thin inset bottom edge so the flat gold reads as a pressable key, and the availability dot sits in a soft gold ring.

### Shadow Vocabulary
- **Frame lift** (`box-shadow: 0 24px 48px -20px rgb(0 0 0 / 0.85)`): every browser frame on a dark stage or plate.
- **Frame lift, raised** (`box-shadow: 0 34px 60px -24px rgb(0 0 0 / 0.95)`): a showcase frame on hover, paired with a 4px rise.
- **Frame lift, stacked** (`box-shadow: 0 30px 60px -18px rgb(0 0 0 / 0.95)`): the second, overlapping frame in a stacked plate.
- **Portrait lift** (`box-shadow: 0 30px 60px -28px rgb(10 10 11 / 0.6)`): the hero portrait on the light page; the phone avatar uses a smaller version (`0 12px 24px -14px rgb(10 10 11 / 0.6)`).
- **Icon lift** (`box-shadow: 0 0.1em 0.28em -0.06em rgb(10 10 11 / 0.45), inset 0 -0.04em 0 rgb(0 0 0 / 0.18)`): the headline app-icon marks, scaled in em so it tracks the type (the Homelab icon's inset is 0.2 alpha).
- **Gold key edge** (`box-shadow: inset 0 -2px 0 rgb(10 10 11 / 0.14)`): primary buttons only.
- **Segment lift** (`box-shadow: 0 1px 2px rgb(10 10 11 / 0.12), 0 1px 1px rgb(10 10 11 / 0.06)`): the selected segment of the language switch.
- **Availability ring** (`box-shadow: 0 0 0 3px rgb(245 176 0 / 0.22)`): the gold dot on the hero availability line; a flat ring, not a cast shadow.

### Named Rules
**The Shadows Belong To Imagery Rule.** Soft drop shadows lift screenshots, the portrait and the app-icon marks. Cards, tags, pills and buttons on the light page stay flat with hairline borders; the primary button's inset key edge is the only exception, and it never casts outward.

## Shapes

Three shape families. Controls are full pills (999px): buttons, the copy buttons, the language switch, nav links and the skip link. Status and keyword lists carry no shape; they are plain text. Containers are softly rounded rectangles: frames and the outage card at 14px, plates and the hero portrait (4:5) at 22px, the nav mark square at 7px. App-icon marks are small em-scaled rounded squares (0.2em on 0.8em), tilted a few degrees off axis. On phones the portrait becomes a circle. Bullets are 2px-rounded ink squares; status and service dots are circles. Borders are always 1px hairlines, except dashed 1.5px rings on not-yet-running services.

## Components

### Buttons
Confident pills with a small press.
- **Shape:** full pill (999px), 3rem min height, 0 1.35rem padding, weight 560, 1rem.
- **Primary:** Sol de Mayo Gold fill, ink text, gold key edge; hover lightens to Bright Gold.
- **Light (on dark):** On-Stage Light fill, ink text; hover goes to pure white.
- **Outline Light (on dark):** transparent with a white 28% border and On-Stage Light text; hover turns the border On-Stage Light.
- **Small:** 2.75rem (`hit`) height, 0 1.05rem padding, 0.9375rem; used for the nav Contact button, visible at every width.
- **States:** 0.25s expo ease-out on color, border and transform; active presses down 1px. Focus is a 2px ink ring offset 3px (white on dark bands). A 1rem stroked arrow icon (1.6 stroke) nudges on hover: diagonally up-right for outbound links, downward for the hero's in-page anchor.

### Text Link
Ink text, weight 540, 3rem min height for touch, with a 1.5px Hairline underline offset 0.3em. Hover keeps the ink text and thickens the underline to 3px Sol de Mayo Gold. Used for LinkedIn and GitHub in the hero CTA row (grouped so they wrap together) and for every project link that is not the one primary button: AgroApp's API docs and source code, and both Homelab links (the write-up and the source code), grouped on their own row.

### Email and Copy Button
The email address appears twice, each time with a copy button beside it. In the hero it is a text link at weight 560 with the same Hairline underline that thickens to 3px gold on hover, 2.75rem tall. The **copy button** is a 2.75rem (`hit`) circle with a Hairline border on White Surface, holding a 1rem stroked copy icon (1.5 stroke) in ink; hover turns the border ink. On a successful copy its border turns Sol de Mayo Gold for 1.8s and a small label ("Copied" / "Copiado", 0.875rem, 560) appears centered 0.35rem below it, announced through a polite live region. If the clipboard is unavailable, the button selects the address text beside it and the same label slot reads "Selected, copy it by hand" / "Seleccionado, copialo a mano" for 3.2s; it never opens the mail app. The **dark variant** in the contact band is transparent with a white 28% border and an On-Stage Light icon; hover turns the border On-Stage Light.

### Navigation
Sticky translucent bar with a hairline bottom rule. Left: the mark (a 1.5rem ink rounded square with a small gold dot bottom-right) plus the name at weight 640, with a 2.75rem touch height. Middle: two short pill links in Slate Secondary ("Projects", "Skills" / "Proyectos", "Habilidades"), 0.9375rem weight 500, 2.75rem tall with 0.8rem side padding, hover to ink on Tint Grey. Right: the language switch and the small primary Contact button. Below 47.99rem the links hide; below 29.99rem the name hides too, leaving mark, language switch and Contact.

**Language switch:** a Tint Grey pill track (3px padding) holding EN and ES segments (0.875rem, weight 600, 2.75rem min width, hit area extended 7px above and below). Each segment is labeled for assistive tech by code and name ("EN · English" / "ES · Español"). The current language is a White Surface segment with ink text and the segment lift. Below 29.99rem the track and the current segment disappear, leaving the other language alone as a Hairline-bordered pill 2.75rem tall. Switching languages keeps the reader's place: the link carries the current section (projects, either project, skills or contact) to the other language as a hash. The switch runs a 0.25s cross-page view transition, disabled under reduced motion.

### Hero Portrait
Tiziano's real profile photo as a 4:5 portrait, at most 22rem wide, 22px radius, clipped with the image cropped to cover and scaled 1.45x from a point right of center and high (54% 30%) so the figure fills the frame, lifted by the portrait shadow in the right column. Below 47.99rem it moves above the headline as a 5.5rem circle, the image scaled 2.6x toward the face, with the smaller avatar shadow. It is a real photograph, never an illustration or placeholder.

### Hero Identity
A tight block between the headline and the CTA row. The name in Title Small with the live age after it in Slate Secondary; the role in Body at 1.45, max 52ch; then the **availability line**, 0.5rem lower: plain Status text (1.0625rem, 600, ink) with no border or background, led by a 0.55rem gold dot in its soft gold ring (0.6rem gap); then the **facts line** under it, 0.9375rem at weight 500 in ink, short facts joined by middle dots ("Graduating 2027 · Remote, hybrid or on-site in Rosario · English B2").

### Headline App Icons (signature)
Two small decorative app-icon marks set inline in the hero headline between words, hidden from assistive tech and not interactive.
- **AgroApp:** AgroApp Green rounded square (0.8em, 0.2em radius) with a white stroked sprout glyph at 62%, tilted -5deg.
- **Homelab:** Stage Raised rounded square with an On-Stage Light two-unit server-rack glyph at 64%, tilted 4deg, each unit with a steady gold status LED.
- Both carry the icon lift and share the headline's baseline (vertical-align -0.04em). Glyphs are inline SVG.
- Each icon is bound to its neighboring word in a `.nowrap` span (the first word plus the AgroApp icon, the rack icon plus the last word) so an icon never strands at the start of a line.

### Showcase (signature)
A full-bleed Stage Black band with a luminance glow at top center, holding both projects at once. Each item is a single link to its project article: a browser frame whose picture renders at its natural aspect as a self-contained crop (AgroApp's live app, its hero column; for Homelab, Uptime Kuma's Up and Down counters above real Up and Down log rows), swapping to a legible mobile crop below 47.99rem, then the project name in Showcase Name with a gold arrow after it, then a caption in On-Stage Muted (0.9375rem). On hover the frame rises 4px and takes the raised frame lift over 0.5s on the expo ease-out; reduced motion removes the transition. Focus is a white ring offset 6px.

### Browser Frame
Every screenshot sits in a frame: 14px radius, stage hairline border, Stage Raised body, frame lift shadow, clipped. A 1.9rem title bar in Frame Bar color with a bottom stage hairline, laid out flex space-between (0.8rem inline padding, 1rem gap). Left: an ellipsized Geist Mono 0.78rem label in On-Stage Muted naming the real address or service in a word ("agroapp.dev", "api.agroapp.dev/docs", "uptime-kuma", "pihole", "portainer"). Right, optional: a **frame tag** in Geist Mono 0.78rem On-Stage Light, led by a 0.4rem gold dot, carrying a short true reading of what the screen shows ("live" / "en línea", "6 up · 0 down", "240,687 blocked", "6 stacks"); an empty tag is hidden. The bar carries no window dots.

### Plate
The dark ground for project visuals: Stage Black with a white radial glow at top right, 22px radius, fluid padding. The stacked variant overlaps two frames (86% and 80% wide, the second pulled up 16% and pushed right) with the stronger stacked shadow. Every plate serves its screen through a picture element, swapping to a legible phone crop below 47.99rem where one exists (the AgroApp API docs and the Pi-hole stat tiles). AgroApp's plate is a single frame showing a real screenshot of the live API docs (Swagger at api.agroapp.dev/docs). Below 47.99rem the stack drops to its first frame alone at full width and the plate's bottom padding evens out.

### Project Article
Name (Title), summary (Lead), then **points**: short rows in Slate Secondary, each led by a small 2px-rounded ink square. Points describe what was built and proved; they do not list the stack, since the Skills rows are the keyword list. A credit line (0.9375rem, weight 540), then, for Homelab, the services list and the outage card, and a link row stacked as a column. AgroApp's row opens with its one gold button, "Open agroapp.dev" / "Abrir agroapp.dev", then API docs and source code as text links on their own row below it. Homelab's row has no gold button: two text links, "Source code" then "Full write-up (in Spanish)" in English, "Leer el caso completo" then "Código fuente" in Spanish, grouped so they wrap together. Below 55.99rem the picture sits above the text. The whole article reveals once, rising 28px and fading in over about 1s, only when it starts below the fold and only without reduced motion.

**The Proof Is Primary Rule.** A project gets a gold button only when there is something running to open, and then exactly one, opening it (AgroApp's live app). A project without one (Homelab) has no gold button. Source code, API docs and write-ups are always text links, grouped on their own row.

### Services List
No card: three short rows at 0.9375rem under a Hairline top rule (1.4rem above the rule, 1.1rem below it, 0.45rem between rows). Each row is a 6.75rem label column and a names column (0.25rem by 1rem gap). The first label is the running count, derived from the services list ("6 running" / "6 andando"), at weight 600 in ink, led by a solid ink dot; the other two are "Next" and "Planned" ("Próximo", "Planeado") at weight 500 in Slate Secondary, each led by a dashed 1.5px Slate Secondary ring. The names follow as one comma-separated line in Slate Secondary. Below 22rem each row stacks its label over its names.

### Outage Card
A White Surface card with a Hairline border and 14px radius, 1.4rem after the services list in the Homelab article, built as a disclosure that starts closed. The whole summary (1rem by 1.1rem padding, 0.35rem gap) is the pressable area: the title in Card Title ("One outage, start to finish" / "Una caída, de principio a fin"), one plain-language line in Slate Secondary (0.9375rem, 1.5) saying what broke and what fixed it, then the **toggle**, "Show the four steps" / "Ver los cuatro pasos" at 0.9375rem weight 560, underlined like a text link (Hairline 1.5px, thickening to 3px gold while the summary is hovered), with a 1rem stroked chevron that turns 180deg over 0.3s when open. The default disclosure marker is hidden; focus is an inset ring following the card's radius. Opened, it shows a definition list of four steps from the real Pi-hole write-up (1.1rem side padding, 0.4rem at the bottom): Symptom, Ruled out, Cause, Fix (Síntoma, Descartado, Causa, Solución). Each step is a row of a 6.5rem term column and a flexible detail column (0.25rem by 1rem gap, 0.65rem vertical padding) under a Hairline top rule. Terms are 0.9375rem weight 600 in ink; details are 0.9375rem in Slate Secondary at line-height 1.5. Below 26rem each step stacks, term over detail.

### Skills Rows
The "Skills & education" / "Habilidades y formación" section (the nav shortens it to "Skills" / "Habilidades") on the Tint Grey band: a definition list of rows ruled top and bottom in Tint Rule, and the page's single list of technology keywords. Each row pairs a name (Title Small) over a Slate Secondary proof line (0.9375rem), both held at the top of the row, with its items as plain Item text in ink (1.1875rem, weight 500, -0.01em), no chip or border, separated by Slate Secondary middle dots (0.6rem either side) and wrapping with a 0.35rem row gap. The rows are AgroApp and Homelab, then UTN Rosario, whose proof line names the degree ("Information Systems Engineering, subjects so far") and whose items name confirmed coursework (Databases, Operating systems, Networks, Systems analysis & design, Object-oriented programming). Education lives here as a row; there is no separate education block.

### Contact Band and Footer
A Stage Black band with a luminance glow at bottom left. The Display Contact heading, a lead in On-Stage Muted (max 44ch), then a mail row (0.75rem gap): the email as a large white link (up to 3rem, weight 560) with a 3px Sol de Mayo Gold underline that turns white on hover, beside the dark variant of the copy button. Below, a Light button and an Outline Light button. Focus rings are white on dark. The footer continues Stage Black with On-Stage Muted text at 0.875rem below a stage hairline; the band carries the gutter and the rule is capped to the wrap width minus the gutters, so it stays inside the content column rather than running edge to edge. The footer year, like the hero age, is rendered at build time and corrected in the browser, so neither goes stale.

### Link Preview
Each language has its own 1200 by 630 PNG card (og-en.png, og-es.png), composed from the site's own material rather than generated: the left two thirds on Cool Paper with the nav mark and name, the hero headline in Display type, the role in Slate Secondary, the availability line with its ringed gold dot and the facts line in ink; the right third a Stage Black panel holding the real photo at the 22px plate radius. Each page declares its card with type, width, height and a written alt text in its language, and asks for the large summary card on social previews.

## Do's and Don'ts

### Do:
- **Do** show every real screenshot inside the browser frame, on a Stage Black band or plate, and serve a legible crop on phones where the full screen would be too small to read.
- **Do** keep Sol de Mayo Gold to primary buttons, selection, the link and outage-toggle hover underline, the contact email underline, the showcase arrows, the availability dot, the nav mark dot, the Homelab status LEDs, the frame-tag dots and the copied-state border of the email copy button.
- **Do** set ink text on every gold fill, and use gold only as a fill, an underline or a small mark.
- **Do** use pills for controls, plain text for status and keyword lists, and 14px or 22px rounded rectangles for frames, cards, plates and the portrait.
- **Do** set headings in Geist Variable at weight 640 to 650 with negative tracking and tight line-height.
- **Do** keep rows short and scannable: points, ruled skill rows, service lists.
- **Do** give a project a gold button only when it has something running to open, and then just one; keep source code, API docs and write-ups as grouped text links on their own row.
- **Do** give every small control at least a 2.75rem (`hit`) target.
- **Do** make every motion safe under reduced motion, and use the expo ease-out (cubic-bezier(0.16, 1, 0.3, 1)) for transitions.
- **Do** scroll smoothly only on in-page anchor clicks (instant under reduced motion); arrival on a hash is never animated and skips the project reveals.
- **Do** use an ink focus ring on light surfaces and switch it to white on dark bands.

### Don't:
- **Don't** set words in gold, or put white text on a gold fill.
- **Don't** color bullets, service dots, pills or glows gold.
- **Don't** introduce a second accent hue; AgroApp's green lives only inside its own icon mark.
- **Don't** tint glows; dark-band glows are white at 7 to 8% alpha.
- **Don't** place screenshots directly on the light page or without the frame.
- **Don't** add drop shadows to light-page cards, tags, pills or buttons; they stay flat with hairlines.
- **Don't** use Geist Mono outside the browser-frame bar: not for headings, body copy, buttons or skill lists.
- **Don't** put a claim in a frame tag that the screenshot does not show; tags are short true data or empty.
- **Don't** build grids of identical cards, long text blocks, or neon hacker styling.
- **Don't** add reveals beyond the project articles.
- **Don't** make source code or API docs a button, or give a project more than one primary button.
