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
  `I'm a Computer Science student at the Polytechnic University of Puerto Rico who enjoys building systems end to end, from performance critical C++ work in audio pipelines to full stack TypeScript applications and Retrieval Augmented Generation systems.`,
  `At Microsoft, I worked on the Teams audio render pipeline, integrating an ML based noise suppression model to reduce background noise in real time calls and optimizing audio mixing and synchronization at scale across hundreds of millions of users. I also collaborated across teams to prototype interactive product experiences.`,
  `Outside of internships, I build full stack projects with a focus on real functionality and depth. I built a Pokémon card collection tracking app that uses OCR to identify cards from images and match them through search, a personal finance platform integrating Teller and Plaid APIs with features like expense tracking, debt management, and future financial planning, and a RAG based system using hybrid retrieval, vector embeddings, and an LLM API to generate grounded answers from user provided documents.`,
  `I'm especially interested in problems where systems, performance, and user experience intersect, building things that are not just functional but efficient and intuitive.`,
  `Outside of coding, I enjoy gaming, traveling, and creating content. I like exploring new ideas and experiences, and I bring that same curiosity and iteration mindset into how I build and debug systems.`,
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
    title: 'BeanCount',
    description: [
      'A full-stack personal finance tracking app that aggregates assets, liabilities, and transactions in real time using PostgreSQL and Supabase.',
      'Integrates Plaid and Teller APIs for automatic transaction ingestion and categorization, and includes a financial planning engine that models income, expenses, debt, and recurring cash flows such as salary, bonuses, and stock-based compensation with long-term projections.',
    ],
    highlights: [
      'Financial planning engine (income, expenses, recurring cash flows, long-term projections)',
      'Plaid & Teller API integration',
      'Loan payoff simulation and scenario modeling'
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Plaid', 'NextAuth'],
    image: import.meta.env.BASE_URL + 'beancount.jpg',
    github: null,
    live: 'https://guanill.github.io/BeanCount/',
  },
  {
    id: 2,
    title: 'Poketeer',
    description: [
      'A full-stack Pokémon TCG collection tracking app with a hybrid card-scanning pipeline that combines OCR and on-device image embeddings for fast, accurate recognition.',
      'Supports multilingual cards (EN/JA/TH) with automatic detection, and enables similarity-based search across 18,000+ cards using vector embeddings. Designed for smooth performance with a fully virtualized interface and optimized image delivery, allowing fast browsing even on large collections.',
    ],
    highlights: [
      'OCR embedding pipeline',
      'Multilingual support (EN / JA / TH)',
      'Vector similarity search over 18K+ cards',
    ],
    tech: ['React', 'TypeScript', 'FastAPI', 'Supabase'],
    image: import.meta.env.BASE_URL + 'poketeer.jpg',
    github: null,
    live: 'https://guanill.github.io/Poketeer/',
  },
  {
    id: 3,
    title: 'IntelliDocs – RAG Search Engine',
    description: [
      'A full-stack document Q&A platform that uses a Retrieval-Augmented Generation pipeline to answer questions directly from user-uploaded documents with page-level citations.',
      'Supports PDF, DOCX, and TXT files, with a custom multi-document retrieval system that ensures answers are drawn across all selected sources. Designed to reduce hallucinations through structured retrieval, controlled prompting, and strict citation rules.',
      'Includes a background ingestion pipeline for document processing and a secure authentication system with support for isolated guest sessions.',
    ],
    highlights: [
      'Page-level citations across multiple documents',
      'Answers strictly from user-provided documents',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'PostgreSQL', 'React'],
    image: import.meta.env.BASE_URL + 'intellidocs.jpg',
    github: null,
    live: 'https://intellidocs-ivory.vercel.app/',
  },
  {
    id: 4,
    title: 'Interactive Travel Tracker',
    description: [
      'A client-side travel app that turns personal travel history into an interactive world map with routes, locations, and photo-based insights.',
      'Built with a custom D3.js SVG map supporting smooth zoom and pan, animated flight paths, and location mapping from photos using EXIF GPS data. Includes a shareable digital passport with travel stats, visited regions, and flight analytics.',
    ],
    highlights: [
      'Interactive D3.js world map (zoom + pan)',
      'Photo-based mapping using EXIF GPS extraction',
      'Shareable travel passport with stats and insights',
    ],
    tech: ['JavaScript', 'TopoJSON'],
    image: import.meta.env.BASE_URL + 'travel-tracker.png',
    github: null,
    live: null,
  },
];

export const techStack = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Bootstrap'],
  backend: ['Python', 'C++', 'Node.js', 'FastAPI', 'PostgreSQL', 'SQLite'],
};
