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
    title: "Plant Monitoring System",
    status: "In progress",          // omit or set to "" for finished projects
    meta: "Personal project · 2026",
    summary:
      "An environmental sensing device that tracks growing conditions and analyzes plant health.",
    description:
      "Custom hardware from the ground up: schematic capture and PCB layout for the " +
      "sensor electronics, plus a 3D-modeled enclosure for deployment next to the plant. " +
      "The goal is a self-contained monitor that turns raw environmental measurements " +
      "into a clear read on how the plant is doing.",
    tools: ["PCB design", "3D modeling", "Embedded sensors"],
    links: [],                      // links appear as "Label (PDF · size)" — see examples below

    image: { src: "assets/images/PlantMonitoringSystem.png", alt: "Schematic of the Plant Monitoring System's USB power and buck-converter circuit" },
  },

  {
    title: "Kestrel Nest Box Camera",
    status: "",
    meta: "Vertically Integrated Project · 2026",
    summary:
      "A low-cost, solar-powered camera system for remote monitoring of American Kestrel nest boxes.",
    description:
      "Commercial nest cameras lack solar support, so our VIP team built one. I ran " +
      "battery discharge-curve analysis to estimate pack capacity within ±20%, sized the " +
      "5 W solar panel, and validated power-management hardware (Witty Pi 4 Mini, PiSugar 3) " +
      "against real battery and power-bank behavior for reliable unattended operation in the field.",
    tools: ["Python", "Raspberry Pi", "Oscilloscope & multimeter", "Function generator", "Soldering & breadboarding"],
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
    tools: ["System Advisor Model (SAM)", "PV system design", "Economic analysis"],
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
    tools: ["IEEE Xplore", "Technical writing"],
    links: [
      { label: "Survey report", href: "docs/grid-forming-inverter-survey.pdf", note: "PDF · 223 KB" },
    ],
    image: { src: "assets/images/GFM.png", alt: "First page of the grid-forming inverter survey report"},
  },
];

const SKILL_GROUPS = [
  {
    title: "Simulation & Modeling",
    items: ["MATLAB / Simulink", "System Advisor Model (SAM)", "LTspice"],
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
