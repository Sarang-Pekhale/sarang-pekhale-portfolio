# Research & Roots

A academic portfolio. **Sarang Manoj Pekhale**, PhD research candidate at CSCCM, IIT Delhi. The layout and Roboto typography follow the reference : https://www.riccardodesanti.com/.

The site uses plain HTML, CSS, and JavaScript. All public files are in `dist/`; there is no build step, package installation, or third-party runtime dependency. It has About, Research and Publications pages, plus a Resume route that opens the uploaded PDF. Fonts are self-hosted. The About Me section pairs an uncropped portrait with the biography over an owner-supplied leafy background.

## Editing and publishing

Repository: [Sarang-Pekhale/sarang-pekhale-portfolio](https://github.com/Sarang-Pekhale/sarang-pekhale-portfolio).

Read **[GITHUB-GUIDE.md](GITHUB-GUIDE.md)** for detailed editing, resume upload,
local preview, repository visibility, and GitHub Pages publishing steps.

The repository is being prepared privately. The included workflow runs **manually
only** (`workflow_dispatch`), so commits do not publish the website automatically.
When ready, make the repository public for GitHub Free, select **Settings → Pages
→ Source → GitHub Actions**, then run **Actions → Deploy portfolio to GitHub Pages
→ Run workflow → main**. GitHub Pro also supports Pages from a private personal
repository; the published website is still public.

The workflow publishes only `dist/`, with no package installation or build step.
The expected website address after the first successful deployment is
https://sarang-pekhale.github.io/sarang-pekhale-portfolio/.
The existing ChatGPT Sites copy is separate and does not automatically synchronize
with edits here.

## Make it yours

Edit `dist/content.js`, which defines a plain `window.PORTFOLIO` object. Keep JavaScript quotes, commas, and brackets intact. Add only verified personal information; leave unknown values as `""` and unused lists as `[]`. Optional sections remain hidden until you add entries.

| Field | What to add |
| --- | --- |
| `name`, `fullName` | Your preferred display name and full name. `fullName` controls the bold header name and portrait alternative text. The biography and SEO description can be edited in the HTML pages if changing the site's owner. |
| `email` | The contact address used by the biography. The five closing icon links are edited separately in `dist/index.html`. |
| `cvUrl` | Resume PDF path; configured as `./assets/sarang-pekhale-cv.pdf`. |
| `portraitUrl` | The About Me portrait, currently `./assets/sarang-portrait.jpeg`. Use a relative image path or HTTPS URL; clear it to use `aboutPhoto` instead. |
| `aboutPhoto` | Use `1` for the valley or `2` for golden light and wildflowers when no portrait is configured. |
| `profiles` | Biography profile links as objects with `label` and `url`. Closing icon links are configured separately in `dist/index.html`. |
| `publications` | Objects with `id`, `title`, `authors` (an ordered array of names), `venue`, `year`, `type`, `url`, and `bibtex`. Optional fields: `abbreviation`, `selected`, `codeUrl`, `websiteUrl`. Set `type` to `journal`, `conference`, or `preprint`; use the correct status and paste your verified BibTeX citation. |
| `education` | Legacy data objects; the current visible photographic Education cards are edited directly in `dist/index.html`. |
| `teaching` | Objects with `period`, `title`, `institution`, and `detail`. |
| `awards` | Objects with `period`, `title`, `institution`, and `detail`. |
| `talks` | Objects with `period`, `title`, `institution`, and `detail`. |
| `news` | Objects with `date`, `title`, and `url`. |
| `projects` | Objects with `id`, `title`, `academicTitle`, `category`, `summary`, `tags`, `detail`, `question`, and `links`. The new layout uses `academicTitle` when set. Follow the existing entries for field types and link formatting; give each project a unique `id`. |

To activate Resume, upload your actual PDF to **`dist/assets/sarang-pekhale-cv.pdf`** in the GitHub repository, then run the manual Pages workflow when ready to publish. The path is already configured:

```js
cvUrl: "./assets/sarang-pekhale-cv.pdf",
```

The supplied portrait is already configured as:

```js
portraitUrl: "./assets/sarang-portrait.jpeg",
```

To replace it, add your image to `dist/assets/`, update `portraitUrl`, and update the fallback image and dimensions in `dist/index.html`.

Use paths relative to the published website root, such as `./assets/paper.pdf`. Do not include `dist/` in public URLs, and avoid paths starting with `/`: they can break when the site is hosted below a repository path. Use full `https://` URLs for external profiles and papers. Only the owner-supplied arXiv preprint is listed; no CV PDF has been supplied.

Edit `dist/styles.css` to change the appearance. The academic pages use white backgrounds, black text and links, and an 800px outer container. The homepage adds full-width photographic sections, with a wider two-column About Me layout. Typography remains Roboto 300 at 16px/24px, a 48px hero title, 32px major headings and 28px research headings. Structural copy is in `dist/index.html`, `dist/research/index.html`, `dist/publications/index.html`, and `dist/resume/index.html`. Interactive behavior is in `dist/app.js`; the Experience route is positioned by `dist/journey.js`. Keep accessible focus indicators and reduced-motion support when customizing.

The Resume route has no visible content. It checks the configured PDF and redirects in the same tab once the file exists. Until then it stays blank. The check rejects missing files and HTML fallback pages, and supports GitHub Pages repository subpaths. To use a different filename, update `cvUrl` in `dist/content.js`. Resume requires JavaScript; its isolated behavior lives in `dist/resume.js`.

The Publications page groups entries by year in the reference layout, with an arXiv badge, bold title, underlined owner name and expandable remaining authors. Bibtex expands the citation below the buttons; PDF opens arXiv. The current preprint has no Code or Website buttons. Edit `dist/content.js` for publication data, and keep the static fallback in `dist/publications/index.html` plus `dist/assets/publications/pekhale2026mage.bib` in sync. The Google Scholar link lives in the page header. Set `selected: true` only if you also want to show a paper on the homepage. All relative data URLs resolve from the site root, including on nested pages.

## Preview locally

If Python is installed, run this command from the repository root, then open `http://localhost:8000`:

```bash
python -m http.server 8000 --directory dist
```

Changes to static files appear after refreshing the browser. Test your links, contact address, mobile layout, and CV download before publishing.

## License and content

The template's source code is provided under the MIT License; see `LICENSE`. This code license does not grant rights to personal information, research content, photographs, institutional marks, or artwork. Use only content and assets you have permission to publish. No institutional endorsement is implied.

## Photographs and fonts

All supplied photograph files remain unchanged in `dist/assets/`. The sunrise,
About Me, Experience, Education and closing contact backgrounds use responsive
cover framing, which crops their edges to fit each section. The portrait is displayed at its natural 4:3 ratio
without cropping. The earlier Nashik valley and wildflower photographs are
retained as optional foreground images through `aboutPhoto`.

Roboto is bundled at `dist/assets/fonts/roboto-latin.woff2`, with weights100–900.
Its SIL Open Font License is in `dist/assets/fonts/OFL-Roboto.txt`; source URLs
are in `ROBOTO-SOURCES.txt`. No external font request is made at runtime.

## Full-screen opening and navigation

The opening photograph fills the viewport using100dvh (100vh fallback), with
content allowed to grow on short screens. The original photo is not tinted or
edited; cover framing crops its edges. About Me begins immediately below it.
The centered full name is Roboto48px/700. The full subtitle “PhD Candidate at
CSCCM, IIT Delhi” is22px/700, including its links. All other type sizes remain.

At the top of About, menu links are white and the header name is hidden. When
scrolling begins, the name fades in and the links transition to black over240ms.
The brand is always black, with only its first name bold (700); other names use
weight300. Its space stays reserved, and keyboard focus makes it visible even
at the top. Other pages show the name normally on their white headers.

The header surface still fades from transparent to96% white across the first
64px of scroll, with8px background blur. Its text settles into black even if the
visitor pauses mid-fade. The expanded mobile menu has a white surface and black
links. Reduced-motion settings disable transitions and blur. Purple has been
removed from site text, active/hover states, focus colours, publication badges,
and favicon. The current page is indicated with an underline and font weight.

## About Me section

`IMG_9119.JPG.jpeg` is retained unchanged as `dist/assets/about-leaves.jpeg`
and fills the section directly below the hero, without an intervening gap.
`Self.jpeg` is retained unchanged as `dist/assets/sarang-portrait.jpeg` and
appears on the left at its natural 4:3 ratio, up to 380px wide, with the existing
4px rounded corners and shadow. No caption is displayed below the portrait.

The biography sits to the right on a 96% white panel for readability. At widths
of 860px and below the portrait and biography stack. The heading is “About Me”;
the old phrase identifying the foreground photograph as a personal landscape
has been removed. Font sizes, the hero, navigation fade and other pages retain
their existing behavior.

## Experience section

Experience follows About Me, before the remaining homepage sections. The
owner's unedited `IMG_9447.JPG.jpeg` is stored as
`dist/assets/experience-landscape.jpeg`. The current IIT Delhi role
(Jan 2025 – Present) appears at the upper left, with the earlier Thermax role
(July 2024 – Dec 2024) at the lower right. Text is supplied by the owner and
lives in `dist/index.html`; the dates use en dashes. Cards use the existing
Roboto family on 88% white panels. The About Me and Experience headings are
bold; the Experience heading sits directly on the photograph without a panel.

A smooth, wavy white dotted route with a dark understroke connects the current
card, a pin beside the house, and the earlier role's pin. The isolated `dist/journey.js`
measures their positions after font loading and resizing and keeps decorations
clear of the house as the background's cover framing changes. Cubic curves
carry the route around the house without crossing its roof or stonework.
Original decorative map SVGs are in `dist/assets/journey/`: trees, mountains,
water, compass, pins and a signpost. At 860px and below the cards stack with
slight left/right offsets and a recalculated route. Decorations are hidden
from assistive technology and printing. No Experience navigation item is added.

## Education section

Education is the fourth full-width photographic section, immediately after
Experience. The original 960 × 1280 photograph is retained unchanged as
`dist/assets/education-rocks.jpeg`. Its three cards place the current PhD at
the upper left, the master's degree at the middle right and the bachelor's
degree at the lower left. Supplied dates, qualifications and thesis details
are retained in `dist/index.html`.

The cards use the existing Roboto family. The master's panel is 80% white;
the PhD and bachelor's panels remain 88% white. “Education” is 32px, bold and white. Original decorative climbing SVGs—climber, carabiner,
anchor and summit flag—are stored in `dist/assets/climbing/`. At 860px and
below, the cards widen and stack with alternating offsets. The illustrations
are hidden from assistive technology and printing. Other pages and navigation
remain unchanged.

## Closing contact and copyright

The untitled, centered contact section and copyright share one continuous
photographic background, `dist/assets/contact-table.jpeg`, after the main
homepage content. The original photograph is retained unchanged. The panel
reads “Would love to Connect and Collaborate.” and
“351A, Block IV, AM, IIT Delhi”, followed by five icon links.

Edit this copy and the links inside `.contact-ending` in `dist/index.html`;
these destinations are independent of `content.js`:

| Icon | Destination |
| --- | --- |
| IIT Delhi | `mailto:amz248506@iitd.ac.in` |
| Gmail | `mailto:sarang25pekhale@gmail.com` |
| LinkedIn | `https://www.linkedin.com/in/sarang-pekhale/` |
| GitHub | `https://github.com/Sarang-Pekhale` |
| Google Scholar | `https://scholar.google.com/citations?hl=en&user=Sr1XfkcAAAAJ` |

The contact symbols use a black-and-white presentation, with the official white
IIT Delhi mark on a black button. The copyright text sits directly on the photo
without a white panel, with a small text shadow for readability. Local Gmail,
LinkedIn, GitHub and Google Scholar assets are in `dist/assets/contact/`, with
sources and the GitHub Octicons MIT license in `NOTICES.md`. Accessible link
labels identify each destination. The homepage Research Interests block and
footer affiliation line are removed; the Research page remains available.

## Archived Wada photography artwork

The Wada window overlay and decorative hanging strip have been removed from the
homepage at the owner's request. The full-screen sunrise photograph now leads
directly to About Me, and the original title spacing is restored.

All three artwork files remain unchanged for a future photography section:

- `dist/assets/wada-window-frame.png` — transparent landscape wooden arcade.
- `dist/assets/wada-window-frame-portrait.png` — transparent portrait arcade.
- `dist/assets/wada-divider.svg` — repeating pale carved strip and pendants.

The possible future navigation item is “Clicks” or a camera icon; it has not
been added yet. Original generation prompts remain in `WADA-FRAME-NOTES.md`.
Reusable markup and styling are archived in `design-archive/WADA-PHOTOGRAPHY.md`.
