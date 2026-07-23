/* ============================================================
   SITE CONTENT — this is the only file you need to edit to
   update the site. Layout code lives in render.js.

   To add a project: copy one { ... } block in PROJECTS, edit
   the text, and save. Order here = order on the page.
   ============================================================ */

const SITE = {
  name: "Keona Arneson",
  email: "arneson.keona@gmail.com",
  linkedin: "https://www.linkedin.com/in/keona-arneson/",
};

const PROJECTS = [
  {
    title: "Plant Monitoring System 2.0",
    status: "In progress",          // omit or set to "" for finished projects
    meta: "Personal project · 2026",
    summary:
      "An environmental sensing device that tracks growing conditions and analyzes plant health.",
    description:
      "Custom hardware from the ground up: schematic capture and PCB layout for the " +
      "sensor electronics, plus a 3D-modeled enclosure for deployment next to the plant. " +
      "The goal is a self-contained monitor that turns raw environmental measurements " +
      "into a clear read on how the plant is doing.",
    tools: ["Altium Designer", "Fusion 360", "Microcontrollers"],
    links: [],                      // links appear as "Label (PDF · size)" — see examples below

    image: { src: "assets/images/PlantMonitoringSystem.png", alt: "Schematic of the Plant Monitoring System's USB power and buck-converter circuit" },
  },

  {
    title: "FE Prep Web App",
    status: "In progress",
    meta: "Personal project · 2026",
    summary:
      "A quiz app for practicing FE Electrical exam concepts, with questions I've sourced myself.",
    description:
      "Built around two study modes: a quick quiz for fast review and a timed simulation " +
      "mode that mirrors the real exam format. The app will leverage AI to help build out " +
      "and expand the question bank.",
    tools: [],
    links: [],
    comingSoonText: "Live website coming soon",

    image: null,
  },

  {
    title: "Kestrel Nest Box Camera",
    status: "",
    meta: "Course Project · 2026",
    summary:
      "A low-cost, camera system for remote monitoring of Kestrel nests.",
    description:
      "Commercial nest cameras are expensive and are not bird handler friendly. I sized " +
      "a 5W solar panel for the Raspberry Pi system and manipulated the PiSugar 3 to operate " +
      "without the original Li-ion cell. On a separate project, I proposed a solution to the incompatibility " +
      "problem between the INIU battery and the Witty Pi, which would potentially extend battery life.",
    tools: ["Python", "Raspberry Pi", "Oscilloscope", "Multimeter", "Function Generator"],
    links: [
      { label: "Solar panel sizing", href: "docs/kestrel-solar-panel-sizing.pdf", note: "PDF · 205 KB" },
      { label: "Witty Pi & power bank testing", href: "docs/kestrel-witty-pi-iniu-power-bank.pdf", note: "PDF · 141 KB" },
    ],
    image: { src: "assets/images/KestrelNestBoxCamera.png", alt: "Infrared nest-box camera footage of kestrel chicks inside the box" },
  },

  {
    title: "Residential PV Study",
    status: "",
    meta: "Course project · 2026",
    summary:
      "Design and economic modeling of a grid-tied residential PV system in NREL's System Advisor Model.",
    description:
      "Sized a 4.1 kW array with a 4 kW inverter from site irradiance and load data, then " +
      "ran economic and sensitivity analysis across net-metering, buy-all/sell-all, and " +
      "net-billing scenarios with federal and state incentives — landing at a levelized " +
      "cost of energy of 0.90 ¢/kWh and a 3.3-year payback.",
    tools: ["SAM", "PV Design", "Economic Analysis"],
    links: [
      { label: "Final report", href: "docs/residential-pv-study-report.pdf", note: "PDF · 294 KB" },
    ],
    image: { src: "assets/images/ResidentialPVStudy.png", alt: "Bar chart comparing modeled monthly AC energy production to electricity load for the residential PV system" },
  },

  {
    title: "Grid-Forming Inverter Survey",
    status: "",
    meta: "Personal research · 2026",
    summary:
      "A technical survey of grid-forming inverter capabilities in renewable-heavy power systems.",
    description:
      "Synthesized 11 peer-reviewed IEEE sources on what grid-forming inverters bring to " +
      "modern grids — voltage balancing, synthetic inertia, and frequency control — plus " +
      "their role in microgrid black-start and islanded operation.",
    tools: ["IEEE Xplore", "Technical Writing"],
    links: [
      { label: "Survey report", href: "docs/grid-forming-inverter-survey.pdf", note: "PDF · 223 KB" },
    ],
    image: { src: "assets/images/GFM.png", alt: "First page of the grid-forming inverter survey report"},
  },
];

const SKILL_GROUPS = [
  {
    title: "Simulation & Modeling",
    items: ["MATLAB / Simulink", "SAM", "LTspice"],
  },
  {
    title: "Programming & Software",
    items: ["Python", "MS Office", "Salesforce", "GIS", "CRS", "Altium Designer", "Fusion 360"],
  },
  {
    title: "Hardware & Lab",
    items: ["Oscilloscope", "Multimeter", "Function Generator", "Soldering", "Breadboarding"],
  },
  {
    title: "Certifications & Licenses",
    items: ["NCEES FE Exam"],
  },
];
