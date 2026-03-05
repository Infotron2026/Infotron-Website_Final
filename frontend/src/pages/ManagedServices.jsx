import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Server, Settings, BarChart, Shield, Layers, Rocket } from 'lucide-react';

const ManagedServices = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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

  const methodology = [
    { step: 1, title: 'Discovery & Assessment', description: 'Deep-dive analysis of current state, pain points, and strategic objectives', icon: BarChart },
    { step: 2, title: 'Architecture & Planning', description: 'Solution design, technology selection, and delivery roadmap creation', icon: Layers },
    { step: 3, title: 'Team Assembly', description: 'Rapid deployment of specialized talent matched to your requirements', icon: Server },
    { step: 4, title: 'Execution & Delivery', description: 'Agile implementation with weekly milestones and transparent reporting', icon: Rocket },
    { step: 5, title: 'Operations & Support', description: 'Ongoing management, monitoring, and continuous optimization', icon: Settings },
    { step: 6, title: 'Scale & Evolution', description: 'Adaptive scaling and technology evolution as your business grows', icon: Shield }
  ];

  const benefits = [
    { text: 'Full accountability for technology outcomes and business impact', icon: CheckCircle },
    { text: 'Dedicated teams operating as an extension of your organization', icon: Server },
    { text: 'Faster time-to-market with experienced delivery leadership', icon: Rocket },
    { text: 'Cost predictability with fixed monthly engagement models', icon: BarChart },
    { text: 'Access to specialized skills across modern technology stacks', icon: Layers },
    { text: 'Reduced operational risk and improved system reliability', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Server className="w-4 h-4" />
                Managed Services
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
                End-to-End Technology Operations with Full Accountability
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10">
                Infotron's Managed Services deliver complete ownership of your technology initiatives — 
                from architecture to deployment to ongoing operations. We don't just provide resources; 
                we deliver results.
              </p>
              <Link to="/contact?type=client&service=managed-services">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 text-lg px-8 py-6">
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="scroll-reveal delay-200">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=800&h=600&fit=crop&auto=format"
                  alt="Managed Technology Operations"
                  className="rounded-2xl shadow-2xl border border-blue-500/20"
                />
                <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Key Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Why enterprise organizations trust Infotron for managed services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index} 
                  className={`scroll-reveal delay-${index * 100} group bg-slate-800/80 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed pt-2">{benefit.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Methodology
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven 6-step framework for delivering complex technology initiatives on time and on budget
            </p>
          </div>
          
          {/* Step-by-step process */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.step} className={`scroll-reveal delay-${index * 100} relative group`}>
                  {/* Connector line */}
                  {index < methodology.length - 1 && index !== 2 && (
                    <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                  )}
                  
                  <div className="bg-slate-800/50 border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-300 relative">
                    {/* Step number badge */}
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">
                      {item.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 text-blue-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-slate-800/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 scroll-reveal">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Success Story
            </span>
          </h2>
          <div className="scroll-reveal delay-200 bg-slate-800/80 border border-blue-500/20 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-4">FINTECH PLATFORM</div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Scaled Trading Infrastructure for 10X Growth
                </h3>
                
                <div className="mb-8">
                  <h4 className="font-bold text-blue-300 mb-3">Challenge</h4>
                  <p className="text-gray-400 leading-relaxed">
                    A rapidly growing trading platform needed to scale infrastructure to handle 10x transaction 
                    volume while maintaining sub-50ms latency requirements and 99.99% uptime.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="font-bold text-blue-300 mb-3">Approach</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Deployed a managed DevOps and platform engineering team. Re-architected core trading systems 
                    using microservices, Kubernetes, and real-time data pipelines with comprehensive monitoring.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-300 mb-3">Results</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Infrastructure scaled to handle 500M+ daily transactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Reduced latency from 120ms to 35ms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Achieved 99.99% uptime during peak trading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Saved $2.3M annually in infrastructure costs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-full min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&auto=format"
                  alt="Trading Infrastructure"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-800/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center scroll-reveal">
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
