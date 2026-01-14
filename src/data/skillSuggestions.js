// Comprehensive skill suggestions database
export const skillSuggestions = {
  technical: [
    // Programming Languages
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Ruby', 'Go', 'Rust',
    'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'Perl', 'Dart', 'Objective-C', 'Shell Scripting',
    
    // Frontend
    'React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'Svelte', 'jQuery', 'Redux', 'MobX',
    'HTML5', 'CSS3', 'SASS', 'LESS', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Chakra UI',
    'Styled Components', 'Webpack', 'Vite', 'Parcel', 'Rollup', 'Babel',
    
    // Backend
    'Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'ASP.NET', 'Laravel',
    'Ruby on Rails', 'NestJS', 'Koa', 'Hapi.js', 'GraphQL', 'REST API', 'gRPC', 'WebSockets',
    
    // Databases
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Oracle', 'SQL Server', 'MariaDB',
    'Cassandra', 'DynamoDB', 'Firebase', 'Supabase', 'Prisma', 'TypeORM', 'Sequelize',
    
    // Cloud & DevOps
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform',
    'Ansible', 'Linux', 'Nginx', 'Apache', 'Microservices', 'Serverless',
    
    // Mobile
    'React Native', 'Flutter', 'iOS Development', 'Android Development', 'Xamarin', 'Ionic',
    
    // Data Science & AI
    'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas',
    'NumPy', 'Data Analysis', 'Data Visualization', 'NLP', 'Computer Vision', 'Keras',
    
    // Testing
    'Jest', 'Mocha', 'Cypress', 'Selenium', 'Playwright', 'Unit Testing', 'Integration Testing',
    'Test-Driven Development', 'Pytest', 'JUnit',
    
    // Other
    'Blockchain', 'Web3', 'Solidity', 'Smart Contracts', 'Ethereum', 'Socket.io',
    'Responsive Design', 'Progressive Web Apps', 'SEO', 'Accessibility', 'Performance Optimization',
  ],
  
  tools: [
    // Version Control
    'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SVN',
    
    // IDEs & Editors
    'VS Code', 'Visual Studio', 'IntelliJ IDEA', 'PyCharm', 'WebStorm', 'Eclipse', 'Sublime Text',
    'Atom', 'Vim', 'Emacs', 'Android Studio', 'Xcode',
    
    // Design Tools
    'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision', 'Zeplin', 'Canva',
    
    // Project Management
    'Jira', 'Trello', 'Asana', 'Monday.com', 'ClickUp', 'Notion', 'Confluence', 'Slack',
    'Microsoft Teams', 'Discord',
    
    // DevOps Tools
    'Docker', 'Kubernetes', 'Jenkins', 'CircleCI', 'Travis CI', 'GitHub Actions', 'GitLab CI',
    'Terraform', 'Ansible', 'Vagrant', 'Prometheus', 'Grafana', 'ELK Stack', 'Datadog',
    
    // Database Tools
    'MySQL Workbench', 'pgAdmin', 'MongoDB Compass', 'DBeaver', 'Postman', 'Insomnia',
    
    // Cloud Platforms
    'AWS Console', 'Azure Portal', 'Google Cloud Console', 'Heroku', 'Netlify', 'Vercel',
    'DigitalOcean', 'Railway',
    
    // Analytics
    'Google Analytics', 'Mixpanel', 'Amplitude', 'Hotjar', 'Tableau', 'Power BI', 'Looker',
    
    // Other
    'npm', 'Yarn', 'pnpm', 'Composer', 'Maven', 'Gradle', 'Webpack', 'ESLint', 'Prettier',
    'Chrome DevTools', 'Postman', 'Swagger', 'Wireshark',
  ],
  
  soft: [
    // Communication
    'Communication', 'Public Speaking', 'Presentation Skills', 'Technical Writing', 'Documentation',
    'Active Listening', 'Negotiation', 'Interpersonal Skills', 'Storytelling',
    
    // Leadership
    'Leadership', 'Team Management', 'Mentoring', 'Coaching', 'Delegation', 'Conflict Resolution',
    'Decision Making', 'Strategic Planning', 'Vision Setting',
    
    // Collaboration
    'Teamwork', 'Collaboration', 'Cross-functional Collaboration', 'Remote Work', 'Agile',
    'Scrum', 'Kanban', 'Pair Programming', 'Code Review',
    
    // Problem Solving
    'Problem Solving', 'Critical Thinking', 'Analytical Skills', 'Troubleshooting', 'Debugging',
    'Research', 'Innovation', 'Creativity', 'Design Thinking',
    
    // Time Management
    'Time Management', 'Prioritization', 'Organization', 'Multitasking', 'Meeting Deadlines',
    'Project Planning', 'Task Management',
    
    // Adaptability
    'Adaptability', 'Flexibility', 'Learning Agility', 'Growth Mindset', 'Resilience',
    'Change Management', 'Continuous Learning',
    
    // Work Ethic
    'Self-Motivated', 'Attention to Detail', 'Reliability', 'Accountability', 'Initiative',
    'Work Ethic', 'Professionalism', 'Punctuality',
    
    // Customer Focus
    'Customer Service', 'Client Relations', 'Empathy', 'User Experience Focus', 'Stakeholder Management',
    
    // Other
    'Emotional Intelligence', 'Cultural Awareness', 'Networking', 'Persuasion', 'Patience',
  ],
};

// Function to filter suggestions based on input
export const getFilteredSuggestions = (category, input) => {
  if (!input || input.length < 1) return [];
  
  const suggestions = skillSuggestions[category] || [];
  const lowerInput = input.toLowerCase().trim();
  
  return suggestions
    .filter(skill => skill.toLowerCase().includes(lowerInput))
    .slice(0, 8); // Limit to 8 suggestions
};
