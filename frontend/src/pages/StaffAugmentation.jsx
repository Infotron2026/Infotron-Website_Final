import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Users } from 'lucide-react';

const StaffAugmentation = () => {
  const methodology = [
    { step: 1, title: 'Requirements Analysis', description: 'Detailed skill mapping, team dynamics assessment, and cultural fit evaluation' },
    { step: 2, title: 'Talent Sourcing', description: 'Access to pre-vetted global talent pool with specialized technical expertise' },
    { step: 3, title: 'Rigorous Vetting', description: 'Technical assessments, behavioral interviews, and reference validation' },
    { step: 4, title: 'Team Integration', description: 'Seamless onboarding with your tools, processes, and team workflows' },
    { step: 5, title: 'Performance Management', description: 'Ongoing skill development, feedback loops, and quality assurance' },
    { step: 6, title: 'Continuous Optimization', description: 'Regular reviews, skill upgrades, and team composition adjustments' }
  ];

  const benefits = [
    'Deploy specialized talent in 2-3 weeks, not months',
    'Access top 5% global technology professionals',
    'Flexible scaling up or down based on project needs',
    'Reduce recruitment costs and hiring risks',
    'Immediate productivity with experienced professionals',
    'Full technical and cultural fit guarantee'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users className="w-4 h-4" />
                Staff Augmentation
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Elite Technology Talent Integrated Seamlessly into Your Teams
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Scale your engineering capacity with hand-picked professionals who integrate as 
                true team members — not contractors. Get the skills you need, when you need them, 
                without the overhead of permanent hiring.
              </p>
              <Link to="/contact?type=client&service=staff-augmentation">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-8 py-6">
                  Find Your Next Team Member
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=800&h=600&fit=crop&auto=format"
                alt="Professional Technology Team"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What is Staff Augmentation?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Staff Augmentation from Infotron is not traditional contractor placement. We provide elite technology 
              professionals who become integral members of your existing teams, bringing specialized skills while 
              adapting to your culture, processes, and standards.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our talent pool includes senior engineers, architects, data scientists, DevOps specialists, and technical 
              leaders who have delivered for Fortune 500 companies and high-growth startups. Every candidate is 
              rigorously vetted for technical excellence, communication skills, and cultural compatibility.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need a React specialist for 3 months or a full data engineering team for 2 years, 
              Infotron delivers professionals who hit the ground running and drive immediate value.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center">Our Methodology</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            A rigorous process that ensures every placement is technically strong and culturally aligned
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((item) => (
              <div key={item.step} className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 pt-10 h-full hover:border-purple-600 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Success Story</h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <div className="text-sm font-semibold text-purple-600 mb-2">ENTERPRISE SAAS</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Modernized Legacy Platform in 90 Days
                </h3>
                
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A B2B SaaS company with 500+ enterprise clients needed to modernize a 15-year-old monolithic 
                    application without service disruption, but lacked internal expertise in cloud-native architectures.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Approach</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Assembled an 18-person team including architects, full-stack engineers, and DevOps specialists. 
                    Team integrated with client's product organization and executed phased migration to cloud-native stack.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Migrated 2.5M users to new platform with zero downtime</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Reduced page load times by 65%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Cut operational costs by 40%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Enabled weekly feature releases vs quarterly</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=800&h=800&fit=crop&auto=format"
                  alt="Team Collaboration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Scale Your Team with Elite Talent
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            Tell us your requirements and we'll match you with professionals who can start contributing immediately
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=client&service=staff-augmentation">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services/business-consulting">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6">
                Explore Business Consulting
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffAugmentation;
