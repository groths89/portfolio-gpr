export const projects = [
  // --- 1. Standard Project: Client Portal ---
  {
    id: 101,
    slug: 'client-dashboard',
    title: 'Client Analytics Platform',
    summary: 'A secure, scalable platform providing real-time analytics and financial reporting to external clients, built with a focus on data integrity and low latency.',
    techStack: ['React', 'Next.js', 'TypeScript', 'AWS Lambda', 'DynamoDB'],
    thumbnailUrl: '/images/projects/dashboard-thumb.jpg',
    dateCompleted: '2024 Q2',
    isClassified: false,
    
    // Detailed content (omitted for brevity here)
    caseStudyContent: { /* ... */ } 
  },

  // --- 2. Standard Project: CI/CD Pipeline ---
  {
    id: 102,
    slug: 'ci-cd-automation',
    title: 'Automated Deployment Pipeline',
    summary: 'Engineered a robust CI/CD workflow utilizing GitOps principles to standardize deployments across multiple environments, reducing rollback time by 75%.',
    techStack: ['Kubernetes', 'Jenkins', 'Terraform', 'Helm', 'Go'],
    thumbnailUrl: '/images/projects/ci-cd-thumb.jpg',
    dateCompleted: '2023 Q4',
    isClassified: false,
    
    caseStudyContent: { /* ... */ }
  },

  // --- 3. CLASSIFIED PROJECT: The Entry Point to the Mystery ---
  {
    id: 103,
    slug: 'forensic-analyzer', 
    title: 'Forensic Data Analyzer',
    summary: 'A proprietary internal tool developed for rapid log aggregation, security incident response, and tracing compromised accounts within the network infrastructure.',
    techStack: ['Python', 'Elasticsearch', 'Redis', 'Logstash', 'Grafana'],
    thumbnailUrl: '/images/projects/analyzer-thumb.jpg',
    dateCompleted: '2024 Q3',
    isClassified: true, // <<< This flag activates the special card styling
    classifiedContentId: 'deep-dive-analyzer-postmortem', // Target for the unlocked page
    
    caseStudyContent: { 
      // Keep this public description high-level to reserve the detail for the classified page
      goal: "Rapid detection and mitigation of insider threats.",
      challenges: ["Complex data parsing under pressure", "Maintaining a strict audit trail"],
      architectureDescription: "..."
    }
  },

  // --- 4. Standard Project: API Gateway ---
  {
    id: 104,
    slug: 'graphql-gateway',
    title: 'GraphQL API Gateway',
    summary: 'Implemented a unified GraphQL layer to aggregate data from several REST APIs, significantly improving client application performance and reducing over-fetching.',
    techStack: ['Node.js', 'GraphQL', 'Apollo', 'Microservices', 'Docker'],
    thumbnailUrl: '/images/projects/graphql-thumb.jpg',
    dateCompleted: '2024 Q1',
    isClassified: false,
    
    caseStudyContent: { /* ... */ }
  }
];