# Rajani Vijayakumar portfolio

A responsive professional portfolio built with plain HTML, CSS and JavaScript. It introduces healthcare technology, quality engineering and application support experience, alongside an ongoing journey in AI and machine learning.

The hospital readmission project is **in progress**. The page does not claim validated model results or a deployed clinical application.

## Project structure

```text
portfolio/
├── .gitignore
├── README.md
└── site/
    ├── index.html     Content, navigation and project disclosure
    ├── styles.css     Colors, typography and responsive layout
    └── script.js      Optional light and dark theme switch
```

`site/` contains editable source files. There is no framework, package installation or build step. The optional local Word learning guide lives in `local-docs/`, which is ignored by Git and is not included in this repository. A clone will not contain that folder or guide.

## Run locally

With Python 3 installed, open a terminal in the repository's root folder and run:

```powershell
python -m http.server 8765 --bind 127.0.0.1 --directory site
```

Open **http://127.0.0.1:8765/** in your browser. Keep the terminal open while browsing. To stop the server, press **Ctrl+C** in that terminal. Restart with the same command. If the port is already in use, use 8766 in both the command and URL.

On a system where the Python 3 command is `python3` or `py`, use that command in place of `python`. The server serves only `site/` and binds to this computer's loopback address. Python's simple HTTP server is intended for local practice, not public production hosting.

## Make an edit

1. Open the source files in a plain text editor.
2. Change one thing and save the file.
3. Refresh the browser to see the change. There is no automatic reload.
4. Inspect your changes with `git diff` before committing them.

Useful first experiments:

- Change an About heading in `site/index.html` and refresh.
- Change the light theme's `--accent` variable in `site/styles.css`; observe which links and timeline dots change, then recheck contrast.
- Resize the browser across 760 CSS pixels and watch the sections stack.
- Use Tab and Enter to try the skip link, navigation and project disclosure. The theme button also supports Space.
- Switch the theme and reload. It returns to light because no preference is stored.
- Open DevTools → Network and refresh to inspect the document, CSS and JavaScript requests.

## Implementation

The site uses semantic landmarks, a keyboard skip link, visible focus styles and a responsive layout. The project notes use native HTML `details` and `summary` elements. The small JavaScript enhancement switches the color theme; content and navigation remain usable without it.

There is no backend, database, contact form, analytics, cookie, browser storage or external font. Displaying the page requires no third-party assets. Following the LinkedIn contact link navigates to an external service.

## Verification and limits

Local checks cover HTML/CSS/JavaScript responses, asset references, section links, JavaScript syntax, desktop and narrow layouts, skip-link focus, theme toggling and the project disclosure. Files outside `site/` are outside the preview web root.

These checks are not a complete accessibility or browser compatibility audit. Screen-reader use, real mobile devices, other browser engines and the current LinkedIn destination remain further checks. No ML results are validated by this website project.

## Hosting and future work

This repository contains source code. GitHub Pages and other website hosting are not enabled. A future deployment would publish only `site/`; choosing a host and optional custom domain is a separate decision.

Next steps include refining the portfolio copy, documenting the readmission project's methods and limitations when evidence is ready, and learning how deployment, DNS and HTTPS fit together. Add a backend only when a feature needs server-side processing or protected credentials. Never put secrets in browser-delivered files or commit private documents.
