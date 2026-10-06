/* ─────────────────────────────────────────────────────────────
   Everything the site says lives here.
   Edit by hand, or use admin.html to edit it visually.
   ───────────────────────────────────────────────────────────── */

window.SITE = {

profile: {
  name:   "Akinrinsola J. Agbelusi",
  role:   "Computational seismology",
  line:   "I find earthquakes that regional networks never catalogue, and write the software that locates and images them.",
  second: "On a geothermal field in Kamchatka the regional network catalogued one event in six weeks. Our temporary array detected nearly two hundred.",
  email:  "Akinrinsola.Agbelusi@skoltech.ru",
  github: "https://github.com/Berry-szn",
  rg:     "https://www.researchgate.net/profile/Agbelusi-Akinrinsola",
  cv:     "CV_Agbelusi.pdf",
  place:  "Skoltech, Moscow",
  hero:   "photos/at_the_console.jpg",
  heroAlt:"Running a measurement at the Skoltech Hydrocarbon Recovery Laboratory",
  portrait:"photos/headshot.jpg",
  portraitAlt:"Akinrinsola J. Agbelusi"
},

/* home page only */
home: {
  cards: [
    { h: "Research",     d: "Three deployments in Kamchatka and the Kurils, and what each network could and could not resolve.", to: "research.html" },
    { h: "Software",     d: "Fourteen packages for seismology, resistivity, well testing and rock mechanics, each shown running.", to: "software.html" },
    { h: "Publications", d: "Three papers and six software manuscripts in preparation.", to: "publications.html" },
    { h: "Laboratory",   d: "Rock mechanics and petrophysics measurements, the data that sits underneath a velocity model.", to: "laboratory.html" },
    { h: "Startups",     d: "Cowllar, a collar that watches a cow and decides what needs attention. And the things I build that are not research.", to: "startups.html" },
    { h: "Gallery",      d: "Laboratory, hardware, and the things that were not research.", to: "gallery.html" },
    { h: "About",        d: "Lagos to Moscow, and what has stayed the same.", to: "about.html" }
  ]
},

audio: {
  caption: "Two earthquakes from the Kamchatka networks, played at 22 times speed so frequencies of 1 to 30 Hz land where you can hear them. Four hundred seconds of record in eighteen seconds of sound: quiet background, the arrival, then the coda.",
  clips: [
    { label: "JRV03, 24 March 2024",  src: "audio/kamchatka_event_1.mp3" },
    { label: "JRV35, 1 October 2023", src: "audio/kamchatka_event_2.mp3" }
  ]
},

research: {
  heading: "What a configuration can and cannot support",
  interests: [
    { k:"Geothermal systems", v:"Seismic monitoring of geothermal fields: what a temporary array can detect, where the events sit, and how that constrains a reservoir." },
    { k:"Earthquake detection", v:"Machine-learning phase picking, association and catalogue construction, and measuring the detection capability rather than assuming it." },
    { k:"Imaging and resolution", v:"Local earthquake tomography, and the resolution analysis that decides whether an image means anything." },
    { k:"Array processing", v:"Beamforming and slowness analysis where the geometry rules out location, so direction is what remains." },
    { k:"Rock mechanics", v:"Laboratory measurement of the properties a velocity model is trying to recover." },
    { k:"Induced seismicity", v:"Monitoring where human activity is the source, which is the same detection problem under harder conditions." }
  ],
  intro: [
    "My work is earthquake detection and imaging on temporary seismic deployments in Kamchatka and the Kuril Islands. Producing a catalogue is straightforward; knowing whether to believe it is not, and the second question has shaped everything I have done.",
    "I work in Prof. Ivan Koulakov's group at Skoltech and the University of Kamchatka, on a Russian Science Foundation project on seismic monitoring of geothermal areas."
  ],
  campaigns: [
    { name:"Bolshe-Bannye", place:"Southern Kamchatka", period:"2024",
      network:"20 short-period stations · 6.9 × 1.7 km · two months",
      what:"First seismological study of a geothermal field under consideration for development. I built the catalogue with deep-learning phase pickers, located the local events, and measured what the array could detect against two independent references.",
      result:"The regional permanent network catalogued one event within 20 km of the field in six weeks. The local array detected 195." },
    { name:"Mutnovsky-Gorely", place:"Southern Kamchatka", period:"2023",
      network:"65 stations",
      what:"Built the earthquake catalogue underlying a local earthquake tomography study of the volcanic complex, taking it from 160 manually picked events to more than 3,300 and changing what the inversion could resolve.",
      result:"Second author on the resulting manuscript, under review at JGR Solid Earth." },
    { name:"Mendeleev", place:"Kunashir, Kuril Islands", period:"2023",
      network:"Small island network",
      what:"Derived a one-dimensional velocity model, then established that the geometry could not resolve the shallow crust: local rays arrive near-vertically and regional rays near-planar, so nothing crosses above a certain depth.",
      result:"The result is a statement of what this geometry can resolve, and at what depth it stops." }
  ],
  figure: {
    caption:"Fraction of 1,150 manually picked arrivals recovered by three deep-learning phase pickers, against source-receiver distance, on a 6.9 km array. The 10 to 20 km interval holds 11 arrivals and is omitted.",
    note:"Recovery falls to roughly a third of its far-field value within 10 km, which is where a geothermal survey's events lie. Lowering the detection threshold does not recover them: at a probability of 0.05 recall still reaches only 47 per cent. A model trained specifically on volcanic events did not close the gap either, so the deficit is not a matter of training domain. At two to five kilometres on a small array the P and S arrive within about a second of each other and the waveform is short and impulsive, unlike anything in the training data of a general model. Conventional quality filters then compound it: requiring four recording stations removes events that only three stations could ever have recorded."
  },
  workflow: {
    heading: "From record to catalogue",
    intro: "Two months of continuous three-component data becomes a catalogue through four steps. The reference against which all of it is measured is a set of events picked by hand in DIMAS, the analyst software used by the group, and I show that alongside so the comparison is clear.",
    items: [
      { img:"shots/record_section.png", cap:"The raw material: a day of continuous records across the array, with move-out visible where an event crosses it." },
      { img:"shots/pick_filter.png", cap:"Filtering before picking. Band limits are chosen from the spectrum of the signal against the spectrum of the noise, not by habit." },
      { img:"shots/picked_multi.png", cap:"Picked arrivals on seven stations, P in red and S in blue. This is the reference an automatic picker is measured against." },
      { img:"shots/pick_map_traces.png", cap:"Station geometry and records together in DIMAS, which is how an analyst works through an event." },
      { img:"shots/locate_results.png", cap:"Locating an event from its arrivals: the phase table, the travel-time model and the solution with its uncertainty." },
      { img:"shots/pick_locate.png", cap:"The location solution plotted, with the residual surface that shows how well constrained it is." }
    ]
  },

  figure3: {
    img:"shots/event_regional.png",
    caption:"A regional event recorded on the same array, 18 August 2024, band-pass filtered 1 to 11 Hz. The S minus P time at the nearest station is 20.6 seconds. The wavefront crosses the array with almost no move-out, which is why an event like this can be assigned a direction but not a location."
  },
  figure2: {
    img:"shots/backazimuth_rose.png",
    caption:"Direction of arrival for 141 regional events recorded at Bolshe-Bannye, measured by beamforming and frequency-wavenumber analysis across a 6.9 km array. Left: all accepted events. Centre: the background population against the episode of 17 to 19 August. Right: horizontal slowness, median 0.134 s/km, an apparent velocity of 7.5 km/s and therefore a mantle path. The array cannot locate these events, so direction and slowness are what remains."
  },
  methods: [
    { k:"Picking and association", v:"SeisBench (PhaseNet, EQTransformer, VolPick), PyOcto, DIMAS" },
    { k:"Location and imaging",    v:"LOTOS, READ_autopick, Tomo Workbench" },
    { k:"Array processing",        v:"Beamforming, frequency-wavenumber analysis, ObsPy" },
    { k:"Machine learning",        v:"PyTorch, scikit-learn" },
    { k:"Other geophysics",        v:"Oasis Montaj, Surfer, Petrel" }
  ]
},

publications: {
  groups: [
    { title:"Papers", items:[
      { t:"Seismicity of the Bolshe-Bannye geothermal field, Kamchatka, from automated detection: capability and limits of a small-aperture network",
        a:"Agbelusi, A. J., and Koulakov, I.", v:"Geophysical Technologies", y:"2026", s:"submitted",
        abs:"The Bolshe-Bannye thermal field in southern Kamchatka is being assessed for geothermal development, and no seismological study of it has been published. A temporary network of twenty short-period stations, spanning 6.9 by 1.7 kilometres, recorded continuously for two months in 2024. This paper reports the seismicity that network detected, and the limits of what it could detect.\n\nPhase arrivals were picked with PhaseNet, EQTransformer and VolPick through SeisBench at a threshold chosen by sweeping from 0.05 to 0.70, associated by coincidence over a window derived from the measured spread of P arrivals across the array, and classified by distance into local, intermediate and regional. The result is 2,393 events: 250 local, 317 intermediate and 1,826 regional. Of the local events, 139 were located, with a median epicentral distance of 4.25 kilometres and a median depth of 2 kilometres.\n\nThe catalogue is validated two ways. Against 1,150 arrivals picked by hand on five reference days, automatic recovery is 36 per cent for PhaseNet and 37 for VolPick, and falls to roughly a third of its far-field value for sources within ten kilometres. Lowering the detection threshold does not recover them, and a picker trained on volcanic events does not close the gap, so the deficit is geometric rather than a matter of training domain. Against the regional permanent catalogue, 996 of 2,257 catalogued events are detected, against 1.5 per cent expected by chance, which gives a detection curve across distance and energy class. Within twenty kilometres of the field that catalogue contains one event over the same period.\n\nRegional events cannot be located by an array of this size, so their direction of arrival was measured by beamforming and frequency-wavenumber analysis instead. Of 297 events tested, 222 give consistent results between the two methods, arriving from 60 to 150 degrees at an apparent velocity of 7.6 kilometres per second. Checked against 124 catalogued epicentres, the measured azimuths agree to a median of 9 degrees.\n\nThe conclusion is about aperture. One geometry fails at both ends of the distance range, for opposite reasons: too large for the near field, where P and S arrive within a second of one another, and too small for the regional field, where the wavefront crosses it with no measurable move-out." },
      { t:"Crustal magmatic and hydrothermal system of the Mutnovsky-Gorely volcanic complex (Kamchatka) imaged by local earthquake tomography",
        a:"Koulakov, I., Agbelusi, A. J., Stupina, T., Abkadyrov, I., Khmarin, E., and Chebrov, D. V.",
        v:"Journal of Geophysical Research: Solid Earth", y:"2026", s:"under review",
        abs:"Local earthquake tomography of the Mutnovsky and Gorely volcanic complex in southern Kamchatka, imaging the crustal magmatic and hydrothermal system beneath an area under active geothermal development.\n\nMy contribution was the earthquake catalogue the inversion is built on. Records from the network were processed with deep-learning phase pickers, associated and quality-filtered, which took the dataset from roughly 160 events picked by hand to more than 3,300. That increase is what changed the ray coverage, and with it what the inversion was able to resolve; the published images could not have been obtained from the manual catalogue. I am credited for methodology, software, investigation and data curation, and produced one of the figures.\n\nThe tomography, interpretation and the geological argument are the lead author\u2019s." },
      { t:"Comparative analysis of thermal insulation properties of bricks made from local and industrial by-products",
        a:"Okiye, S. E., Emekwisia, C. C., Igwe, E. S., Omofaye, V. I., Agbelusi, A. J., and others",
        v:"American Journal of Applied Sciences and Engineering, 6(3), 11-16", y:"2025", s:"published",
        doi:"https://doi.org/10.5281/zenodo.16229391",
        note:"A materials study from my undergraduate years, measuring the thermal insulation of bricks made from local clays and industrial by-products. I contributed to the measurements and the analysis." }
    ]},
    { title:"Software manuscripts in preparation",
      note:"Each describes one of the packages, and each reports verification against published cases or analytic solutions rather than only describing features.",
      items:[
      { t:"ResistivityIP Workbench: an open-source DC resistivity and induced polarization modeling, inversion and appraisal framework with transparent non-uniqueness analysis",
        a:"Agbelusi, A. J.", v:"In preparation", s:"in preparation",
        abs:"Direct-current resistivity and induced polarisation surveys are routinely interpreted as though the inversion returned one answer. It does not. A layered model is non-unique in a way that is well understood in theory and almost never shown in practice: a thin conductive layer and a thicker, less conductive one can produce the same sounding curve to within the noise. This paper describes an open-source workbench that forward models one-dimensional soundings and two-dimensional profiles, inverts them by Marquardt, Occam and blocky schemes, and then maps the family of models that fit the data equally well. Verification is against analytic solutions and against cases published by others; validation uses independently published field soundings that the software was never tuned on. In one of those cases the inversion fits the measured data better than the published model while preferring a simpler layering, and the paper reports that disagreement rather than resolving it. The package ships with 102 tests, a teaching mode and a report generator." },
      { t:"Seismophone: an interactive multi-channel tool for audification and visualization of seismic data",
        a:"Agbelusi, A. J.", v:"Seismological Research Letters, Electronic Seismologist", s:"in preparation",
        abs:"Seismic records are almost always read as pictures. Audification converts them to sound instead, which suits the ear\u2019s sensitivity to onset, rhythm and timbre, but it is easy to produce audio that sounds compelling and represents nothing. This paper describes an interactive tool that audifies multi-channel records with per-channel control of pitch and playback speed, places each station in the stereo field using its real coordinates, and shows the waveform and spectrogram alongside so that anything heard can be checked against what produced it. The implementation is verified in groups covering the reader, the resampling, the panning and the export, with the panning confirmed against measured channel energy. It is demonstrated on a 38-station record from Kamchatka. The paper states plainly that this is a demonstration rather than a validation against ground truth, and reports that an informal listening test was consistent with audification conveying detectable event information but did not support fine discrimination of event type by ear." },
      { t:"An open-source, transparent well-test interpretation and teaching workbench with quantified non-uniqueness analysis",
        a:"Agbelusi, A. J.", v:"In preparation", s:"in preparation",
        abs:"A pressure-transient test is interpreted by matching a model to a derivative curve, and more than one model will usually match. Wellbore storage can mimic a bounded reservoir, a dual-porosity signature can resemble a composite one, and the choice between them is often made on convention rather than on the data. This paper describes an open workbench that performs the standard analysis, log-log diagnostics, semilog analysis, history matching and inversion for homogeneous, dual-porosity and composite systems, and then quantifies how many parameter combinations reproduce the measurement within its uncertainty. The result is reported as a family with bounds rather than a single set of numbers. A teaching mode runs the same machinery on synthetic tests so a student can see the ambiguity before meeting it in field data." },
      { t:"A compact interpretable core-loss model for soft ferrites based on normalized slew-rate moments",
        a:"Agbelusi, A. J.", v:"In preparation", s:"in preparation",
        abs:"Core loss in soft magnetic materials is predicted either by Steinmetz-type expressions, which are compact and interpretable but inaccurate under non-sinusoidal excitation, or by neural networks, which are accurate but opaque and require large training sets. This paper proposes a model built from normalised slew-rate moments of the flux waveform: a small set of physically meaningful terms rather than tens of thousands of weights. Evaluated on ten materials from the open MagNet database, covering Ferroxcube, Fair-Rite and TDK ferrites, it reduces the mean relative error from 17.7 per cent for the improved generalised Steinmetz equation to 11.1 per cent, and the 95th-percentile error from 47.4 to 31.2 per cent. A single-precision C implementation is included, and the ablation study reports which terms carry the improvement." },
      { t:"Label-free subject normalization for cross-subject human activity recognition",
        a:"Agbelusi, A. J.", v:"IEEE Journal of Biomedical and Health Informatics", s:"in preparation",
        abs:"Activity recognition models trained on one group of people lose accuracy on another, because the same activity produces different sensor signatures depending on how a person moves and where the device sits. The usual remedies require labelled data from each new subject. This paper evaluates a normalisation applied without any labels at all, using only the statistics of the new subject\u2019s own unlabelled recording. On the UCI Human Activity Recognition benchmark, 10,299 windows from 30 subjects, leave-one-subject-out accuracy rises from 92.50 to 95.27 per cent and the variance between subjects falls. The paper also reports how much unlabelled data is needed before the benefit appears, and shows that a classifier can still identify which subject a window came from at well above chance after normalisation, so the transformation does not simply erase individual identity." },
      { t:"An open, exhaustively verified generator for fixed-point elementary-function units with automatic architecture selection",
        a:"Agbelusi, A. J.", v:"IEEE Embedded Systems Letters or SoftwareX", s:"in preparation",
        abs:"Fixed-point implementations of elementary functions are usually validated by sampling the input space and quoting a maximum observed error. This paper describes a generator that verifies exhaustively instead: for sixteen-bit precision it evaluates all 65,536 inputs for each of eight functions, sigmoid, tanh, GELU, exp2, log2, reciprocal, square root and sine, and reports zero mismatches against the reference. The generator selects between lookup, piecewise-linear and non-uniform segmentation automatically from the accuracy and area targets, and emits both C and synthesisable Verilog. Measured flash, RAM, text and read-only data footprints on an ARM Cortex-M target are reported per function and per method, alongside gate-count estimates for the hardware path." }
    ]}
  ]
},

software: {
  intro: "I write software when the tool I need does not exist, or when the one that does is too hard for a student to pick up. Most of these started that way.",
  groups: [
    {
      name: "Seismology",
      items: [
        { n:"Tomo Workbench", s:"in development", img:"shots/tomo_checkerboard.png",
          one:"Three-dimensional local earthquake tomography, end to end.",
          d:"Takes picks, stations and a one-dimensional starting model through association, location, catalogue cleaning and velocity inversion. Synthetic resolution tests and convergence diagnostics are included, so the resolution of a result can be checked in the same session that produced it. The screenshot is a checkerboard test on the Mendeleev network: the input pattern on the left, what the ray coverage actually recovers on the right.",
          facts:[["Size","13,703 lines"],["Built with","Python, PyQt"],["Licence","MIT"],["Used on","Mendeleev and Mutnovsky-Gorely"]],
          feats:["Association and location from raw picks","3D Vp and Vp/Vs inversion","Checkerboard and synthetic tests","Damping and grid tuning","Convergence diagnostics"],
          shots:["shots/tomo_setup.png","shots/tomo_association.png","shots/tomo_1d_optim.png","shots/tomo_velocity_model.png","shots/tomo_model_section.png","shots/tomo_ray_coverage.png","shots/tomo_convergence.png"] },
        { n:"Seismophone", s:"paper in preparation", img:"shots/seismophone_mixer.png",
          one:"Seismic records you can listen to.",
          d:"Turns a multi-channel record into sound, with spatial audio mapped from the real station geometry, shown alongside the waveform and spectrogram so what you hear can be checked against what it represents. The audio mixer gives each channel its own pitch and playback speed, so a single station can be isolated or the whole array played as one. The two clips on the home page were made with it.",
          facts:[["Tests","9 passing"],["Licence","GPL-3"],["Built with","Python, PyQt6, ObsPy"],["Target venue","SRL Electronic Seismologist"]],
          feats:["Multi-channel audification","Spatial audio from station coordinates","Synchronised waveform and spectrogram","MiniSEED input","WAV export"],
          shots:["shots/seismophone_loaded.png","shots/seismophone_running.png"] },
        { n:"PROFIT (interface)", s:"released", img:"shots/profit_section.png",
          one:"A graphical front end for a 2D refraction tomography code.",
          d:"Prof. Koulakov's refraction tomography code is powerful and entirely command-driven. This puts a window around it: datasets, model configurations, inversion, synthetic tests and a results browser, so a student can use it without learning the configuration files first.",
          facts:[["Built with","Python, tkinter"],["Wraps","PROFIT, 2D refraction tomography"],["Published","With permission"]],
          feats:["Dataset and model management","Survey geometry preview","Inversion and damping control","Synthetic tests","Results browser and report export"],
          shots:["shots/profit_model.png","shots/profit_starting.png","shots/profit.png"] },
        { n:"cubekit", s:"released", img:"", noUI:true,
          one:"Seismic data cubes, handled and checked.",
          d:"Loading, slicing and quality control of seismic data cubes, with the checks that catch a bad volume before it reaches an interpretation.",
          facts:[["Size","1,051 lines"],["Licence","MIT"],["Docs","docs/usage.md"]],
          feats:["Cube loading and slicing","Quality control checks","Scriptable API"] }
      ]
    },
    {
      name: "Near-surface and petroleum",
      items: [
        { n:"ResistivityIP Workbench", s:"paper in preparation", img:"shots/resistivityip_workbench.png",
          one:"Resistivity and IP inversion that shows you how many answers fit.",
          d:"Forward modelling, inversion by three methods, and appraisal that makes the equivalent family visible. Resistivity inversion admits many models that fit the same data equally well, and this is routinely reported as though it did not. Verified against analytic solutions and published cases, validated on independently published field soundings.",
          facts:[["Tests","102, 98 passing and 4 skipped"],["Size","7,834 lines"],["Licence","GPL-3"],["Validated on","Published VES and ERT data"]],
          feats:["1D VES and 2D ERT forward modelling","Marquardt, Occam and blocky inversion","Equivalence and non-uniqueness analysis","Induced polarisation","Teaching mode","Report export"],
          shots:["shots/resistivityip_workbench.png"] },
        { n:"WellTest Workbench", s:"paper in preparation", img:"shots/welltest_loglog.png",
          one:"Pressure-transient interpretation, with the ambiguity made explicit.",
          d:"Log-log diagnostics, semilog analysis, history matching and inversion, with a non-uniqueness panel that reports the family of models fitting the data rather than one answer. A teaching mode shows a student how wide that family can be.",
          facts:[["Tests","28 passing"],["Size","7,147 lines"],["Licence","MIT"],["Units","Oilfield and SI"]],
          feats:["Homogeneous, dual-porosity and composite models","Log-log and semilog diagnostics","History matching","Non-uniqueness quantification","Sensitivity analysis","Batch runs"],
          shots:["shots/welltest_setup.png","shots/welltest_semilog.png","shots/welltest_history.png","shots/welltest_nonuniq.png"] },
        { n:"Wellbore Stability", s:"released", img:"shots/wellbore_mudwindow.png",
          one:"Mud weight windows and failure criteria.",
          d:"Computes the safe mud weight window for a planned well from the stress state and rock strength, with the common failure criteria side by side rather than one chosen for you.",
          facts:[["Tests","18 passing"],["Size","3,873 lines"],["Licence","MIT"]],
          feats:["Mud weight window against well inclination","Multiple failure criteria side by side","Deviated well geometry","Stress polygon","Inversion for the stress state","Sensitivity analysis"],
          shots:["shots/wellbore_stress.png","shots/wellbore_failure.png","shots/wellbore_polygon.png","shots/wellbore_stability.png"] }
      ]
    },
    {
      name: "Teaching",
      items: [
        { n:"PetroSim X", s:"released", img:"shots/petrosimx.png",
          one:"A well-log simulator that hides the geology until you interpret it.",
          d:"Generates a new well every run from seeded stochastic geology, lets the student choose which logging tools to run, then plays the logs back as the tool descends. The formations stay hidden until an interpretation is submitted, at which point it shows where the reasoning was right and where it was not. A student can also load their own LAS, Excel or CSV data and work on a real well in the same interface.",
          facts:[["Basins","73 geological settings across 54 countries"],["Tools","13: GR, SP, Rt, Rxo, induction, NPHI, RHOB, caliper, sonic, NMR, PEF and others"],["Questions","60-plus, drawn differently each run"],["Machine learning","TensorFlow.js classifier trained in the browser on the run"],["Real data","LAS 2.0, Excel, CSV and Arduino JSON import"],["Built with","HTML, JavaScript, TensorFlow.js, one file"]],
          feats:["Unique well generated per session, no two alike","Live logging run with depth, speed and borehole conditions","Basin intelligence: real Rw, Archie parameters and lithology sequences","Interpretation graded against the hidden truth","In-browser neural network to compare against your own reading","Arduino firmware guide for a physical logging rig"],
          shots:["shots/petrosimx_landing.png"] },
        { n:"Signal Pro", s:"released", img:"shots/signalpro_fourier.png",
          one:"Signal processing, shown rather than derived.",
          d:"Eleven topics a geophysics student has to meet early and usually meets as algebra: Fourier synthesis, aliasing, convolution, cross-correlation, filtering, deconvolution, dynamic range, the DFT, the two-dimensional FFT and the Gibbs phenomenon. Each one animates, so a student can move a frequency and watch the sum change rather than take it on trust.",
          facts:[["Topics","11"],["Built with","Python, tkinter"],["Licence","MIT"],["Input","Synthetic or imported CSV"]],
          feats:["Fourier synthesis with live frequency and amplitude control","Aliasing demonstrated by sampling the same signal twice","Convolution and cross-correlation, animated step by step","Filter design with the response drawn as you change it","Gibbs phenomenon at a discontinuity","Export of plots and series"],
          shots:["shots/signalpro_deconv.png","shots/signalpro_dynrange.png","shots/signalpro_aliasing.png"] },
        { n:"BASIC Tomo Animator", s:"released", img:"shots/basic_tomo_dali.png",
          one:"Watch a tomographic inversion converge.",
          d:"Built for teaching: it animates how rays sample a model and how the solution moves from the starting model toward the data. The recovered anomaly above is a portrait used as the input model, which makes it immediately obvious where the ray coverage is good and where the inversion is inventing structure.",
          facts:[["Built with","Python, tkinter"],["Audience","Students"],["Written with","Prof. Ivan Koulakov"]],
          feats:["Animated ray coverage, iteration by iteration","Checkerboard and image models","Smoothing, grid spacing and noise as controls","Variance reduction reported for every run","Side-by-side comparison of parameter choices"],
          shots:["shots/basictomo_checkerboard.png","shots/basictomo_smoothing.png","shots/basictomo_gridspacing.png","shots/basictomo_raycoverage.png","shots/basictomo_inversion.png","shots/basictomo_conclusions.png"] },
        { n:"BASIC Grav", s:"released", img:"shots/basicgrav_recovered.png",
          one:"Build a body, compute its anomaly, then try to get the body back.",
          d:"A teaching tool for potential-field work. A student defines a density contrast, sees the gravity profile it produces, adds noise, then inverts and compares what comes back with what went in. The variance reduction is reported for every run, so the difference between fitting the data and recovering the model is visible rather than asserted.",
          facts:[["Built with","Python, tkinter"],["Models","Sphere, prism, custom grid"],["Audience","Students"]],
          feats:["Forward modelling from a defined body","Inversion with adjustable smoothing","Noise added at a chosen level","Data fit and variance reduction reported","Resolution test","Iteration animation"],
          shots:["shots/basicgrav_model.png","shots/basicgrav_profile.png","shots/basicgrav_fit.png","shots/basic_grav.png"] },
        { n:"BASIC Seis Pro", s:"released", img:"shots/basicseis_shotgather.png",
          one:"Wave propagation and interpretation, one stage at a time.",
          d:"Builds a velocity model, propagates waves through it, and shows the seismogram that results, so a student can change the subsurface and watch the record change with it.",
          facts:[["Built with","Python, tkinter"],["Audience","Students"]],
          feats:["Velocity model editor with source and receiver layout","Wave propagation through the model","Shot gather with theoretical arrivals overlaid","Wiggle display with event identification","Travel-time analysis","Wavefield animation"],
          shots:["shots/basicseis_model.png","shots/basicseis_wiggle.png","shots/basic_seis_pro.png"] },
        { n:"subsurfacelab", s:"in development", img:"shots/subsurfacelab.png",
          one:"A course platform where the notebooks run in the browser and the maths is checked.",
          d:"Students meet geomechanics as equations on a slide and then cannot reproduce them. This builds the course as executable notebooks backed by a tested library, so a worked example is code a student can change, and the units are handled rather than assumed. The platform, the library and the deployment are built; the geomechanics modules are outlined and are being filled in.",
          facts:[["Built with","Python, JupyterHub"],["Library","subsurfacelab: geomech, units, validate. 20 tests passing"],["First course","Geomechanics 101, three notebooks outlined"],["Deployment","Runs in the browser, nothing to install"]],
          feats:["Executable notebooks instead of slides","A tested library behind every worked example","Unit handling built in","Browser deployment for a whole class","Module outlines in place, content being written"],
          shots:["shots/subsurfacelab_modules.png","shots/subsurfacelab_how.png","shots/subsurfacelab_notebook.png"] }
      ]
    }
  ]
},

laboratory: {
  heading: "Laboratory",
  intro: "Rock mechanics, petrophysics and thermal properties at Skoltech. These are the measurements a velocity model is ultimately trying to recover.",
  groups: [
    { name:"Rock mechanics", items:[
      { vid:"photos/brazilian_disk_test.mp4", cap:"A Brazilian disk test running. The load builds until the sample splits along the loaded diameter." },
      { img:"photos/brazilian_disk_loaded.jpg", cap:"The same test set up: the disk between two platens, loaded across its diameter, which gives the tensile strength indirectly." },
      { img:"photos/brazilian_disk_failed.jpg", cap:"The same disk after failure. The fracture runs along the loaded diameter, as it should." },
      { img:"photos/loading_frame_samples.jpg", cap:"Loading frame with the sample set, and the cylinders prepared for uniaxial tests." },
      { img:"photos/triaxial_rig.jpg", cap:"Triaxial rig with the sample assembly in place." },
      { img:"photos/triaxial_column.jpg", cap:"The pressure column, loaded." }
    ]},
    { name:"Petrophysics", items:[
      { img:"photos/core_holder_assembly.jpg", cap:"Core holder and end caps laid out before a flow test." },
      { img:"photos/core_cylinders.jpg", cap:"Prepared core plugs, cut and faced for measurement." },
      { img:"photos/analytical_balance.jpg", cap:"Analytical balance during a saturation measurement." },
      { img:"photos/at_the_console.jpg", cap:"At the acquisition console during a run." },
      { vid:"photos/at_the_rig.mp4", cap:"Running a measurement and watching the acquisition" }
    ]},
    { name:"Thermal petrophysics", items:[
      { img:"photos/optical_scanning_principle.jpg", cap:"How optical scanning works: a focused source and detectors move across the surface, so thermal conductivity is measured without contact and without cutting the sample." },
      { img:"photos/optical_scanner_rail.jpg", cap:"Optical scanning rail. The source and detectors travel along the sample rather than touching it, so nothing is destroyed and the profile is continuous." },
      { img:"photos/optical_scanner_samples.jpg", cap:"Core samples loaded for a scan." },
      { img:"photos/thermal_samples.jpg", cap:"Discs and plugs prepared for thermal conductivity measurement." },
      { img:"photos/thermal_scan_detail.jpg", cap:"The scanning head passing over a sample." }
    ]},
    { name:"Teaching", items:[
      { img:"photos/teaching_folk.jpg", cap:"Teaching the Folk classification of carbonates." },
      { img:"photos/lab_group.jpg", cap:"A laboratory class before a session." }
    ]}
  ]
},

startups: {
  heading: "Startups",
  intro: "Hardware, model and interface, built end to end.",
  items: [
    { n:"Cowllar", tag:"", year:"2026",
      one:"A collar that watches cattle and sheep, and tells a farm worker which animals need attention today.",
      d:"Oestrus detection is a timing problem: miss the window and the animal is unproductive for another cycle. The collar watches movement, rumination, chewing sound and skin temperature at twenty five readings a second, runs the classifier on the device rather than in a server, and gives the farm a short list of decisions instead of a dashboard of graphs. It works on cattle and on sheep.",
      built:"I built the enclosure, the circuit, the firmware, the feature pipeline, the model that runs on the device, and the console the farm actually uses.",
      facts:[["Accuracy","90.4 per cent across four behavioural classes"],["On device","ESP32-C3, inference runs locally"],["Sensors","Accelerometer, magnetometer, microphone, two thermometers"],["Data","2.16 million readings per animal per day, reduced to 40 to 60 MB"]],
      shots:[
        { vid:"photos/cowllar_explainer.mp4", cap:"What the collar records: twenty five readings a second, written to the card on her neck" },
        { img:"photos/cowllar_in_use.jpg", cap:"The console in use on a farm" },
        { img:"shots/cowllar_console.png",  cap:"Overview: what needs a decision today" },
        { img:"photos/cowllar_diagram.jpg", cap:"One collar carrying every sensor" },
        { img:"photos/cowllar_case.jpg",    cap:"Printed enclosure" },
        { img:"photos/cowllar_prototype.jpg",cap:"Prototype in hand" },
        { img:"photos/cowllar_hardware.jpg",cap:"Signal path and components" },
        { img:"photos/cowllar_pcb_layout.jpg", cap:"Board layout" },
        { img:"photos/cowllar_cad_body.jpg", cap:"Enclosure, designed around the board" },
        { img:"photos/cowllar_cad_lid.jpg", cap:"Lid" },
        { img:"photos/cowllar_dashboard_web.jpg", cap:"Herd view in the console" }
      ] }
  ]
},

games: {
  heading: "GameDuel",
  link: "https://gameduel.onrender.com/",
  linkText: "Play it",
  intro: "A set of short games to play against friends and family: guess the flag, build the longest word, and a few others. Built because the ones I could find were either full of adverts or wanted an account before you could play a round.",
  shots: [
    { img:"shots/gameduel_modes.png", cap:"Solo, face-off or friend group" },
    { img:"shots/gameduel_word.png",  cap:"Word round, minimum eleven letters" },
    { img:"shots/gameduel_flag.png",  cap:"Flag round" },
    { img:"shots/gameduel_score.png", cap:"Results, with what you got wrong" }
  ]
},

hobbies: {
  heading: "Electronics",
  intro: "Things I build outside work. Several of them taught me what I use at it.",
  items: [
    { img:"photos/simple_motor.jpg", cap:"A heat engine. Hot water in the chamber drives the piston, the flywheel carries it through, and it keeps turning until the water cools." },
    { vid:"photos/tesla_winding.mp4", cap:"Winding a coil" },
    { vid:"photos/coil_workshop.mp4", cap:"In the workshop" },
    { img:"photos/tesla_circuit.jpg", cap:"Slayer exciter circuit, four-turn primary and a thousand-turn secondary" },
    { img:"photos/power_board.jpg", cap:"Driver board with a toroidal inductor" },
    { img:"photos/drone_cad.jpg", cap:"Quadcopter frame, designed" },
    { img:"photos/drone_built.jpg", cap:"And built" }
  ]
},

gallery: {
  heading: "Gallery",
  intro: "Photographs that do not belong to a particular section.",
  groups: [
    { name:"Skoltech", items:[
      { img:"photos/skoltech_floor.jpg", cap:"The building" },
      { img:"photos/lab_stairs.jpg", cap:"Between laboratories" },
      { img:"photos/lab_corridor.jpg", cap:"Workshop floor" },
      { img:"photos/sample_prep.jpg", cap:"Preparing a sample" }
    ]},
    { name:"Elsewhere", items:[
      { img:"photos/international_night.jpg", cap:"International Night, Team Nigeria" },
      { img:"photos/lagos_rain.jpg", cap:"Lagos" },
      { img:"photos/moscow_river.jpg", cap:"Moscow" },
      { img:"photos/moscow_winter.jpg", cap:"Winter" },
      { img:"photos/outdoors.jpg", cap:"Out of the city" },
      { vid:"photos/gym.mp4", cap:"At the gym" }
    ]}
  ]
},

about: {
  heading: "How I got here",
  lead: "Earthquake seismologist. I build catalogues from continuous records, then measure how far they can be trusted.",
  paras: [
    "I grew up in Lagos taking things apart. By my teens I was the person in the neighbourhood people brought broken electronics to, and I learned more from the ones I could not fix than from the ones I could. Payment was usually snacks, occasionally money.",
    "That became a physics degree at Crawford University, where I graduated second in my class. I worked as a laboratory assistant helping other students through their practicals, gave a seminar on how drones actually fly, and was elected president of my programme and later academic director for the student body. I joined an inter-university project on generating energy from pig dung, which was less glamorous than it sounds and taught me more about measurement than any lecture did. I kept repairing electronics through all of it, which paid for things.",
    "After graduating I taught physics and mathematics at a secondary school and tutored privately. I still teach whenever I can, and a good part of my software exists because of it. Explaining something is the fastest way to find out whether you actually understand it.",
    "In 2023 I began a graduate programme in engineering geophysics at the University of Lagos. A year later I won a fully funded place at Skoltech in Moscow."
  ],
  research: {
    heading: "What I work on now",
    paras: [
      "I am completing an MSc in Petroleum Science and Engineering at Skoltech and hold a funded research position on a Russian Science Foundation project, grant 26-17-00179, on identifying geothermal resources in volcanic areas using seismic tomography. The work is in Prof. Ivan Koulakov's group, with fieldwork and data from Kamchatka and the Kuril Islands.",
      "Day to day that means earthquake seismology: taking months of continuous three-component records, running deep-learning phase pickers over them, associating and locating what comes out, and then doing the part most people skip, which is establishing what the resulting catalogue can and cannot support.",
      "On a geothermal field in southern Kamchatka I built the first seismological study of a site under consideration for development, and found that the regional permanent network had catalogued one event within twenty kilometres of the field in six weeks while our temporary array detected nearly two hundred. On Mendeleev volcano in the Kurils I derived a velocity model and then established that the network geometry could not resolve the shallow crust at all, so the result I am writing up is the limit rather than an image. I would rather report a boundary than a picture the data cannot justify.",
      "I am applying for doctoral positions for 2027, in seismic monitoring, machine learning applied to detection, and the question of what sparse observation can actually support."
    ]
  },
  teaching: {
    heading: "Teaching",
    paras: [
      "Most of the software on this site began as a teaching problem. PetroSim X generates a well, hides the geology, and only reveals it once a student commits to an interpretation. BASIC Tomo Animator, written with Prof. Koulakov, lets a class watch smoothing trade resolution against stability instead of reading about it. Signal Pro animates the eleven signal-processing ideas that are usually met as algebra.",
      "In November I give a seminar in Kamchatka teaching this processing pipeline to researchers and students there."
    ]
  },
  outside: {
    heading: "Outside work",
    paras: [
      "I like building things and spending time learning new ones. I made a set of games to play with friends, I play football, and I travel whenever the chance comes."
    ]
  },
  img:"photos/portrait_lab_sign.jpg",
  imgAlt:"At the Skoltech Hydrocarbon Recovery Laboratory"
}

};
