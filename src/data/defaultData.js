export const defaultUserData = {
  personal: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    photo: null,
  },
  education: [],
  experience: [],
  skills: [],
  projects: [],
  skillCategories: {
    technical: [],
    tools: [],
    soft: [],
  },
};

export const defaultTheme = {
  gradient: 'ocean-breeze',
  fontFamily: 'inter',
  primaryColor: '#003566',
  secondaryColor: '#00B4D8',
  cardStyle: 'glassmorphism',
  darkMode: false,
  fontSize: 'medium',
  sectionSpacing: 'normal',
  resumeTemplate: 'ats',
};

export const defaultSettings = {
  builderMode: 'resume',
  referenceResume: null,
  visibleSections: {
    summary: true,
    skills: true,
    experience: true,
    education: true,
    projects: true,
  },
};

export const gradientPresets = {
  'ocean-breeze': {
    name: 'Ocean Breeze',
    from: '#003566',
    to: '#48CAE4',
    css: 'from-royal-navy to-cyan-glow',
  },
  'blue-purple': {
    name: 'Blue → Purple',
    from: '#3b82f6',
    to: '#8b5cf6',
    css: 'from-blue-500 to-purple-600',
  },
  'pink-orange': {
    name: 'Pink → Orange',
    from: '#ec4899',
    to: '#f97316',
    css: 'from-pink-500 to-orange-500',
  },
  'teal-green': {
    name: 'Teal → Green',
    from: '#14b8a6',
    to: '#10b981',
    css: 'from-teal-500 to-green-500',
  },
};

export const fontFamilies = [
  { value: 'space', label: 'Space Grotesk', ats: false },
  { value: 'inter', label: 'Inter', ats: true },
  { value: 'roboto', label: 'Roboto', ats: true },
  { value: 'arial', label: 'Arial', ats: true },
  { value: 'poppins', label: 'Poppins', ats: false },
  { value: 'montserrat', label: 'Montserrat', ats: false },
];

export const summaryTemplates = {
  'frontend-developer': {
    fresher: [
      'Motivated Frontend Developer with strong foundation in HTML, CSS, JavaScript, and React.js. Passionate about creating responsive and user-friendly web applications. Quick learner with excellent problem-solving skills and attention to detail.',
      'Enthusiastic Frontend Developer skilled in modern web technologies including React, Vue.js, and responsive design. Committed to writing clean, maintainable code and creating exceptional user experiences.',
      'Creative Frontend Developer with expertise in HTML5, CSS3, and JavaScript frameworks. Strong eye for design and dedication to building accessible, performant web applications.',
    ],
    '1-3': [
      'Results-driven Frontend Developer with {years} years of experience building responsive web applications using React.js, JavaScript, and modern CSS frameworks. Proven track record of delivering high-quality code and collaborating effectively with cross-functional teams.',
      'Skilled Frontend Developer with {years} years creating dynamic user interfaces using React, TypeScript, and modern frontend tools. Strong focus on performance optimization and user experience enhancement.',
      'Experienced Frontend Developer with {years} years specializing in component-based architecture and state management. Proficient in React ecosystem, testing frameworks, and agile development practices.',
    ],
    '3+': [
      'Senior Frontend Developer with {years}+ years of experience architecting and developing scalable web applications. Expert in React.js, TypeScript, and modern frontend technologies. Strong leadership skills with experience mentoring junior developers.',
      'Lead Frontend Developer with {years}+ years building enterprise-level applications. Expert in performance optimization, accessibility standards, and modern JavaScript frameworks. Proven track record of leading technical initiatives.',
      'Accomplished Frontend Developer with {years}+ years specializing in complex UI development and frontend architecture. Deep expertise in React, Next.js, and modern build tools. Strong mentor and technical leader.',
    ],
  },
  'fullstack-developer': {
    fresher: [
      'Enthusiastic Full Stack Developer with knowledge of both frontend and backend technologies. Proficient in JavaScript, React, Node.js, and databases. Eager to contribute to innovative projects and grow technical expertise.',
      'Versatile Full Stack Developer with foundation in MERN stack development. Strong understanding of RESTful APIs, database design, and modern web development practices.',
      'Ambitious Full Stack Developer skilled in end-to-end application development. Knowledgeable in React, Node.js, Express, and MongoDB. Passionate about building scalable solutions.',
    ],
    '1-3': [
      'Full Stack Developer with {years} years of experience building end-to-end web applications. Skilled in React.js, Node.js, Express, and database management. Strong problem-solving abilities and commitment to writing clean, maintainable code.',
      'Proficient Full Stack Developer with {years} years developing scalable applications using modern JavaScript stack. Experience with cloud deployment, API design, and database optimization.',
      'Dynamic Full Stack Developer with {years} years creating robust web solutions. Expert in frontend frameworks, backend services, and database architecture. Strong focus on code quality and best practices.',
    ],
    '3+': [
      'Experienced Full Stack Developer with {years}+ years developing enterprise-level applications. Expert in modern JavaScript frameworks, RESTful APIs, and cloud technologies. Proven ability to lead projects from conception to deployment.',
      'Senior Full Stack Developer with {years}+ years architecting scalable web applications. Deep expertise in microservices, cloud infrastructure, and modern development practices. Strong technical leadership and mentoring skills.',
      'Lead Full Stack Developer with {years}+ years building high-performance applications. Expert in system design, API architecture, and DevOps practices. Track record of delivering complex projects successfully.',
    ],
  },
  'software-engineer': {
    fresher: [
      'Detail-oriented Software Engineer with strong foundation in data structures, algorithms, and object-oriented programming. Proficient in multiple programming languages and eager to solve complex technical challenges.',
      'Analytical Software Engineer with solid understanding of software development principles and design patterns. Skilled in Java, Python, or C++. Committed to writing efficient, maintainable code.',
      'Motivated Software Engineer with expertise in problem-solving and algorithm design. Strong academic background in computer science and passion for building innovative solutions.',
    ],
    '1-3': [
      'Software Engineer with {years} years of experience developing scalable software solutions. Strong background in system design, code optimization, and agile methodologies. Committed to continuous learning and technical excellence.',
      'Skilled Software Engineer with {years} years building robust applications using modern programming languages and frameworks. Experience with version control, CI/CD, and collaborative development.',
      'Proficient Software Engineer with {years} years creating efficient software solutions. Strong foundation in algorithms, data structures, and software architecture. Focus on code quality and performance.',
    ],
    '3+': [
      'Senior Software Engineer with {years}+ years of experience designing and implementing robust software systems. Expert in software architecture, performance optimization, and best practices. Track record of delivering high-impact solutions.',
      'Lead Software Engineer with {years}+ years architecting enterprise software solutions. Deep expertise in system design, scalability, and technical leadership. Proven ability to drive technical excellence.',
      'Accomplished Software Engineer with {years}+ years developing complex software systems. Expert in multiple programming paradigms, design patterns, and software engineering best practices.',
    ],
  },
  'backend-developer': {
    fresher: [
      'Aspiring Backend Developer with solid understanding of server-side programming, databases, and API development. Knowledgeable in Node.js, Python, or Java. Strong analytical skills and passion for building efficient systems.',
      'Motivated Backend Developer with foundation in RESTful API design and database management. Proficient in server-side technologies and eager to build scalable backend solutions.',
      'Dedicated Backend Developer skilled in server-side programming and database design. Strong understanding of API development, authentication, and data security principles.',
    ],
    '1-3': [
      'Backend Developer with {years} years of experience designing and implementing RESTful APIs and microservices. Proficient in database optimization, server architecture, and cloud deployment. Focus on scalability and performance.',
      'Skilled Backend Developer with {years} years building robust server-side applications. Experience with API design, database management, and cloud services. Strong focus on security and efficiency.',
      'Experienced Backend Developer with {years} years creating scalable backend systems. Proficient in Node.js, Python, or Java. Strong understanding of distributed systems and caching strategies.',
    ],
    '3+': [
      'Senior Backend Developer with {years}+ years building high-performance server-side applications. Expert in distributed systems, database architecture, and API design. Strong focus on security and scalability.',
      'Lead Backend Developer with {years}+ years architecting enterprise backend solutions. Deep expertise in microservices, message queues, and cloud infrastructure. Proven technical leadership skills.',
      'Accomplished Backend Developer with {years}+ years designing scalable backend architectures. Expert in performance optimization, database design, and system reliability. Strong mentor and technical leader.',
    ],
  },
  'data-analyst': {
    fresher: [
      'Analytical Data Analyst with strong foundation in statistics, data visualization, and SQL. Proficient in Excel, Python, and data analysis tools. Passionate about transforming data into actionable insights.',
      'Detail-oriented Data Analyst skilled in data mining, statistical analysis, and visualization. Knowledgeable in SQL, Python, and BI tools. Eager to drive data-driven decision making.',
      'Motivated Data Analyst with expertise in data manipulation and visualization. Strong analytical skills and proficiency in Excel, SQL, and Python. Committed to delivering meaningful insights.',
    ],
    '1-3': [
      'Data Analyst with {years} years of experience extracting insights from complex datasets. Skilled in SQL, Python, and visualization tools like Tableau or Power BI. Proven ability to communicate findings to stakeholders.',
      'Experienced Data Analyst with {years} years transforming raw data into actionable insights. Proficient in statistical analysis, data modeling, and dashboard creation. Strong business acumen.',
      'Skilled Data Analyst with {years} years analyzing large datasets and creating compelling visualizations. Expert in SQL, Python, and BI tools. Focus on driving business value through data.',
    ],
    '3+': [
      'Senior Data Analyst with {years}+ years of experience driving data-driven decision making. Expert in advanced analytics, statistical modeling, and business intelligence. Strong track record of delivering impactful insights.',
      'Lead Data Analyst with {years}+ years providing strategic insights through data analysis. Deep expertise in predictive modeling, data warehousing, and analytics tools. Proven ability to influence business strategy.',
      'Accomplished Data Analyst with {years}+ years leveraging data to solve complex business problems. Expert in advanced analytics, machine learning basics, and data storytelling. Strong leadership skills.',
    ],
  },
  'data-scientist': {
    fresher: [
      'Aspiring Data Scientist with strong foundation in statistics, machine learning, and Python. Knowledgeable in data preprocessing, model building, and evaluation. Passionate about solving problems with data.',
      'Motivated Data Scientist skilled in statistical analysis, machine learning algorithms, and data visualization. Proficient in Python, R, and SQL. Eager to apply ML techniques to real-world problems.',
      'Analytical Data Scientist with expertise in predictive modeling and data mining. Strong background in mathematics and programming. Committed to continuous learning in AI/ML.',
    ],
    '1-3': [
      'Data Scientist with {years} years building predictive models and extracting insights from complex datasets. Skilled in Python, machine learning libraries, and statistical analysis. Strong problem-solving abilities.',
      'Experienced Data Scientist with {years} years developing ML models for business applications. Proficient in feature engineering, model optimization, and deployment. Focus on delivering measurable impact.',
      'Skilled Data Scientist with {years} years applying machine learning to solve business challenges. Expert in Python, scikit-learn, and deep learning frameworks. Strong communication skills.',
    ],
    '3+': [
      'Senior Data Scientist with {years}+ years building advanced ML models and leading data science initiatives. Expert in deep learning, NLP, and computer vision. Proven track record of delivering high-impact solutions.',
      'Lead Data Scientist with {years}+ years architecting ML solutions and mentoring teams. Deep expertise in statistical modeling, feature engineering, and model deployment. Strong technical leadership.',
      'Accomplished Data Scientist with {years}+ years driving innovation through machine learning. Expert in end-to-end ML pipeline development and production deployment. Strong business acumen.',
    ],
  },
  'devops-engineer': {
    fresher: [
      'Motivated DevOps Engineer with foundation in CI/CD, containerization, and cloud platforms. Knowledgeable in Docker, Kubernetes, and automation tools. Passionate about streamlining development workflows.',
      'Enthusiastic DevOps Engineer skilled in infrastructure automation and deployment pipelines. Proficient in Linux, scripting, and cloud services. Eager to optimize development processes.',
      'Dedicated DevOps Engineer with understanding of continuous integration and infrastructure as code. Strong scripting skills and knowledge of AWS or Azure. Committed to automation excellence.',
    ],
    '1-3': [
      'DevOps Engineer with {years} years automating deployment pipelines and managing cloud infrastructure. Skilled in Docker, Kubernetes, Jenkins, and AWS/Azure. Focus on reliability and efficiency.',
      'Experienced DevOps Engineer with {years} years implementing CI/CD pipelines and infrastructure automation. Proficient in containerization, orchestration, and monitoring tools. Strong problem-solving skills.',
      'Skilled DevOps Engineer with {years} years optimizing development workflows and cloud infrastructure. Expert in automation tools, scripting, and cloud platforms. Focus on scalability and security.',
    ],
    '3+': [
      'Senior DevOps Engineer with {years}+ years architecting scalable infrastructure and leading DevOps initiatives. Expert in Kubernetes, Terraform, and cloud-native technologies. Strong leadership and mentoring skills.',
      'Lead DevOps Engineer with {years}+ years building robust CI/CD pipelines and cloud infrastructure. Deep expertise in automation, monitoring, and security best practices. Proven technical leadership.',
      'Accomplished DevOps Engineer with {years}+ years driving DevOps transformation and infrastructure excellence. Expert in cloud architecture, automation, and site reliability engineering.',
    ],
  },
  'mobile-developer': {
    fresher: [
      'Passionate Mobile Developer with foundation in iOS or Android development. Skilled in Swift, Kotlin, or React Native. Eager to create intuitive mobile experiences.',
      'Motivated Mobile Developer knowledgeable in mobile app development and UI/UX principles. Proficient in native or cross-platform frameworks. Strong attention to detail.',
      'Enthusiastic Mobile Developer with expertise in building responsive mobile applications. Skilled in React Native or Flutter. Committed to delivering quality mobile experiences.',
    ],
    '1-3': [
      'Mobile Developer with {years} years building native and cross-platform mobile applications. Skilled in iOS, Android, or React Native. Focus on performance and user experience.',
      'Experienced Mobile Developer with {years} years creating engaging mobile apps. Proficient in Swift, Kotlin, or Flutter. Strong understanding of mobile design patterns and best practices.',
      'Skilled Mobile Developer with {years} years developing feature-rich mobile applications. Expert in mobile frameworks, API integration, and app store deployment. Focus on quality and performance.',
    ],
    '3+': [
      'Senior Mobile Developer with {years}+ years architecting and building scalable mobile applications. Expert in native and cross-platform development. Strong leadership and mentoring abilities.',
      'Lead Mobile Developer with {years}+ years developing enterprise mobile solutions. Deep expertise in mobile architecture, performance optimization, and team leadership. Proven track record.',
      'Accomplished Mobile Developer with {years}+ years creating innovative mobile experiences. Expert in iOS, Android, and cross-platform technologies. Strong technical leadership skills.',
    ],
  },
  'ui-ux-designer': {
    fresher: [
      'Creative UI/UX Designer with strong foundation in user-centered design principles. Proficient in Figma, Adobe XD, and prototyping tools. Passionate about creating intuitive user experiences.',
      'Motivated UI/UX Designer skilled in wireframing, prototyping, and visual design. Strong understanding of design systems and accessibility. Eager to craft delightful user experiences.',
      'Detail-oriented UI/UX Designer with expertise in user research and interface design. Proficient in design tools and usability testing. Committed to user-centric design.',
    ],
    '1-3': [
      'UI/UX Designer with {years} years creating user-centered designs for web and mobile applications. Skilled in user research, wireframing, and prototyping. Strong portfolio of successful projects.',
      'Experienced UI/UX Designer with {years} years designing intuitive interfaces and conducting user research. Proficient in Figma, design systems, and usability testing. Focus on accessibility.',
      'Skilled UI/UX Designer with {years} years crafting engaging user experiences. Expert in interaction design, visual design, and design thinking. Strong collaboration skills.',
    ],
    '3+': [
      'Senior UI/UX Designer with {years}+ years leading design initiatives and mentoring design teams. Expert in design strategy, user research, and design systems. Proven track record of impactful designs.',
      'Lead UI/UX Designer with {years}+ years creating comprehensive design solutions for complex products. Deep expertise in UX strategy, design leadership, and cross-functional collaboration.',
      'Accomplished UI/UX Designer with {years}+ years driving design excellence and innovation. Expert in end-to-end design process, from research to implementation. Strong leadership abilities.',
    ],
  },
  'product-manager': {
    fresher: [
      'Aspiring Product Manager with strong analytical skills and understanding of product development lifecycle. Knowledgeable in agile methodologies and user research. Passionate about building products users love.',
      'Motivated Product Manager with foundation in product strategy and stakeholder management. Strong communication skills and technical understanding. Eager to drive product success.',
      'Analytical Product Manager skilled in market research and product planning. Strong problem-solving abilities and customer focus. Committed to delivering value to users.',
    ],
    '1-3': [
      'Product Manager with {years} years driving product strategy and execution. Skilled in roadmap planning, stakeholder management, and data-driven decision making. Strong track record of successful launches.',
      'Experienced Product Manager with {years} years leading cross-functional teams and delivering impactful products. Proficient in agile methodologies, user research, and product analytics.',
      'Skilled Product Manager with {years} years defining product vision and executing go-to-market strategies. Strong analytical skills and customer-centric approach. Focus on business impact.',
    ],
    '3+': [
      'Senior Product Manager with {years}+ years leading product strategy and driving business growth. Expert in product lifecycle management, market analysis, and team leadership. Proven track record of success.',
      'Lead Product Manager with {years}+ years building and scaling successful products. Deep expertise in product strategy, stakeholder management, and data-driven decision making. Strong leadership skills.',
      'Accomplished Product Manager with {years}+ years driving product innovation and business results. Expert in strategic planning, cross-functional leadership, and market positioning.',
    ],
  },
  'qa-engineer': {
    fresher: [
      'Detail-oriented QA Engineer with foundation in manual and automated testing. Knowledgeable in test planning, bug tracking, and quality assurance processes. Passionate about delivering quality software.',
      'Motivated QA Engineer skilled in test case design and defect management. Proficient in testing tools and methodologies. Strong analytical skills and attention to detail.',
      'Dedicated QA Engineer with understanding of software testing lifecycle and automation frameworks. Eager to ensure product quality and reliability.',
    ],
    '1-3': [
      'QA Engineer with {years} years designing and executing comprehensive test strategies. Skilled in automated testing, CI/CD integration, and quality metrics. Focus on continuous improvement.',
      'Experienced QA Engineer with {years} years implementing test automation and quality processes. Proficient in Selenium, API testing, and performance testing. Strong problem-solving abilities.',
      'Skilled QA Engineer with {years} years ensuring software quality through manual and automated testing. Expert in test frameworks, bug tracking, and agile testing practices.',
    ],
    '3+': [
      'Senior QA Engineer with {years}+ years leading quality assurance initiatives and building test automation frameworks. Expert in testing strategies, CI/CD, and team mentoring. Proven leadership skills.',
      'Lead QA Engineer with {years}+ years architecting comprehensive testing solutions and driving quality culture. Deep expertise in automation, performance testing, and quality metrics.',
      'Accomplished QA Engineer with {years}+ years ensuring product excellence through strategic testing approaches. Expert in test automation, quality processes, and technical leadership.',
    ],
  },
  'cloud-architect': {
    fresher: [
      'Aspiring Cloud Architect with foundation in cloud platforms and infrastructure design. Knowledgeable in AWS, Azure, or GCP. Passionate about building scalable cloud solutions.',
      'Motivated Cloud Architect with understanding of cloud services and architecture patterns. Strong technical skills and eagerness to design robust cloud infrastructure.',
      'Dedicated Cloud Architect skilled in cloud computing fundamentals and infrastructure as code. Committed to learning cloud best practices and security.',
    ],
    '1-3': [
      'Cloud Architect with {years} years designing and implementing cloud infrastructure solutions. Skilled in AWS/Azure/GCP, infrastructure as code, and cloud security. Focus on scalability and cost optimization.',
      'Experienced Cloud Architect with {years} years building cloud-native applications and infrastructure. Proficient in cloud services, containerization, and DevOps practices. Strong problem-solving skills.',
      'Skilled Cloud Architect with {years} years architecting scalable cloud solutions. Expert in cloud platforms, microservices, and security best practices. Focus on reliability and performance.',
    ],
    '3+': [
      'Senior Cloud Architect with {years}+ years designing enterprise cloud architectures and leading cloud migrations. Expert in multi-cloud strategies, security, and cost optimization. Strong leadership abilities.',
      'Lead Cloud Architect with {years}+ years architecting complex cloud solutions and driving cloud transformation. Deep expertise in cloud-native technologies, governance, and technical leadership.',
      'Accomplished Cloud Architect with {years}+ years building scalable, secure cloud infrastructures. Expert in cloud strategy, architecture patterns, and enterprise solutions. Proven track record.',
    ],
  },
  'machine-learning': {
    fresher: [
      'Passionate Machine Learning Engineer with foundation in ML algorithms and deep learning. Skilled in Python, TensorFlow, and PyTorch. Eager to build intelligent systems.',
      'Motivated Machine Learning Engineer with understanding of neural networks and model training. Proficient in ML frameworks and data preprocessing. Strong mathematical background.',
      'Analytical Machine Learning Engineer skilled in supervised and unsupervised learning. Knowledgeable in feature engineering and model evaluation. Committed to advancing AI solutions.',
    ],
    '1-3': [
      'Machine Learning Engineer with {years} years building and deploying ML models in production. Skilled in deep learning, NLP, and computer vision. Focus on model performance and scalability.',
      'Experienced Machine Learning Engineer with {years} years developing end-to-end ML pipelines. Proficient in TensorFlow, PyTorch, and MLOps practices. Strong problem-solving abilities.',
      'Skilled Machine Learning Engineer with {years} years creating intelligent systems using advanced ML techniques. Expert in model optimization, deployment, and monitoring. Focus on business impact.',
    ],
    '3+': [
      'Senior Machine Learning Engineer with {years}+ years architecting ML systems and leading AI initiatives. Expert in deep learning, model deployment, and team mentoring. Proven track record of innovation.',
      'Lead Machine Learning Engineer with {years}+ years building scalable ML infrastructure and driving AI strategy. Deep expertise in advanced ML techniques, MLOps, and technical leadership.',
      'Accomplished Machine Learning Engineer with {years}+ years developing cutting-edge AI solutions. Expert in deep learning, model optimization, and production ML systems. Strong leadership skills.',
    ],
  },
  'cybersecurity': {
    fresher: [
      'Dedicated Cybersecurity Specialist with foundation in network security and threat analysis. Knowledgeable in security protocols, encryption, and vulnerability assessment. Passionate about protecting digital assets.',
      'Motivated Cybersecurity Specialist skilled in security fundamentals and risk assessment. Strong understanding of security frameworks and compliance. Eager to defend against cyber threats.',
      'Analytical Cybersecurity Specialist with expertise in security tools and incident response. Committed to staying current with emerging threats and security best practices.',
    ],
    '1-3': [
      'Cybersecurity Specialist with {years} years implementing security measures and conducting vulnerability assessments. Skilled in penetration testing, security monitoring, and incident response. Focus on proactive defense.',
      'Experienced Cybersecurity Specialist with {years} years protecting systems and data from cyber threats. Proficient in security tools, compliance frameworks, and risk management. Strong analytical skills.',
      'Skilled Cybersecurity Specialist with {years} years securing infrastructure and applications. Expert in threat detection, security audits, and security architecture. Focus on continuous improvement.',
    ],
    '3+': [
      'Senior Cybersecurity Specialist with {years}+ years leading security initiatives and building robust security programs. Expert in advanced threat detection, security architecture, and team leadership.',
      'Lead Cybersecurity Specialist with {years}+ years architecting enterprise security solutions and driving security strategy. Deep expertise in compliance, risk management, and incident response.',
      'Accomplished Cybersecurity Specialist with {years}+ years protecting organizations from sophisticated cyber threats. Expert in security operations, threat intelligence, and security leadership.',
    ],
  },
};
