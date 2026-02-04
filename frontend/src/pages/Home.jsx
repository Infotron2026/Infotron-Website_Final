import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Server, Users, Briefcase, Zap, Target, Award, 
  TrendingUp, Shield, Globe, ArrowRight, CheckCircle 
} from 'lucide-react';
import { clientLogos, services, whyInfotron, caseStudies, testimonials } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Scale Your Technology Capabilities with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Execution Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Infotron delivers Managed Services, Staff Augmentation, and Business Consulting 
                to enterprises and growth-stage companies that demand speed, quality, and results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact?type=client">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-8 py-6">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-6">
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?w=800&h=600&fit=crop&auto=format"
                alt="Enterprise Technology Team"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-blue-600">92%</div>
                <div className="text-sm text-gray-600 mt-1">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <p className="text-center text-gray-600 mb-12 font-semibold">
            TRUSTED BY LEADING GLOBAL ORGANIZATIONS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="h-16 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We Deliver Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three service models designed for speed, quality, and execution ownership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon === 'Server' ? Server : service.icon === 'Users' ? Users : Briefcase;
              return (
                <Link
                  key={service.id}
                  to={service.href}
                  className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.shortDesc}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Infotron */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Leading Organizations Choose Infotron
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another staffing firm — we're a delivery partner with skin in the game
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyInfotron.map((item, index) => {
              const IconMap = { Zap, Target, Award, TrendingUp, Shield, Globe };
              const IconComponent = IconMap[item.icon];
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real engagements with Fortune 500 and high-growth companies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.slice(0, 2).map((study) => (
              <Link
                key={study.id}
                to={`/resources/case-studies/${study.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <div className="text-sm font-semibold mb-1">{study.industry}</div>
                    <div className="text-xs opacity-90">{study.client}</div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{study.challenge}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-500">{study.duration}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{study.teamSize}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/resources">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                View All Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Executive perspectives from CTOs, CPOs, and technology leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors">
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Built for Enterprise Delivery
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Infotron Solutions is a US-headquartered IT services and talent solutions firm 
                serving Fortune 500 companies, high-growth SaaS platforms, FinTech innovators, 
                and institutional investors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We've spent 15+ years building a reputation for execution excellence, 
                delivering mission-critical technology programs that scale businesses and 
                drive measurable ROI.
              </p>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                  About Infotron
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-700 font-medium">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">92%</div>
                <div className="text-sm text-gray-700 font-medium">Client Retention</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-sm text-gray-700 font-medium">Tech Professionals</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-700 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Technology Capabilities?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let's discuss how Infotron can accelerate your technology roadmap with 
            elite talent and execution-focused delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=client">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services/managed-services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
