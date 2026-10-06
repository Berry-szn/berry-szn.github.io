# Images to send me

Drop files in `photos/` using these exact names and they appear automatically.
Anything you do not send is simply not shown.

## Home page

| Name | What it is |
|---|---|
| `hero_background.jpg` | Wide shot used behind the home page, faded. Field, volcano or lab. Landscape works best. |
| `portrait.jpg` | Portrait beside your name on the home page. Plain background is fine. |

Currently the home page uses `at_the_console.jpg` as the background and
`portrait_lab_sign.jpg` beside it. Replace either or both.

## Thermal petrophysics

You mentioned the optical scanning work. Send them as:

| Name | What it is |
|---|---|
| `thermal_scanner.jpg` | The optical scanning device |
| `thermal_sample.jpg` | A sample being measured |
| `thermal_result.jpg` | A result or profile, if you have one |

I will add a Thermal petrophysics group to the Laboratory page when they arrive.

## Anything else

Send with a one-line description of what each shows, and I will caption them properly.
The last round went wrong because I guessed, and I am not doing that again.

---

## Added since the last round

From `Pictures_2.zip`:

- `headshot.jpg` — now the portrait on the home page
- `teaching_folk.jpg`, `teaching_folk2.jpg` — teaching the Folk classification
- `optical_scanner_rail.jpg`, `optical_scanner_samples.jpg`, `thermal_samples.jpg`,
  `thermal_scan_detail.jpg` — thermal petrophysics, now its own group on the Laboratory page
- `triaxial_rig.jpg`, `triaxial_column.jpg` — replacing the ones I had wrong
- `lagos_rain.jpg`, `moscow_river.jpg`, `moscow_winter.jpg`, `outdoors.jpg` — gallery
- GameDuel screenshots, now on the Startups page
- `basic_tomo_dali.png` — the BASIC Tomo screenshot showing a portrait recovered as the
  input model. The best screenshot in the set, because it makes bad ray coverage visible
  at a glance

## Still needed

| Name | What |
|---|---|
| `shots/petrosimx.png` | PetroSim X. There is a placeholder on the site until this arrives. I could not find the package in the portfolio zip, so send the screenshot and a line on what it does. |
| `photos/hero_background.jpg` | If you want something other than `at_the_console.jpg` behind the home page |

Check my captions on the thermal petrophysics images. I described the optical scanner as
non-contact and continuous-profile, which is how optical scanning normally works, but I have
not seen your method written down.

---

## From GUI.zip

I went through all 559 and took seventeen. The screenshots on the site now show the tools
running on real data rather than on launch.

| Where | What |
|---|---|
| Tomo Workbench | Checkerboard test on the Mendeleev network: input on the left, what the ray coverage recovers on the right |
| Seismophone | Records loaded with the audio mixer, per-channel pitch and speed |
| PROFIT | A refraction section at iteration 3 |
| Signal Pro | The filter design dialog over three-component traces |
| BASIC Tomo | The Dalí model with the variance reduction figure |
| Research page | Your back-azimuth roses: 141 accepted events, background against the August episode, and the slowness histogram at 0.134 s/km |
| Gallery | A Results group: velocity model at 4.3 km, checkerboard, ray coverage, refraction section, station map |
| Cowllar | Board layout, enclosure CAD, lid, herd view in the console |
| Laboratory | The optical scanning principle diagram, source and detector over a bare rock surface |

**One thing to fix in Signal Pro.** The filter dialog is titled "Filter Disign". It is in the
screenshot now on the site. Worth correcting in the code and recapturing.

---

## Round three: what I corrected

**Duplicates removed.** The gallery no longer repeats the laboratory, Cowllar, electronics or
teaching photographs, since each already appears in its own section. It now carries only
Skoltech and Elsewhere, nine images that live nowhere else.

**The motor.** I had labelled it a Tesla coil. It is a simple electric motor: wound rotor,
coil, and a frame cut to hold them. The schematic is a separate project, a slayer exciter
with a four-turn primary and a thousand-turn secondary, and is captioned as such.

**Signal Pro.** The screenshot I used was DIMAS. Signal Pro is a signal-processing teaching
tool with eleven topics, Fourier synthesis through to the Gibbs phenomenon, and it has moved
from Seismology to Teaching where it belongs. The description was wrong too and is rewritten.

**Per-tool galleries.** Tomo Workbench now shows seven screens, BASIC Tomo six, PROFIT and
Signal Pro three each. Click any thumbnail to open it full size.

**BASIC Tomo** gained its teaching results: the checkerboard recovery, the smoothing
comparison, grid spacing, ray coverage, and your conclusions slide on the resolution and
stability trade-off.

**Home page portrait removed. About page** now uses the photograph by the Hydrocarbon
Recovery Laboratory sign, and is rewritten in four parts: how you got here, what you work on
now including the RSF grant number and the earthquake seismology, teaching, and outside work.

## Still open

- `shots/petrosimx.png` is the real simulator now, but ResistivityIP, WellTest and Wellbore
  Stability still show my own captures on launch. If screenshots of those running exist,
  send them.
- The Signal Pro filter dialog is titled "Filter Disign" in your code.

---

## Round four

**The home page is an animation now.** Not a figure and not decoration. An earthquake happens
south-west of the array, the P wavefront leaves first and the S follows more slowly, and as
each front reaches a station that station turns red then blue and its trace begins to move,
with the pick appearing where the arrival lands. The move-out builds up as a diagonal across
the traces, which is the thing the whole method depends on.

The station positions are your real short-period network: twenty stations, 6.85 by 1.65 km,
from the coordinates in `stat_ft.dat`. Velocities are 5.5 and 3.2 km/s. Playback is 1.8 times
slower than real so the fronts are followable. It loops with a short hold, pauses when
scrolled out of view, and renders the finished state if the system asks for reduced motion.

It is in `assets/hero.js` and the geometry sits at the top of that file if you want to change
the event position or the velocities.

**Research gained a workflow section.** Six images taking a reader from a day of continuous
records through filtering, picking, station geometry, location and the residual surface.
These are DIMAS screenshots and I have captioned them as the analyst workflow rather than as
your software, since that is what they are, and the point is that this is the reference your
automated pipeline is measured against.

**Figure 6 and Figure 7 from your paper** are now the local and regional examples, on the
Research page.
