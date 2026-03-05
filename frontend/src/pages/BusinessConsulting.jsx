import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Briefcase } from 'lucide-react';

const BusinessConsulting = () => {
  const methodology = [
    { step: 1, title: 'Strategic Assessment', description: 'Current state analysis, competitive landscape review, and opportunity identification' },
    { step: 2, title: 'Vision & Roadmap', description: 'Define target architecture, technology strategy, and transformation priorities' },
    { step: 3, title: 'Stakeholder Alignment', description: 'Executive workshops, team engagement, and change management planning' },
    { step: 4, title: 'Pilot & Validation', description: 'Proof-of-concept development and quick wins to validate approach' },
    { step: 5, title: 'Implementation Oversight', description: 'Hands-on execution support with embedded technical leadership' },
    { step: 6, title: 'Measurement & Evolution', description: 'KPI tracking, continuous improvement, and strategic course correction' }
  ];

  const benefits = [
    'C-level strategic advisory from experienced technology executives',
    'Vendor-agnostic recommendations based purely on business needs',
    'Accelerated decision-making with data-driven insights',
    'Risk mitigation through proven transformation methodologies',
    'Implementation support beyond advisory — we help execute',
    'Knowledge transfer to build internal capabilities'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Briefcase className="w-4 h-4" />
                Business Consulting
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Strategic Technology Advisory and Transformation Leadership
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10">
                Partner with senior technology executives who have led digital transformations, 
                platform modernizations, and strategic technology initiatives for Fortune 500 companies 
                and high-growth startups.
              </p>
              <Link to="/contact?type=client&service=business-consulting">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-8 py-6">
                  Discuss Your Challenge
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1621062089461-01f1eaebb66c?w=800&h=600&fit=crop&auto=format"
                alt="Executive Strategy Session"
                className="rounded-xl shadow-2xl"
              />
            </div>
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
                <CheckCircle className="w-6 h-6 text-gray-800 flex-shrink-0 mt-1" />
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
            A comprehensive framework that combines strategic thinking with hands-on execution support
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((item) => (
              <div key={item.step} className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-8 pt-10 h-full hover:border-gray-900 transition-colors">
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
                <div className="text-sm font-semibold text-gray-800 mb-2">HEDGE FUND</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Built Algorithmic Trading Platform from Scratch
                </h3>
                
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">
                    A $5B hedge fund required a proprietary algorithmic trading platform with complex quantitative 
                    models, real-time risk management, and institutional-grade reliability. No internal technology leadership.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-3">Approach</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Embedded fractional CTO and technology advisory team. Defined architecture, selected technology stack, 
                    assembled specialized team (quant developers, data engineers, trading system specialists), and 
                    provided hands-on delivery oversight.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Results</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-800 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Platform handling $2B+ daily trade volume</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-800 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Real-time risk calculations across 10,000+ positions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-800 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">99.999% system reliability achieved</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-800 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Reduced trade execution time by 85%</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?w=800&h=800&fit=crop&auto=format"
                  alt="Trading Platform"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Navigate Your Technology Transformation with Confidence
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Partner with executives who have successfully navigated the challenges you're facing today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=client&service=business-consulting">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services/managed-services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                Explore Managed Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessConsulting;
