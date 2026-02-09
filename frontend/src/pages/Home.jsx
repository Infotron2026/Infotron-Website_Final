import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { 
  Server, Users, Briefcase, Zap, Target, Award, 
  TrendingUp, Shield, Globe, ArrowRight, CheckCircle 
} from 'lucide-react';
import { clientLogos, services, whyInfotron, caseStudies, testimonials } from '../data/mockData';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('scroll-reveal');
        }
      });
    }, options);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* LUXURY HERO SECTION - Clean, Minimal, Premium with Brand Colors */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/30 via-white to-purple-50/20">
        {/* Subtle Abstract Background - Animated Blue-Purple Mesh */}
        <div className="absolute inset-0 opacity-50">
          {/* Animated gradient orbs - Infotron brand colors */}
          <div 
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
              animation: 'float-slow 25s ease-in-out infinite',
              filter: 'blur(60px)'
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
              animation: 'float-slow 30s ease-in-out infinite',
              animationDelay: '5s',
              filter: 'blur(60px)'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
              animation: 'pulse-glow 20s ease-in-out infinite',
              filter: 'blur(70px)'
            }}
          />
          
          {/* Subtle grid pattern with brand color tint */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Hero Content - Centered, Clean */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-32 text-center">
          {/* Small badge with gradient */}
          <div className="animate-fade-in mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200/50 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 text-xs font-semibold tracking-wider uppercase shadow-sm">
              Enterprise Technology Delivery
            </span>
          </div>

          {/* Bold, Short Headline - Premium Typography with Brand Gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Outcomes.
            </span>
            <br />
            Not Headcount.
          </h1>

          {/* Executive Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal animate-fade-in-up delay-200">
            Full-stack engineering teams that own delivery.<br/>
            <span className="text-gray-500">Built for CTOs who measure results, not hours.</span>
          </p>

          {/* CTA Buttons - Premium with Brand Gradient */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Link to="/contact?type=client">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/30 text-base font-semibold px-10 py-7 rounded-lg transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <Link to="/careers">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 text-base font-semibold px-10 py-7 rounded-lg transition-all duration-300"
              >
                View Open Positions
              </Button>
            </Link>
          </div>

          {/* Minimal Stats - Clean Typography */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-24 max-w-4xl mx-auto animate-fade-in-up delay-400">
            {[
              { num: '500+', label: 'Projects' },
              { num: '92%', label: 'Retention' },
              { num: '1000+', label: 'Engineers' },
              { num: '15Y', label: 'Experience' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-1">{stat.num}</div>
                <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-center text-gray-500 mb-12 font-semibold tracking-wider text-sm uppercase scroll-reveal">
            Trusted by Leading Global Organizations
          </p>
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center scroll-reveal">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="grayscale hover:grayscale-0 transition-all duration-500 hover-scale"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="h-16 object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* BOLD SERVICES SECTION - Consulting Style */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-full filter blur-3xl opacity-30" />
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header - BOLD */}
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-block mb-6">
              <span className="text-blue-600 font-black text-sm tracking-[0.2em] uppercase">How We Work</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight">
              Three Engagement<br/>Models. One Goal.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your results. Our accountability.
            </p>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Services Grid - BOLD GRAPHIC LAYOUT */}
          <div className="grid lg:grid-cols-3 gap-0">
            {services.map((service, index) => {
              const IconComponent = service.icon === 'Server' ? Server : service.icon === 'Users' ? Users : Briefcase;
              const gradients = [
                'from-blue-600 to-cyan-500',
                'from-purple-600 to-pink-500',
                'from-indigo-600 to-blue-500'
              ];
              
              return (
                <Link
                  key={service.id}
                  to={service.href}
                  className={`group relative bg-gradient-to-br ${gradients[index]} p-12 lg:p-16 hover:scale-[1.02] transition-all duration-500 scroll-reveal delay-${index * 200 + 200}`}
                  style={{
                    clipPath: index === 1 ? 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' : 'none'
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '40px 40px'
                    }} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Large Icon */}
                    <div className="mb-8">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <IconComponent className="w-12 h-12 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="text-sm font-black tracking-wider text-white/70 uppercase">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-white/90 leading-relaxed mb-8 font-medium">
                      {service.shortDesc}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-3 text-white font-bold group-hover:gap-5 transition-all duration-300">
                      <span className="text-lg">Explore Service</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Infotron */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Why Infotron</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why CTOs Choose Infotron
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not another staffing firm. A delivery partner with skin in the game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyInfotron.map((item, index) => {
              const IconMap = { Zap, Target, Award, TrendingUp, Shield, Globe };
              const IconComponent = IconMap[item.icon];
              return (
                <div 
                  key={index} 
                  className={`premium-card bg-white rounded-2xl p-8 hover-lift scroll-reveal delay-${index * 100 + 200}`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 icon-glow">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
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
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-block mb-4">
              <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Testimonials</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Executive perspectives from CTOs, CPOs, and technology leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 scroll-reveal delay-${index * 100 + 200}`}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 italic text-lg">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/30"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonial.author}</div>
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
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" style={{animation: 'float-slow 15s ease-in-out infinite'}} />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="scroll-reveal">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
                Ready to Get Started?
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Scale Your<br />Technology Capabilities?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how Infotron can accelerate your technology roadmap with 
              elite talent and execution-focused delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact?type=client">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-7 rounded-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </Link>
              <Link to="/services/managed-services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-7 rounded-lg transition-all duration-300"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
