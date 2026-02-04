import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {  ArrowRight, CheckCircle, Code, Handshake, Rocket, BookOpen, Eye } from 'lucide-react';
import { companyValues, aboutStats } from '../data/mockData';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Built for Enterprise Technology Delivery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Infotron Solutions is a US-headquartered IT services and talent solutions firm 
              delivering Managed Services, Staff Augmentation, and Business Consulting to organizations 
              that demand execution excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Infotron Solutions was founded in 2009 with a simple mission: deliver technology solutions 
                with the speed and quality that enterprise organizations deserve. We started as a small team 
                of senior engineers frustrated with the gap between what clients needed and what traditional 
                consulting firms delivered.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Over 15 years, we've grown into a global technology partner serving Fortune 500 companies, 
                high-growth SaaS platforms, hedge funds, and private equity-backed firms. We've delivered 
                500+ complex technology projects, from algorithmic trading systems to enterprise-wide digital 
                transformations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, Infotron is recognized for execution-first delivery, elite talent, and a 92% client 
                retention rate that reflects our commitment to long-term partnership over transactional relationships.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1763550662603-78aa2f2033bf?w=800&h=600&fit=crop&auto=format"
                alt="Infotron Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower organizations with technology delivery capabilities that accelerate growth, 
                drive innovation, and create competitive advantage through execution excellence, 
                elite talent, and full accountability for outcomes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the global standard for technology services delivery — recognized as the partner 
                of choice for organizations that demand world-class talent, predictable execution, 
                and measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide how we work, make decisions, and serve our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const IconMap = { CheckCircle, Handshake, Code, Rocket, BookOpen, Eye };
              const IconComponent = IconMap[value.icon];
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership/Culture - Simplified */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Infotron is built by technologists, for technologists. We hire senior professionals who 
              value craftsmanship, continuous learning, and delivering work they're proud of. Our teams 
              operate with autonomy, ownership, and a bias toward action.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We're distributed across the Americas, EMEA, and APAC, but united by a shared commitment to 
              technical excellence and client success. If you're a builder who wants to work on complex, 
              high-impact projects with world-class teams, Infotron is your home.
            </p>
            <Link to="/careers">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 text-lg px-8 py-6">
                Join Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Whether you need a full managed team or strategic advisory, we're ready to deliver results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?type=client">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Schedule Consultation
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

export default About;
