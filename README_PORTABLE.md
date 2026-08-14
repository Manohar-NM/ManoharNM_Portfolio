# Manohar N M Portfolio

This is the complete, self-contained static portfolio. It preserves the existing SHAN visual design, local CSS, JavaScript, GSAP animation files, images, resume, project assets, navigation, and contact interactions.

## Run locally

Use any static-file server from this folder. The recommended command is:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

Do not run the command from the parent folder. Run it from the folder that contains `index.html`.

## VS Code

Install the **Live Server** extension, open this folder, right-click `index.html`, and choose **Open with Live Server**.

## Node.js option

If Node.js is installed, you can use:

```bash
npx serve . -l 4173
```

## Windows PowerShell

```powershell
cd path\to\shan-portfolio
py -m http.server 4173
```

## Important

This project is a static website and does not require npm installation, a build step, a database, or environment variables. Keep the complete folder structure unchanged, especially `assets/`, because the HTML references those files with relative paths.

The site should be run through a local HTTP server for the most consistent behavior across browsers and editors. Opening `index.html` directly with `file://` may still display the page, but some browser security settings can affect external fonts or browser interactions.

The portfolio uses online Google Fonts when an internet connection is available and includes system fallbacks so the layout remains usable offline. External links such as GitHub, LinkedIn, Google Maps, and email require internet or the corresponding local application.

## Main files

- `index.html` — portfolio markup and content
- `assets/css/main.css` — portfolio styling and responsive rules
- `assets/js/main.js` — interactions and contact-form email behavior
- `assets/js/custom-gsap.js` — existing GSAP/ScrollTrigger animation logic
- `assets/images/` — profile, project, hackathon, experience, shape, and icon assets
- `assets/resume.pdf` — downloadable resume
