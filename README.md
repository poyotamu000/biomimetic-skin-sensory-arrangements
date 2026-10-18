# Biomimetic Skin: Sensory Arrangements

Project page for **Robotic physical comparison of biologically motivated and counterfactual sensory arrangements using biomimetic skin**.

Akihiro Miki, Shun Hasegawa, Yoshimoto Ribayashi, Yuta Sahara, Kento Kawaharazuka, and Kei Okada. *Bioinspiration & Biomimetics* **21**(4), 046009 (2026).

- Website: https://poyotamu000.github.io/biomimetic-skin-sensory-arrangements/
- Paper: https://doi.org/10.1088/1748-3190/ae7786

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000/. No installation or build is required.

## Editing

- `index.html`: research content, paper links, publication metadata, and BibTeX.
- `assets/style.css`: responsive layout.
- `assets/main.js`: figure enlargement, texture-result comparison, and citation copying.
- `assets/img/`: research figures rendered from the paper's PDFs.

The page follows the paper's scientific argument: shared skin and arrangements → two complementary robotic setups → three tactile tasks → cross-task tradeoffs → biological and robotic implications. HIRO-NX supplies pressing stimuli for spatial discrimination and weak-contact detection; PR2 supplies stroking stimuli for texture identification and vibration analysis.

Figures 1–9 are retained. Figures 4 (mechanical characterization) and 5 (pressure responses) appear in expandable method sections. Figures 7 and 8 are displayed in the texture section to connect waveforms, spectral features, classification, and feature dispersion. The latter is distinct from the across-speed accuracy penalty used in TDPI. Preserve that distinction and the scope of the physical comparisons when editing the results or discussion.

| Paper figure | Image file |
| --- | --- |
| 1 · Skin and arrangements | `skin-overview.png` |
| 2 · HIRO-NX setup | `touch-experiment.png` |
| 3 · PR2 setup | `texture-experiment.png` |
| 4 · Mechanical characterization | `skin-mechanics.png` |
| 5 · Pressure waveforms | `pressure-responses.png` |
| 6 · Spatial classification | `spatial-discrimination.png` |
| 7 · Texture waveforms and spectra | `texture-signals.png` |
| 8 · Texture feature distributions | `texture-features.png` |
| 9 · TDPI comparison | `task-tradeoffs.png` |

The arXiv and YouTube resource buttons show **Coming soon** and remain disabled until their URLs are available. To activate either one in `index.html`, find `arxiv-link` or `youtube-link`, replace its `<button … disabled>` / `</button>` tags with `<a class="button" href="YOUR_URL" target="_blank" rel="noopener noreferrer">` / `</a>`, and remove the `button-status` span. Keep the icon and resource name. Use the arXiv abstract URL (`https://arxiv.org/abs/…`) or the published YouTube video URL.

## Publication

GitHub Pages publishes the repository root on the `main` branch. The `.nojekyll` file allows these static files to be served directly. Updates pushed to `main` are published automatically.

## Attribution

Article text and figures: Akihiro Miki, Shun Hasegawa, Yoshimoto Ribayashi, Yuta Sahara, Kento Kawaharazuka, and Kei Okada, *Bioinspiration & Biomimetics* **21**(4), 046009 (2026), https://doi.org/10.1088/1748-3190/ae7786. The article is published under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
