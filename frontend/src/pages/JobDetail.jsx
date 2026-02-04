import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { MapPin, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

const jobListingsLocal = [
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

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobListingsLocal.find((j) => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">This position may no longer be available.</p>
          <Link to="/careers">
            <Button size="lg">View All Positions</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <Link to="/careers" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            ← Back to All Positions
          </Link>

          <div className="bg-white rounded-lg shadow-lg p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {job.category}
              </span>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                {job.type}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{job.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                {job.salary}
              </span>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Role</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply?</h3>
              <p className="text-gray-600 mb-6">
                Submit your application and our team will review your profile within 2-3 business days.
              </p>
              <Link to={`/contact?type=candidate&job=${job.id}`}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-8 py-6">
                  Apply for This Position
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;
