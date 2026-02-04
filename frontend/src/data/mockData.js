// Mock data for Infotron Solutions website

export const clientLogos = [
  {
    name: "Hilmar Cheese",
    logo: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=200&h=80&fit=crop&auto=format",
    alt: "Hilmar Cheese Company"
  },
  {
    name: "Sculptor Capital",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop&auto=format",
    alt: "Sculptor Capital Management"
  },
  {
    name: "Lucid Motors",
    logo: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=200&h=80&fit=crop&auto=format",
    alt: "Lucid Motors"
  },
  {
    name: "Enterprise Client",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&auto=format",
    alt: "Enterprise Technology Partner"
  }
];

export const services = [
  {
    id: "managed-services",
    title: "Managed Services",
    shortDesc: "End-to-end technology operations with full accountability and delivery ownership",
    icon: "Server",
    href: "/services/managed-services"
  },
  {
    id: "staff-augmentation",
    title: "Staff Augmentation",
    shortDesc: "Elite technology talent integrated seamlessly into your existing teams",
    icon: "Users",
    href: "/services/staff-augmentation"
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    shortDesc: "Strategic technology advisory and transformation leadership",
    icon: "Briefcase",
    href: "/services/business-consulting"
  }
];

export const whyInfotron = [
  {
    title: "Speed to Delivery",
    description: "Teams deployed in 2-3 weeks, not months. We move at the pace your business demands.",
    icon: "Zap"
  },
  {
    title: "Execution Ownership",
    description: "We don't just staff — we deliver. Full accountability for outcomes, not just hours.",
    icon: "Target"
  },
  {
    title: "Elite Talent Pool",
    description: "Top 5% global technology professionals vetted for technical excellence and business acumen.",
    icon: "Award"
  },
  {
    title: "Industry Expertise",
    description: "Deep experience in FinTech, SaaS, Trading, Healthcare, and Enterprise Technology.",
    icon: "TrendingUp"
  },
  {
    title: "Client Retention",
    description: "92% client retention rate. Our partners stay because we deliver consistent results.",
    icon: "Shield"
  },
  {
    title: "Global Reach",
    description: "US-headquartered with global delivery capabilities across Americas, EMEA, and APAC.",
    icon: "Globe"
  }
];

export const caseStudies = [
  {
    id: 1,
    client: "Global FinTech Platform",
    industry: "Financial Services",
    title: "Scaled Trading Infrastructure for 10X Growth",
    challenge: "A rapidly growing trading platform needed to scale infrastructure to handle 10x transaction volume while maintaining sub-50ms latency requirements.",
    approach: "Deployed a managed DevOps team and re-architected core trading systems using microservices, Kubernetes, and real-time data pipelines.",
    results: [
      "Infrastructure scaled to handle 500M+ daily transactions",
      "Reduced latency from 120ms to 35ms",
      "Achieved 99.99% uptime during peak trading hours",
      "Saved $2.3M annually in infrastructure costs"
    ],
    image: "https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?w=800&h=500&fit=crop&auto=format",
    duration: "6 months",
    teamSize: "12 engineers"
  },
  {
    id: 2,
    client: "Enterprise SaaS Company",
    industry: "Software",
    title: "Modernized Legacy Platform in 90 Days",
    challenge: "A B2B SaaS company with 500+ enterprise clients needed to modernize a 15-year-old monolithic application without service disruption.",
    approach: "Assembled a full-stack team and executed phased migration to cloud-native architecture with zero downtime strategy.",
    results: [
      "Migrated 2.5M users to new platform with zero downtime",
      "Reduced page load times by 65%",
      "Cut operational costs by 40%",
      "Enabled faster feature releases (weekly vs quarterly)"
    ],
    image: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=800&h=500&fit=crop&auto=format",
    duration: "3 months",
    teamSize: "18 engineers"
  },
  {
    id: 3,
    client: "Hedge Fund",
    industry: "Investment Management",
    title: "Built Algorithmic Trading Platform from Scratch",
    challenge: "A $5B hedge fund required a proprietary algorithmic trading platform with complex quantitative models and real-time risk management.",
    approach: "Delivered end-to-end platform development with quantitative analysts, data engineers, and trading system specialists.",
    results: [
      "Platform handling $2B+ daily trade volume",
      "Real-time risk calculations across 10,000+ positions",
      "99.999% system reliability",
      "Reduced trade execution time by 85%"
    ],
    image: "https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?w=800&h=500&fit=crop&auto=format",
    duration: "8 months",
    teamSize: "15 specialists"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Infotron didn't just provide resources — they took ownership of our entire infrastructure modernization. The team operated like an extension of our leadership, not just contractors.",
    author: "Michael Chen",
    title: "CTO",
    company: "FinTech Platform",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
  },
  {
    id: 2,
    quote: "We evaluated multiple firms including Big 4 consultancies. Infotron delivered faster, at higher quality, and with significantly better ROI. They've been our technology partner for 3 years running.",
    author: "Sarah Williams",
    title: "Chief Product Officer",
    company: "Enterprise SaaS",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format"
  },
  {
    id: 3,
    quote: "In 15 years of building trading systems, I've never worked with a more technically sophisticated and execution-focused team. They understood our quantitative requirements immediately.",
    author: "David Martinez",
    title: "Head of Technology",
    company: "Institutional Trading Firm",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Total Cost of Technology Talent: Why Elite Teams Pay for Themselves",
    excerpt: "Analysis of how top-tier engineering teams reduce operational costs, accelerate time-to-market, and minimize technical debt.",
    author: "Infotron Strategy Team",
    date: "2025-01-15",
    readTime: "8 min",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1763550662603-78aa2f2033bf?w=800&h=400&fit=crop&auto=format",
    slug: "total-cost-technology-talent"
  },
  {
    id: 2,
    title: "Staff Augmentation vs. Managed Services: A Decision Framework for CTOs",
    excerpt: "Comprehensive guide to choosing the right engagement model based on organizational maturity, project complexity, and strategic objectives.",
    author: "Infotron Leadership",
    date: "2025-01-10",
    readTime: "12 min",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1750768145268-a42806c391a4?w=800&h=400&fit=crop&auto=format",
    slug: "staff-augmentation-vs-managed-services"
  },
  {
    id: 3,
    title: "Building FinTech Infrastructure That Scales: Lessons from $100B+ Platforms",
    excerpt: "Technical deep-dive into architectural patterns, technology choices, and operational practices from high-scale financial systems.",
    author: "Engineering Team",
    date: "2025-01-05",
    readTime: "15 min",
    category: "Technology",
    image: "https://images.pexels.com/photos/5256687/pexels-photo-5256687.jpeg?w=800&h=400&fit=crop&auto=format",
    slug: "fintech-infrastructure-scaling"
  },
  {
    id: 4,
    title: "The Myth of the 'Unicorn' Developer: Why Team Composition Beats Individual Talent",
    excerpt: "Research-backed analysis of team dynamics, skill complementarity, and organizational effectiveness in technology delivery.",
    author: "Talent Strategy Team",
    date: "2024-12-28",
    readTime: "10 min",
    category: "Talent",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800&h=400&fit=crop&auto=format",
    slug: "team-composition-vs-individual-talent"
  }
];

export const jobListings = [
  {
    id: "job-001",
    title: "Senior Full-Stack Engineer",
    location: "Remote (US)",
    type: "Full-Time",
    category: "Engineering",
    description: "Join elite teams building mission-critical systems for FinTech and enterprise clients. React, Node.js, AWS, microservices architecture.",
    requirements: ["5+ years full-stack experience", "React, Node.js, TypeScript", "Cloud architecture (AWS/Azure)", "Financial systems experience preferred"],
    responsibilities: ["Design and build scalable applications", "Lead technical implementation", "Mentor junior engineers", "Client collaboration"],
    salary: "$140K - $180K + performance bonus"
  },
  {
    id: "job-002",
    title: "DevOps/Platform Engineer",
    location: "New York, NY / Remote",
    type: "Full-Time",
    category: "Infrastructure",
    description: "Build and manage cloud infrastructure for high-scale trading and SaaS platforms. Kubernetes, Terraform, CI/CD, observability.",
    requirements: ["4+ years DevOps/Infrastructure experience", "Kubernetes production experience", "Infrastructure as Code (Terraform)", "High-scale systems background"],
    responsibilities: ["Design cloud infrastructure", "Implement CI/CD pipelines", "System reliability and performance", "Security and compliance"],
    salary: "$135K - $175K + performance bonus"
  },
  {
    id: "job-003",
    title: "SAP Solutions Architect",
    location: "Remote (US/EMEA)",
    type: "Contract",
    category: "Consulting",
    description: "Lead SAP implementations and transformations for Fortune 500 clients. S/4HANA, Fiori, integration architecture.",
    requirements: ["8+ years SAP experience", "S/4HANA migration expertise", "Enterprise architecture background", "Client-facing consulting experience"],
    responsibilities: ["Solution architecture and design", "Client stakeholder management", "Technical team leadership", "Risk management"],
    salary: "$160 - $220/hour"
  },
  {
    id: "job-004",
    title: "Quantitative Developer",
    location: "New York, NY",
    type: "Full-Time",
    category: "Trading",
    description: "Build algorithmic trading systems and quantitative models for hedge funds and prop trading firms. Python, C++, real-time systems.",
    requirements: ["3+ years in trading systems", "Python/C++ proficiency", "Low-latency systems experience", "Financial markets knowledge"],
    responsibilities: ["Develop trading algorithms", "Optimize system performance", "Real-time data processing", "Backtesting and simulation"],
    salary: "$150K - $200K + significant bonus"
  },
  {
    id: "job-005",
    title: "Data Engineer",
    location: "Remote (Americas)",
    type: "Full-Time",
    category: "Data",
    description: "Design and build data pipelines for analytics and ML platforms. Spark, Kafka, Airflow, data warehousing at scale.",
    requirements: ["4+ years data engineering", "Spark/Kafka expertise", "Data warehouse design", "Python/Scala proficiency"],
    responsibilities: ["Build data pipelines", "Design data architecture", "Performance optimization", "Data quality and governance"],
    salary: "$130K - $170K + performance bonus"
  },
  {
    id: "job-006",
    title: "Engineering Manager",
    location: "San Francisco, CA / Remote",
    type: "Full-Time",
    category: "Leadership",
    description: "Lead engineering teams delivering for Fortune 500 and high-growth clients. People leadership, technical oversight, client management.",
    requirements: ["7+ years engineering experience", "3+ years management experience", "Delivered large-scale projects", "Client relationship management"],
    responsibilities: ["Team leadership and development", "Technical delivery oversight", "Client partnership", "Hiring and talent development"],
    salary: "$160K - $210K + performance bonus"
  }
];

export const companyValues = [
  {
    title: "Execution Excellence",
    description: "We deliver results, not excuses. Every engagement is measured by outcomes, not effort.",
    icon: "CheckCircle"
  },
  {
    title: "Client Partnership",
    description: "Your success is our success. We operate as an extension of your leadership team.",
    icon: "Handshake"
  },
  {
    title: "Technical Rigor",
    description: "World-class engineering standards. Code quality, architecture, and operational excellence in everything we build.",
    icon: "Code"
  },
  {
    title: "Speed with Quality",
    description: "Fast delivery without compromising on quality. We move quickly because we're experienced, not reckless.",
    icon: "Rocket"
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly. We invest heavily in our teams' growth and stay at the cutting edge.",
    icon: "BookOpen"
  },
  {
    title: "Transparency",
    description: "Honest communication about progress, challenges, and outcomes. No surprises, no spin.",
    icon: "Eye"
  }
];

export const aboutStats = [
  { number: "500+", label: "Enterprise Projects Delivered" },
  { number: "92%", label: "Client Retention Rate" },
  { number: "1000+", label: "Technology Professionals" },
  { number: "15+", label: "Years in Business" }
];
