# SpecRefit website

Static project website for https://specrefit.dev, published with GitHub Pages from the root of `main`. No build tools, third-party scripts, web fonts, analytics or cookies are required.

The product is in development. Keep release availability and planned functionality explicit; the content-type switch is an illustration, not a working OpenAPI editor.

## Local preview

Serve the repository root with any static HTTP server. For example, with Python available, run from this directory:

```sh
python3 -m http.server 4174 --bind 127.0.0.1
```

Visit http://localhost:4174. Check narrow and wide screens, both color themes, keyboard navigation and the JSON preference example before publishing. Keep machine-specific setup in a local, uncommitted file.

## Publishing

GitHub Pages serves `main` at `/`. The custom domain is `specrefit.dev`; enforce HTTPS once GitHub has provisioned the certificate. DNS is managed at TransIP. `play.specrefit.dev` is reserved for a separately published editor and is not deployed by this repository.

## Brand

Use the approved blue and teal logo in both themes. The source comparison selected was variant B (logo 2). `assets/specrefit-logo.png` is a transparent extraction made with the built-in image generation tool. `assets/mark.svg` is the small-size vector adaptation for the favicon.

Image prompt: “Use case: background-extraction. Edit target: attached approved SpecRefit blue and teal logo comparison. Extract EXACTLY ONE horizontal logo (symbol plus SpecRefit wordmark) from the upper panel onto a genuinely transparent background. Preserve original symbol geometry, letter shapes, spacing and proportions. Remove the panel backgrounds, the label B · Blauw & teal, and the duplicate logo. Flat blue #527CDA for upper symbol and Spec, teal #159C91 for lower symbol and Refit. No redesign, no shadow, no glow, no extra text. Tight canvas around the complete logo with a small even transparent margin. Website-ready horizontal lockup, exact spelling SpecRefit.”

## Download availability

The landing page links to https://github.com/SpecRefit/specrefit/releases/latest for successful development builds. Currently only browser files and an experimental Linux x64 desktop bundle are available. Keep unavailable platforms and stable releases explicit. Before stable release publication, introduce separate persistent development and stable URLs with the product publisher; GitHub has only one Latest pointer. The hosted playground link should become active only after the product repository deployment has been verified.
