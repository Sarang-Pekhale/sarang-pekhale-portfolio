/* Edit this file to make the portfolio your own. Empty optional lists stay hidden. */
window.PORTFOLIO = {
  name: 'Sarang Pekhale',
  fullName: 'Sarang Manoj Pekhale',
  email: 'sarang.manoj.pekhale@am.iitd.ac.in',
  cvUrl: './assets/sarang-pekhale-cv.pdf',
  portraitUrl: './assets/sarang-portrait.jpeg',
  aboutPhoto: 1, // Landscape fallback when portraitUrl is empty: 1 valley; 2 wildflowers.
  profiles: [
    { label: 'CSCCM lab', url: 'https://www.csccm.in/home' },
    { label: 'IIT Delhi', url: 'https://home.iitd.ac.in/' }
  ],
  projects: [
    {
      id: 'hybrid', category: 'Scientific computing', kicker: '01 / SIMULATE',
      title: 'Making solvers work together.', academicTitle: 'Hybrid neural–numerical solvers',
      summary: 'Combining the speed of neural operators with the reliability of numerical methods for time-dependent PDEs.',
      tags: ['Neural operators', 'Agentic AI', 'PDEs'],
      question: 'When should a simulation learn, and when should it calculate?',
      detail: 'I am developing an agentic hybrid solver framework that brings neural operators and classical numerical solvers into the same simulation. My interests include physics-based diagnostics, deciding when to switch solvers without runtime ground truth, and reducing discontinuities at the handover.',
      links: []
    },
    {
      id: 'discovery', category: 'Scientific discovery', kicker: '02 / DISCOVER',
      title: 'From observations to governing laws.', academicTitle: 'Agentic scientific discovery',
      summary: 'Exploring how agents and multimodal models can reason about physical systems and support equation discovery.',
      tags: ['Multimodal reasoning', 'Equation discovery', 'AI for science'],
      question: 'Can an AI system move from seeing a pattern to testing a physical explanation?',
      detail: 'I am interested in agentic scientific discovery: connecting observations of a system to candidate mathematical descriptions, and evaluating those descriptions with scientific evidence. This direction brings together multimodal reasoning, physical knowledge, and numerical validation.',
      links: []
    },
    {
      id: 'mechanics', category: 'Computational mechanics', kicker: '03 / UNDERSTAND',
      title: 'Understanding flow-induced motion.', academicTitle: 'Computational mechanics and aeroelasticity',
      summary: 'Investigating turbine-blade flutter through numerical simulation, aerodynamic damping, and learned surrogates.',
      tags: ['Aeroelasticity', 'CFD', 'Surrogate modeling'],
      question: 'How can simulation and machine learning help us understand flutter stability?',
      detail: 'My work in computational mechanics has included steam-turbine blade flutter, modal analysis, and unsteady flow simulation. It explores the connection between aerodynamic damping, numerical validation, and neural surrogate models for engineering analysis.',
      links: []
    }
  ],
  publications: [
    {
      "id": "pekhale2026mage",
      "title": "See, Hypothesize, Validate: Multimodal Agentic Framework for Discovering Governing PDEs",
      "authors": [
        "Sarang Manoj Pekhale",
        "Amartya Roy",
        "Rajat Sarkar",
        "Souvik Chakraborty"
      ],
      "year": 2026,
      "type": "preprint",
      "abbreviation": "arXiv",
      "venue": "",
      "url": "https://arxiv.org/pdf/2608.27869",
      "bibtexUrl": "./assets/publications/pekhale2026mage.bib",
      "bibtex": "@misc{pekhale2026seehypothesizevalidatemultimodal,\n  title={See, Hypothesize, Validate: Multimodal Agentic Framework for Discovering Governing PDEs},\n  author={Sarang Manoj Pekhale and Amartya Roy and Rajat Sarkar and Souvik Chakraborty},\n  year={2026},\n  eprint={2608.27869},\n  archivePrefix={arXiv},\n  primaryClass={cs.AI},\n  url={https://arxiv.org/abs/2608.27869},\n}",
      "selected": false
    }
  ],
  education: [
    { period: 'Present', title: 'PhD Research Candidate', institution: 'Indian Institute of Technology Delhi', detail: 'Center for Scientific Computing and Computational Mechanics (CSCCM)' }
  ],
  teaching: [],
  awards: [],
  talks: [],
  news: []
};
