var x = document.getElementById("login");
var y = document.getElementById("Register");
var z = document.getElementById("btn");

function register(){
                x.style.display = "none";
                y.style.display = "block";
                z.style.left = "9em";
}
function login(){
                x.style.display = "block";
                y.style.display = "none";
                z.style.left = "0";
                               
}
function goBack() {
                window.history.back();
}


//Data List
const roadmaps = [
    {
        id: 'web-dev',
        title: 'Web Development',
        desc: 'Learn to build dynamic and responsive websites using HTML, CSS, JavaScript, and modern frameworks.',
        icon: 'fa-code',
        steps: ['HTML5 & Semantic Tags', 'CSS3 (Flexbox/Grid)', 'JavaScript ES6+', 'React.js or Next.js', 'Node.js & Express', 'MongoDB or PostgreSQL']
    },
    {
        id: 'java-spring',
        title: 'Java & Spring Boot',
        desc: 'Dive into backend development with Java. Master Spring Boot to build robust and scalable applications.',
        icon: 'fa-coffee',
        steps: ['Java Fundamentals', 'Object-Oriented Programming', 'Spring Boot Core', 'Spring Data JPA (Hibernate)', 'Microservices Architecture', 'JUnit Testing']
    },
    {
        id: 'data-science',
        title: 'Data Science with Python',
        desc: 'Unleash the power of data. Learn Python, libraries like Pandas and NumPy, and machine learning basics.',
        icon: 'fa-chart-line',
        steps: ['Python Basics', 'Pandas & NumPy', 'Matplotlib/Seaborn Visualization', 'Exploratory Data Analysis', 'Scikit-Learn Basics', 'SQL for Data Science']
    },
    {
        id: 'devops',
        title: 'Cloud Computing & DevOps',
        desc: 'Master the infrastructure. Learn to deploy, scale, and manage applications using AWS/Azure/GCP, Docker, and Kubernetes.',
        icon: 'fa-cloud',
        steps: ['Linux Command Line', 'Docker Containerization', 'Kubernetes Orchestration', 'CI/CD Pipelines (GitHub Actions)', 'AWS/Azure Fundamentals', 'Infrastructure as Code (Terraform)']
    },
    {
        id: 'mobile-dev',
        title: 'Mobile App Development',
        desc: 'Target the massive consumer market. Build cross-platform or native apps using Kotlin for Android or modern frameworks like Flutter/React Native.',
        icon: 'fa-mobile-screen-button',
        steps: ['Dart (for Flutter) or JavaScript', 'Flutter Framework', 'State Management (Riverpod/Redux)', 'Native API Integration', 'Firebase Authentication', 'App Store/Play Store Deployment']
    },
    {
        id: 'cyber-security',
        title: 'Cyber Security & Defense',
        desc: 'Learn to secure what you build. Study the OWASP Top Ten, practice ethical hacking, and become a highly valuable, secure programmer.',
        icon: 'fa-shield-halved',
        steps: ['Networking Fundamentals', 'OWASP Top 10', 'Penetration Testing Tools', 'Linux Security', 'Identity & Access Management', 'Incident Response Basics']
    },
    {
        id: 'mle',
        title: 'Machine Learning Engineering (MLE)',
        desc: 'Go beyond notebooks. Learn MLOps, model deployment, and scaling deep learning models using TFX or PyTorch Lightning.',
        icon: 'fa-brain',
        steps: ['Deep Learning (PyTorch/TensorFlow)', 'Model Versioning (DVC)', 'FastAPI for Model Serving', 'ML Monitoring', 'TFX Pipelines', 'Scalable Inference']
    },
    {
        id: 'game-dev',
        title: 'Game Development (Engine/Graphics)',
        desc: 'Master low-level performance and 3D rendering. Learn advanced C++ and linear algebra using Unreal Engine or Unity and Vulkan/OpenGL.',
        icon: 'fa-gamepad',
        steps: ['C++ Programming', 'Linear Algebra & Physics', 'Unreal Engine 5 Basics', 'Shaders & GLSL', 'Game Loop Architecture', 'Asset Optimization']
    },
    {
        id: 'blockchain',
        title: 'Blockchain & Distributed Ledger',
        desc: 'Dive into decentralized systems. Master secure smart contracts using Solidity, understand consensus mechanisms, and work with Ethereum/Hyperledger.',
        icon: 'fa-link',
        steps: ['Cryptography Basics', 'Solidity Smart Contracts', 'Ethereum Virtual Machine (EVM)', 'Web3.js/Ethers.js', 'DeFi Protocols', 'Hardhat/Truffle Framework']
    },
    {
        id: 'iot-embedded',
        title: 'Embedded Systems & IoT',
        desc: 'Connect software to the physical world. Program microcontrollers in C/C++, master RTOS fundamentals, and use protocols like MQTT.',
        icon: 'fa-microchip',
        steps: ['Embedded C/C++', 'Microcontrollers (ESP32/Arduino)', 'MQTT & HTTP Protocols', 'RTOS Basics', 'Sensor Interfacing', 'PCB Design Basics']
    },
    {
        id: 'system-design',
        title: 'System Design & Architecture',
        desc: 'Elevate your thinking. Master system trade-offs, Microservices patterns, API design, and principles like the CAP Theorem for scale.',
        icon: 'fa-sitemap',
        steps: ['Load Balancing & Caching', 'Database Sharding', 'Message Queues (Kafka/RabbitMQ)', 'CAP Theorem', 'Microservices Patterns', 'API Gateway Design']
    },
    {
        id: 'frontend-vue',
        title: 'Vue.js Ecosystem',
        desc: 'Master the progressive JavaScript framework. Build highly reactive user interfaces using Vue 3, Composition API, and Nuxt.js.',
        icon: 'fa-cube',
        steps: ['Vue 3 Basics', 'Composition API', 'State Management (Pinia)', 'Routing (Vue Router)', 'Nuxt.js Framework', 'Component Testing (Vitest)']
    },
    {
        id: 'frontend-angular',
        title: 'Angular Development',
        desc: 'Build enterprise-grade applications. Learn TypeScript, component-driven architecture, and reactive programming with RxJS.',
        icon: 'fa-angular',
        steps: ['TypeScript Fundamentals', 'Angular Components', 'Services & Dependency Injection', 'RxJS Observables', 'NgRx State Management', 'Angular Universal (SSR)']
    },
    {
        id: 'backend-python',
        title: 'Python Backend Mastery',
        desc: 'Create fast and scalable APIs. Leverage frameworks like Django for rapid development and FastAPI for high-performance microservices.',
        icon: 'fa-python',
        steps: ['Python Advanced Concepts', 'Django ORM', 'Django REST Framework', 'FastAPI & Pydantic', 'Background Tasks (Celery)', 'Redis Caching']
    },
    {
        id: 'backend-go',
        title: 'Go (Golang) Backend',
        desc: 'Build highly concurrent and efficient systems. Master Go syntax, goroutines, and build robust web servers.',
        icon: 'fa-server',
        steps: ['Go Syntax & Structs', 'Pointers & Interfaces', 'Concurrency (Goroutines/Channels)', 'Building HTTP Servers', 'gRPC & Protocol Buffers', 'Go Testing & Benchmarking']
    },
    {
        id: 'ai-apps',
        title: 'AI App Integration',
        desc: 'Build high-value, intelligent software. Connect apps to LLMs, use vector databases, and implement Retrieval-Augmented Generation (RAG).',
        icon: 'fa-robot',
        steps: ['OpenAI / Anthropic APIs', 'Prompt Engineering', 'LangChain Framework', 'Vector Databases (Pinecone/Chroma)', 'RAG Architecture', 'AI Agents Deployment']
    },
    {
        id: 'fullstack-t3',
        title: 'T3 Stack (Type-Safe Fullstack)',
        desc: 'Ship highly productive, end-to-end type-safe web apps. Combine Next.js, tRPC, Tailwind CSS, and Prisma for an unmatched developer experience.',
        icon: 'fa-layer-group',
        steps: ['TypeScript Deep Dive', 'Next.js App Router', 'Tailwind CSS Mastery', 'Prisma ORM', 'tRPC API Design', 'NextAuth Authentication']
    },
    {
        id: 'saas-builder',
        title: 'SaaS Product Building',
        desc: 'Break out of the standard job loop. Learn the exact stack needed to launch scalable software-as-a-service businesses independently.',
        icon: 'fa-rocket',
        steps: ['Market Validation Basics', 'Supabase (BaaS)', 'Stripe Payment Integration', 'Multi-tenant Architecture', 'Transactional Emails', 'Vercel Deployment']
    },
    {
        id: 'ui-ux-design',
        title: 'UI/UX for Developers',
        desc: 'Bridge the gap between code and design. Master Figma, color theory, accessibility, and translating designs into pixel-perfect code.',
        icon: 'fa-pen-nib',
        steps: ['Design Principles', 'Figma Fundamentals', 'Wireframing & Prototyping', 'Design Systems', 'Web Accessibility (a11y)', 'CSS Animations']
    },
    {
        id: 'freelance-cms',
        title: 'Freelance Web & CMS',
        desc: 'Start earning quickly. Master WordPress, Shopify, and headless CMS platforms to deliver valuable client projects fast.',
        icon: 'fa-briefcase',
        steps: ['WordPress Theme Customization', 'PHP Basics', 'Shopify Liquid', 'Headless CMS (Sanity/Strapi)', 'SEO Fundamentals', 'Web Hosting & Domain Management']
    },
    {
        id: 'cloud-serverless',
        title: 'Serverless Architecture',
        desc: 'Focus on code, not servers. Build infinitely scalable applications using AWS Lambda, API Gateway, and managed databases.',
        icon: 'fa-bolt',
        steps: ['Serverless Framework', 'AWS Lambda', 'DynamoDB (NoSQL)', 'Event-Driven Architecture', 'CloudWatch Logging', 'Serverless Security']
    },
    {
        id: 'software-qa',
        title: 'QA & Test Automation',
        desc: 'Ensure software quality. Write automated test scripts for end-to-end user flows using modern tools like Playwright and Cypress.',
        icon: 'fa-bug',
        steps: ['Testing Fundamentals', 'Jest / Mocha Basics', 'Cypress E2E Testing', 'Playwright Automation', 'API Testing (Postman)', 'CI/CD Test Integration']
    },
    {
        id: 'web-scraping',
        title: 'Web Scraping & Automation',
        desc: 'Gather valuable data from the web. Build bots to automate browser tasks, extract information, and schedule data pipelines.',
        icon: 'fa-spider',
        steps: ['DOM Parsing (Cheerio/BeautifulSoup)', 'Puppeteer / Playwright', 'Handling Captchas & Proxies', 'Data Cleaning (Pandas)', 'Cron Jobs', 'Data Storage (CSV/DB)']
    },
    {
        id: 'low-code',
        title: 'Low-Code & No-Code',
        desc: 'Maximize productivity. Build complete web applications and internal tools visually without writing standard code.',
        icon: 'fa-wand-magic-sparkles',
        steps: ['Webflow for Landing Pages', 'Bubble.io App Logic', 'Airtable Databases', 'Zapier/Make Automation', 'Custom Code Injection', 'Client Handoff']
    },
    {
        id: 'data-engineering',
        title: 'Data Engineering',
        desc: 'Build the plumbing for data science. Create robust pipelines that extract, transform, and load massive datasets.',
        icon: 'fa-database',
        steps: ['Advanced SQL', 'Data Warehousing (Snowflake)', 'Apache Spark', 'ETL Pipelines (Airflow)', 'Kafka Data Streaming', 'Data Governance']
    },
    {
        id: 'desktop-tauri',
        title: 'Cross-Platform Desktop Apps',
        desc: 'Bring web tech to the desktop. Use Tauri or Electron to build native-feeling applications for Windows, Mac, and Linux.',
        icon: 'fa-desktop',
        steps: ['Electron Fundamentals', 'Rust Basics (for Tauri)', 'Tauri IPC (Inter-Process Communication)', 'Native OS APIs', 'App Bundling', 'Auto-Updating']
    },
    {
        id: 'graphql-api',
        title: 'GraphQL Architecture',
        desc: 'Solve REST API over-fetching. Design flexible, strongly typed APIs where clients ask for exactly what they need.',
        icon: 'fa-project-diagram',
        steps: ['GraphQL Schemas & Types', 'Queries & Mutations', 'Apollo Server setup', 'Resolvers & Data Fetching', 'Apollo Client (React)', 'GraphQL Federation']
    },
    {
        id: 'ar-vr-webxr',
        title: '3D Web & AR/VR',
        desc: 'Create immersive experiences in the browser. Master Three.js and WebXR to build 3D worlds and augmented reality tools.',
        icon: 'fa-vr-cardboard',
        steps: ['WebGL Basics', 'Three.js Fundamentals', 'Lighting & Materials', 'Loading 3D Models (glTF)', 'WebXR API', 'React Three Fiber']
    },
    {
        id: 'web-performance',
        title: 'Web Performance Optimization',
        desc: 'Make the web lightning fast. Master Core Web Vitals, caching strategies, and asset optimization for maximum user retention.',
        icon: 'fa-gauge-high',
        steps: ['Core Web Vitals Metrics', 'Chrome DevTools Profiling', 'Lazy Loading & Code Splitting', 'Image & Font Optimization', 'Service Workers', 'Edge Caching (CDN)']
    },
    {
        id: 'open-source',
        title: 'Open Source & Version Control',
        desc: 'Collaborate with the world. Master advanced Git, understand open source licenses, and build a public portfolio of valuable contributions.',
        icon: 'fa-code-branch',
        steps: ['Advanced Git Commands', 'Interactive Rebase', 'GitHub Actions Basics', 'Open Source Licensing', 'Finding Issues & PRs', 'Building in Public']
    },
    {
        id: 'typescript-mastery',
        title: 'Advanced TypeScript',
        desc: 'Write bulletproof code. Move beyond basic types into advanced generics, utility types, and runtime validation.',
        icon: 'fa-t',
        steps: ['Union & Intersection Types', 'Generics Deep Dive', 'Utility Types (Record, Pick, Omit)', 'Conditional Types', 'Type Guards & Narrowing', 'Runtime Validation (Zod)']
    },
    {
        id: 'rust-systems',
        title: 'Rust Systems Programming',
        desc: 'Build memory-safe, blazing-fast software. Learn ownership, borrowing, and build command-line tools or WebAssembly modules.',
        icon: 'fa-gear',
        steps: ['Cargo & Rust Syntax', 'Ownership & Borrowing', 'Lifetimes & Traits', 'Error Handling', 'CLI Tool Development', 'WebAssembly (Wasm) Basics']
    }
];

function displayCards(data = roadmaps) {
    const container = document.getElementById('pathContainer');
    container.innerHTML = "";

    data.forEach((path) => {
        const card = document.createElement('div');
        card.className = 'path-card';

        //roadmap to show in the popup later
        card.innerHTML = `
            <h3>${path.title}</h3>
            <p>${path.desc}</p>
            <button class="path-btn" onclick="openRoadmap('${path.id}')">View Roadmap</button>
        `;

        container.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', () => displayCards());

function openRoadmap(id) {
    const roadmap = roadmaps.find(r => r.id === id);
    const modal = document.getElementById('roadmapModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.innerText = roadmap.title;
    
    // Convert steps array into list items
    body.innerHTML = roadmap.steps.map((step, index) => `
                <li>
                                <span class="step-num">${index + 1}</span>
                                <span class="step-text">${step}</span>
                </li>
                `).join('');

    modal.style.display = 'flex';
}

function closeRoadmap() {
    document.getElementById('roadmapModal').style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('roadmapModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// search bar
const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredRoadmaps = roadmaps.filter((path) => {
        return (
            path.title.toLowerCase().includes(searchString) ||
            path.desc.toLowerCase().includes(searchString)
        );
    });
    displayCards(filteredRoadmaps);
});




// if u r reading this , just know that I suck at JS I spent 1hr debugging this garbage js code