# Site

Seven pages, no framework, no build step.

```
index.html        home: who you are, the seismogram, the audio, six cards
research.html     the three deployments, the recovery figure, methods
publications.html three papers, six manuscripts, abstracts behind a toggle
software.html     twelve packages, grouped, each with facts and features
laboratory.html   rock mechanics and petrophysics
startups.html     Cowllar, then the electronics
about.html        two paragraphs, contact, CV
admin.html        visual editor, runs in your browser, nothing uploaded

assets/content.js   everything the site says. the only file you normally edit
assets/traces.js    the hero seismogram, real data, 24 March 2024
assets/style.css
assets/site.js      shared header, footer, seismogram, renderers
assets/page-*.js    one short file per page
```

## Hosting

1. Repository named **`Berry-szn.github.io`**
2. Upload everything here
3. Settings → Pages → deploy from `main`, root
4. Live at **https://berry-szn.github.io**

Put `CV_Agbelusi.pdf` beside `index.html` and every CV link works.

## Changing it later

Open **admin.html** in your browser. Edit anything, add or remove entries, reorder them,
then press **Download content.js** and replace `assets/content.js` in the repository.

To add an image: put the file in `photos/` or `shots/`, then type its path in the editor.

## What is real on this site

The seismogram is six stations from 24 March 2024, bandpassed 2 to 18 Hz. The P and S marks
are automatic STA/LTA detections, not analyst picks, and the caption says so. The two audio
clips are the same networks at 22 times speed. Every screenshot was taken by launching the
application, and every test count came from running the suite.

## Still to do

- Drop in `CV_Agbelusi.pdf`
- Recapture the screenshots with data loaded. Tomo Workbench has a synthetic example in its
  File menu, ResistivityIP ships the Wilberforce data, WellTest ships eight datasets. A
  screenshot showing a result is worth more than one showing an empty form.
