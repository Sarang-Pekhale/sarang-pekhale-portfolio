# Wada artwork for a future photography section

Archived on 17 October 2026 at the owner's request. The homepage no longer
shows the window overlay or hanging strip. These files remain unchanged:

| Asset | Intended reuse |
| --- | --- |
| `dist/assets/wada-window-frame.png` | Landscape three-window photo foreground |
| `dist/assets/wada-window-frame-portrait.png` | Portrait three-window photo foreground |
| `dist/assets/wada-divider.svg` | Repeating carved band with hanging pendants |

A future photography section may use “Clicks” or a camera icon in navigation.
That section is not implemented. The original generation prompts and reference
roles remain in `../WADA-FRAME-NOTES.md`.

## Prior implementation snippets

Copied from commit `c044a33ab13f7fd9e7779b26ccdf1e2c52e84cee`. These snippets
are inactive documentation, not a new page. Adapt the About-specific selectors,
relative asset paths, framing and title spacing when designing the gallery.
The picture was the first child of the relatively positioned hero; the divider
followed the closing hero section. Decoration was hidden from assistive
technology and printing, and did not intercept pointer events.

```html
<picture class="wada-window-frame" aria-hidden="true">
<source media="(max-aspect-ratio: 1/1)" srcset="./assets/wada-window-frame-portrait.png" width="887" height="1774">
<img src="./assets/wada-window-frame.png" width="1536" height="1024" alt="" fetchpriority="high" decoding="async">
</picture>
<!-- After the hero section: -->
<div class="wada-divider" aria-hidden="true"></div>
```

```css
/* Wada-inspired carved cornice and pendants, revealed after the full-screen hero. */
body[data-page="about"] .wada-divider{width:100vw;height:144px;margin-left:calc(50% - 50vw);background:#fff url('assets/wada-divider.svg') center top / auto 100% repeat-x;pointer-events:none}
@media(max-width:680px){body[data-page="about"] .wada-divider{height:120px}}
@media print{body[data-page="about"] .wada-divider{display:none}}

/* Transparent carved windows frame the existing photograph and live introduction. */
body[data-page="about"] .wada-window-frame{position:absolute;inset:0;z-index:0;display:block;width:100%;height:100%;pointer-events:none;user-select:none}
body[data-page="about"] .wada-window-frame img{display:block;width:100%;height:100%;max-width:none;object-fit:fill}
body[data-page="about"] .intro-content{position:relative;z-index:1;width:46%;max-width:800px;padding-inline:0}
@media(max-aspect-ratio:1/1){body[data-page="about"] .intro-content{width:54%}}
@media(max-width:900px) and (max-height:500px) and (min-aspect-ratio:1/1){body[data-page="about"] .intro-content{max-width:280px}}
@media print{body[data-page="about"] .wada-window-frame{display:none}body[data-page="about"] .intro-content{width:100%;max-width:none}}
```
