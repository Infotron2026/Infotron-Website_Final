import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  useEffect(() => {
    // Load CEIPAL script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://jobsapi.ceipal.com/APISource/widget.js';
    script.setAttribute('data-ceipal-api-key', 'dC9SNzQyRVlIMTgwdVcweko3Mm5Gdz09');
    script.setAttribute('data-ceipal-career-portal-id', 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09');
    script.async = true;
    
    const container = document.getElementById('ceipal-jobs-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (container && script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32" style={{background: 'linear-gradient(135deg, #0B1F3A 0%, #2563EB 50%, #7C3AED 100%)'}}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
              Join World-Class Technology Teams
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-12">
              Work on complex, high-impact projects with Fortune 500 companies, FinTech innovators, 
              and enterprise clients. Elite talent. Execution excellence. Global opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?type=candidate">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
                  Submit Your Profile
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work with Infotron */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Join Infotron?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-blue-600/20 rounded-lg p-8">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">High-Impact Projects</h3>
              <p className="text-gray-400 leading-relaxed">
                Work on mission-critical systems for Fortune 500 companies, trading platforms handling 
                billions in transactions, and cutting-edge SaaS applications.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-violet-500/20 rounded-lg p-8">
              <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Competitive Compensation</h3>
              <p className="text-gray-400 leading-relaxed">
                Market-leading salaries, performance bonuses, comprehensive benefits, and opportunities 
                for rapid career growth based on merit.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-blue-600/20 rounded-lg p-8">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌎</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Flexibility</h3>
              <p className="text-gray-400 leading-relaxed">
                Remote-first culture with opportunities across Americas, EMEA, and APAC. Work from anywhere 
                while collaborating with world-class teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEIPAL Job Listings */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          
          {/* CEIPAL Widget Container - Styled to match theme */}
          <div 
            id="ceipal-jobs-container" 
            className="ceipal-wrapper w-full bg-slate-800/50 rounded-2xl border border-blue-600/20 p-6 lg:p-8"
            style={{ minHeight: '400px' }}
          >
            <div id="example-widget-container" className="w-full"></div>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-violet-600">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            We're always looking for exceptional talent. Submit your profile and we'll reach out 
            when opportunities matching your skills become available.
          </p>
          <Link to="/contact?type=candidate">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6">
              Submit General Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
