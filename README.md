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

GitHub Pages serves `main` at `/`. The custom domain is `specrefit.dev`; enforce HTTPS once GitHub has provisioned the certificate. DNS is managed at TransIP. The development editor at `play.specrefit.dev` is separately published by the product repository after successful main builds. This website links to it but does not deploy it.

## Brand

Use the approved blue and teal logo in both themes. The source comparison selected was variant B (logo 2). `assets/specrefit-logo.png` is a transparent extraction made with the built-in image generation tool. `assets/mark.svg` is the small-size vector adaptation for the favicon.

Image prompt: “Use case: background-extraction. Edit target: attached approved SpecRefit blue and teal logo comparison. Extract EXACTLY ONE horizontal logo (symbol plus SpecRefit wordmark) from the upper panel onto a genuinely transparent background. Preserve original symbol geometry, letter shapes, spacing and proportions. Remove the panel backgrounds, the label B · Blauw & teal, and the duplicate logo. Flat blue #527CDA for upper symbol and Spec, teal #159C91 for lower symbol and Refit. No redesign, no shadow, no glow, no extra text. Tight canvas around the complete logo with a small even transparent margin. Website-ready horizontal lockup, exact spelling SpecRefit.”

## Download availability

The landing page links to https://github.com/SpecRefit/specrefit/releases/tag/development for successful development builds. Release 0.2.0 provides browser assets and portable Windows x64, macOS Apple Silicon/Intel and Linux x64 desktop packages. The primary download links to https://github.com/SpecRefit/specrefit/releases/latest; the development link remains separate. There is one rolling development prerelease, replaced after successful main builds. GitHub Latest points to the versioned release. Windows is unsigned and macOS is not notarized; release notes describe support limits. The hosted playground was verified on 2026-10-02 after [the first deployment](https://github.com/SpecRefit/specrefit/actions/runs/37063276439): HTTPS, commit-derived version, example navigation and local contract import passed in Chromium under WSL, with no contract upload observed. The website links to that preview and shows a teal GitHub ribbon on screens at least 1400px wide; narrower screens retain the navigation link. Both themes, wide/narrow layouts and keyboard interaction were checked.

The 0.1.0 landing-page update was checked in Chromium under WSL at 390px and 1440px, in both themes, including release/preview links, layout overflow, keyboard theme switching and the illustrative media toggle.

The 0.2.0 website update was checked locally in Chromium under WSL at 390px and 1440px, in both themes, including stable/development links, overflow, keyboard theme switching and the media illustration. It follows the verified publication of [0.2.0](https://github.com/SpecRefit/specrefit/releases/tag/v0.2.0); desktop reference guidance now matches the automatic local-reference behavior.
