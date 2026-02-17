export const personalInfo = {
  name: 'Angel Guanill',
  title: 'Software Engineer',
  school: 'Student at PUPR',
  email: 'guanill9090@outlook.es',
  linkedin: 'https://www.linkedin.com/in/angelguanill/',
  github: 'https://github.com/guanill',
  linkedinHandle: '@angelguanill',
  githubHandle: '@guanill',
};

export const aboutParagraphs = [
  `I am a passionate Computer Science student at the Polytechnic University of Puerto Rico and the co-founder of the ColorStack chapter at PUPR, an organization dedicated to promoting diversity in tech. My experience spans front-end development, with hands-on work using React, Bootstrap, and more. As a constant learner, I am eager to deepen my skills in back-end development and machine learning, always ready to embrace new technologies and methodologies.`,
  `Through internships and personal projects, I've had the chance to develop software that solves real-world problems, such as enhancing audio synchronization for Microsoft Teams, which will benefit millions of users globally. I am excited to continue growing my knowledge and skill set, exploring innovative solutions, and making a meaningful impact in the tech industry.`,
  `I am particularly driven by a desire to stay up to date on the latest technologies and trends in software development. In my free time, I enjoy playing video games, which has also helped sharpen my problem-solving and analytical thinking. I look forward to the opportunities ahead as I continue my journey toward becoming a well-rounded software engineer.`,
];

export const experiences = [
  {
    id: 1,
    company: 'Microsoft',
    location: 'Redmond, WA',
    role: 'Software Engineering Intern',
    date: 'May 2025 – Aug 2025',
    bullets: [
      'Delivered noise-free experiences for ~1B monthly PSTN calls by adding a new processor with a noise suppression machine learning model into the render-side audio pipeline.',
      'Reduced service COGS by ~$1.1M annually by shifting noise suppression from server to client side, cutting server infrastructure usage by 10%.',
      'Pioneered ML retraining for PSTN calls, creating models that suppressed background noise while preserving on-hold music, and upskilled the team through a tech talk in an area new to most members.',
    ],
  },
  {
    id: 2,
    company: 'Microsoft',
    location: 'Redmond, WA',
    role: 'Software Engineering Intern',
    date: 'May 2024 – Aug 2024',
    bullets: [
      'Enhanced audio synchronization and mixing for a new Microsoft Teams feature, improving remote audio quality by 18% for 300M+ users across 1M+ organizations.',
      'Optimized C++ code for audio processing, implemented a machine learning grid search for synchronization parameters, reducing latency significantly.',
      'Developed Python automation scripts to process and transform audio data (MUCH, PCM, WAV) and upload results to Azure, cutting manual processing time by 70%.',
      'Conducted 40+ data collection sessions to train machine learning model for calculating Signal-to-Noise Ratio (SNR) and Signal Reverberation Ratio (SRR), improving mic selection for clearer, reverb-free audio.',
    ],
  },
  {
    id: 3,
    company: 'Cyborg Mobile × Microsoft',
    location: 'Redmond, WA',
    role: 'New Technologist Intern (PM + SWE)',
    date: 'Jun 2023 – Aug 2023',
    bullets: [
      'Developed an interactive simulation prototype guiding young adults through realistic U.S. military career scenarios and consequences, enabling more informed decision-making.',
      'Collaborated within a 5-member, cross-functional team, employing design thinking, iterative prototyping, and user research methodologies to define product specifications and deliver the project within a 7-week timeline.',
      'Implemented a responsive React front-end enhanced with Bootstrap, improving user engagement and ensuring a consistent, intuitive UI/UX.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Interactive Travel Tracker',
    description:
      'A feature-rich, client-side web app for tracking and visualizing travel history on an interactive world map. Includes a D3.js-powered SVG map with zoom/pan, a flight log with animated arc routes and Haversine distance calculation, a landmark explorer with hundreds of curated worldwide landmarks, photo mapping with built-from-scratch EXIF GPS extraction, a shareable digital passport with travel stats and continent badges, and an advanced flight analytics dashboard.',
    tech: ['JavaScript', 'TopoJSON'],
    image: import.meta.env.BASE_URL + 'travel-tracker.png',
    github: null,
    live: null,
  },
  {
    id: 2,
    title: 'Gym Tracker',
    description:
      'A fitness tracking web app that lets you log workouts by muscle group, set weekly training goals, and visualize your consistency with detailed stats. Features include a muscle-group selector with body map, customizable weekly frequency targets, streak tracking, and interactive charts showing workout distribution, weekly progress, and historical trends.',
    tech: ['React', 'CSS', 'JavaScript'],
    image: import.meta.env.BASE_URL + 'gym-tracker.png',
    github: null,
    live: null,
  },
  {
    id: 3,
    title: 'IntelliDocs – RAG Search Engine',
    description:
      'An end-to-end Retrieval-Augmented Generation system that lets users search and query large document collections through natural language. Features a full ingestion pipeline—chunking, embedding, and vector-based retrieval—that surfaces the most relevant context for LLM-generated answers. Includes a polished web interface for document upload and interactive querying, optimized for retrieval accuracy, low latency, and a clear, intuitive UX.',
    tech: ['Python', 'React', 'LangChain', 'Vector DB'],
    image: import.meta.env.BASE_URL + 'IntelliDocs.png',
    github: null,
    live: 'https://intellidocs-ivory.vercel.app/',
  },
];

export const techStack = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
  backend: ['Python', 'C++', 'Node.js'],
};
