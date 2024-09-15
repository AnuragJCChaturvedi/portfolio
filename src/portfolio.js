const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://anuragchaturvedi.dev',
  title: 'AC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anurag Chaturvedi',
  role: 'Full Stack Engineer',
  description:
    `<p>
    I am a graduate student at the <strong>University of Pittsburgh  🎓</strong> with a keen interest in building robust, user-friendly systems. 🌟 
    I'm also studying <em>Distributed Systems</em> at <strong>Carnegie Mellon University</strong> 🏫, where I'm diving into the complexities of designing scalable solutions that can tackle real-world problems.
    </p><br>
    <p>
    I love turning ideas into reality in the most <strong>efficient</strong> and <strong>quality-focused</strong> way possible. ✨ Whether it's designing something from the ground up or optimizing an existing system, 
    I’m all about creating <strong>seamless interactions</strong> and <strong>smart solutions</strong>. 💡 <em>Learning</em> is my daily fuel, constantly driving me to explore new ways to build and improve. 🚀
    </p><br>
     <p>
    <strong>Let’s build something amazing together!</strong> 🤝
    </p>`,
  resume: 'https://drive.google.com/file/d/19yFMpwB-T5GkIwfZkcybF7qn98LJxrQp/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/anuragchat',
    github: 'https://github.com/anuragjcchaturvedi',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'WebSocket Performance Benchmark: Node.js vs. Go',
    description:
      'In this project, I conducted a performance benchmark comparing a single-threaded language, Node.js, with a compiled language, Go, for WebSocket communication. The primary objective was to analyze the efficiency, latency, and throughput of both languages under similar conditions.',
    stack: ['NodeJS', 'Go', 'Artillery', 'K6', 'Grafana', 'Prometheus', 'Docker', 'Gorilla WS', 'WS (npm)', 'Protocol Buffers'],
    sourceCode: 'https://github.com/AnuragJCChaturvedi/websocket-benchmark',
    livePreview: 'https://github.com/AnuragJCChaturvedi/websocket-benchmark',
  },
  {
    name: 'Face Recognition ATM',
    description:
      'This project involved developing a next-generation ATM system that uses facial recognition for secure user authentication. Initially created during a hackathon hosted by PNC Bank, the system first utilized Amazon Rekognition for facial identification. To challenge my comfort zone, I later replaced it with a custom Siamese neural network model, an improvement over traditional CNNs for facial recognition.',
    stack: ['React', 'Redux', 'Python Fast API', 'Siamese Neural Network', 'Amazon RDS', 'Amazon EC2', 'Docker'],
    sourceCode: 'https://github.com/AnuragJCChaturvedi/siamese-frontend',
    livePreview: 'https://github.com/AnuragJCChaturvedi/siamese-frontend',
  },
  {
    name: 'Secure and Isolated Code Execution (... in progress)',
    description:
      'This project is a secure, scalable remote code execution platform. Users submit code through a Next.js frontend, which is executed in isolated Docker containers managed by Kubernetes. Code execution requests are handled via a RabbitMQ queue, with Nginx as a load balancer. Communication uses GraphQL or gRPC for real-time updates. PostgreSQL stores job statuses and user data, while Redis provides quick access to results. The system prioritizes security, resource management, and performance to handle concurrent executions safely.',
    stack: ['NextJS', 'GraphQL + gRPC', 'Nginx', 'RabbitMQ', 'Redis', 'Kubernetes', 'Docker', 'PostgreSQL', 'Go'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'CI/CD',
  'AWS',
  'GCP',
  'Grafana',
  'Redis',
  'PostgreSQL',
  'MongoDB',
  'Cassandra',
  'Docker',
  'Kubernetes',
  'Pub/Sub',
  'Nginx',
  'Protobuf',
  'Go',
  'NodeJS',
  'Python',
  'C/C++',
  'Java',
  'Springboot',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
