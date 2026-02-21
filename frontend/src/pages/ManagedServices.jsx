import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Server, Users, Briefcase } from 'lucide-react';

const ManagedServices = () => {
  const methodology = [
    { step: 1, title: 'Discovery & Assessment', description: 'Deep-dive analysis of current state, pain points, and strategic objectives' },
    { step: 2, title: 'Architecture & Planning', description: 'Solution design, technology selection, and delivery roadmap creation' },
    { step: 3, title: 'Team Assembly', description: 'Rapid deployment of specialized talent matched to your requirements' },
    { step: 4, title: 'Execution & Delivery', description: 'Agile implementation with weekly milestones and transparent reporting' },
    { step: 5, title: 'Operations & Support', description: 'Ongoing management, monitoring, and continuous optimization' },
    { step: 6, title: 'Scale & Evolution', description: 'Adaptive scaling and technology evolution as your business grows' }
  ];

  const benefits = [
    'Full accountability for technology outcomes and business impact',
    'Dedicated teams operating as an extension of your organization',
    'Faster time-to-market with experienced delivery leadership',
    'Cost predictability with fixed monthly engagement models',
    'Access to specialized skills across modern technology stacks',
    'Reduced operational risk and improved system reliability'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Server className="w-4 h-4" />
                Managed Services
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
                End-to-End Technology Operations with Full Accountability
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10">
                Infotron's Managed Services deliver complete ownership of your technology initiatives — 
                from architecture to deployment to ongoing operations. We don't just provide resources; 
                we deliver results.
              </p>
              <Link to="/contact?type=client&service=managed-services">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-8 py-6">
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800&h=600&fit=crop&auto=format"
                alt="Managed Technology Operations"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What is Managed Services?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Managed Services from Infotron means outsourcing entire technology functions or projects to a dedicated, 
              high-performance team that operates with full accountability for delivery. Unlike traditional staff augmentation, 
              we take ownership of outcomes — not just effort.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our managed teams integrate seamlessly with your organization, bringing deep technical expertise, 
              proven methodologies, and a relentless focus on execution. We build, manage, and optimize technology 
              systems so your internal teams can focus on core business priorities.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need to modernize legacy infrastructure, scale a SaaS platform, or build mission-critical 
              systems from scratch, Infotron's Managed Services deliver speed, quality, and measurable ROI.
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
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
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
            A proven 6-step framework for delivering complex technology initiatives on time and on budget
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((item) => (
              <div key={item.step} className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 pt-10 h-full hover:border-blue-600 transition-colors">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Success Story</h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <div className="text-sm font-semibold text-blue-600 mb-2">FINTECH PLATFORM</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Scaled Trading Infrastructure for 10X Growth
                </h3>
                
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A rapidly growing trading platform needed to scale infrastructure to handle 10x transaction 
                    volume while maintaining sub-50ms latency requirements and 99.99% uptime.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Approach</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Deployed a managed DevOps and platform engineering team. Re-architected core trading systems 
                    using microservices, Kubernetes, and real-time data pipelines with comprehensive monitoring.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Infrastructure scaled to handle 500M+ daily transactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Reduced latency from 120ms to 35ms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Achieved 99.99% uptime during peak trading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Saved $2.3M annually in infrastructure costs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?w=800&h=800&fit=crop&auto=format"
                  alt="Trading Infrastructure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Accelerate Your Technology Delivery?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Schedule a consultation to discuss how Managed Services can transform your technology operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=client&service=managed-services">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services/staff-augmentation">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                Explore Staff Augmentation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedServices;
