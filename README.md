# SpecRefit website

Static project website for https://specrefit.dev, published with GitHub Pages from the root of `main`. No build tools, third-party scripts, web fonts, analytics or cookies are required.

The product is in development. Keep release availability and planned functionality explicit; the content-type switch is an illustration, not a working OpenAPI editor.

## Local preview

On this workstation, keep the checkout on D: and run preview servers and checks in WSL:

```sh
cd /mnt/d/GitHub/specrefit.github.io
python3 -m http.server 4173 --bind 0.0.0.0
```

Visit http://localhost:4173. Check narrow and wide screens, both color themes, keyboard navigation and the JSON preference example before publishing.

## Publishing

GitHub Pages serves `main` at `/`. The custom domain is `specrefit.dev`; enforce HTTPS once GitHub has provisioned the certificate. DNS is managed at TransIP. `play.specrefit.dev` is reserved for a separately published editor and is not deployed by this repository.

## Brand

Use the approved blue and teal logo in both themes. The source comparison selected was variant B (logo 2). `assets/specrefit-logo.png` is a transparent extraction made with the built-in image generation tool. `assets/mark.svg` is the small-size vector adaptation for the favicon.

Image prompt: “Use case: background-extraction. Edit target: attached approved SpecRefit blue and teal logo comparison. Extract EXACTLY ONE horizontal logo (symbol plus SpecRefit wordmark) from the upper panel onto a genuinely transparent background. Preserve original symbol geometry, letter shapes, spacing and proportions. Remove the panel backgrounds, the label B · Blauw & teal, and the duplicate logo. Flat blue #527CDA for upper symbol and Spec, teal #159C91 for lower symbol and Refit. No redesign, no shadow, no glow, no extra text. Tight canvas around the complete logo with a small even transparent margin. Website-ready horizontal lockup, exact spelling SpecRefit.”
