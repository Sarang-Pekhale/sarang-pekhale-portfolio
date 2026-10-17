# Content and design notes

No publication, award, earlier degree, supervisor relationship or conference
appearance has been invented. Existing owner-approved research descriptions
are preserved. Empty optional sections stay hidden.

## Sources for professional content

- Name, lab membership, research areas and contact: https://www.csccm.in/our-team
- Lab name and affiliation: https://www.csccm.in/home
- Nashik birthplace and current PhD candidacy: supplied by the owner.
- Research directions: retained from the owner's prior portfolio content.

## Current visual direction — 16 October 2026

The latest request supersedes the prior tricolour/hero layout and asks to match
https://www.riccardodesanti.com/ with About, Research, Publications and Resume.
The reference HTML and Bootstrap/MDB/main CSS cascade were inspected directly.
This implementation uses new source and the owner's content, not the reference
researcher's biography, portrait, publications, achievements or resume.

Matched specifications: white #FFFFFF, black #000000, purple #6809B5; 800px outer
container with 15px side padding; Roboto 300 at16px/24px; About heading40px/48px
(first name700); h2 32px/38.4px; research headings28px/33.6px; fixed56px header,
48px top content margin; right biography image at28.9%; 12.96px monospace photo
caption; justified desktop biography; compact pale contact panel; 40px footer
padding. The earlier requested full bold name remains in the header. The mobile
navigation collapses at680px to fit the longer full name and four links.

Reference theme toggling is not reproduced: the requested professional layout
is light by default. Resume opens a printable overview of supplied academic
information, because no original CV PDF has been supplied; a download appears
when cvUrl is configured. No third-party portrait or fabricated profile is used.

## Owner-supplied photographs

- Nashik_Pune_Highway_Scene_cropped.jpeg → assets/hero-valley.jpeg,1280×838.
- WhatsApp Image 2026-08-29 at 5.40.57 PM.jpeg → assets/hero-wildflowers.jpeg,960×1280.

Both remain unchanged and can be selected via aboutPhoto in content.js. A
portraitUrl replaces the photograph when supplied. No crop, overlay or filter.
The second photo is described as golden light, without inferring capture time.

Roboto is self-hosted from the official Google Fonts service, licensed under
SIL OFL1.1. Bundled license and source URLs are in assets/fonts. No external
runtime scripts, analytics or font services are loaded. Personal content,
photographs and artwork are excluded from the code's MIT licence.

## Verification

Node syntax checks; all four pages' internal links, assets and IDs; relative
URL handling; source-level responsive rules and reference typography values.
Browser visual QA is unavailable in this environment and was not claimed.

## Sunrise background — 17 October 2026 (India)

The owner supplied ARAI_Flower_blur_Sunrise.jpeg for the opening About section
and top navigation. Its exact960×1280 JPEG is copied to assets/arai-sunrise.jpeg.
A single full-width CSS background spans the title and biography, extending
behind the transparent fixed menu. Existing text, content links, foreground
photograph, font sizes and weights are unchanged. Other pages retain their
existing styling. The white contact panel remains intact.

The image uses responsive cover framing (center43% desktop; center50% mobile),
so its edges crop to fit the section. It is not described as uncropped. There
is no image tint, filter or overlay. Dark ink headings/navigation and warm
white biography text use small glyph shadows. The menu restores its white
surface after scrolling past the opening image; its expanded mobile dropdown
uses a cream panel so links do not overlap the biography text.

Verified unchanged visible wording, hrefs and foreground image, original JPEG
hash, unique IDs, assets, source syntax and header scroll-state logic. Browser
visual QA remains unavailable.

## Minimal hero and fading header — 17 October 2026 (India)

The owner's image(4).png defines the new opening content: centered full name,
gold divider, and “PhD Candidate at CSCCM, IIT Delhi”. The screenshot's enlarged
type was not copied because the owner explicitly asked to retain the current
font and sizes. Name remains Roboto40px/48px and becomes entirely700 weight;
subtitle remains16px/24px. The original sunrise asset and framing are retained.

The original descriptive line and complete article (biography, foreground
photograph, caption, contacts and links) move intact to a white second section.
The new section heading uses the existing32px h2 style. Other pages and content
configuration are unchanged.

The image(5).png reference informs the translucent white header, dark links and
purple active state. No extra menu items are added. Surface opacity progresses
from0 to0.96 over the first64px of scroll, while blur increases to8px. A240ms CSS
transition smooths abrupt wheel/page scrolls. Text itself never fades. Opening
the mobile menu forces the white surface, and reduced-motion settings disable
blur/animation. Previous late, binary color-switch logic is removed.

Verification: actual scroll-controller source exercised at top/intermediate/
full/negative/restored scroll positions, mobile-menu open/closed, reduced-motion
and repeated scroll events. Static checks confirm exact hero wording, unchanged
article/description/link content after relocation, asset resolution, unique IDs,
and unchanged other pages. Independent source review found no concrete issues.
Visual browser QA remains unavailable in the environment.

## Full viewport hero and neutral navigation — 17 October 2026 (India)

Per image(6).png feedback, the opening now starts at document top and has minimum
height100dvh with100vh fallback. The old capped height and compensating negative
vertical margins are removed. The About section starts below the full image.
The central name is48px,700; the entire subtitle is22px,700. Roboto is retained.

The header name is invisible at the top of About and fades in on scrolling,
remaining black. Only Sarang is700; Manoj Pekhale is300. All pages share this
name styling, but only About hides it initially. Keyboard focus reveals the
otherwise transparent link, whose space stays reserved to prevent layout shift.
Navigation starts white over the photograph and transitions to black when
scrolling begins. Brand/menu colour transitions take240ms. The surface continues
to fade through0–96% white over64px, with up to8px blur. Menu text deliberately
settles at black rather than mid-gray if scrolling stops during the surface fade.

All purple UI/text colours have been replaced with neutral black, including
favicon, link/hover/active/focus and publication badge colours. Active navigation
has an underline plus weight. Hero gold divider and original photo are retained.
All wording and links across all four pages remain unchanged.

Checked exact header-controller behavior at top/intermediate/scrolled/restored
positions, expanded menu and reduced-motion states; checked all pages' content,
links, asset paths, first-name-only brand markup and viewport/font declarations.
An independent review caught the gray midpoint contrast issue; it was corrected.
Browser visual QA remains unavailable.

## Wada-inspired divider experiment — 17 October 2026 (India)

The owner's image(7).png shows a carved lower architectural strip and regularly
spaced hanging brackets, with smaller rounded pendants between them. The new
SVG draws from those specific visible elements; it does not reproduce the
window arches or upper columns. It is an original scalable interpretation, not
a cropped portion of the uploaded photograph or an exact measured reconstruction.

The horizontally repeating ornament sits in its own full-width block immediately
after the unchanged100dvh hero. About follows it with the existing spacing.
Desktop height is144px; mobile height is120px. The ornament is aria-hidden,
noninteractive, and omitted when printing. No visible text, type sizes, links,
header behavior, content data or other pages are changed.

Validation includes the SVG asset render and repeated pattern, valid XML, local
asset references, unchanged existing visible content, and unchanged hero/header
source. Full browser visual QA remains unavailable.

## Three-window Wada frame — 17 October 2026 (India)

Added an original realistic brown-wood architectural foreground inspired by the
owner's four new references. It has three cusped arches, a larger central bay,
matching side bays, carved pillars and paired elephant brackets. Transparent
openings reveal the existing sunrise photograph without editing or tinting it.
There are separate landscape and portrait compositions. The live title and
subtitle retain their 48px/22px Roboto sizes and bold weight; their available
width is constrained to the central opening and they wrap naturally.

The earlier pale hanging divider, all academic content, links, page navigation
and scroll fade remain unchanged. See WADA-FRAME-NOTES.md for original prompts,
asset paths, verification and the browser-testing limitation.

## Wada artwork retained for photography — 17 October 2026 (India)

At the owner's request, the window overlay and decorative strip are removed
from the live homepage, together with the frame-specific title width rules.
The full-screen sunrise, original title layout and scrolling header remain.

The landscape and portrait window PNGs and carved-divider SVG are retained
unchanged in assets for later use with the owner's photographs. The future
navigation label may be “Clicks” or a camera icon; no new menu item or gallery
is implemented in this change. Original generation prompts are preserved in
WADA-FRAME-NOTES.md, with reusable code in design-archive/WADA-PHOTOGRAPHY.md.

## Photographic About Me section — 17 October 2026 (India)

The owner's IMG_9119.JPG.jpeg is copied unchanged to assets/about-leaves.jpeg
and becomes a full-width, cover-framed background immediately after the hero
(margin-top: 0). Self.jpeg is copied unchanged to assets/sarang-portrait.jpeg.
The portrait appears on the left, uncropped at its natural 4:3 ratio and up to
380px wide, retaining the 4px corners, shadow and monospace caption style.
The caption gives the owner's name and “PhD Candidate · CSCCM, IIT Delhi”.

The biography sits on the right in a 96% white panel; the layout stacks at
860px and below. portraitUrl now points to the supplied portrait. The section
heading is “About Me”. The obsolete clause “and the photograph here is one of
my own” is removed from the origin paragraph. Other biography content, font
sizes, the hero and fading menu, and other pages remain unchanged. Earlier
Nashik photographs and all three Wada artwork assets remain available.

## Experience landscape and career route — 17 October 2026 (India)

Experience is inserted immediately after About Me. The owner-supplied
IMG_9447.JPG.jpeg is copied unchanged to assets/experience-landscape.jpeg.
The cover-framed background and house pin share a 46%/39% focal point.
The current IIT Delhi role (Jan 2025 – Present) sits upper left; the earlier
Thermax role (July 2024 – Dec 2024) sits lower right. Supplied role and project
wording is preserved verbatim, with en dashes used in the dates.

The cards use Roboto on 96% white panels. An SVG dotted route with a dark
understroke connects the current card, house pin and previous-role pin.
The isolated journey.js measures their positions with ResizeObserver and
fonts.ready; at 860px and below the cards stack with slight left/right offsets.
Original white map artwork in assets/journey supplies trees, mountains, water,
a compass, pins and a signpost. These decorative elements are aria-hidden and
omitted from print output.

The hero, About Me, existing navigation and scripts, other pages, photographs
and archived Wada artwork are preserved. No new navigation item is added.
Photo integrity and source checks were performed; browser visual QA remains
unavailable.

## Annotated Experience refinements — 17 October 2026 (India)

The About Me and Experience headings use weight 700 at their existing sizes.
The Experience heading no longer has a white background. Both experience cards
use 88% white to reveal more of the photograph while keeping black text clear.
The current-stop marker and its dotted route move to the left of the house;
responsive positioning accounts for the original photograph's cover framing
so the house remains unobscured by map decorations. Existing copy, navigation,
photographs and other sections are preserved. Browser visual QA is unavailable.

## Education and curved Experience route — 17 October 2026 (India)

Education follows Experience as the fourth full-width photographic section.
The original 960 × 1280 image is retained unchanged as
assets/education-rocks.jpeg. PhD, master's and bachelor's cards sit upper left,
middle right and lower left respectively, with supplied education text retained.
The cards use 88% white and the existing Roboto family; the Education heading
is bold white at 32px. Original decorative SVGs in assets/climbing provide a
climber, carabiner, anchor and summit flag. Narrow screens use a wider stacked
layout with alternating offsets; artwork is aria-hidden and omitted in print.

The Experience dotted route now uses smooth cubic curves for a wavy path while
continuing to keep the house clear as responsive cover framing changes.
Existing page content, navigation, photographs and archived Wada assets remain
unchanged. Browser visual QA remains unavailable.

## Shared photographic contact ending — 17 October 2026 (India)

A .contact-ending wrapper after main shares the unchanged contact-table.jpeg
photograph between an untitled centered contact section and the copyright.
The supplied invitation, office address and five icon destinations are stored
directly in index.html, independently of content.js: IIT Delhi email
amz248506@iitd.ac.in, Gmail sarang25pekhale@gmail.com, and the supplied LinkedIn,
GitHub and Google Scholar profiles. Links have explicit accessible labels.

The official white IIT Delhi PNG sits on a maroon button. Gmail SVG, LinkedIn
PNG, GitHub Octicons SVG and Google Scholar PNG are retained locally under
assets/contact. Source attribution and the Octicons MIT license are preserved
in assets/contact/NOTICES.md; the GitHub mark was retrieved through the selected
GitHub connector.

The homepage portrait caption and its app.js writes, Research Interests block
and footer affiliation line are removed. The master's education panel changes
to 80% white; the other education panels stay 88%. Existing navigation and other
pages remain unchanged. Browser visual QA remains unavailable.


## Monochrome contact symbols — 17 October 2026 (India)

The copyright panel is transparent, with white text and a small dark text
shadow over the original photograph. All five contact marks are displayed in
black and white: the IIT emblem on a black button, Gmail through a CSS filter,
LinkedIn's official black PNG, the original GitHub mark, and Simple Icons'
monochrome Scholar SVG. Link destinations and sizes are unchanged. The stray
no-script fallback markup visible in the annotated footer has been removed.


## Preprint and PDF Resume route — 17 October 2026 (India)

The Publications page now follows the supplied Riccardo De Santi reference:
year grouping, compact arXiv badge, title/authors/year, and Bibtex/PDF controls.
The sole entry is “See, Hypothesize, Validate: Multimodal Agentic Framework for
Discovering Governing PDEs” by Sarang Manoj Pekhale, Amartya Roy, Rajat Sarkar,
and Souvik Chakraborty. Metadata and BibTeX were verified directly against
https://arxiv.org/abs/2608.27869 and https://arxiv.org/bibtex/2608.27869.
The PDF points to https://arxiv.org/pdf/2608.27869. No code or project website
link is supplied. Google Scholar replaces the subtitle; the empty-state text
and obsolete search/filter controls are removed. The paper is not added to
the homepage. Footer affiliations are removed from Research and Publications.

Resume content is removed entirely. Its blank route checks for the configured
assets/sarang-pekhale-cv.pdf and opens it once uploaded. No PDF is fabricated.
The path works on Sites and GitHub Pages project subpaths.
