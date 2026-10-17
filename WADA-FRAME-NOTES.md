# Wada window frame — 17 October 2026

**Archived experiment:** the window overlay and hanging divider have been removed
from the homepage. Their assets are retained unchanged for a future photography
section, potentially named “Clicks” or represented by a camera icon. No gallery
or navigation item has been added. Reusable code is recorded in
`design-archive/WADA-PHOTOGRAPHY.md`.

The three-window hero architecture is original AI-generated artwork inspired by the owner's four reference images. It is a visual interpretation, not a measured reconstruction of a particular historic building. The built-in image-generation tool was used with transparent_background: true; no CLI or external image-generation API was used.

## Retained assets

- `/workspace/sites/sarang-pekhale/dist/assets/wada-window-frame.png` — landscape, 1536 × 1024 RGBA.
- `/workspace/sites/sarang-pekhale/dist/assets/wada-window-frame-portrait.png` — portrait, 887 × 1774 RGBA.
- `/workspace/sites/sarang-pekhale/dist/assets/wada-divider.svg` — original repeating carved strip and hanging pendants.

The PNGs retain their generated alpha transparency. In the archived experiment, they sat over the original, unedited sunrise JPEG, and all three openings showed the photograph. A picture source selected the portrait composition on portrait/square viewports. The live title, subtitle, links and fixed navigation are not baked into either image. The pale divider previously appeared below the full-screen hero. Neither decoration is currently displayed.

## Reference roles

- image(8).png: repeated scalloped arches and columns.
- image(9).png: larger central opening.
- image(10).png: decorative structural corbel; the animal is changed to an elephant as requested.
- image(20261016-225121).png: warm brown wood and carved surface finish; screenshot controls are excluded.

## Landscape generation prompt

Use case: historical-scene.
Asset type: photorealistic transparent architectural foreground for a personal website, landscape 1536x1024 or higher at same 3:2 ratio. Generate a NEW architectural asset inspired by the provided references; do not copy screenshot UI.
Reference 1: repeated cusped Maratha Wada arches and pillars. Reference 2: much larger central arch opening. Reference 3: position and sculptural structural character of animal corbels; REPLACE mythic animal with elephant. Reference 4: warm honey/teak brown, wood grain, softly rounded carved relief.
Primary request: a complete front-facing wooden Maratha Wada arcade consisting of EXACTLY THREE window openings, a substantially wider and taller central opening and two identical smaller side openings, all using the same traditional scalloped/multifoil arch shape. Four decorative pillars, the inner two framing the central opening, carved with fluting, floral bands, layered bases/capitals. One clearly recognizable carved wooden ELEPHANT support bracket high on each of the two central pillars, mirror paired, facing toward the center, with raised curved trunks, round ears, subtle small tusks and integral scrolling supports. These are wooden architectural carvings, not living elephants.
Composition: strict symmetrical flat frontal elevation, no perspective vanishing, no room/floor/walls. Asset fills canvas edge to edge as an architectural border. Top carved horizontal beam from y0 to about8%; central arched crown rises just below it; side arches spring lower at about22%. Central clear aperture spans roughly x20% to80%, side clear apertures approx x3% to17% and x83% to97%. Tall pillars extend to a shallow shared carved sill along bottom6%. Keep central x25–75%, y35–78% completely clear for LIVE website text added separately. No rail or lattice crosses that central clear area. Small side windows can have delicate low latticework below y86%, central opening has no balustrade. All wood parts including column bases touch canvas bounds, no empty outer margin. Main beam low-profile so photograph remains very visible.
Material: realistic warm medium brown polished aged teak matching reference4, natural grain, hand-carved relief, fine tool marks, soft worn edges, subtle golden highlights and deep crevice shadows. Well lit enough to see rich carving, NOT black silhouette. Physically plausible joinery. Restrained exquisite craftsmanship, no gold paint. Soft neutral daylight from front-left.
Transparency: genuine alpha transparency in ALL THREE open apertures and wherever no wood exists. No background color, no gray or white fill in openings, no scenery, no glass, no checkerboard painted in. It will be layered over an existing sunrise photograph, which must remain visible through openings.
No text, letters, labels, logo, watermark, people, screenshot controls, extra windows or arches. Preserve the carved elephant anatomy, same arch family and equal side openings. Photographic realism, not flat vector or cartoon.

## Portrait generation prompt

Use case: historical-scene.
Asset type: photorealistic transparent architectural foreground for a personal website, portrait 1024x2048 or higher at same 1:2 ratio for a phone screen. Generate a NEW architectural asset inspired by the provided references; do not copy screenshot UI.
Reference 1: repeated cusped Maratha Wada arches and pillars. Reference 2: much larger central arch opening. Reference 3: position and sculptural structural character of animal corbels; REPLACE mythic animal with elephant. Reference 4: warm honey/teak brown, wood grain, softly rounded carved relief.
Primary request: a complete front-facing wooden Maratha Wada arcade consisting of EXACTLY THREE window openings, a substantially wider and taller central opening and two identical smaller side openings, all using the same traditional scalloped/multifoil arch shape. Four decorative pillars, the inner two framing the central opening, carved with fluting, floral bands, layered bases/capitals. One clearly recognizable carved wooden ELEPHANT support bracket high on each of the two central pillars, mirror paired, facing toward the center, with raised curved trunks, round ears, subtle small tusks and integral scrolling supports. These are wooden architectural carvings, not living elephants.
Composition: strict symmetrical flat frontal elevation, no perspective vanishing, no room/floor/walls. Asset fills canvas edge to edge as an architectural border. Top carved horizontal beam from y0 to about8%; central arched crown rises just below it; side arches spring lower at about22%. Central clear aperture spans roughly x20% to80%, side clear apertures approx x3% to17% and x83% to97%. This is a purpose-designed narrow portrait composition: tall slender naturally proportioned carved columns, no horizontally squashed carving or stretched elephant anatomy. Keep all three complete windows on the canvas, no cropping. Central opening about 60% canvas width, matching side openings about 14% each; make these tall and narrow side bays. Tall pillars extend to a shallow shared carved sill along bottom6%. Keep central x25–75%, y35–78% completely clear for LIVE website text added separately. No rail or lattice crosses that central clear area. Small side windows can have delicate low latticework below y86%, central opening has no balustrade. All wood parts including column bases touch canvas bounds, no empty outer margin. Main beam low-profile so photograph remains very visible.
Material: realistic warm medium brown polished aged teak matching reference4, natural grain, hand-carved relief, fine tool marks, soft worn edges, subtle golden highlights and deep crevice shadows. Well lit enough to see rich carving, NOT black silhouette. Physically plausible joinery. Restrained exquisite craftsmanship, no gold paint. Soft neutral daylight from front-left.
Transparency: genuine alpha transparency in ALL THREE open apertures and wherever no wood exists. No background color, no gray or white fill in openings, no scenery, no glass, no checkerboard painted in. It will be layered over an existing sunrise photograph, which must remain visible through openings.
No text, letters, labels, logo, watermark, people, screenshot controls, extra windows or arches. Preserve the carved elephant anatomy, same arch family and equal side openings. Photographic realism, not flat vector or cartoon.
For this portrait variant, place the beam top y0–6%, central crown around y9%, elephant brackets high around y18–28%. The central opening must be completely transparent from x23%–77% and y30%–82% to fit a three-line title and subtitle without overlap. No ornament at the center. Make all arch carving and elephant details convincing and proportional.

## Final portrait refinement prompt

Use case: precise-object-edit. Edit this transparent portrait Maratha Wada wooden arcade asset. Preserve its warm teak color, photorealistic carving, floral pillars, THREE matching scalloped arches, two elephant brackets, symmetrical equal side openings, and transparent background. Make ONLY this targeted layout refinement: significantly widen the CENTER transparent window opening by shifting the two inner pillars and their attached elephant brackets outward toward their corresponding outer pillars. The center clear aperture must span x=19% to81% of total canvas width at y=35% to78%, leaving a generous 62% of canvas clear for large website text. Narrow both equal side bays correspondingly; retain a complete visible side opening on both sides and four pillars. Make the inner pillars somewhat slender to create room. Keep the elephant heads recognizable, carved, uncompressed, and facing inward. Center arch has same cusped shape, simply wider. Keep a consistent clear center x22–78% from y30–80%, no decorative intrusions there. No text, no gradients or background scenery in any aperture, retain genuine transparent alpha everywhere except wood. Canvas portrait 1:2. Do not crop the three-window structure. This is a realistic responsive website foreground, and the wider central opening is essential for text readability.

## Original implementation verification

Artwork inspected; transparency and asset integrity checked. Source checks confirm unchanged visible content, links, font sizes, header controller, existing divider and other pages. Geometry checks use font metrics and the image alpha channel to check text clearance at representative viewport sizes; they are not browser tests. Browser visual QA was unavailable in this environment.

