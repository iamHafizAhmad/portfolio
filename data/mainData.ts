export interface Project {
  type: 'work' | 'self'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string
  builtWith: string[]
  hidden?: boolean

}

export interface Company {
  name: string
  location?: string
  imgSrc?: string
  startDate?: string
  endDate?: string
  url?: string
  active?: boolean
  hidden?: boolean
  description?: string
  descCard?: string
  items: Experience[]

}

export interface TechStackType {
  name: string
  href?: string

}
export interface Experience {
  title: string
  roleType: 'Fulltime' | 'Part-time' | 'Consultant' | 'Freelance'
  startDate: string
  endDate?: string
  description: string
  active?: boolean
  techStack?: TechStackType[]
  hidden?: boolean
}

export interface Skill {
  name: string
  id: string
  category: "Languages" | "Web Dev" | "AI & Data Science" | "DevOps & Tools" 
  field?: string
  subfield?: string
  description?: string
  imgSrc?: string
  level: 'advanced' | 'familiar' | 'learning'
  hidden?: boolean
  href?: string
  mostUsed?: boolean
}

export let projectsData: Project[] = [

  {
    type: 'work',
    title: 'FlowPandas',
    description: 'FlowPandas is an AI BI analyst microservice that allows users to interact with their reports through a chat interface to generate BI insights. The microservice provides text explanations, tables of the data, and visualizations. It connects to an API that supplies JSON data for analysis.',
    imgSrc: '/static/images/projects/7.jpg',
    builtWith: ['Redis Stack', 'OpenAI GPT-3.5', 'FastAPI', 'Pandas', 'PandasAI', 'Langchain'],
  },
  {
    type: 'work',
    title: 'Quality AI',
    description: 'A full-stack web application assists quality auditors by analyzing support agent calls. It uses the Whisper ASR model to transcribe calls, detects silence gaps, and performs text analysis to flag inappropriate language. The Mistral LLM summarizes calls and evaluates them against predefined criteria to generate a call score. The app integrates with ticketing systems like Zendesk and TeamSupport for real-time ticket updates and supports real-time processing and analysis with deployed ASR and LLM models.',
    imgSrc: '/static/images/projects/1.jpg',
    builtWith: ['Mistral LLM', 'Whisper ASR', 'VLLM', 'Sveltekit', 'FastAPI', 'Docker', 'Postgres', 'AWS', 'GitHub', 'NGINX', 'Prisma', 'Tailwind'],
  },
  {
    type: 'work',
    title: 'AI Support Helper',
    description: 'AI Support Helper is a microservice integrated with the Teamsupport ticketing system to track new tickets created by clients. It generates possible fixes for tickets and provides outage notifications if a matching outage article is found. The microservice searches for ticket information in a vector database that is updated periodically to ensure its knowledge remains current.',
    imgSrc: '/static/images/projects/2.jpg',
    builtWith: ['OpenAI', 'Teamsupport API', 'MySQL', 'Pinecone', 'FastAPI', 'Docker', 'AWS', 'Langchain'],
  },
  {
    type: 'work',
    title: 'DocChat',
    description: 'DocChat is a Retrieval-Augmented Generation (RAG) microservice that enables users to interact with documentation. It keeps track of all the content within PDF pages, including text, page numbers, images, categories, and subcategories. This microservice allows for efficient and accurate information retrieval during chats with documentation.',
    imgSrc: '/static/images/projects/3.jpg',
    builtWith: ['OpenAI', 'Pinecone', 'FastAPI', 'Docker', 'AWS S3', 'Langchain'],
  },
  {
    type: 'work',
    title: 'Backlog Classifier',
    description: 'Backlog Classifier is a tool designed to organize backlog tickets by classifying them into clusters based on their embeddings. It then generates a title for each cluster using a Large Language Model (LLM), streamlining the management and prioritization of tickets.',
    imgSrc: '/static/images/projects/4.jpg',
    builtWith: ['OpenAI GPT-3.5', 'OpenAI Ada', 'FastAPI', 'PyTorch', 'Pandas'],
  },
  {
    type: 'work',
    title: 'Tendering App',
    description: 'Tendering App is a full-stack application designed to facilitate the tendering process. It allows contractors, consultants, and suppliers to apply to clients\' tenders, which can then be managed by software admins. The app includes an admin page to control all aspects of the application, ensuring efficient and streamlined tender management.',
    imgSrc: '/static/images/projects/5.jpg',
    builtWith: ['Next.js', 'Postgres', 'AWS S3', 'Prisma', 'Tailwind'],
  },
  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/projects/6.jpg',
    repo: 'andrewsam.xyz',
    url: 'https://andrewsam.xyz',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
  {
    type: 'self',
    title: 'AI Voice Assistant',
    imgSrc: '/static/images/projects/7.jpg',
    builtWith: ['OpenAI', 'Langchain', 'Deepgram', 'FastAPI', 'Docker', 'Oracle Cloud', 'LiveKit Agents', 'Pinecone', 'Next.js', 'Postgres', 'WebRTC', 'NGINX'],
    description: "The AI Voice Assistant is a full-stack application designed to facilitate seamless customer interactions through voice commands. It leverages WebRTC to handle reservations, communicate with external APIs for information retrieval, and interact with the backend to manage reservations, including submissions, inquiries, and cancellations. Additionally, the project features a second voice assistant based on Retrieval-Augmented Generation (RAG), allowing users to upload PDF or DOCX files and engage in voice-based conversations to query the document's content.",
    repo: 'VoiceAssistant-Backend',
    url:'https://rtc.andrewsam.xyz/'
  }
  
];

export let experienceData: Company[] = [
  {
    name: 'DevCacoon',
    location: 'Remote',
    description:
      'Software company delivering SaaS, AI, web, desktop, and mobile applications.',
    imgSrc: '/images/companies/devcacoon.png',
    url: 'https://devcacoon.com',
    active: true,
    items: [
      {
        title: 'Senior Full Stack Engineer',
        roleType: 'Fulltime',
        startDate: '2025/02/01',
        description:
          'Leading the architecture and development of scalable SaaS products across web, desktop, mobile, and AI platforms. Designing backend systems, building modern React applications, mentoring developers, integrating LLM-powered features, and collaborating directly with clients to deliver production-ready solutions.',
        techStack: [
          { name: 'Ruby on Rails', href: 'https://rubyonrails.org/' },
          { name: 'React', href: 'https://react.dev/' },
          { name: 'Next.js', href: 'https://nextjs.org/' },
          { name: 'OpenAI', href: 'https://openai.com/' },
          { name: 'LangChain', href: 'https://www.langchain.com/' },
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'PostgreSQL', href: 'https://postgresql.org/' },
        ],
        active: true,
      },
      {
        title: 'React Native Developer',
        roleType: 'Fulltime',
        startDate: '2024/02/01',
        endDate: '2025/02/01',
        description:
          'Developed cross-platform mobile applications using React Native. Built reusable components, integrated REST APIs, implemented authentication, notifications, offline support, and collaborated closely with backend teams to deliver production-ready mobile experiences.',
        techStack: [
          { name: 'React Native', href: 'https://reactnative.dev/' },
          { name: 'React', href: 'https://react.dev/' },
          { name: 'TypeScript', href: 'https://typescriptlang.org/' },
          { name: 'Redux', href: '#' },
          { name: 'REST APIs', href: '#' },
          { name: 'Firebase', href: 'https://firebase.google.com/' },
        ],
      },
      {
        title: 'Backend Developer (Ruby on Rails)',
        roleType: 'Fulltime',
        startDate: '2023/01/01',
        endDate: '2024/02/01',
        description:
          'Developed and maintained scalable Ruby on Rails applications, REST APIs, background jobs, PostgreSQL databases, third-party integrations, authentication systems, payment gateways, and admin dashboards while following best development practices.',
        techStack: [
          { name: 'Ruby on Rails', href: 'https://rubyonrails.org/' },
          { name: 'PostgreSQL', href: 'https://postgresql.org/' },
          { name: 'Redis', href: 'https://redis.io/' },
          { name: 'Sidekiq', href: 'https://sidekiq.org/' },
          { name: 'Stripe', href: 'https://stripe.com/' },
          { name: 'Docker', href: 'https://docker.com/' },
        ],
      },
    ],
  },

  {
    name: 'Upwork',
    location: 'Remote',
    description:
      'Freelance software development for international startups and businesses.',
    imgSrc: '/images/companies/upwork.png',
    url: 'https://www.upwork.com/',
    active: true,
    items: [
      {
        title: 'Full Stack Developer',
        roleType: 'Part-time',
        startDate: '2023/05/01',
        description:
          'Built complete SaaS platforms, AI-powered applications, Shopify apps, CMS solutions, REST APIs, and full-stack web applications using Ruby on Rails, React, React Native, Next.js, and modern AI technologies for clients worldwide.',
        techStack: [
          { name: 'Ruby on Rails', href: 'https://rubyonrails.org/' },
          { name: 'React', href: 'https://react.dev/' },
          { name: 'Next.js', href: 'https://nextjs.org/' },
          { name: 'React Native', href: 'https://reactnative.dev/' },
          { name: 'OpenAI', href: 'https://openai.com/' },
          { name: 'Shopify', href: 'https://shopify.dev/' },
          { name: 'PostgreSQL', href: 'https://postgresql.org/' },
        ],
        active: true,
      },
      {
        title: 'Electron & Node.js Developer',
        roleType: 'Part-time',
        startDate: '2021/05/01',
        endDate: '2023/05/01',
        description:
          'Developed desktop applications using Electron and Node.js, implemented native integrations, file system utilities, background processes, automation tools, and cross-platform desktop solutions for international clients.',
        techStack: [
          { name: 'Electron', href: 'https://electronjs.org/' },
          { name: 'Node.js', href: 'https://nodejs.org/' },
          { name: 'JavaScript', href: '#' },
          { name: 'SQLite', href: '#' },
          { name: 'React', href: 'https://react.dev/' },
        ],
      },
    ],
  },

  {
    name: 'Gain Impact',
    location: 'Remote • Netherlands',
    description:
      'Software company building SaaS applications.',
    imgSrc: '/images/companies/gainimpact.png',
    url: '#',
    active: false,
    items: [
      {
        title: 'Backend Developer (Ruby on Rails)',
        roleType: 'Fulltime',
        startDate: '2023/01/01',
        endDate: '2024/09/01',
        description:
          'Developed scalable backend services, REST APIs, CMS platforms, authentication systems, PostgreSQL database architecture, and business logic for enterprise SaaS applications while collaborating with frontend and mobile teams.',
        techStack: [
          { name: 'Ruby on Rails', href: 'https://rubyonrails.org/' },
          { name: 'PostgreSQL', href: 'https://postgresql.org/' },
          { name: 'Redis', href: 'https://redis.io/' },
          { name: 'REST APIs', href: '#' },
          { name: 'Docker', href: 'https://docker.com/' },
        ],
      },
      {
        title: 'Frontend Developer',
        roleType: 'Fulltime',
        startDate: '2022/01/01',
        endDate: '2023/01/01',
        description:
          'Built responsive user interfaces using React and Tailwind CSS, developed reusable components, integrated REST APIs, implemented CMS interfaces, and collaborated closely with backend engineers to deliver modern web applications.',
        techStack: [
          { name: 'React', href: 'https://react.dev/' },
          { name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
          { name: 'JavaScript', href: '#' },
          { name: 'TypeScript', href: '#' },
          { name: 'REST APIs', href: '#' },
        ],
      },
    ],
  },

  {
    name: '(NTDC)',
    location: 'Pakistan',
    description:
      'National electricity transmission company.',
    imgSrc: '/images/companies/ntdc.png',
    url: 'https://www.ntdc.com.pk/',
    active: false,
    items: [
      {
        title: 'Frontend Developer Intern',
        roleType: 'Fulltime',
        startDate: '2021/01/01',
        endDate: '2021/04/01',
        description:
          'Developed responsive React interfaces, integrated REST APIs, customized third-party React libraries, created reusable UI components, fixed frontend bugs, and improved overall application usability using modern CSS frameworks.',
        techStack: [
          { name: 'React', href: 'https://react.dev/' },
          { name: 'JavaScript', href: '#' },
          { name: 'HTML', href: '#' },
          { name: 'CSS', href: '#' },
          { name: 'Bootstrap', href: 'https://getbootstrap.com/' },
        ],
      },
    ],
  },
];
export const skillsData: Skill[] = [
  // =====================
  // Languages
  // =====================
  {
    name: 'JavaScript',
    id: 'javascript',
    category: 'Languages',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'TypeScript',
    id: 'typescript',
    category: 'Languages',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Ruby',
    id: 'ruby',
    category: 'Languages',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Python',
    id: 'python',
    category: 'Languages',
    level: 'learning',
    mostUsed: true,
  },

  // =====================
  // Web Development
  // =====================
  {
    name: 'Ruby on Rails',
    id: 'rails',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'React',
    id: 'react',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Next.js',
    id: 'nextjs',
    category: 'Web Dev',
    field: 'Fullstack',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'React Native',
    id: 'reactnative',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'ElectronJS',
    id: 'electron',
    category: 'Web Dev',
    field: 'Desktop',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Node.js',
    id: 'nodejs',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'FastAPI',
    id: 'fastapi',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Prisma',
    id: 'prisma',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'ORM',
    level: 'learning',
  },
  {
    name: 'PostgreSQL',
    id: 'postgres',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Database',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'MongoDB',
    id: 'mongodb',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Database',
    level: 'advanced',
  },
  {
    name: 'Redis',
    id: 'redis',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Database',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Stripe',
    id: 'stripe',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Tailwind CSS',
    id: 'tailwind',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'HTML',
    id: 'html',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
  },
  {
    name: 'CSS',
    id: 'css',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
  },
  {
    name: 'Shopify',
    id: 'shopify',
    category: 'Web Dev',
    field: 'CMS',
    level: 'advanced',
  },
  {
    name: 'Sanity',
    id: 'sanity',
    category: 'Web Dev',
    field: 'CMS',
    level: 'advanced',
  },

  // =====================
  // AI
  // =====================
  {
    name: 'OpenAI',
    id: 'openai',
    category: 'AI & Data Science',
    field: 'LLMs',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'LangChain',
    id: 'langchain',
    category: 'AI & Data Science',
    field: 'Frameworks',
    level: 'learning',
    mostUsed: true,
  },
  {
    name: 'Local LLMs',
    id: 'localllms',
    category: 'AI & Data Science',
    field: 'LLMs',
    level: 'advanced',
  },
  {
    name: 'Hugging Face',
    id: 'huggingface',
    category: 'AI & Data Science',
    field: 'LLMs',
    level: 'advanced',
  },
  {
    name: 'Streamlit',
    id: 'streamlit',
    category: 'AI & Data Science',
    field: 'Prototyping',
    level: 'learning',
  },

  // =====================
  // DevOps & Tools
  // =====================
  {
    name: 'Docker',
    id: 'docker',
    category: 'DevOps & Tools',
    field: 'Containers',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Git',
    id: 'git',
    category: 'DevOps & Tools',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'GitHub',
    id: 'github',
    category: 'DevOps & Tools',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'GitHub Actions',
    id: 'githubactions',
    category: 'DevOps & Tools',
    field: 'CI/CD',
    level: 'advanced',
  },
  {
    name: 'Linux',
    id: 'linux',
    category: 'DevOps & Tools',
    field: 'OS',
    level: 'advanced',
  },
  {
    name: 'AWS',
    id: 'aws',
    category: 'DevOps & Tools',
    field: 'Cloud',
    level: 'learning',
  },
  {
    name: 'Vercel',
    id: 'vercel',
    category: 'DevOps & Tools',
    field: 'Deployment',
    level: 'advanced',
  },
]

