// Complete Profile & Resume Data for Chatbot
export const profileData = {
  // Basic Information
  personal: {
    name: "Jaipal S. Chaudhary",
    title: "Senior QA Architect & Tech Lead",
    location: "Gurgaon, India",
    email: "chaudhary.jaipal@gmail.com",
    phone: "+91 9650605158",
    yearsOfExperience: 16,
    github: "https://github.com/Jaipal501caet",
    linkedin: "https://www.linkedin.com/in/jaipal-singh-chaudhary-45402467"
  },

  // Professional Summary
  summary: "I engineer high-performance automation ecosystems for global leaders in Banking, Telecom, and Healthcare. Moving beyond traditional testing, I architect 'High-ROI' solutions—deploying AI-driven, self-healing frameworks that reduce maintenance costs and ensure zero-defect releases for Fortune 500 clients.",

  // Core Expertise & Skills
  skills: {
    "Test Automation": [
      "Selenium WebDriver",
      "Cypress",
      "Playwright",
      "Appium",
      "Java",
      "Python",
      "C#",
      "JavaScript/TypeScript"
    ],
    "AI & Self-Healing": [
      "AI-driven test automation",
      "Self-healing frameworks",
      "Machine learning for testing",
      "Anomaly detection in tests"
    ],
    "DevOps & Cloud": [
      "Jenkins",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "AWS",
      "Azure"
    ],
    "Performance Testing": [
      "JMeter",
      "LoadRunner",
      "Gatling",
      "Performance optimization"
    ],
    "Frameworks & Tools": [
      "TestNG",
      "JUnit",
      "Cucumber (BDD)",
      "Page Object Model",
      "Data-Driven Testing",
      "API Testing (REST, SOAP)",
      "Database Testing"
    ],
    "Management & Leadership": [
      "QA Team Leadership",
      "Process Automation",
      "Risk Management",
      "Quality Strategy",
      "Vendor Management"
    ]
  },

  // Professional Certifications
  certifications: [
    {
      name: "ISTQB Advanced Test Automation Engineer",
      level: "v2 & Foundation Level",
      year: "Active"
    },
    {
      name: "DevOps & Cloud Automation",
      level: "Jenkins, Docker, Kubernetes",
      year: "Active"
    }
  ],

  // Employment History
  employmentHistory: [
    {
      company: "IBM India",
      role: "Senior QA Architect",
      duration: "Multiple Stints",
      highlights: "Led automation strategy for enterprise clients"
    },
    {
      company: "TCS",
      role: "QA Lead/Senior Engineer",
      duration: "Multiple projects",
      highlights: "Managed large-scale automation frameworks"
    },
    {
      company: "Tech Mahindra",
      role: "QA Architect",
      duration: "Multiple projects",
      highlights: "Designed automation ecosystems"
    },
    {
      company: "Optimum Solutions",
      role: "QA Lead",
      duration: "Recent role",
      highlights: "Leading automation initiatives"
    }
  ],

  // Key Clients
  keyClients: [
    "Standard Chartered",
    "NatWest Group",
    "McKinsey & Company",
    "AT&T",
    "Sky Network",
    "GE Healthcare",
    "Telstra",
    "Yorkshire Building Society"
  ],

  // Industries
  industries: [
    "Banking & Financial Services",
    "Telecom",
    "Healthcare",
    "Fortune 500 Organizations"
  ],

  // Key Achievements
  achievements: [
    "Architected AI-driven, self-healing automation frameworks reducing maintenance costs by 40%+",
    "Deployed zero-defect release strategies for Fortune 500 clients",
    "Led QA teams across multiple Fortune 500 organizations",
    "16+ years of strategic QA leadership and technical expertise",
    "Expert in high-ROI automation solutions",
    "Specialized in Banking, Telecom, and Healthcare domains"
  ],

  // Services & Expertise Areas
  services: [
    "Test Automation Architecture & Strategy",
    "AI-Driven Self-Healing Frameworks",
    "Performance & Load Testing",
    "DevOps & CI/CD Integration",
    "Cloud Testing Solutions",
    "API & Database Testing",
    "QA Team Leadership & Mentoring",
    "Quality Process Optimization"
  ],

  // Common Questions & Answers
  faq: [
    {
      question: "What is your experience?",
      answer: `I have 16+ years of experience as a Senior QA Architect and Tech Lead, specializing in high-performance automation ecosystems for Fortune 500 companies in Banking, Telecom, and Healthcare sectors. I've led QA teams at IBM, TCS, Tech Mahindra, and other global organizations.`
    },
    {
      question: "What are your core skills?",
      answer: `My core skills include: Test Automation (Selenium, Cypress, Playwright, Appium), AI-driven testing, Self-healing frameworks, DevOps (Jenkins, Docker, Kubernetes), Performance Testing, API Testing, BDD/Cucumber, and Team Leadership. I'm proficient in Java, Python, C#, and JavaScript/TypeScript.`
    },
    {
      question: "Which companies have you worked with?",
      answer: `I've delivered solutions for major global organizations including: Standard Chartered, NatWest Group, McKinsey & Company, AT&T, Sky Network, GE Healthcare, Telstra, and Yorkshire Building Society. My employer companies include IBM India, TCS, Tech Mahindra, and Optimum Solutions.`
    },
    {
      question: "What makes your approach unique?",
      answer: `I specialize in "High-ROI" automation solutions using AI-driven, self-healing frameworks that go beyond traditional testing. My approach reduces maintenance costs, ensures zero-defect releases, and delivers measurable business impact for Fortune 500 clients.`
    },
    {
      question: "What industries do you specialize in?",
      answer: `I have deep expertise in Banking & Financial Services, Telecom, and Healthcare sectors. My work with Fortune 500 organizations in these verticals has given me domain-specific knowledge and best practices.`
    },
    {
      question: "Do you have certifications?",
      answer: `Yes, I hold ISTQB Advanced Test Automation Engineer (v2) and Foundation Level certifications. I'm also certified in DevOps practices including Jenkins, Docker, and Kubernetes.`
    },
    {
      question: "What services do you provide?",
      answer: `I provide: Test Automation Architecture & Strategy, AI-Driven Self-Healing Frameworks, Performance & Load Testing, DevOps & CI/CD Integration, Cloud Testing Solutions, API & Database Testing, QA Team Leadership & Mentoring, and Quality Process Optimization.`
    },
    {
      question: "How can I contact you?",
      answer: `You can reach me at: Email: chaudhary.jaipal@gmail.com | Phone: +91 9650605158 | LinkedIn: https://www.linkedin.com/in/jaipal-singh-chaudhary-45402467 | GitHub: https://github.com/Jaipal501caet`
    },
    {
      question: "What is your availability?",
      answer: `I'm actively engaged in strategic QA roles and open to consulting opportunities. For specific availability and project discussions, please contact me directly via email or phone.`
    },
    {
      question: "Tell me about your achievements.",
      answer: `Key achievements include: Architected AI-driven automation frameworks reducing maintenance costs by 40%+, Deployed zero-defect release strategies for Fortune 500 clients, Led QA teams across multiple large organizations, and 16+ years of proven strategic QA leadership.`
    }
  ]
};

// Helper function to find relevant answer
export function findAnswer(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Check for CONTACT keywords FIRST (highest priority)
  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone') || lowerQuery.includes('reach') || lowerQuery.includes('number')) {
    return `You can reach me at:\n📧 Email: ${profileData.personal.email}\n📱 Phone: ${profileData.personal.phone}\n💼 LinkedIn: ${profileData.personal.linkedin}\n🐙 GitHub: ${profileData.personal.github}`;
  }

  // Direct FAQ matching (Improved - more specific)
  const faqMatch = profileData.faq.find(item => {
    const questionWords = item.question.toLowerCase().split(/\s+/);
    // Check if at least 2 significant words match (not just "is", "are", "the", etc.)
    const significantWords = questionWords.filter(w => w.length > 3);
    const matchCount = significantWords.filter(word => lowerQuery.includes(word)).length;
    return matchCount >= 2 || lowerQuery.includes(item.question.toLowerCase());
  });
  
  if (faqMatch) {
    return faqMatch.answer;
  }

  // Keyword-based matching
  if (lowerQuery.includes('skill') || lowerQuery.includes('expertise') || lowerQuery.includes('proficient') || lowerQuery.includes('can you do') || lowerQuery.includes('technical')) {
    const skills = Object.entries(profileData.skills)
      .map(([category, items]) => `${category}: ${items.join(', ')}`)
      .join('\n');
    return `My key skills and expertise:\n\n${skills}`;
  }

  if (lowerQuery.includes('experience') || lowerQuery.includes('background') || lowerQuery.includes('worked')) {
    return profileData.summary;
  }

  if (lowerQuery.includes('client') || lowerQuery.includes('work with') || lowerQuery.includes('companies')) {
    return `I've successfully delivered solutions for: ${profileData.keyClients.join(', ')}. These engagements span Banking, Telecom, and Healthcare sectors.`;
  }

  if (lowerQuery.includes('location') || lowerQuery.includes('where are you') || lowerQuery.includes('based')) {
    return `I'm based in ${profileData.personal.location}.`;
  }

  if (lowerQuery.includes('certificate') || lowerQuery.includes('qualification') || lowerQuery.includes('certified')) {
    const certs = profileData.certifications
      .map(c => `• ${c.name} (${c.level})`)
      .join('\n');
    return `My professional certifications:\n${certs}`;
  }

  if (lowerQuery.includes('industry') || lowerQuery.includes('domain') || lowerQuery.includes('sector')) {
    return `I specialize in: ${profileData.industries.join(', ')}. My expertise spans these verticals with Fortune 500 organizations.`;
  }

  if (lowerQuery.includes('achievement') || lowerQuery.includes('accomplishment')) {
    const achievements = profileData.achievements
      .map(a => `• ${a}`)
      .join('\n');
    return `My key achievements:\n${achievements}`;
  }

  // Default response
  return `I'm here to help! Feel free to ask me about my experience, skills, certifications, previous clients, contact info, or how I can help you. You can also check my LinkedIn or GitHub for more details.`;
}
